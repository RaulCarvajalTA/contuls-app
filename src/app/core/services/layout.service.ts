import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuStatusType } from '../types/ct.types';
import { MenuEnum } from '../enums/ct.enums';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private _sideMenuStatus = new BehaviorSubject<MenuStatusType>(MenuEnum.opened);
  _sideMenuStatus$ = this._sideMenuStatus.asObservable();

  constructor() { }

  changeMenuStatusType(type: MenuStatusType){
    this._sideMenuStatus.next(type);
  }

}
