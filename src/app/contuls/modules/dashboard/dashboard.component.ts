import { AfterViewInit, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContulsActions } from 'src/app/state';
import { IContulsState } from 'src/app/state/contuls.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{
  constructor(
    private store$: Store<IContulsState>
  ){
    
    this.store$.dispatch(ContulsActions.setModule({title: 'Dashboard', subtitle: null}));
    this.store$.dispatch(ContulsActions.setToolbarActions({toolbarActions: [
      {name: 'fullScreen',action: 'dashboard:fullScreen',icon: 'fullscreen', tooltip: 'Pantalla completa', enable:true}
    ]}));
  }
}
