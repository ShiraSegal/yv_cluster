import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SliderNavigationTabIconType, SliderNavigationTabType } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-slider-navigation-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-navigation-tab.component.html',
  styleUrl: './slider-navigation-tab.component.scss'
})
export class SliderNavigationTabComponent {
  @Input() property: SliderNavigationTabType = SliderNavigationTabType.VARIANT3;
  @Input() icon: SliderNavigationTabIconType = SliderNavigationTabIconType.HOME;

  SliderNavigationTabIconType = SliderNavigationTabIconType;
  SliderNavigationTabType = SliderNavigationTabType;

  getIconLabel(icon: SliderNavigationTabIconType): string {
    switch (icon) {
      case SliderNavigationTabIconType.HOME:
        return 'Home';
      case SliderNavigationTabIconType.AUTOCLUSRET:
        return 'Auto Cluster';
      case SliderNavigationTabIconType.LOGOUT:
        return 'Logout';
      case SliderNavigationTabIconType.REPORT:
        return 'Report';
      case SliderNavigationTabIconType.NEWCLUSTER:
        return 'New Cluster';
      default:
        return icon;
    }
  }
}
