import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonLargeType } from 'src/app/enums/basic-enum';
import { IconButtonLargeComponent } from '../icon-button-large/icon-button-large.component';
import { IconType } from 'src/app/enums/icon-enum';

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
