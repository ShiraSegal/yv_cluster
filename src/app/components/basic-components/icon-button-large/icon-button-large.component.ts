import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconButtonLargeType } from 'src/app/enums/basic-enum';
import { ViewerIconType } from 'src/app/enums/icon-enum';

@Component({
  selector: 'yv-cluster-icon-button-large',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button-large.component.html',
  styleUrl: './icon-button-large.component.scss'
})
export class IconButtonLargeComponent {
  //variables
  @Input() icon!: ViewerIconType;
  @Input() property!: IconButtonLargeType;
}
