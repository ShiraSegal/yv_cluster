import { Component } from '@angular/core';
import { ButtonType } from 'src/app/enums/basic-enum';
import { CommonModule } from '@angular/common';
import { TempButtonComponent } from '../basic-components/temp-button/temp-button.component';
import { YvBasicCardComponent } from '../basic-components/yv-basic-card/yv-basic-card.component';
import { YvBasicRadioButtonComponent } from '../basic-components/yv-basic-radio-button/yv-basic-radio-button.component';
import { YvBasicTabComponent } from '../basic-components/yv-basic-tab/yv-basic-tab.component';
import { YvBasicToggleComponent } from '../basic-components/yv-basic-toggle/yv-basic-toggle.component';
import { YvFilterSectionComponent } from '../basic-components/yv-filter-section/yv-filter-section.component';
import { YvSwitchComponent } from '../basic-components/yv-switch/yv-switch.component';
import { YvToastNotificationComponent } from '../basic-components/yv-toast-notification/yv-toast-notification.component';

@Component({
  selector: 'yv-cluster-test',
  standalone: true,
  imports: [CommonModule, TempButtonComponent,YvBasicCardComponent,YvBasicRadioButtonComponent,YvBasicTabComponent,YvBasicToggleComponent,YvFilterSectionComponent,YvSwitchComponent,YvToastNotificationComponent],
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
