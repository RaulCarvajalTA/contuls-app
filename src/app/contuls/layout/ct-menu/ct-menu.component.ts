import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MenuEnum } from 'src/app/core/enums/ct.enums';
import { ILayoutState, IMenuItem, IUser } from 'src/app/core/interfaces/ct.interfaces';
import { TCtMenu } from 'src/app/core/types/ct.types';
import { ContulsActions, ContulsSelectors } from 'src/app/state';
import { IContulsState } from 'src/app/state/contuls.state';

@Component({
  selector: 'app-ct-menu',
  templateUrl: './ct-menu.component.html',
  styleUrls: ['./ct-menu.component.scss']
})
export class CtMenuComponent implements OnInit {

  user$: Observable<IUser>;

  constructor(
    private store$: Store<IContulsState>,
    private breakpointObserver: BreakpointObserver
  ){
    this.user$ = this.store$.select(ContulsSelectors.selectUser);
  }

  ngOnInit(): void {
    this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.Handset])
    .subscribe(
      matches => console.log(matches)
    )
  }

  menu: TCtMenu = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      link: 'dashboard',
      disabled: false,
    },
    {
      title: 'Mantenimientos',
      icon: 'engineering',
      link: 'maintenance',
      disabled: false,
    },
    {
      title: 'Areas',
      icon: 'factory',
      link: 'areas',
      disabled: false,
    },
    {
      title: 'Activos',
      icon: 'precision_manufacturing',
      link: 'assets',
      disabled: false,
    },
    {
      title: 'Documentación',
      icon: 'description',
      link: 'documentation',
      disabled: false,
    },
    {
      title: 'Clientes',
      icon: 'groups',
      link: 'clients',
      disabled: false,
    },
    {
      title: 'Reportes',
      icon: 'flag',
      link: 'reports',
      disabled: false,
    },
    {
      title: 'Soporte',
      icon: 'bug_report',
      link: 'support',
      disabled: false,
    },
    {
      title: 'Configuración',
      icon: 'settings',
      link: 'admin',
      disabled: false,
    }
  ];

}
