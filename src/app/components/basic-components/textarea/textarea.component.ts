import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'yv-cluster-textarea',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {
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
