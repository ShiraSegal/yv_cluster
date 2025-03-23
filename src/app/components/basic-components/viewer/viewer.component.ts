import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonLargeType } from 'src/app/enums/basic-enum';
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';
import { IconType } from 'src/app/enums/icon-enum';

@Component({
  selector: 'yv-cluster-viewer',
  standalone: true,
  imports: [IconButtonLargeComponent, CommonModule],
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {
  @Input() pictureName: string = '';
  iconType = IconType;
  iconButtonLargeType = IconButtonLargeType;
  rotations = [
    'rot-0', 'rot-90', 'rot-180', 'rot-270', 'rot-360',
  ];
 
  scales = [
    'scale-1', 'scale-1-1', 'scale-1-2', 'scale-1-3', 'scale-1-4', 'scale-1-5'
  ];
  scale: number = 1; 
  rotate: number = 0;
  index: number = 0;
  scaleIndex: number = 0;
  rotationClass = 'rot-0';
  zoomClass = 'scale-1';

  zoomIn() {  
    if (this.scaleIndex < this.scales.length - 1) {
      this.scaleIndex++;
      this.zoomClass = this.scales[this.scaleIndex];
      console.log('zoomIn:', this.zoomClass); 
    }
  }

  zoomOut() {
    if (this.scaleIndex > 0) {
      this.scaleIndex--;
      this.zoomClass = this.scales[this.scaleIndex];
      console.log('zoomOut:', this.zoomClass); 
    }
  }

  rotateLeft() {
    console.log('rotateLeft called');
    this.index = (this.index - 1 + this.rotations.length) % this.rotations.length;
    this.rotate -= 90;
    this.rotationClass = this.rotations[this.index];
    console.log('rotateLeft:', this.rotationClass);
  }
 
  rotateRight() {
    console.log('rotateRight called');
    this.index = (this.index + 1) % this.rotations.length;
    this.rotate += 90;
    this.rotationClass = this.rotations[this.index];
    console.log('rotateRight:', this.rotationClass);
  }

  print() {
    // Implement print functionality if needed
  }
}