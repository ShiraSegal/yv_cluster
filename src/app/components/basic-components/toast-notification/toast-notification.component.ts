import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ToastNotificationIcons } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-toast-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-notification.component.html',
  styleUrl: './toast-notification.component.scss'
})
export class ToastNotificationComponent {
ToastNotificationIcons = ToastNotificationIcons;
  @Input() iconName:ToastNotificationIcons=ToastNotificationIcons.SUCCESS;
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
