import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscripcion: Subscription;

  constructor() {

    this.suscripcion = this.regresarObs()
    .retry(2)
    .map(resp => {
      return resp.valor;
    })
    .filter((data, index) => {
      if ((data % 2) === 1) {
        return true;
      } else {
        return false;
      }
    })
    .subscribe(
      data => console.log('Subs', data),
      err => console.error(err),
      () => console.warn('Termino el observable')
    );


   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }

  regresarObs(): Observable<any> {
    return new Observable( observer => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;

        const salida = {
          valor : contador
        };

        observer.next( salida );

        // if ( contador === 3 ) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if ( contador === 2 ) {
        //   observer.error('Soy un errorcito');
        // }

      }, 300);
    });
  }

}
