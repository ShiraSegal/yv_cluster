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

  #dialog = inject(MatDialog);
  iconType = IconType
  dialogRef: MatDialogRef<EnterBookidComponent> | null = null;

  // openDialog() {
  //   this.showToastNotification = false;
  //   this.dialogRef = this.#dialog.open(EnterBookidComponent, {
  //     data: true,
  //     disableClose: true,
  //     hasBackdrop: true,
  //     panelClass: 'custom-dialog-container',
  //     autoFocus: false,
  //     width: 'auto',  // מאפשר לדיאלוג להתאמת לגודל התוכן
  //     height: 'auto',

  //   });

  //   this.dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       console.log('page Data received from dialog:', result);
  //       // בצע פעולה עם הנתונים שהתקבלו  
  //       this.showToastNotificationFanction(result.bookId + "  added to the cluster successfully!");
  //       if (result.bookId === "formIsNotValid") {
  //         console.log('page Data received from dialog: no data');
  //         this.showToastNotificationFanction(result.bookId);
  //       }
  //     }

  //   });

  // }

  showToastNotificationFunction(result: string) {
    // if(result !== "null"){
    this.showToastNotification = false;
    console.log("crm showToastNotificationFanction", result);

    if (result === "formIsNotValid") {
      this.toastMessage = `Please choose or fill before submitting.`;
      this.toastIcon = IconType.XMARK_SOLID;
      this.showToastNotification = true;
    }
    else {
      this.showToastNotification = false;
      console.log("crm else showToastNotificationFanction", result);

      this.toastMessage = `${result}`;
      this.toastIcon = IconType.CIRCLE_CHECK_SOLID;
      this.showToastNotification = false;
      this.showToastNotification = true;
      console.log("crm else showToastNotificationFanction after true", this.showToastNotification);

    }
    // }
  }

  // onClick() {
  //   console.log("openPeiComponent");
  //   this.openDialog()
  // }

}

