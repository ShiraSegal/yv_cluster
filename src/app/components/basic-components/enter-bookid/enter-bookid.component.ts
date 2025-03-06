import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonType } from 'src/app/enums/basic-enum';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'yv-cluster-enter-bookid',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './enter-bookid.component.html',
  styleUrl: './enter-bookid.component.scss'
})
export class EnterBookidComponent  {
  @Input() header: string = '';
  
  selectedLabel: string = 'Book Id';
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

  onRadioChange() {
    // מאזין לשינוי בערך הרדיו-באטן
    this.formGroup.get('selection')?.valueChanges.subscribe(value => {
      this.selectedLabel = value === 'bookid' ? 'Book Id' : 'Cluster';
    });
  }

  add() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      alert(`${this.selectedLabel} Submitted!`);
    }
   else {
    alert(`Please fill in the ${this.selectedLabel} before submitting.`);
  }
  }
  cancel() {
    this.close = true;
  }
}
