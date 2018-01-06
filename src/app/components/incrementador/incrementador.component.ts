import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {


  @ViewChild('textProgress') textProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  nuevoValor(num: number) {
    if (num <= 0) {
      this.progreso = 0;
    } else if (num >= 100) {
      this.progreso = 100;
    } else {
      this.progreso = num;
    }
    this.textProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }


  incre(num) {
    if (this.progreso <= 0 && num < 0) {
      return;
    }
    if (this.progreso >= 100 && num > 0) {
      return;
    }
    this.progreso += num;
    this.cambioValor.emit(this.progreso);
  }

}
