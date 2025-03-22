import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {  State } from 'src/app/enums/basic-enum';
 
@Component({
  selector: 'yv-cluster-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],  // הוספת FormsModule כאן
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {
  @Input() property!: State;
<<<<<<< HEAD
  @Input() label: string = '';
=======
  @Input() label!: string ;
>>>>>>> 3c27fb10a0bcaa68a8d7f34b81246fd6cf802f78
  @Input() textControl:FormControl = new FormControl<string>('');
  stateEnum =  State ;
 
}