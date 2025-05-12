
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconType } from 'src/app/enums/icon-enum';
import { IconButtonLargeType } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-icon-button-large',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button-large.component.html',
  styleUrls: ['./icon-button-large.component.scss']
})
export class IconButtonLargeComponent {
  @Input() icon!: IconType;
  @Input() property!: IconButtonLargeType;
  @Input() isSelected: boolean = false;
  @Output() onClick = new EventEmitter<void>();

  handleClick() {  
      this.onClick.emit();

  }
}
