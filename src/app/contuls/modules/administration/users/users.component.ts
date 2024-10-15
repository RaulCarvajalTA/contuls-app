import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { ITableConfig } from 'src/app/core/common/table/interfaces/table.interfaces';
import { IUsersTable } from 'src/app/core/interfaces/ct.tables.interfaces';
import { ToolbarService } from 'src/app/core/services/toolbar.service';
import { ContulsActions } from 'src/app/state';
import { IContulsState } from 'src/app/state/contuls.state';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit, OnDestroy {

  private destroy$ = new Subject<void>();

  values: IUsersTable [] = [];

  tableConfig: ITableConfig<IUsersTable> = {
    data: [],
    columns: [
      {
        propierty: 'name',
        header: 'Nombre',
        display: true,
        width: 'col-5'
      },
      {
        propierty: 'email',
        header: 'Correo',
        display: true,
        width: 'col-5'
      },
      {
        propierty: 'role',
        header: 'Rol',
        display: true,
        width: 'col-2'
      }
    ],
    items_per_page_options: [10,20,30]
  }

  constructor(
    private store$: Store<IContulsState>,
    private _toolbarService: ToolbarService 
  ){
    this.values = [
      {name: '1Raul Carvaja', email: 'rcarvajal@tecnoap.com', role: 'Administrador'},
      {name: '2Raul Carvaja', email: 'rcarvajal@tecnoap.com', role: 'Administrador'},
      {name: '3Raul Carvaja', email: 'rcarvajal@tecnoap.com', role: 'Administrador'},
      {name: '4Raul Carvaja', email: 'rcarvajal@tecnoap.com', role: 'Administrador'},
      {name: '5Raul Carvaja', email: 'rcarvajal@tecnoap.com', role: 'Administrador'},
      {name: '6Raul Carvaja', email: 'rcarvajal@tecnoap.com', role: 'Administrador'},
      {name: '7Raul Carvaja', email: 'rcarvajal@tecnoap.com', role: 'Administrador'},
      {name: '8Raul Carvaja', email: 'rcarvajal@tecnoap.com', role: 'Administrador'},
      {name: '9Raul Carvaja', email: 'rcarvajal@tecnoap.com', role: 'Administrador'},
      {name: '10Raul Carvaja', email: 'rcarvajal@tecnoap.com', role: 'Administrador'},
      {name: '11Raul Carvaja', email: 'rcarvajal@tecnoap.com', role: 'Administrador'},
      {name: '12Raul Carvaja', email: 'rcarvajal@tecnoap.com', role: 'Administrador'},
      {name: '13Raul Carvaja', email: 'rcarvajal@tecnoap.com', role: 'Administrador'},
      {name: '14Raul Carvaja', email: 'rcarvajal@tecnoap.com', role: 'Administrador'},
      {name: '15Raul Carvaja', email: 'rcarvajal@tecnoap.com', role: 'Administrador'},
      {name: '16Raul Carvaja', email: 'rcarvajal@tecnoap.com', role: 'Administrador'},
      {name: '17Raul Carvaja', email: 'rcarvajal@tecnoap.com', role: 'Administrador'},
      {name: '18Raul Carvaja', email: 'rcarvajal@tecnoap.com', role: 'Administrador'}
    ]

    this.tableConfig.data = this.values;
  }
  
  ngAfterViewInit(): void {
    this.store$.dispatch(ContulsActions.setToolbarActions(
      {
        toolbarActions: [
          {name: 'ExportData',action: 'users:exportData',icon: 'download', tooltip: 'Exportar datos', enable:true},
          {name: 'FilterData',action: 'users:filterData',icon: 'filter_alt', tooltip: 'Filtrar datos', enable:true},
          {name: 'AddUser',action: 'users:addUser',icon: 'person_add', tooltip: 'Nuevo usuario', enable:true}
        ]
      }
    ));

    this._toolbarService._eventToolbarActions$
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(
      evnt => console.log(evnt)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleRowClick(row: any) {
    console.log('Row clicked:', row);
  }

  handlePageChange(event: any) {
    console.log('Page changed:', event);
  }

}