import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { TableGroupIdDetailsComponent } from '../../basic-components/table-group-id-details/table-group-id-details.component';
import { IconButtonComponent } from '../../basic-components/icon-button/icon-button.component';
import { IconType } from 'src/app/enums/icon-enum';
import { SlidebarNavigationComponent } from '../../basic-components/slidebar-navigation/slidebar-navigation.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EnterBookidComponent } from '../../cluster-managment/enter-bookid/enter-bookid.component';
import { ToastNotificationComponent } from '../../basic-components/toast-notification/toast-notification.component';

@Component({
  selector: 'yv-cluster-handling-suggestions-page',
  standalone: true,
  imports: [CommonModule, TableGroupIdDetailsComponent, IconButtonComponent, SlidebarNavigationComponent, ToastNotificationComponent],
  templateUrl: './crm-clusters.component.html',
  styleUrl: './crm-clusters.component.scss'
})
export class CrmClustersComponent {
  @Input() groupIdNumber!: number;

  showToastNotification: boolean;
  toastMessage: string = '';

  toastIcon: IconType;
  iconType = IconType


}

