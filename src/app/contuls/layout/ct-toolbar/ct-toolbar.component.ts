import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MenuEnum } from 'src/app/core/enums/ct.enums';
import { LayoutService } from 'src/app/core/services/layout.service';
import { TMenuStatusType } from 'src/app/core/types/ct.types';
import { ContulsActions, ContulsSelectors } from 'src/app/state';
import { IContulsState } from 'src/app/state/contuls.state';

@Component({
  selector: 'app-ct-toolbar',
  templateUrl: './ct-toolbar.component.html',
  styleUrls: ['./ct-toolbar.component.scss']
})
export class CtToolbarComponent implements OnInit {

  menuStatus: TMenuStatusType = MenuEnum.opened;
  menuStatus$: Observable<TMenuStatusType>;

  constructor(
    private _layoutService: LayoutService,
    private store$:Store<IContulsState>
  ){
    this.menuStatus$ = this.store$.select(ContulsSelectors.selectMenuType);
  }

  ngOnInit(): void {
    
    // this._layoutService._sideMenuStatus$
    // .subscribe(
    //   menuStatus => this.menuStatus = menuStatus
    // )
    this.menuStatus$.subscribe(menuStatus => this.menuStatus = menuStatus )
  }

  toggleCollapseMenu(){
    //this._layoutService.changeMenuStatusType(this.menuStatus===MenuEnum.opened?MenuEnum.collapsed:MenuEnum.opened)
    this.store$.dispatch(ContulsActions.setMenuStatus({status:this.menuStatus===MenuEnum.opened?MenuEnum.collapsed:MenuEnum.opened}))
  }


}
