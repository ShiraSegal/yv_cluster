// import { Component, Input, Output, output } from '@angular/core';
// import { ViewerComponent } from '../../basic-components/viewer/viewer.component';
// import { CommonModule } from '@angular/common';
// import { CompaereDetailsData } from 'src/app/models/compaereDetailsData.model';
// import { BasicSquareIconButtonComponent } from '../../basic-components/basic-square-icon-button/basic-square-icon-button.component';
// import { IconType } from 'src/app/enums/icon-enum';
// import { BasicSimpleSquareIconButtonComponent } from '../../basic-components/basic-simple-square-icon-button/basic-simple-square-icon-button.component';
// import { BehaviorSubject, Observable } from 'rxjs';


// @Component({
//   selector: 'yv-cluster-record-details',
//   standalone: true,
//   imports: [CommonModule, ViewerComponent, BasicSquareIconButtonComponent, BasicSimpleSquareIconButtonComponent],
//   templateUrl: './record-details.component.html',
//   styleUrl: './record-details.component.scss'
// })
// export class RecordDetailsComponent {
//   // @Input() recordDetails: BehaviorSubject<CompaereDetailsData>;
//   @Input() recordDetails!: CompaereDetailsData;
//   @Input() highlightedWords: Record<string, string> = {};
//   // @Output() isActive: boolean = true
//   isOpen: boolean = true
//   image = IconType.IMAGE;
//   table = IconType.TABLE;
//   layerGroup = IconType.LAYER_GROUP
//   eyeIcon: IconType = IconType.EYE
//   eyeSlashIcon: IconType = IconType.EYE_SLASH
//   translateIcon:IconType=IconType.TRANSLATE
//   // objectEntries(obj: { [key: string]: string }): [string, string][] {
//   //   return Object.entries(obj);
//   // }
//   selectedButton: number = 3;


//   objectKeys = Object.keys;

// shouldHighlight(key: string, value: string): boolean {
//   const highlightWord = this.highlightedWords?.[key];
//   if (!highlightWord) return false;
//   return value?.toString().split(' ').includes(highlightWord);
// }

//   changeMode(index: number) {

//     this.selectedButton = index;
//   }

//   onClick() {
//   }
//   setState(){
//     this.recordDetails.isOpen=!this.recordDetails.isOpen
//   }
//   // setBothMode() {
//   //   this.recordDetails.bothOn = true

//   //   this.recordDetails.detailsOn = false
//   //   this.recordDetails.imageOn = false
//   // }
//   // setImageMode() {
//   //   this.recordDetails.imageOn = true

//   //   this.recordDetails.detailsOn = false
//   //   this.recordDetails.bothOn = false
//   // }
//   // setDetailsMode() {
//   //   this.recordDetails.detailsOn = true

//   //   this.recordDetails.bothOn = false
//   //   this.recordDetails.imageOn = false
//   // }
// }


import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from '../../basic-components/viewer/viewer.component';
import { CompaereDetailsData } from 'src/app/models/compaereDetailsData.model';
import { BasicSquareIconButtonComponent } from '../../basic-components/basic-square-icon-button/basic-square-icon-button.component';
import { IconType } from 'src/app/enums/icon-enum';
import { BasicSimpleSquareIconButtonComponent } from '../../basic-components/basic-simple-square-icon-button/basic-simple-square-icon-button.component';

@Component({
  selector: 'yv-cluster-record-details',
  standalone: true,
  imports: [
    CommonModule,
    ViewerComponent,
    BasicSquareIconButtonComponent,
    BasicSimpleSquareIconButtonComponent
  ],
  templateUrl: './record-details.component.html',
  styleUrl: './record-details.component.scss'
})
export class RecordDetailsComponent {
  @Input() recordDetails!: CompaereDetailsData;
  @Input() highlightedWords: Record<string, string[]> = {};
  isOpen = true;
  @Input() showHighlights: boolean = false;

  selectedButton: number = 3;
  // Icons
  image = IconType.IMAGE;
  table = IconType.TABLE;
  layerGroup = IconType.LAYER_GROUP;
  eyeIcon = IconType.EYE;
  translateIcon = IconType.TRANSLATE;

  shouldHighlight(key: string, value: string): boolean {
        if (!this.showHighlights) {
      return false;
    }
    return !!this.highlightedWords?.[key]?.includes(value);
  }
  changeMode(index: number) {
    this.selectedButton = index;
  }

  setState() {
    this.recordDetails.isOpen = !this.recordDetails.isOpen;
  }

  isHighlighted(fieldKey: string, fieldValue: string): boolean {
    const highlights = this.highlightedWords[fieldKey];
    if (!Array.isArray(highlights) || !fieldValue) return false;
  
    return highlights.some((h: string) => this.matchMeaningful(h, fieldValue));
  }
  
  private matchMeaningful(base: string, target: string): boolean {
    if (!base || !target) return false;
    const regex = new RegExp(`\\b${base.trim()}\\b`, 'i');
    return regex.test(target);
  }
  
}

