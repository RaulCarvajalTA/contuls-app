import { Component } from '@angular/core';
import { CtMenu } from 'src/app/core/types/ct.types';

@Component({
  selector: 'app-ct-menu',
  templateUrl: './ct-menu.component.html',
  styleUrls: ['./ct-menu.component.scss']
})
export class CtMenuComponent {

  menu: CtMenu = [
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
