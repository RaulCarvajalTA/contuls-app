import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ITableConfig } from './interfaces/table.interfaces';

@Component({
  selector: 'ct-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements AfterViewInit, OnChanges{

  /**
   * TODO: Revisar las siguientes observaciones
   * Falta implementar width de cada columna
   * Y Determinar el tipo de dato, para aplicar pipes en caso que sea necesario
   */

  @Input() data: T[] = [];
  @Input() configuration: ITableConfig<T> = {
    data: [],
    columns: []
  };

  @Output() rowClick = new EventEmitter<T>();
  @Output() pageChange = new EventEmitter<PageEvent>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<T>();

  displayedColumns: string[] = [];
  columns: string[] = [];
  items_per_page_options: number[] = [5,10,15];

  constructor(){
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.displayedColumns = this.configuration.columns
    .filter(column => column.display)
    .map( column => column.propierty);

    this.dataSource.data = this.configuration.data;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

    if(this.configuration.items_per_page_options){
      this.items_per_page_options = this.configuration.items_per_page_options;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilter(event: Event){
    const input = (event.target as HTMLInputElement).value;
    this.dataSource.filter = input.trim().toLowerCase();
  }

  onRowClick(row: T) {
    this.rowClick.emit(row);
  }

  onPageChange(event: PageEvent) {
    this.pageChange.emit(event);
  }

}
