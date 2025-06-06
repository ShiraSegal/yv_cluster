import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
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
  toastNotificationIcons = IconType;
  @Input() iconName: IconType = IconType.SUCCESS_SOLID;
  @Input() title!: string;
  @Input() message!: string;
  @Input() duration!: number;

  notifictionService = inject(NotifictionService)

  isVisible: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = false;
    }, this.duration);
  }

  closeToastNotification() {
    this.isVisible = false;
  }
}
