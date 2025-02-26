import { Component } from '@angular/core';

@Component({
  selector: 'yv-cluster-enter-bookid',
  standalone: true,
  imports: [],
  templateUrl: './enter-bookid.component.html',
  styleUrl: './enter-bookid.component.scss'
})
export class EnterBookidComponent {
  selectedOption: string = '';
  selectedLabel: string = '';
  
  onOptionChange() {
  
  }
}
