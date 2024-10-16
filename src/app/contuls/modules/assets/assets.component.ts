import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContulsActions } from 'src/app/state';
import { IContulsState } from 'src/app/state/contuls.state';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent {
  constructor(
    private store$: Store<IContulsState>
  ){
    this.store$.dispatch(ContulsActions.setModule({title: 'Activos', subtitle: null}));
    this.store$.dispatch(ContulsActions.setToolbarActions({toolbarActions: []}))
  }
}
