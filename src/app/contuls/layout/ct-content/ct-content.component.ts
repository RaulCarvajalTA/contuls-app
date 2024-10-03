import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MenuEnum } from 'src/app/core/enums/ct.enums';
import { ILayoutState } from 'src/app/core/interfaces/ct.interfaces';
import { LayoutService } from 'src/app/core/services/layout.service';
import { TMenuStatusType } from 'src/app/core/types/ct.types';
import { ContulsActions, ContulsSelectors } from 'src/app/state';
import { IContulsState } from 'src/app/state/contuls.state';

@Component({
  selector: 'app-ct-content',
  templateUrl: './ct-content.component.html',
  styleUrls: ['./ct-content.component.scss']
})
export class CtContentComponent implements OnInit, AfterViewInit {

  @ViewChild('drawer') drawer!: MatDrawer;

  menuStatus: TMenuStatusType = MenuEnum.opened;
  menuStatus$: Observable<TMenuStatusType>;

  showFiller = false;

  layout$: Observable<ILayoutState>;

  constructor(
    private store$: Store<IContulsState>,
    private _layoutService: LayoutService
  ){
    this.layout$ = this.store$.select(ContulsSelectors.selectLayout);
    this.menuStatus$ = this.store$.select(ContulsSelectors.selectMenuType);
  }
  
  ngOnInit(): void {

    this.menuStatus$
    .subscribe(
      menuStatus => {
        if(this.drawer){
          if(menuStatus == MenuEnum.collapsed)
            this.drawer.open();
          else if (menuStatus == MenuEnum.opened)
            this.drawer.close();
        }
      }
    )

  }

  ngAfterViewInit(): void {
    setTimeout(() => this.drawer.open());
    this.store$.dispatch(ContulsActions.setMenuStatus({status:MenuEnum.collapsed}))
  }
  
}
