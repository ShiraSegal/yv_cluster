import { Component, Input } from '@angular/core';
import { ViewerComponent } from '../../basic-components/viewer/viewer.component';
import { BasicToggleComponent } from '../../basic-components/basic-toggle/basic-toggle.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'yv-cluster-record-details',
  standalone: true,
  imports: [CommonModule,ViewerComponent,BasicToggleComponent],
  templateUrl: './record-details.component.html',
  styleUrl: './record-details.component.scss'
})
export class RecordDetailsComponent {
  @Input() details!:any;
  toggleState!: string;

  handleToggleChange(state: string) {
    this.toggleState = state;
  }
}
