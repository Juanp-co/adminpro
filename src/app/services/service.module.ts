import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SharedService,
  SettingsService,
  SidebarService
} from './services.index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    SharedService,
    SettingsService,
    SidebarService
  ]
})
export class ServiceModule { }
