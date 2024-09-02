import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MenuEnum } from 'src/app/core/enums/ct.enums';
import { LayoutService } from 'src/app/core/services/layout.service';
import { MenuStatusType } from 'src/app/core/types/ct.types';

@Component({
  selector: 'app-ct-content',
  templateUrl: './ct-content.component.html',
  styleUrls: ['./ct-content.component.scss']
})
export class CtContentComponent implements OnInit {

  @ViewChild('drawer') drawer!: MatDrawer;
  menuStatus:MenuStatusType = MenuEnum.opened;
  showFiller = false;

  constructor(
    private _layoutService: LayoutService
  ){

  }
  ngOnInit(): void {
    
    this._layoutService._sideMenuStatus$
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


}
