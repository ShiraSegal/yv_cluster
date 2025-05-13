import { Component, Input } from '@angular/core';
import { ViewerComponent } from '../../basic-components/viewer/viewer.component';
import { BasicToggleComponent } from '../../basic-components/basic-toggle/basic-toggle.component';
import { CommonModule } from '@angular/common';
import { CompaereDetailsData } from 'src/app/models/compaereDetailsData';


@Component({
  selector: 'yv-cluster-record-details',
  standalone: true,
  imports: [CommonModule,ViewerComponent,BasicToggleComponent],
  templateUrl: './record-details.component.html',
  styleUrl: './record-details.component.scss'
})
export class RecordDetailsComponent {
  @Input() recordDetails!:CompaereDetailsData;
  toggleState!: string;
  objectEntries(obj: { [key: string]: string }): [string, string][] {
    return Object.entries(obj);
  }
  handleToggleChange(state: string) {
    this.toggleState = state;
  }
}
