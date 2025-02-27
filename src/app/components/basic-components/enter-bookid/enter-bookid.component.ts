import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'yv-cluster-enter-bookid',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './enter-bookid.component.html',
  styleUrl: './enter-bookid.component.scss'
})
export class EnterBookidComponent {
  @Input() header: string = '';
  // selectedOption: number = 1;
  selectedLabel: string = 'Book ID';
  selectedRadio: string = 'bookid';
  
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
