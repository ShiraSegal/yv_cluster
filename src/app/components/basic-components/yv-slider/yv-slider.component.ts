

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-yv-slider',
  standalone: true,
  imports: [],
  templateUrl: './yv-slider.component.html',
  styleUrl: './yv-slider.component.scss'
})
export class YvSliderComponent {
  @Input() value: number = 50;

  getColoredWidth(): string {
    return `${(this.value / 100) * 8.5}rem`;
  }

}