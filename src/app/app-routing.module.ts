import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'app',
  pathMatch: 'full'
},
{
  path: 'app',
  children:[
    {
      path: '',
      loadChildren: () => import('./contuls/contuls.module').then( m => m.ContulsModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
