import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'yv-cluster-enter-bookid',
  standalone: true,
  imports: [],
  templateUrl: './enter-bookid.component.html',
  styleUrl: './enter-bookid.component.scss'
})
export class EnterBookidComponent {
  @Input() header: string = '';
  selectedOption: number = 1;
  selectedLabel: string = '';
  
  onRadioChange() {
  if(this.selectedOption === 1) {
    this.selectedLabel = 'Cluster';
    this.selectedOption = 2;
  }
  else {
    this.selectedLabel = 'Book ID';
    this.selectedOption = 1;
  }
}}
