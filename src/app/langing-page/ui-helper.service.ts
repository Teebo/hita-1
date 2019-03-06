import { Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';

@Inject({})
export class UIHelperService {
  canStartCountUpValue = new BehaviorSubject(false);
  canStartCountUpValue$ = this.canStartCountUpValue.asObservable();
  navHaveItems = new BehaviorSubject(false);
  navHaveItems$ = this.navHaveItems.asObservable();

  setCanStartCountUpValue(canStartCountUpValue): void {
    this.canStartCountUpValue.next(canStartCountUpValue);
  }

  getObservableCanStartCountUpValue(): Observable<boolean> {
    return this.canStartCountUpValue$;
  }

  setNavHaveItems(navHaveItems): void {
    this.navHaveItems.next(navHaveItems);
  }

  getNavHaveItems(): Observable<boolean> {
    return this.navHaveItems$;
  }
}
