import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContulsComponent } from './contuls.component';

const routes: Routes = [
  {
    path: '',
    component: ContulsComponent,
    children:[
      {path: 'home', title: "Home",loadChildren: () => import('./home/home.module').then( m => m.HomeModule)},
      {path: 'dashboard', title:"CT - Dashboard", loadChildren: () => import('./modules/dashboard/dashboard.module').then( m => m.DashboardModule)},
      {path: 'maintenance', title:"CT - Mantenimiento", loadChildren: () => import('./modules/maintenance/maintenance.module').then( m => m.MaintenanceModule)},
      {path: 'areas', title:"CT - Areas", loadChildren: () => import('./modules/areas/areas.module').then( m => m.AreasModule)},
      {path: 'assets', title:"CT - Activos", loadChildren: () => import('./modules/assets/assets.module').then( m => m.AssetsModule)},
      {path: 'documentation', title:"CT - Documentation", loadChildren: () => import('./modules/documentation/documentation.module').then( m => m.DocumentationModule)},
      {path: 'clients', title:"CT - Clientes", loadChildren: () => import('./modules/clients/clients.module').then( m => m.ClientsModule)},
      {path: 'reports', title:"CT - Reportes", loadChildren: () => import('./modules/reports/reports.module').then( m => m.ReportsModule)},
      {path: 'support', title:"CT - Soporte", loadChildren: () => import('./modules/support/support.module').then( m => m.SupportModule)},
      {path: 'admin', title:"CT - Admnistración", loadChildren: () => import('./modules/administration/administration.module').then( m => m.AdministrationModule)},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContulsRoutingModule { }
