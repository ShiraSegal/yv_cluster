// notifiction.service.ts
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastNotificationComponent } from '../components/basic-components/toast-notification/toast-notification.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IconType } from '../enums/icon-enum';
@Injectable({
  providedIn: 'root'
}
)
export class NotifictionService {
  private notifictionSubject$ = new BehaviorSubject<any>(null);
  notifiction$ = this.notifictionSubject$.asObservable();

  private _snackBar = inject(MatSnackBar);
  showToastNotification(data: any) {
    this.openSnackBar();
  }


  openSnackBar() {
    this._snackBar.openFromComponent(ToastNotificationComponent, {
      duration: 3000000, // משך ההצגה במילישניות
        data:{
          iconName: IconType.SUCCESS_SOLID,
          title: 'Successfull',
          message: "  added to the cluster successfully!",
          duration: 3000
        },
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
       panelClass: ['no-snack-style']
    });
  }
}
