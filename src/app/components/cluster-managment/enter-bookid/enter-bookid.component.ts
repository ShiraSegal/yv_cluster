import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonType, TextSize } from 'src/app/enums/basic-enum';
import { ButtonComponent } from '../../basic-components/button/button.component';
import { HeadingComponent } from '../../basic-components/heading/heading.component';
import { BasicRadioButtonComponent } from '../../basic-components/basic-radio-button/basic-radio-button.component';

@Component({
  selector: 'yv-cluster-enter-bookid',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonComponent,HeadingComponent,BasicRadioButtonComponent],
  templateUrl: './enter-bookid.component.html',
  styleUrl: './enter-bookid.component.scss'
})
export class EnterBookidComponent  {
  header: string = 'Enter Book ID';
  size:TextSize = TextSize.SMALL;
  selectedLabel: string = 'Book Id';
  label1: string = 'Book ID';
  label2: string = 'Cluster';
  checked1: boolean = true;
  checked2: boolean = false;
  buttomType1: ButtonType = ButtonType.TERTIARY;
  buttomType2: ButtonType = ButtonType.PRIMARY;
  button1: string = 'Cancel';
  button2: string = 'Add';
  close:boolean = false;

  // יצירת טופס עם FormGroup ו-Control
  formGroup: FormGroup = new FormGroup({
    selection: new FormControl('bookid'), // ברירת מחדל
    bookId: new FormControl('', Validators.required) 
  });

  // onRadioChange() {
  //   const value = this.formGroup.get('selection')?.value;
  //   this.selectedLabel = value === 'bookid' ? 'Book Id' : 'Cluster';
  // }
  checkedChange() {
    this.checked1 = !this.checked1;
    this.checked2 = !this.checked2;
    this.selectedLabel = this.checked1 ? 'Book Id' : 'Cluster';
  }

  add() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      alert(`${this.selectedLabel} Submitted!`);
      this.close = true;
    }
   else {
    alert(`Please fill in the ${this.selectedLabel} before submitting.`);
  }
  }
  cancel() {
    this.close = true;
  }
}
