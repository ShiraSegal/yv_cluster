import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { MessageType } from '../enums/basic-enum';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private showMessageSubject = new ReplaySubject<{ type: MessageType; heading: string; content: string }>(1);
  showMessage$ = this.showMessageSubject.asObservable();

sendMessageByStatus(error: Error) {
  this.showMessageSubject.next({ type: MessageType.ERROR, heading: 'Error', content: error.message});
}
}
