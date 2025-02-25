import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'yv-cluster-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {
  @Input() icon:string="";
  showSVG: boolean = false;

  handleMouseEnter() {
      this.showSVG = true;
  }

  handleMouseLeave() {
      this.showSVG = false;
  }
}
