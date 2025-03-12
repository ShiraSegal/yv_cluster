import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SliderNavigationTabIconType, SliderNavigationTabType } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-slider-navigation-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-navigation-tab.component.html',
  styleUrls: ['./slider-navigation-tab.component.scss']
})
export class SliderNavigationTabComponent {
  @Input() property: SliderNavigationTabType = SliderNavigationTabType.VARIANT3;
  @Input() icon: SliderNavigationTabIconType = SliderNavigationTabIconType.HOME;

  SliderNavigationTabIconType = SliderNavigationTabIconType;
  SliderNavigationTabType = SliderNavigationTabType;
}