import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { act } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MenuEnum } from 'src/app/core/enums/ct.enums';
import { IToolbarAction } from 'src/app/core/interfaces/ct.interfaces';
import { LayoutService } from 'src/app/core/services/layout.service';
import { ToolbarService } from 'src/app/core/services/toolbar.service';
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
  toolbarActions$: Observable<IToolbarAction[]>;

  toolbarActions: IToolbarAction[] = [];

  constructor(
    private store$:Store<IContulsState>,
    private _toolbarService: ToolbarService
  ){
    this.menuStatus$ = this.store$.select(ContulsSelectors.selectMenuType);
    this.toolbarActions$ = this.store$.select(ContulsSelectors.selectToolbarActions);
  }

  ngOnInit(): void {
    this.menuStatus$.subscribe(menuStatus => this.menuStatus = menuStatus );

    this.toolbarActions$.subscribe(
      actions => this.toolbarActions = actions
    );
  }

  toggleCollapseMenu(){
    this.store$.dispatch(ContulsActions.setMenuStatus({status:this.menuStatus===MenuEnum.opened?MenuEnum.collapsed:MenuEnum.opened}))
  }

  toolbarAction(action: string){
    this._toolbarService.sendToolbarEvent(action);
  }


}
