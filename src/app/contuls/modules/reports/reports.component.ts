import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContulsActions } from 'src/app/state';
import { IContulsState } from 'src/app/state/contuls.state';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent {
  constructor(
    private store$: Store<IContulsState>
  ){
    this.store$.dispatch(ContulsActions.setModule({title: 'Reportes', subtitle: null}))
  }
}
