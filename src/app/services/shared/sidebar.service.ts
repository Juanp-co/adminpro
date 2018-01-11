import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [{
    title: 'Principal',
    icon: 'mdi mdi-gauge',
    submenu: [
      { titulo: 'Dashboard', ruta: '/dashboard' },
      { titulo: 'Progress', ruta: '/progress' },
      { titulo: 'Graficos', ruta: '/graficas1' },
      { titulo: 'Promesas', ruta: '/promesas' },
      { titulo: 'RXJS', ruta: '/rxjs' }
    ]
  }];

  constructor() { }

}
