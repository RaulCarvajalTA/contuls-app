import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContulsActions } from 'src/app/state';
import { IContulsState } from 'src/app/state/contuls.state';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  constructor(
    private store$: Store<IContulsState>
  ){
    this.store$.dispatch(ContulsActions.setModule({title: 'Clientes', subtitle: null}))
  }
  
}
