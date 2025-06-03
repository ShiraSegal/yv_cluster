import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonType } from '../../../enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';

@Component({
  selector: 'yv-cluster-button',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
})
export class ButtonComponent {
  @Input() text: string = "";
  @Input() buttonType: ButtonType = ButtonType.PRIMARY;
  @Input() isBig: boolean = false;
  @Input() iconType!: IconType;

  // Add disabled as an @Input to allow external binding
  @Input() disabled: boolean = false;

  // FormControl for managing the button state
  @Input() buttonControl = new FormControl<boolean>(true); // Default enabled

  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled && this.buttonControl.value) {
      this.onClick.emit();
    }
  }
}