import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconType } from 'src/app/enums/icon-enum';

@Component({
  selector: 'yv-cluster-basic-simple-square-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-simple-square-icon-button.component.html',
  styleUrl: './basic-simple-square-icon-button.component.scss'
})
export class BasicSimpleSquareIconButtonComponent {
  // @Input() isActive = false;

  @Input() icon: IconType;
}
