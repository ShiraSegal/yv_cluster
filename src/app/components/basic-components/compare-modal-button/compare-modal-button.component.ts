import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SquareIconButtonIcon,SmallIconButtonIcon } from 'src/app/enums/basic-enum';
import { BasicSquareIconButtonComponent } from '../basic-square-icon-button/basic-square-icon-button.component';
import { BasicSmallIconButtonComponent } from '../basic-small-icon-button/basic-small-icon-button.component';

@Component({
  selector: 'yv-cluster-compare-modal-button',
  standalone: true,
  imports: [CommonModule,BasicSquareIconButtonComponent,BasicSmallIconButtonComponent],
  templateUrl: './compare-modal-button.component.html',
  styleUrl: './compare-modal-button.component.scss'
})
export class CompareModalButtonComponent {
@Input() clusterNumber:number=0;
  list=SquareIconButtonIcon.LIST
  image=SquareIconButtonIcon.IMAGE
  trash=SmallIconButtonIcon.TRASH
  clipBoard=SmallIconButtonIcon.LIST

  
}
