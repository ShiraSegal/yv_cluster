import { Component, inject } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { SlidebarNavigationComponent } from './components/basic-components/slidebar-navigation/slidebar-navigation.component';
import { LoadingComponent } from './components/basic-components/loading/loading.component';
import { ToastNotificationComponent } from './components/basic-components/toast-notification/toast-notification.component';
import { IconType } from './enums/icon-enum';
import { NotifictionService } from './services/notifiction.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule,AsyncPipe, RouterOutlet,SlidebarNavigationComponent,LoadingComponent,ToastNotificationComponent],
})
export class AppComponent {
    notifictionService = inject(NotifictionService)
  
IconType=IconType
}