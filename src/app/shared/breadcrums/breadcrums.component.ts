import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: []
})
export class BreadcrumsComponent implements OnInit {

  titulo: string = '';

  constructor(
    public router: Router,
    public title: Title,
    public meta: Meta ) {

    this.dataRouter()
    .subscribe(data => {
      console.log(data);
      this.titulo = data.titulo;
      this.title.setTitle(this.titulo);
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titulo
      };
      this.meta.updateTag(metaTag);
    });

  }

  ngOnInit() {
  }

  dataRouter() {
    return this.router.events
    .filter( resp => resp instanceof ActivationEnd)
    .filter( (data: ActivationEnd ) => data.snapshot.firstChild == null)
    .map((data: ActivationEnd) => data.snapshot.data)
  }

}
