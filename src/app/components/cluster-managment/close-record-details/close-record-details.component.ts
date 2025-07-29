import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconType } from 'src/app/enums/icon-enum';
import { CompaereDetailsData } from 'src/app/models/compaereDetailsData.model';
import { BasicSimpleSquareIconButtonComponent } from '../../basic-components/basic-simple-square-icon-button/basic-simple-square-icon-button.component';

@Component({
  selector: 'yv-cluster-close-record-details',
  standalone: true,
  imports: [CommonModule,BasicSimpleSquareIconButtonComponent],
  templateUrl: './close-record-details.component.html',
  styleUrl: './close-record-details.component.scss'
})
export class CloseRecordDetailsComponent {
  @Input() highlightedWords: Record<string, string> = {};
  @Input() recordDetails!: CompaereDetailsData;
  eyeSlashIcon: IconType = IconType.EYE_SLASH
  setState(){
    this.recordDetails.isOpen=!this.recordDetails.isOpen
  }
}
