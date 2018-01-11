import { NgModule } from '@angular/core';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

// Componentes
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficodonaComponent } from '../components/graficodona/graficodona.component';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


// routes
import { PAGES_ROUTES } from './pages.routes';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    declarations: [
        PagesComponent,
        Graficas1Component,
        DashboardComponent,
        ProgressComponent,
        IncrementadorComponent,
        GraficodonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent
    ],
    exports: [
        PagesComponent,
        Graficas1Component,
        DashboardComponent,
        ProgressComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ],
    providers: []
})
export class PagesModule {}
