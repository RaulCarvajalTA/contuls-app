import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TMenuStatusType } from '../types/ct.types';
import { MenuEnum } from '../enums/ct.enums';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private _sideMenuStatus = new BehaviorSubject<TMenuStatusType>(MenuEnum.opened);
  _sideMenuStatus$ = this._sideMenuStatus.asObservable();

  constructor(
    
  ) { }

  changeMenuStatusType(type: TMenuStatusType){
    this._sideMenuStatus.next(type);
  }

}
