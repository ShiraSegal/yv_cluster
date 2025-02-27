import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-yv-textarea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yv-textarea.component.html',
  styleUrl: './yv-textarea.component.css'
})
export class YvTextareaComponent {
  @Input() label: string = '';
  isActive = false;
 
  onFocus() {
    this.isActive = true;
  }
 
  onBlur() {
    if ((<HTMLTextAreaElement>document.getElementById('textarea')).value === '') {
      this.isActive = false;
    }
  }
 
  onInput() {
    if ((<HTMLTextAreaElement>document.getElementById('textarea')).value !== '') {
      this.isActive = true;
    }
  }
}
