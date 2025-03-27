import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SquareIconButtonIcon } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-basic-square-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-square-icon-button.component.html',
  styleUrls: ['./basic-square-icon-button.component.scss']
})
export class BasicSquareIconButtonComponent {
  @Input() icon: SquareIconButtonIcon = SquareIconButtonIcon.LIST;
  @Input() isActive = false;
}