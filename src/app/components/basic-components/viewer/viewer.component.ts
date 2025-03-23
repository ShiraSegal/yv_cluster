import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonLargeType } from 'src/app/enums/basic-enum';
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';
import { IconType } from 'src/app/enums/icon-enum';
import { IconButtonComponent } from '../icon-button/icon-button.component';

@Component({
  selector: 'yv-cluster-viewer',
  standalone: true,
  imports: [IconButtonLargeComponent,CommonModule],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss'
})
export class ViewerComponent {
@Input() pictureName: string = '';
iconType = IconType;
iconButtonLargeType = IconButtonLargeType;
rotations = [
  'rot-0', 'rot-90', 'rot-180', 'rot-270', 
  'rot-360', 'rot-minus-90', 'rot-minus-180', 'rot-minus-270'
];
scale: number = 1;  // ערך ברירת המחדל (100% זום)
  rotate: number = 0;
  index:number = 0;
  rotationClass = 'rot-0';
  // פונקציה להגדלת התמונה
  zoomIn() {
    this.scale += 0.1;  // הגדל את הערך ב-10% בכל לחיצה
  }
 
  // פונקציה להקטנת התמונה
  zoomOut() {
    this.scale = Math.max(0.1, this.scale - 0.1);  // הקטנה ב-10%, לא פחות מ-10% זום
  }
 //  let newRotation = (this.rotationIndex + direction / 90) % this.rotations.length;
 
  rotateLeft() {
    this.index = (this.index - 1 + this.rotations.length) % this.rotations.length;
    this.rotate -= 90;
    this.rotationClass = this.rotations[this.index];
  }
 
  rotateRight() {
    this.index = (this.index + 1 + this.rotations.length) % this.rotations.length;
    this.rotate += 90;
    this.rotationClass = this.rotations[this.index];
  }
 
  print() {
   
  }

  // get rotationClass() {
  //   return 'rot-90';
  // }
}
