import { Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';

@Inject({})
export class UIHelperService {
  canStartCountUpValue = new BehaviorSubject(false);
  canStartCountUpValue$ = this.canStartCountUpValue.asObservable();

  setCanStartCountUpValue(canStartCountUpValue): void {
    this.canStartCountUpValue.next(canStartCountUpValue);
  }

  getObservableCanStartCountUpValue(): Observable<boolean> {
    return this.canStartCountUpValue$;
  }
}
