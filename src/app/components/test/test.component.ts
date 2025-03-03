import { Component } from '@angular/core';
import { ButtonType } from 'src/app/enums/basic-enum';
import { CommonModule } from '@angular/common';
import { TempButtonComponent } from '../basic-components/temp-button/temp-button.component';
import { BasicTabComponent } from '../basic-components/basic-tab/basic-tab.component';
import { BasicCardComponent } from '../basic-components/basic-card/basic-card.component';
import { BasicRadioButtonComponent } from '../basic-components/basic-radio-button/basic-radio-button.component';
import { BasicToggleComponent } from '../basic-components/basic-toggle/basic-toggle.component';
import { FilterSectionComponent } from '../basic-components/filter-section/filter-section.component';
import { ToastNotificationComponent } from '../basic-components/toast-notification/toast-notification.component';
import { SwitchComponent } from '../basic-components/switch/switch.component';
import { CardIcons } from 'src/app/enums/card-icons-enum';
import { ToastNotificationIcons } from 'src/app/enums/toast-notification-icons-enum';

@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [CommonModule, TempButtonComponent,BasicTabComponent,BasicCardComponent,BasicRadioButtonComponent,BasicToggleComponent,FilterSectionComponent,ToastNotificationComponent,SwitchComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  btnType = ButtonType.PRIMARY;
  btnType2 = ButtonType.SECONDARY;
  txt1 = "test btn1"
  // txt1 = "test btn1"
  switchState: boolean = false;
  tabState: boolean = false;
  toggleState: boolean = false;
  radioButtonState: boolean = false;
  CardIcons = CardIcons;
  ToastNotificationIcons = ToastNotificationIcons;
  onClick()
  {
    alert('test on click');
    console.log('test on click');
  }
  handleSwitchChange(state: boolean) {
    this.switchState = state;
    console.log('מצב ה-Switch:', state ? 'דלוק' : 'מכובה');
  }

  handleTabChange(state: boolean) {
    this.tabState = state;
    console.log('מצב ה-Tab:', state ? 'דלוק' : 'מכובה');
  }
  handleToggleChange(state: boolean) {
    this.toggleState = state;
    console.log('מצב ה-toggle:', state ? 'דלוק' : 'מכובה');
  }
  handleRadioButtonChange(state: boolean) {
    this.radioButtonState = state;
    console.log('מצב ה-radioButton:', state ? 'דלוק' : 'מכובה');
  }
}
