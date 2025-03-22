// import { Component, Input } from '@angular/core';
// import { ViewerIconType } from 'src/app/enums/icon-enum';
// import { CommonModule } from '@angular/common';
// import { IconButtonLargeType } from 'src/app/enums/basic-enum';
// import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';

// @Component({
//   selector: 'yv-cluster-viewer',
//   standalone: true,
//   imports: [IconButtonLargeComponent,CommonModule],
//   templateUrl: './viewer.component.html',
//   styleUrl: './viewer.component.scss'
// })
// export class ViewerComponent {
// @Input() pictureName: string = '';
// viewerIconType = ViewerIconType;
// iconButtonLargeType = IconButtonLargeType;
// rotateLeft(){

// }
// rotateRight(){

// }
// print(){
// }
// zoomOut(){

// }
// zoomIn(){

// }
// }
import { Component, Input, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { ViewerIconType } from 'src/app/enums/icon-enum';
import { CommonModule } from '@angular/common';
import { IconButtonLargeType } from 'src/app/enums/basic-enum';
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';

@Component({
  selector: 'yv-cluster-viewer',
  standalone: true,
  imports: [IconButtonLargeComponent, CommonModule],
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent {
  @Input() pictureName: string = '';
  viewerIconType = ViewerIconType;
  iconButtonLargeType = IconButtonLargeType;
  isZoomedIn: boolean = false;
  rotation: number = 0; // initial rotation in degrees

  @ViewChild('imageElement', { static: true }) imageElement!: ElementRef;

  constructor(private renderer: Renderer2) {}

  zoomIn() {
    this.isZoomedIn = true;
  }

  zoomOut() {
    this.isZoomedIn = false;
  }

  rotateLeft() {
    this.rotation -= 90;
    this.updateTransform();
  }

  rotateRight() {
    this.rotation += 90;
    this.updateTransform();
  }

  print() {
    // Implement print logic here
  }

  updateTransform() {
    this.renderer.setStyle(this.imageElement.nativeElement, 'transform', `rotate(${this.rotation}deg)`);
  }
}