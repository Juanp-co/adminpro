import { RouterModule, Routes } from '@angular/router';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const PagesRoutes: Routes = [
    { path: '', component: PagesComponent, children: [
        { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'}  },
        { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar'}  },
        { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas'}  },
        { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Settings Account'}  },
        { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'}  },
        { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RXJS'}  },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ] }
];

export const  PAGES_ROUTES = RouterModule.forChild(PagesRoutes);
