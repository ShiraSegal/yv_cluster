import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonType, RadioButtonListDirection, State, TextColor, TextSize, TextWeight, ToastNotificationIcons } from 'src/app/enums/basic-enum';
import { ButtonComponent } from '../../basic-components/button/button.component';
import { HeadingComponent } from '../../basic-components/heading/heading.component';
import { BasicRadioButtonComponent } from '../../basic-components/basic-radio-button/basic-radio-button.component';
import { RadioButtonListComponent } from '../../basic-components/radio-button-list/radio-button-list.component';
import { FieldComponent } from '../../basic-components/field/field.component';
import { ToastNotificationComponent } from '../../basic-components/toast-notification/toast-notification.component';

@Component({
  selector: 'yv-cluster-enter-bookid',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonComponent, HeadingComponent, BasicRadioButtonComponent, RadioButtonListComponent, FieldComponent,ToastNotificationComponent],
  templateUrl: './enter-bookid.component.html',
  styleUrl: './enter-bookid.component.scss'
})
export class EnterBookidComponent {
  
  //form
  formGroup:FormGroup = new FormGroup({
    selection: new FormControl('', Validators.required), 
    input: new FormControl('', Validators.required)
  });

  close: boolean = false;
  formIsValid: boolean;

  //header
  header: string = 'Enter Book ID';
  size: TextSize = TextSize.SMALL;
  weight: TextWeight = TextWeight.BOLD;
  color: TextColor = TextColor.NEUTRAL_GRAY;

  //radio buttons
  direction: RadioButtonListDirection = RadioButtonListDirection.ROW;
  radioButtonArray: any[] = [{ key: 'Book ID', value: 'Book ID' }, { key: 'Cluster', value: 'Cluster' }];

  //buttons
  buttomType1: ButtonType = ButtonType.TERTIARY;
  buttomType2: ButtonType = ButtonType.PRIMARY;
  btn_size: boolean = false;
  button1: string = 'Cancel';
  button2: string = 'Add';


  //selected radio button
  selected: string = 'Book Id';


  
  //toast notification
  ToastNotificationIcons=ToastNotificationIcons
  message: string = `${this.selected} Submitted!`;


  checkedChange(selected: string) {
    this.selected = selected;
  }


  add() {
    if (this.formGroup.valid) {
      this.formIsValid = true;
      this.close = true;
    }
    else {
      this.formIsValid = false;
    }
  }

}
