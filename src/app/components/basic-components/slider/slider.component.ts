import { Component, Input } from '@angular/core';

@Component({
  selector: 'yv-cluster-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  @Input() value: number = 50;
  colorWidth?: string;
  ngOnInit(): void {
    this.colorWidth = `${(this.value / 100) * 8.5}rem`;
  }
}
