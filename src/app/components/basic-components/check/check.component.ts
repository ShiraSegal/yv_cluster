import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'yv-cluster-check',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check.component.html',
  styleUrl: './check.component.scss'
})
export class CheckComponent {
  @Input() type: string = 'unselected';
  @Input() state: string = 'enabled';


  toggleCheckbox() {
    if (this.state !== 'desabled') {
      this.type = this.type === 'selected' ? 'unselected' : 'selected';
    }
  }
}
