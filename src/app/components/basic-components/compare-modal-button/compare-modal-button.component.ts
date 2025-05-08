import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BasicSquareIconButtonComponent } from '../basic-square-icon-button/basic-square-icon-button.component';
import { BasicSmallIconButtonComponent } from '../basic-small-icon-button/basic-small-icon-button.component';
import {IconType } from 'src/app/enums/icon-enum';


@Component({
  selector: 'yv-cluster-compare-modal-button',
  standalone: true,
  imports: [CommonModule, BasicSquareIconButtonComponent, BasicSmallIconButtonComponent],
  templateUrl: './compare-modal-button.component.html',
  styleUrls: ['./compare-modal-button.component.scss']
})
export class CompareModalButtonComponent {
  @Input() recordName!: string;
  @Input() index!: number;
  
  list = IconType.LIST;
  image = IconType.IMAGE;
  trash = IconType.TRASH;
  clipBoard = IconType.LIST;
@Output() detailsMode = new EventEmitter<boolean>();
@Output() imageMode = new EventEmitter<boolean>();
  
 isDetailsModeOn = true;
 isImageModeOn = false;
  ImageModeReplaceStatus() {
    this.isImageModeOn = !this.isImageModeOn;
    this.imageMode.emit(this.isImageModeOn); // שולח את המצב הנוכחי  
}
  DetailsModeReplaceStatus() {
  this.isDetailsModeOn = !this.isDetailsModeOn;
  this.detailsMode.emit(this.isDetailsModeOn); // שולח את המצב הנוכחי  
}
}