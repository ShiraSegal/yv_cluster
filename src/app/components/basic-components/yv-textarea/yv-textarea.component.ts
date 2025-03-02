import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-yv-textarea',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './yv-textarea.component.html',
  styleUrl: './yv-textarea.component.css'
})
export class YvTextareaComponent {
  @Input() label: string = '';
  @Input() textControl:FormControl = new FormControl<string>('');
  isActive = false;
 
  onFocus() {
    this.isActive = true;
  }
 
  onBlur() {
    if (this.textControl.value === '') {
      this.isActive = false;
    }
  }
 
}
