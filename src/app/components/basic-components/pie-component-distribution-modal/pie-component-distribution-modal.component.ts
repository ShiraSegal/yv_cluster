import { CommonModule } from '@angular/common';

import { Component, Input, SimpleChanges } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { PieCircleComponent } from '../pie-circle/pie-circle.component';
import { PieTableComponent } from '../pie-table/pie-table.component';

@Component({
  selector: 'yv-cluster-pie-component-distribution-modal',
  standalone: true,
  imports: [CommonModule, FormsModule,PieCircleComponent,PieTableComponent],
  templateUrl: './pie-component-distribution-modal.component.html',
  styleUrls: ['./pie-component-distribution-modal.component.scss']
})
export class PieComponentDistributionModalComponent {
  @Input() text!: string;
  
}
