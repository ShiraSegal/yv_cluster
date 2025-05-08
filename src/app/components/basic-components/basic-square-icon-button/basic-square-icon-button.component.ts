import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {IconType } from 'src/app/enums/icon-enum';

@Component({
  selector: 'yv-cluster-basic-square-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-square-icon-button.component.html',
  styleUrls: ['./basic-square-icon-button.component.scss']
})
export class BasicSquareIconButtonComponent {
  @Input() icon: IconType = IconType.LIST;
  @Input() isActive = false;
}