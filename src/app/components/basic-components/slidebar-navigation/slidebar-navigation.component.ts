import { Component, Input, input } from '@angular/core';
import { SliderNavigationTabComponent } from '../slider-navigation-tab/slider-navigation-tab.component';
import { SliderNavigationTabIconType, SliderNavigationTabType } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-slidebar-navigation',
  standalone: true,
  imports: [SliderNavigationTabComponent],
  templateUrl: './slidebar-navigation.component.html',
  styleUrl: './slidebar-navigation.component.scss'
})
export class SlidebarNavigationComponent {


  SliderNavigationTabIconType = SliderNavigationTabIconType;
  SliderNavigationTabType = SliderNavigationTabType;

  activeTab: SliderNavigationTabType = SliderNavigationTabType.VARIANT3;

  
  tabs = [
    { property: SliderNavigationTabType.VARIANT3, icon: SliderNavigationTabIconType.HOME },
    { property: SliderNavigationTabType.VARIANT3, icon: SliderNavigationTabIconType.AUTOCLUSRET },
    { property: SliderNavigationTabType.VARIANT3, icon: SliderNavigationTabIconType.REPORT },
    { property: SliderNavigationTabType.VARIANT3, icon: SliderNavigationTabIconType.NEWCLUSTER },
  ];

  setActiveTab(tab: SliderNavigationTabType) {
    this.activeTab = tab;
  }
}
