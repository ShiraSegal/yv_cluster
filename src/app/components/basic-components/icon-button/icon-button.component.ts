import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconType } from 'src/app/enums/icon-enum';


@Component({
  selector: 'yv-cluster-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {
  @Input() icon:IconType=IconType.PLUS;
  @Output() onClick = new EventEmitter();

  handleClick() {
      this.onClick.emit();
    }

}
