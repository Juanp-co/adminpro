import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


interface Ajustes {
  tema: string;
  temaUrl: string;
}

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    tema: 'default-dark',
    temaUrl: 'assets/css/colors/default-dark.css'
  };

  constructor( @Inject(DOCUMENT) private _document ) {
    this.cargarTema();
   }

  addtheme(theme) {
    this.ajustes.tema = theme;
    this.ajustes.temaUrl = `assets/css/colors/${theme}.css`;
    this.guardarTema(this.ajustes);
    this._document.getElementById('tema').setAttribute('href', this.ajustes.temaUrl );
  }

  defaultTema() {
    this._document.getElementById('tema').setAttribute('href', this.ajustes.temaUrl );
  }

  guardarTema( ajustes) {
    localStorage.setItem('settings', JSON.stringify(ajustes));
  }

  cargarTema() {
    if ( localStorage.getItem('settings') ) {
      this.ajustes = JSON.parse(localStorage.getItem('settings'));
      this.addtheme(this.ajustes.tema);
    } else {
      this.defaultTema();
    }
  }

}
