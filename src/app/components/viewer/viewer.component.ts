import { Component, Input } from '@angular/core';
import { ViewerIconType } from 'src/app/enums/icon-enum';
import { IconButtonComponent } from '../basic-components/icon-button/icon-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'yv-cluster-viewer',
  standalone: true,
  imports: [IconButtonComponent,CommonModule],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss'
})
export class ViewerComponent {
@Input() pictureName: string = '';
viewerIconType = ViewerIconType;

rotateLeft(){

}
rotateRight(){

}
print(){
}
zoomOut(){

}
zoomIn(){

}
}
