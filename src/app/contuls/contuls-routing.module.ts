import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContulsComponent } from './contuls.component';

const routes: Routes = [
  {
    path: '',
    component: ContulsComponent,
    children:[
      {path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomeModule)},
      {path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then( m => m.DashboardModule)},
      {path: 'maintenance',loadChildren: () => import('./modules/maintenance/maintenance.module').then( m => m.MaintenanceModule)},
      {path: 'areas',loadChildren: () => import('./modules/areas/areas.module').then( m => m.AreasModule)},
      {path: 'assets',loadChildren: () => import('./modules/assets/assets.module').then( m => m.AssetsModule)},
      {path: 'documentation',loadChildren: () => import('./modules/documentation/documentation.module').then( m => m.DocumentationModule)},
      {path: 'clients',loadChildren: () => import('./modules/clients/clients.module').then( m => m.ClientsModule)},
      {path: 'reports',loadChildren: () => import('./modules/reports/reports.module').then( m => m.ReportsModule)},
      {path: 'support',loadChildren: () => import('./modules/support/support.module').then( m => m.SupportModule)},
      {path: 'admin',loadChildren: () => import('./modules/administration/administration.module').then( m => m.AdministrationModule)}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContulsRoutingModule { }
