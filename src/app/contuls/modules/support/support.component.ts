import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContulsActions } from 'src/app/state';
import { IContulsState } from 'src/app/state/contuls.state';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  constructor(
    private store$: Store<IContulsState>
  ){
    this.store$.dispatch(ContulsActions.setModule({title: 'Soporte', subtitle: null}));
    this.store$.dispatch(ContulsActions.setToolbarActions({toolbarActions: []}));
  }
}
