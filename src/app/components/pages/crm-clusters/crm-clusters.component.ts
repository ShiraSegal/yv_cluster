import { CommonModule } from '@angular/common';
import { Component, Inject, inject, Input } from '@angular/core';
import { TableGroupIdDetailsComponent } from '../../basic-components/table-group-id-details/table-group-id-details.component';
import { IconButtonComponent } from '../../basic-components/icon-button/icon-button.component';
import { IconType } from 'src/app/enums/icon-enum';
import { SlidebarNavigationComponent } from '../../basic-components/slidebar-navigation/slidebar-navigation.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EnterBookidComponent } from '../../cluster-managment/enter-bookid/enter-bookid.component';
import { ToastNotificationComponent } from '../../basic-components/toast-notification/toast-notification.component';
import { ToastMessageComponent } from '../../basic-components/toast-message/toast-message.component';
import { MessageType } from 'src/app/enums/basic-enum';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'yv-cluster-handling-suggestions-page',
  standalone: true,
  imports: [CommonModule, TableGroupIdDetailsComponent],
  templateUrl: './crm-clusters.component.html',
  styleUrl: './crm-clusters.component.scss'
})
export class CrmClustersComponent {
  #messageService=Inject(MessageService)
  #dialog = inject(MatDialog);
  @Input() groupIdNumber!: number;

  showToastNotification: boolean;
  toastMessage: string = '';

  toastIcon: IconType;
  iconType = IconType
  dialogRef: MatDialogRef<EnterBookidComponent> | null = null;

//   type: MessageType;
// heading: string;
// content: string;
// show = false;

ngOnInit() {
  console.log("CrmClustersComponent initialized with groupIdNumber:", this.groupIdNumber);

  // this.#messageService.showMessage$.subscribe(data => {
  //   console.log("Received message data:", data);
    
  //   this.type = data.type;
  //   this.heading = data.heading;
  //   this.content = data.content;
  //   this.show = true;
  // });
}

closeToastNotification() {
  // this.show = false;
}

  openDialog() {
    this.showToastNotification = false;
    this.dialogRef = this.#dialog.open(EnterBookidComponent, {
      disableClose: true,
      hasBackdrop: true,
      panelClass: 'custom-dialog-container',
      autoFocus: false,
      width: 'auto',  // מאפשר לדיאלוג להתאמת לגודל התוכן
      height: 'auto',

    });

    this.dialogRef.afterClosed().subscribe((result) => {
      

      if (result) {
        console.log('page Data received from dialog:', result);
        // בצע פעולה עם הנתונים שהתקבלו  
        // this.showToastNotificationFanction(result.bookId+"added to the cluster successfully!");
        if(result.bookId === "formIsNotValid") {
          console.log('page Data received from dialog: no data');
          // this.showToastNotificationFanction(result.bookId);
        }
      }
    
    });

  }
  showToastNotificationFanction(result:string){
    // if(result !== "null"){
  if(result === "formIsNotValid"){
    this.toastMessage = `Please choose or fill before submitting.`;
    this.toastIcon = IconType.CIRCLE_XMARK_SOLID;
    this.showToastNotification = true;
  }
  else{
    this.toastMessage = `${result}`;
    this.toastIcon = IconType.CIRCLE_CHECK_SOLID;
    this.showToastNotification = true;
  }
    // }
  }

  onClick() {
    // alert('test on click');
    // console.log('test on click');
    console.log("openPeiComponent");
    this.openDialog()
  }
  // האזנה לנתונים שמוחזרים מהדיאלוג

}

