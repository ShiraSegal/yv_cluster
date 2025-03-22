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

  tabs = [
    { number: 1, property: new FormControl(SliderNavigationTabType.VARIANT3), icon: IconType.HOMELIGHT, text: SliderNavigationTabTextType.HOME },
    { number: 2, property: new FormControl(SliderNavigationTabType.VARIANT3), icon: IconType.AUTOCLUSRETLIGHT, text: SliderNavigationTabTextType.AUTOCLUSRET },
    { number: 3, property: new FormControl(SliderNavigationTabType.VARIANT3), icon: IconType.REPORTLIGHT, text: SliderNavigationTabTextType.REPORT },
    { number: 4, property: new FormControl(SliderNavigationTabType.VARIANT3), icon: IconType.NEWCLUSTERLIGHT, text: SliderNavigationTabTextType.NEWCLUSTER },
    { number: 5, property: new FormControl(SliderNavigationTabType.VARIANT3), icon: IconType.LOGOUTLIGHT, text: SliderNavigationTabTextType.LOGOUT },
  ];



  setActiveTab(tabControl: FormControl) {
    this.tabs.forEach(tab => {
      if (tab.property !== tabControl) {
        tab.property.setValue(SliderNavigationTabType.VARIANT3);
      }
    });
    tabControl.setValue(SliderNavigationTabType.ACTIVE);
  }


}