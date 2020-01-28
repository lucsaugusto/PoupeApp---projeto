import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

  public log: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

}
