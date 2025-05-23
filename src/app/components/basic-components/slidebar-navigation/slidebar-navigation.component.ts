import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SliderNavigationTabComponent } from '../slider-navigation-tab/slider-navigation-tab.component';
import { SliderNavigationTabTextType, SliderNavigationTabType } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';
// import { Router } from 'express';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'yv-cluster-slidebar-navigation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SliderNavigationTabComponent],
  templateUrl: './slidebar-navigation.component.html',
  styleUrls: ['./slidebar-navigation.component.scss']
})
export class SlidebarNavigationComponent {
   #router = inject(Router);
   #route = inject(ActivatedRoute);
  
  sliderNavigationTabTextType = SliderNavigationTabTextType;
  iconType = IconType;
  sliderNavigationTabType = SliderNavigationTabType;
  activeTabIndex: number | null = 0;

  tabs = [
    { number: 0, property: new FormControl(SliderNavigationTabType.VARIANT3), icon: IconType.HOUSE_LIGHT, activeIcon: IconType.HOUSE_SOLID, text: SliderNavigationTabTextType.HOME },
    { number: 1, property: new FormControl(SliderNavigationTabType.VARIANT3), icon: IconType.LIST_LIGHT, activeIcon: IconType.LIST_SOLID, text: SliderNavigationTabTextType.AUTO_CLUSTER },
    { number: 2, property: new FormControl(SliderNavigationTabType.VARIANT3), icon: IconType.CHART_LINE_UP_LIGHT, activeIcon: IconType.CHART_LINE_UP_SOLID, text: SliderNavigationTabTextType.CRM_CLUSTERS },
    { number: 3, property: new FormControl(SliderNavigationTabType.VARIANT3), icon: IconType.PLUS_LIGHT, activeIcon: IconType.PLUS_SOLID, text: SliderNavigationTabTextType.NEW_CLUSTER },
    { number: 4, property: new FormControl(SliderNavigationTabType.VARIANT3), icon: IconType.CHART_LINE_UP_LIGHT, activeIcon: IconType.CHART_LINE_UP_SOLID, text: SliderNavigationTabTextType.REPORT },
    { number: 5, property: new FormControl(SliderNavigationTabType.VARIANT3), icon: IconType.LEFT_FROM_BRACKET_LIGHT, activeIcon: IconType.LEFT_FROM_BRACKET_SOLID, text: SliderNavigationTabTextType.LOG_OUT },
  ];

  setActiveTab(tabIndex: number) {
    this.activeTabIndex = tabIndex;
    this.tabs.forEach((tab, index) => {
      if (index !== tabIndex) {
        tab.property.setValue(SliderNavigationTabType.VARIANT3);
      } else {
        tab.property.setValue(SliderNavigationTabType.ACTIVE);
        this.#router.navigate([tab.text]);
      }
    });
  }
}