import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { MessageType } from '../enums/basic-enum';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ToastMessageComponent } from '../components/basic-components/toast-message/toast-message.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubject$ = new BehaviorSubject<any>(null);
  message$ = this.messageSubject$.asObservable();
  #snackBar = inject(MatSnackBar);
  // message: any;
 
  // showToastMessage(message: any) {
  //   this.message= message;
  //   this.openSnackBar();
  // }
  showToastMessage(message: any) {
    this.#snackBar.openFromComponent(ToastMessageComponent, {
      duration: 3000000, // משך ההצגה במילישניות
      data:message,
    horizontalPosition: 'center',
    verticalPosition: 'top',
    // panelClass: 'fixed-width-snackbar'
    // panelClass: ['full-width-snackbar']
         panelClass: ['no-snack-style']
  })
 
  // hideToastNMessage() {
  //   this.messageSubject$.next(null);
  // }
}
}