import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { ITableConfig } from 'src/app/core/common/table/interfaces/table.interfaces';
import { IRolesTable } from 'src/app/core/interfaces/ct.tables.interfaces';
import { ToolbarService } from 'src/app/core/services/toolbar.service';
import { ContulsActions } from 'src/app/state';
import { IContulsState } from 'src/app/state/contuls.state';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {


  private destroy$ = new Subject<void>();
  data: IRolesTable[];

  tableConfig: ITableConfig<IRolesTable> = {
    data: [],
    columns: [
      {
        propierty: 'name',
        header: 'Nombre',
        display: true,
        width: 'col-5'
      },
      {
        propierty: 'description',
        header: 'Descripción',
        display: true,
        width: 'col-5'
      }
    ],
    items_per_page_options: [10,20,30]
  }

  constructor(
    private store$: Store<IContulsState>,
    private _toolbarService: ToolbarService 
  ){
    this.data = [
      {name: 'Administrador', description: 'Administrador total de Contuls'},
      {name: 'Técnico', description: 'Técnico de Contuls'},
      {name: 'Cliente admin', description: 'Cliente administrador total de Contuls'},
      {name: 'Cliente usuario', description: 'Usuario perteneciente a un cliente en espéficico'},
    ];

    this.tableConfig.data = this.data;

    this.store$.dispatch(ContulsActions.setToolbarActions(
      {
        toolbarActions: [
          {name: 'ExportData',action: 'roles:exportData',icon: 'download', tooltip: 'Exportar datos', enable:true},
          {name: 'FilterData',action: 'roles:filterData',icon: 'filter_alt', tooltip: 'Filtrar datos', enable:true},
          {name: 'AddRole',action: 'roles:addRole',icon: 'group_add', tooltip: 'Nuevo rol', enable:true}
        ]
      }
    ));
  }

  handleRowClick(row: any) {
    console.log('Row clicked:', row);
  }

  handlePageChange(event: any) {
    console.log('Page changed:', event);
  }
}
