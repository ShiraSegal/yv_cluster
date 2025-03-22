import { Component, Input } from '@angular/core';
import { ViewerIconType } from 'src/app/enums/icon-enum';
import { IconButtonComponent } from '../basic-components/icon-button/icon-button.component';
import { CommonModule } from '@angular/common';

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

  // משתנה לשמירת ערך ה-zoom
  scale: number = 1;  // ערך ברירת המחדל (100% זום)
  rotate: number = 0;
  // פונקציה להגדלת התמונה
  zoomIn() {
    this.scale += 0.1;  // הגדל את הערך ב-10% בכל לחיצה
  }

  // פונקציה להקטנת התמונה
  zoomOut() {
    this.scale = Math.max(0.1, this.scale - 0.1);  // הקטנה ב-10%, לא פחות מ-10% זום
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
