import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconButtonLargeType } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';
@Component({
  selector: 'yv-cluster-icon-button-small',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button-small.component.html',
  styleUrl: './icon-button-small.component.scss'
})
export class IconButtonSmallComponent {
  @Input() icon!: IconType;
  @Input() property!: IconButtonLargeType;
}
