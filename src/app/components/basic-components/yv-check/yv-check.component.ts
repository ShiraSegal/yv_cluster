import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-yv-check',
  standalone: true,
  imports: [CommonModule] ,
  templateUrl: './yv-check.component.html',
  styleUrl: './yv-check.component.css'
})
export class YvCheckComponent {
  @Input() type: string = 'unselected';
  @Input() state: string = 'enabled';


  toggleCheckbox() {
    if (this.state !== 'desabled') {
      this.type = this.type === 'selected' ? 'unselected' : 'selected';
    }
  }
}
