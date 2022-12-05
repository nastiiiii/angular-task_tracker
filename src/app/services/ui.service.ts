import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private shaowAddTask: boolean  = false;
  private subject = new Subject<any>();


  constructor() { }

  toggleAddTask(): void {
    this.shaowAddTask = !this.shaowAddTask;
    this.subject.next(this.shaowAddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
