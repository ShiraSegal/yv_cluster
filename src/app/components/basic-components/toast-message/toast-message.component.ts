import { CommonModule } from '@angular/common';
import { Component, inject, Inject, Input, SimpleChanges } from '@angular/core';
import { ButtonType, MessageType, TextColor, TextSize, TextWeight } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { BodyComponent } from '../body/body.component';
import { ButtonComponent } from "../button/button.component";
import { MessageService } from 'src/app/services/message.service';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'yv-cluster-toast-message',
  standalone: true,
  imports: [CommonModule, BodyComponent, ButtonComponent],
  templateUrl: './toast-message.component.html',
  styleUrl: './toast-message.component.scss'
})
export class ToastMessageComponent {
  data=inject(MAT_SNACK_BAR_DATA);
  snackBarRef = inject(MatSnackBarRef<ToastMessageComponent>);

type: MessageType;
heading: string;
content: string;
hasButton: boolean;
icon:IconType;
color=TextColor;
size=TextSize;
buttonType=ButtonType;
isVisible:boolean=true;



  ngOnInit() {
    console.log('data from snackbar:', this.data);
  
    if (!this.data) return;
  
    this.type = this.data.type;
    this.heading = this.data.heading;
    this.content = this.data.content;
  
    switch (this.type) {
      case 'success':
        this.icon = IconType.CIRCLE_CHECK_SOLID;
        break;
      case 'error':
        this.icon = IconType.CIRCLE_EXCLAMATION_SOLID;
        break;
      case 'inforrmative':
        this.icon = IconType.CIRCLE_INFO_SOLID;
        break;
      case 'attention':
        this.icon = IconType.TRIANGLE_EXCLAMATION_SOLID;
        break;
    }
  }
  


  closeToastMessage() {
    this.snackBarRef.dismiss(); // זו השורה שסוגרת את ה־SnackBar
  }
}
