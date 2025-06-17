// notifiction.service.ts
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastNotificationComponent } from '../components/basic-components/toast-notification/toast-notification.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Injectable({
  providedIn: 'root'
}

)
export class NotifictionService {
  private notifictionSubject$ = new BehaviorSubject<any>(null);
  notifiction$ = this.notifictionSubject$.asObservable();

  showToastNotification(data: any) {
    this.notifictionSubject$.next(data);
    setTimeout(() => {
      this.hideToastNotification();
    }, data.duration || 3000); // ברירת מחדל אם אין duration
    this.openSnackBar();
  }

  hideToastNotification() {
    this.notifictionSubject$.next(null);
  }

  // שליחה לפונקציה אמורה להראות כך:
//         this.#notifictionService.showToastNotification({
//           iconName: this.iconType.SUCCESS_SOLID,
//           title: 'Successfull',
//           message: result.bookId + "  added to the cluster successfully!",
//           duration: 3000
//         });

///////////////////////////////////////////

private _snackBar = inject(MatSnackBar);

  openSnackBar() {
    this._snackBar.openFromComponent(ToastNotificationComponent, {
      duration: 3000000, // משך ההצגה במילישניות
        data: { message: 'שלום מהקומפוננטה!' },
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
       panelClass: ['no-snack-style']
    });
  }
}
