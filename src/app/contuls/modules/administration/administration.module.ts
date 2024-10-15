import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { UserComponent } from './user/user.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonCtModule } from 'src/app/core/common/common-ct.module';


@NgModule({
  declarations: [
    AdministrationComponent,
    UserComponent,
    RolesComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    CommonCtModule
  ]
})
export class AdministrationModule { }
