import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  
  selectedLabel: string = 'Book ID';
  buttomType1: ButtonType = ButtonType.TERTIARY;
  buttomType2: ButtonType = ButtonType.PRIMARY;
  text1: string = 'Cancel';
  text2: string = 'Add';

  // יצירת טופס עם FormGroup ו-Control
  formGroup: FormGroup = new FormGroup({
    selection: new FormControl('bookid'), // ברירת מחדל
    bookId: new FormControl('')
  });

  onRadioChange() {
    // מאזין לשינוי בערך הרדיו-באטן
    this.formGroup.get('selection')?.valueChanges.subscribe(value => {
      this.selectedLabel = value === 'bookid' ? 'Book ID' : 'Cluster';
    });
  }

  onClick() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      alert('Book ID Submitted!');
    }
  }
}
