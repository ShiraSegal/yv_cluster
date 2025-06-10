import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { MessageType } from '../enums/basic-enum';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubject$ = new BehaviorSubject<any>(null);
  message$ = this.messageSubject$.asObservable();
 
  showToastMessage(message: any) {
    console.log("MessageService: showToastMessage called with error:", message);
    
    this.messageSubject$.next(message);
    // setTimeout(() => {
      // this.hideToastNMessage();
    // }, data.duration || 3000); // ברירת מחדל אם אין duration
  }
 
  // hideToastNMessage() {
  //   this.messageSubject$.next(null);
  // }
}
