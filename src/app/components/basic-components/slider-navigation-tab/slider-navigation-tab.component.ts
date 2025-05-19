import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SliderNavigationTabTextType, SliderNavigationTabType } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';
 
@Component({
  selector: 'yv-cluster-slider-navigation-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-navigation-tab.component.html',
  styleUrls: ['./slider-navigation-tab.component.scss']
})
export class SliderNavigationTabComponent {
  @Input() property!: SliderNavigationTabType;
  @Input() icon!: IconType;
  @Input() text!: SliderNavigationTabTextType;
 
  iconType = IconType;
  sliderNavigationTabType = SliderNavigationTabType;
  sliderNavigationTabTextType = SliderNavigationTabTextType
 
}