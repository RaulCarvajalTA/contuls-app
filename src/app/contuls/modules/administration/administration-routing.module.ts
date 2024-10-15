import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';

const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {
    path: '', 
    component: AdministrationComponent,
    children: [
      {path: 'user', component: UserComponent},
      {path: 'users', component: UsersComponent},
      {path: 'roles', component: RolesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
