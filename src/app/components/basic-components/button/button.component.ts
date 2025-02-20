import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType, DisabledType } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text="";
  @Input() buttonType : ButtonType = ButtonType.TERTIARY;
  @Input() disabled: boolean = false;
  @Input() isBig: boolean = false;
  disableType!:DisabledType;
  @Output() onClick = new EventEmitter();

  ngOnInit(): void {
    if(this.disabled){
      switch(this.buttonType){
        case ButtonType.PRIMARY:{
          this.disableType=DisabledType.DISABLED_PRIMARY
          break;}
          case ButtonType.SECONDARY:{
            this.disableType=DisabledType.DISABLED_SECONDARY
            break;}
            case ButtonType.TERTIARY:{
              this.disableType=DisabledType.DISABLED_TERTIARY
              break;}
      }
    }
}}
