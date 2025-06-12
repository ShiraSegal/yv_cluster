import { Component, Input, Output, output } from '@angular/core';
import { ViewerComponent } from '../../basic-components/viewer/viewer.component';
import { CommonModule } from '@angular/common';
import { CompaereDetailsData } from 'src/app/models/compaereDetailsData';
import { BasicSquareIconButtonComponent } from '../../basic-components/basic-square-icon-button/basic-square-icon-button.component';
import { IconType } from 'src/app/enums/icon-enum';
import { BasicSimpleSquareIconButtonComponent } from '../../basic-components/basic-simple-square-icon-button/basic-simple-square-icon-button.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'yv-cluster-record-details',
  standalone: true,
  imports: [CommonModule, ViewerComponent, BasicSquareIconButtonComponent, BasicSimpleSquareIconButtonComponent],
  templateUrl: './record-details.component.html',
  styleUrl: './record-details.component.scss'
})
export class RecordDetailsComponent {
  @Input() recordDetails!: Observable<CompaereDetailsData[]>;

  // @Output() isActive: boolean = true
  isOpen: boolean = true
  image = IconType.IMAGE;
  table = IconType.TABLE;
  layerGroup = IconType.LAYER_GROUP
  eyeIcon: IconType = IconType.EYE
  eyeSlashIcon: IconType = IconType.EYE_SLASH
  // objectEntries(obj: { [key: string]: string }): [string, string][] {
  //   return Object.entries(obj);
  // }
  selectedButton: number = 1;

  changeMode(index: number) {
    this.selectedButton = index;
    // if (index === 1)
    //   this.recordDetails.bothOn = true
    // if (index === 2)
    //   this.recordDetails.imageOn = true
    // else
    //   this.recordDetails.detailsOn = true
  }

  onClick() {
  }
  setState(){
    this.recordDetails.isOpen=!this.recordDetails.isOpen
  }
  // setBothMode() {
  //   this.recordDetails.bothOn = true

  //   this.recordDetails.detailsOn = false
  //   this.recordDetails.imageOn = false
  // }
  // setImageMode() {
  //   this.recordDetails.imageOn = true

  //   this.recordDetails.detailsOn = false
  //   this.recordDetails.bothOn = false
  // }
  // setDetailsMode() {
  //   this.recordDetails.detailsOn = true

  //   this.recordDetails.bothOn = false
  //   this.recordDetails.imageOn = false
  // }
}
