import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {IconType } from 'src/app/enums/icon-enum';


@Component({
  selector: 'yv-cluster-basic-small-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-small-icon-button.component.html',
  styleUrl: './basic-small-icon-button.component.scss'
})
export class BasicSmallIconButtonComponent {
    @Input() icon:IconType  = IconType.TRASH;
}
