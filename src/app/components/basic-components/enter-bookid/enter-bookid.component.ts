import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonType } from 'src/app/enums/basic-enum';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'yv-cluster-enter-bookid',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  templateUrl: './enter-bookid.component.html',
  styleUrl: './enter-bookid.component.scss'
})
export class EnterBookidComponent {
  @Input() header: string = '';
  // selectedOption: number = 1;
  selectedLabel: string = 'Book ID';
  selectedRadio: string = 'bookid';
  buttomType1:ButtonType = ButtonType.TERTIARY;
  buttomType2:ButtonType = ButtonType.PRIMARY;
  text1: string = 'Cancel';
  text2: string = 'Add';
  
  onRadioChange() {
  if(this.selectedRadio === 'bookid') {
    this.selectedLabel = 'Book ID';
    this.selectedRadio = 'bookid';
  }
  else {
    this.selectedLabel = 'Cluster';
    this.selectedRadio = 'cluster';
  }
}}
