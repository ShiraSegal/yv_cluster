import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CompareModalTableComponent } from '../compare-modal-table/compare-modal-table.component';
import { CompareModalButtonComponent } from '../../basic-components/compare-modal-button/compare-modal-button.component';

@Component({
  selector: 'yv-cluster-compare-modal-page',
  standalone: true,
  imports: [CommonModule, CompareModalTableComponent, CompareModalButtonComponent],
  templateUrl: './compare-modal-page.component.html',
  styleUrls: ['./compare-modal-page.component.scss']
})
export class CompareModalPageComponent {
  records: Array<{ name: string, status: 'details' | 'image', image: string }> = [
    { name: 'Rec1', status: 'details', image: 'path_to_image.jpg' },
    { name: 'Rec2', status: 'details', image: 'path_to_image.jpg' },
    { name: 'Rec3', status: 'details', image: 'path_to_image.jpg' },
    { name: 'Rec4', status: 'details', image: 'path_to_image.jpg' },
    { name: 'Rec5', status: 'details', image: 'path_to_image.jpg' },
    { name: 'Rec6', status: 'details', image: 'path_to_image.jpg' }
  ];

  handleViewModeChange(event: { index: number, mode: 'details' | 'image' }) {
    this.records[event.index].status = event.mode;
  }
}