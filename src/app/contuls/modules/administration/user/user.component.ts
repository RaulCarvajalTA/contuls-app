import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/core/interfaces/ct.interfaces';
import { ContulsSelectors } from 'src/app/state';
import { IContulsState } from 'src/app/state/contuls.state';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  user$: Observable<IUser>;

  constructor(
    private store$: Store<IContulsState>,
  ){
    this.user$ = this.store$.select(ContulsSelectors.selectUser);
  }

}
