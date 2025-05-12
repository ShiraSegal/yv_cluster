import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { IconType } from 'src/app/enums/icon-enum';

@Component({
  selector: 'yv-cluster-basic-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-card.component.html',
  styleUrl: './basic-card.component.scss'
})
export class BasicCardComponent {
  iconType = IconType;
  @Input() text: string;
  @Input() iconName: IconType;
  @Input() circleColor: string; 
  @Input() iconColor: string;

}
