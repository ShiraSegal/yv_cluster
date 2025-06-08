import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { ButtonType, MessageType, TextColor, TextSize, TextWeight } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { BodyComponent } from '../body/body.component';
import { ButtonComponent } from "../button/button.component";
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'yv-cluster-toast-message',
  standalone: true,
  imports: [CommonModule, BodyComponent, ButtonComponent],
  templateUrl: './toast-message.component.html',
  styleUrl: './toast-message.component.scss'
})
export class ToastMessageComponent {
  #messageService=Inject(MessageService)
@Input() type:MessageType;
@Input() heading:string;
@Input() content:string;
icon:IconType;
color=TextColor;
size=TextSize;
buttonType=ButtonType;
isVisible:boolean=true;
// show:boolean=false; // תנאי להצגה ב־HTML



ngOnInit(){
  console.log('ToastMessageComponent initialized with:', { type: this.type, heading: this.heading, content: this.content });
  
  switch(this.type){
    case 'success':
      this.icon=IconType.CIRCLE_CHECK_SOLID;
      break;
    case 'error':
      this.icon=IconType.CIRCLE_EXCLAMATION_SOLID
      break;
    case 'inforrmative':
      this.icon=IconType.CIRCLE_INFO_SOLID
      break;
    case 'attention':
      this.icon=IconType.TRIANGLE_EXCLAMATION_SOLID
      break;
  }
  console.log('toast init:', { type: this.type, heading: this.heading, content: this.content });

  // this.#messageService.showMessage$.subscribe(data => {
  //   this.type = data.type;
  //   this.heading = data.heading;
  //   this.content = data.content;
  //   this.show = true; // תנאי להצגה ב־HTML
  // });
}

closeToastNotification() {
  this.isVisible = false;
}
}
