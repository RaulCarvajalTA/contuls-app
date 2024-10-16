import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaintenanceComponent } from './maintenance.component';

import { CommonCtModule } from 'src/app/core/common/common-ct.module';

@NgModule({
  declarations: [
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    CommonCtModule
  ]
})
export class MaintenanceModule { }
