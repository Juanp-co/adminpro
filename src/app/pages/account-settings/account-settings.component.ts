import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService  ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  changeTheme(link: any, theme) {
    this.addCheck(link);
    this._ajustes.addtheme(theme);
  }

  addCheck( link: any) {
    const lista: any =  document.getElementsByClassName('selector');
    for (const item of lista){
      item.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck() {
    const lista: any = document.getElementsByClassName('selector');
    for ( const ref of lista ) {
      if ( ref.getAttribute('data-theme') === this._ajustes.ajustes.tema ) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
