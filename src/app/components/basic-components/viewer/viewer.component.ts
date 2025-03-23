import { Component, Input } from '@angular/core';
import { ViewerIconType } from 'src/app/enums/icon-enum';

import { CommonModule } from '@angular/common';
import { IconButtonComponent } from '../icon-button/icon-button.component';
 
@Component({
  selector: 'yv-cluster-viewer',
  standalone: true,
  imports: [IconButtonComponent, CommonModule],
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {
  @Input() pictureName: string = '';
  viewerIconType = ViewerIconType;
 

  scale: number = 1;  
  rotate: number = 0;

  zoomIn() {
    this.scale += 0.1;  
  }

  zoomOut() {
    this.scale = Math.max(0.1, this.scale - 0.1);  
  }
 
 
  rotateLeft() {
    this.rotate -= 90;
  }
 
  rotateRight() {
    this.rotate += 90;
  }
 
  print() {
    console.log('הדפסה');
  }
}