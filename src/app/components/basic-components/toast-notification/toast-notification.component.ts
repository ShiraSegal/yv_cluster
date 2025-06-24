import { CommonModule } from '@angular/common';
import { Component, Inject, inject, Input } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { IconType } from 'src/app/enums/icon-enum';
import { NotifictionService } from 'src/app/services/notifiction.service';

@Component({
  selector: 'yv-cluster-toast-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-notification.component.html',
  styleUrl: './toast-notification.component.scss'
})
export class ToastNotificationComponent {
  data: { iconName?: IconType; title?: string; message?: string; duration?: number } = inject(MAT_SNACK_BAR_DATA);
  // #notifictionService = inject(NotifictionService)
#snackBarRef = inject(MatSnackBarRef<ToastNotificationComponent>);
  private _snackBar = inject(MatSnackBar);

  iconName: IconType = IconType.SUCCESS_SOLID;
  title: string;
  message: string;
  duration: number;
  isVisible: boolean = true;
  toastNotificationIcons = IconType;
  ngOnInit(): void {
    this.iconName = this.data.iconName || IconType.SUCCESS_SOLID;
    this.title = this.data.title || 'Notification';
    this.message = this.data.message || 'Operation completed successfully!';
    this.duration = this.data.duration || 3000; // Default duration if not provided
  }

  closeToastNotification() {
    this.#snackBarRef.dismiss();
  }

}
