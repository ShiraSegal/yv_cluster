import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'yv-cluster-pie-component-distribution-modal',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './pie-component-distribution-modal.component.html',
  styleUrl: './pie-component-distribution-modal.component.scss'
})
export class PieComponentDistributionModalComponent {
   @Input() text!: string;
  percentage: number = 10; // ברירת מחדל


  getPieSlice(): string {
    const radius = 100;
    const angle = 360 - (this.percentage / 100) * 360;
  
    if (this.percentage === 100) {
      return `M 0,0 H 0 Z`;
    }
  
    const largeArc = (360 - angle) > 180 ? 1 : 0;
    const x1 = radius + radius * Math.cos(0);
    const y1 = radius + radius * Math.sin(0);
    const x2 = radius + radius * Math.cos(angle * (Math.PI / 180));
    const y2 = radius + radius * Math.sin(angle * (Math.PI / 180));
  
    return `M ${radius},${radius} L ${x1},${y1} A ${radius},${radius} 0 ${largeArc} 0 ${x2},${y2} Z`;
  }
  getTextTransform(): string {
    const radius = 70; // רדיוס העיגול
    const x = 95 + radius; // ממקם את הטקסט תמיד בצד ימין של העיגול
    const y = 90; // ממקם את הטקסט על הרדיוס המאוזן
  
    // מחזירים את ה-transform בתור מיקום x ו-y
    return `translate(${x}, ${y})`;
  }
  
  
}
