

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yv-slider',
  standalone: true,
  imports: [],
  templateUrl: './yv-slider.component.html',
  styleUrl: './yv-slider.component.scss'
})
export class YvSliderComponent implements OnInit{
  colorWidth? : string ;
  
  ngOnInit(): void {
 this.colorWidth =  `${(this.value / 100) * 8.5}rem`;
    
  }
  @Input() value: number = 50;


}