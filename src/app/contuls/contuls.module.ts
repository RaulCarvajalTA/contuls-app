import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContulsRoutingModule } from './contuls-routing.module';
import { ContulsComponent } from './contuls.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

import { CtToolbarComponent } from './layout/ct-toolbar/ct-toolbar.component';
import { CtContentComponent } from './layout/ct-content/ct-content.component';
import { CtLayoutComponent } from './layout/ct-layout/ct-layout.component';
import { CtMenuComponent } from './layout/ct-menu/ct-menu.component';


@NgModule({
  declarations: [
    ContulsComponent,
    CtToolbarComponent,
    CtContentComponent,
    CtLayoutComponent,
    CtMenuComponent
  ],
  imports: [
    CommonModule,
    ContulsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatDividerModule
  ]
})
export class ContulsModule { }
