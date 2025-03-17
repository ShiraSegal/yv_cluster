import { Component, Input } from '@angular/core';
import { ViewerIconType } from 'src/app/enums/icon-enum';
import { CommonModule } from '@angular/common';
import { IconButtonLargeType } from 'src/app/enums/basic-enum';
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';

@Component({
  selector: 'yv-cluster-viewer',
  standalone: true,
  imports: [IconButtonLargeComponent,CommonModule],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss'
})
export class ViewerComponent {
@Input() pictureName: string = '';
viewerIconType = ViewerIconType;
iconButtonLargeType = IconButtonLargeType;
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
