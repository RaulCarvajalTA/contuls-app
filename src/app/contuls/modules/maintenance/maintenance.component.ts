import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITableConfig } from 'src/app/core/common/table/interfaces/table.interfaces';
import { IMaintenanceTable } from 'src/app/core/interfaces/ct.tables.interfaces';
import { ContulsActions } from 'src/app/state';
import { IContulsState } from 'src/app/state/contuls.state';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent {

  tableConfig: ITableConfig<IMaintenanceTable> = {
    data: [],
    columns: [
      {
        propierty: 'asset',
        header: 'Activo',
        display: true,
        width: 'col-5'
      },
      {
        propierty: 'area',
        header: 'Area',
        display: true,
        width: 'col-5'
      },
      {
        propierty: 'client',
        header: 'Cliente',
        display: true,
        width: 'col-2'
      },
      {
        propierty: 'programed',
        header: 'Programado',
        display: true,
        width: 'col-2'
      },
      {
        propierty: 'start',
        header: 'Inicio',
        display: true,
        width: 'col-2'
      },
      {
        propierty: 'end',
        header: 'Fin',
        display: true,
        width: 'col-2'
      },
      {
        propierty: 'atendedBy',
        header: 'Técnico',
        display: true,
        width: 'col-2'
      },
      {
        propierty: 'status',
        header: 'Estado',
        display: true,
        width: 'col-2'
      }
    ],
    items_per_page_options: [10,20,30]
  }

  constructor(
    private store$: Store<IContulsState>
  ){
    this.store$.dispatch(ContulsActions.setModule({title: 'Mantenimientos', subtitle: null}));
    this.store$.dispatch(ContulsActions.setToolbarActions({toolbarActions: [
      {name: 'ExportData',action: 'maintenance:exportData',icon: 'download', tooltip: 'Exportar datos', enable:true},
      {name: 'FilterData',action: 'maintenance:filterData',icon: 'filter_alt', tooltip: 'Filtrar datos', enable:true},
      {name: 'AddMaintenance',action: 'maintenance:addMaintenance',icon: 'add', tooltip: 'Nuevo mantenimiento', enable:true},
      {name: 'SearchQr',action: 'maintenance:searchQr',icon: 'qr_code_scanner', tooltip: 'Escanear QR', enable:true}
    ]}));
  }

  handleRowClick(row: any) {
    console.log('Row clicked:', row);
  }

  handlePageChange(event: any) {
    console.log('Page changed:', event);
  }
  
}
