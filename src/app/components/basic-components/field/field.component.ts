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
  //variables
  @Input() property!: State;
  @Input() label!: string ;
  @Input() textControl:FormControl = new FormControl<string>('');
  //injecting ENUM
  stateEnum =  State ;
 
}