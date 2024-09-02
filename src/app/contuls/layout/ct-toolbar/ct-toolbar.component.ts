import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuEnum } from 'src/app/core/enums/ct.enums';
import { LayoutService } from 'src/app/core/services/layout.service';
import { MenuStatusType } from 'src/app/core/types/ct.types';

@Component({
  selector: 'app-ct-toolbar',
  templateUrl: './ct-toolbar.component.html',
  styleUrls: ['./ct-toolbar.component.scss']
})
export class CtToolbarComponent implements OnInit {

  menuStatus:MenuStatusType = MenuEnum.opened;

  constructor(
    private _layoutService: LayoutService
  ){

  }
  ngOnInit(): void {
    
    this._layoutService._sideMenuStatus$
    .subscribe(
      menuStatus => this.menuStatus = menuStatus
    )
  }

  toggleCollapseMenu(){
    this._layoutService.changeMenuStatusType(this.menuStatus===MenuEnum.opened?MenuEnum.collapsed:MenuEnum.opened)
  }


}
