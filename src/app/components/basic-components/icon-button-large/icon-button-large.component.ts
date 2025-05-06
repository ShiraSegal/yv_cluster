import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconButtonLargeType } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';

@Component({
  selector: 'yv-cluster-icon-button-large',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button-large.component.html',
  styleUrl: './icon-button-large.component.scss'
})
export class IconButtonLargeComponent {
  @Input() icon!: IconType;
  @Input() property!: IconButtonLargeType;
  
@Output() onClick = new EventEmitter<void>();

  handleClick() {  
      this.onClick.emit();
  }
}


