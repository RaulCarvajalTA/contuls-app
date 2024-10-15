import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  private _eventToolbarActions = new Subject<string>();
  _eventToolbarActions$ = this._eventToolbarActions.asObservable();

  constructor() { }

  sendToolbarEvent(action: string){
    this._eventToolbarActions.next(action);
  }
}
