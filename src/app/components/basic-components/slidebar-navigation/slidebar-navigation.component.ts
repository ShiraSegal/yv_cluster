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
  logoutText = SliderNavigationTabTextType.LOG_OUT
  tabs = [
    {  property: SliderNavigationTabType.VARIANT3, icon: IconType.HOUSE_LIGHT, activeIcon: IconType.HOUSE_SOLID, text: SliderNavigationTabTextType.HOME },
    {  property: SliderNavigationTabType.VARIANT3, icon: IconType.LIST_LIGHT, activeIcon: IconType.LIST_SOLID, text: SliderNavigationTabTextType.AUTO_CLUSTER },
    {  property: SliderNavigationTabType.VARIANT3, icon: IconType.CHART_LINE_UP_LIGHT, activeIcon: IconType.CHART_LINE_UP_SOLID, text: SliderNavigationTabTextType.CRM_CLUSTERS },
    {  property: SliderNavigationTabType.VARIANT3, icon: IconType.PLUS_LIGHT, activeIcon: IconType.PLUS_SOLID, text: SliderNavigationTabTextType.NEW_CLUSTER },
    {  property: SliderNavigationTabType.VARIANT3, icon: IconType.CHART_LINE_UP_LIGHT, activeIcon: IconType.CHART_LINE_UP_SOLID, text: SliderNavigationTabTextType.REPORT },
    {  property: SliderNavigationTabType.VARIANT3, icon: IconType.LEFT_FROM_BRACKET_LIGHT, activeIcon: IconType.LEFT_FROM_BRACKET_SOLID, text: SliderNavigationTabTextType.LOG_OUT },
  ];

  setActiveTab(tabText: SliderNavigationTabTextType) {
    this.tabs.forEach((tab) => {
      if (tab.text !== tabText) {
        tab.property = SliderNavigationTabType.VARIANT3; // טאב שאינו נבחר
      } else {
        tab.property = SliderNavigationTabType.ACTIVE; // טאב נבחר
        this.#router.navigate([tab.text]); // ניווט לטאב הנבחר
      }
    });
    this.activeTabIndex = this.tabs.findIndex((tab) => tab.text === tabText);
  }
}