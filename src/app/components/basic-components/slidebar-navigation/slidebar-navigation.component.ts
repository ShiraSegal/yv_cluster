import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SliderNavigationTabComponent } from '../slider-navigation-tab/slider-navigation-tab.component';
import { SliderNavigationTabTextType, SliderNavigationTabType } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';

@Component({
  selector: 'yv-cluster-slidebar-navigation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SliderNavigationTabComponent],
  templateUrl: './slidebar-navigation.component.html',
  styleUrls: ['./slidebar-navigation.component.scss']
})
export class SlidebarNavigationComponent {
  sliderNavigationTabTextType = SliderNavigationTabTextType;
  iconType = IconType;
  sliderNavigationTabType = SliderNavigationTabType;
  activeTabIndex: number | null = null;

  tabs = [
    { number: 0, property: new FormControl(SliderNavigationTabType.VARIANT3), icon: IconType.HOUSE_LIGHT, activeIcon: IconType.HOUSE_SOLID, text: SliderNavigationTabTextType.HOME },
    { number: 1, property: new FormControl(SliderNavigationTabType.VARIANT3), icon: IconType.LIST_LIGHT, activeIcon: IconType.AUTOCLUSRETSOLID, text: SliderNavigationTabTextType.AUTOCLUSRET },
    { number: 2, property: new FormControl(SliderNavigationTabType.VARIANT3), icon: IconType.CHART_LINE_UP_LIGHT, activeIcon: IconType.REPORTSOLID, text: SliderNavigationTabTextType.REPORT },
    { number: 3, property: new FormControl(SliderNavigationTabType.VARIANT3), icon: IconType.NEWCLUSTERLIGHT, activeIcon: IconType.PLUS_SOLID, text: SliderNavigationTabTextType.NEWCLUSTER },
    { number: 4, property: new FormControl(SliderNavigationTabType.VARIANT3), icon: IconType.LEFT_FROM_BRACKET_LIGHT, activeIcon: IconType.LIST_SOLID, text: SliderNavigationTabTextType.LOGOUT },
  ];

  setActiveTab(tabIndex: number) {
    this.activeTabIndex = tabIndex;
    this.tabs.forEach((tab, index) => {
      if (index !== tabIndex) {
        tab.property.setValue(SliderNavigationTabType.VARIANT3);
      } else {
        tab.property.setValue(SliderNavigationTabType.ACTIVE);
      }
    });
  }
}
