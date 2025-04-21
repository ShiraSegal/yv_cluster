import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonSize, ButtonType} from '../../../enums/basic-enum';
import { ButtonIcon } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
})
export class ButtonComponent {
  @Input() text: string = "";
  @Input() buttonType: ButtonType = ButtonType.PRIMARY;
  @Input() disabled: boolean = false;
  @Input() size: ButtonSize = ButtonSize.BIG;
  @Input() buttonIcon!: ButtonIcon;

  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
}
