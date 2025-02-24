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
  @Input() icon:string="";
  // @Input() buttonType : ButtonType = ButtonType.SECONDARY;
  // @Input() disabled: boolean = false;
  // @Input() isBig: boolean = false;
  // disableType!:DisabledType;

  @Output() onClick = new EventEmitter();

  ngOnInit(): void {
   
}}
