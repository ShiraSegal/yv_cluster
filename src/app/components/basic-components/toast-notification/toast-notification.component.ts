import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconType } from 'src/app/enums/icon-enum';

@Component({
  selector: 'yv-cluster-toast-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-notification.component.html',
  styleUrl: './toast-notification.component.scss'
})
export class ToastNotificationComponent {
ToastNotificationIcons = IconType;
  @Input() iconName:IconType=IconType.SUCCESS;
  @Input() message!:string;
  @Input() text!:string;
  @Input() duration!: number;

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
