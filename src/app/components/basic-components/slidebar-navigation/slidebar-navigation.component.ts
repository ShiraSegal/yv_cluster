import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SliderNavigationTabComponent } from '../slider-navigation-tab/slider-navigation-tab.component';
import { SliderNavigationTabIconType, SliderNavigationTabType } from 'src/app/enums/basic-enum';
 
@Component({
  selector: 'yv-cluster-slidebar-navigation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SliderNavigationTabComponent],
  templateUrl: './slidebar-navigation.component.html',
  styleUrls: ['./slidebar-navigation.component.scss']
})
export class SlidebarNavigationComponent {
 
  SliderNavigationTabIconType = SliderNavigationTabIconType;
  SliderNavigationTabType = SliderNavigationTabType;
 
  tabs = [
    { property: new FormControl(SliderNavigationTabType.VARIANT3), icon: SliderNavigationTabIconType.HOME },
    { property: new FormControl(SliderNavigationTabType.VARIANT3), icon: SliderNavigationTabIconType.AUTOCLUSRET },
    { property: new FormControl(SliderNavigationTabType.VARIANT3), icon: SliderNavigationTabIconType.REPORT },
    { property: new FormControl(SliderNavigationTabType.VARIANT3), icon: SliderNavigationTabIconType.NEWCLUSTER },
  ];
 
  logoutTab = new FormControl(SliderNavigationTabType.VARIANT3);

  setActiveTab(tabControl: FormControl) {
    this.tabs.forEach(tab => {
      if (tab.property !== tabControl) {
        tab.property.setValue(SliderNavigationTabType.VARIANT3);
      }
    });
    this.logoutTab.setValue(SliderNavigationTabType.VARIANT3);
    tabControl.setValue(SliderNavigationTabType.ACTIVE);
  }
 
  setActiveLogoutTab() {
    this.tabs.forEach(tab => tab.property.setValue(SliderNavigationTabType.VARIANT3));
    this.logoutTab.setValue(SliderNavigationTabType.ACTIVE);
  }

 
}