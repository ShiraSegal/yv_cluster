import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
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
   @Input() percentage1: number = 10;
   @Input() percentage2: number = 10;
   @Input() percentage3: number = 10;
   @Input() percentage4: number = 100-this.percentage1-this.percentage2-this.percentage3;
arr:string[] = ['Last Name','Count','percent','Total name count'];
  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['percentage1'] ) {
  //     console.log('percentage1:', this.percentage1);
  //     console.log('percentage2:', this.percentage2);
  //     console.log('percentage3:', this.percentage3);
  //     console.log('percentage4:', this.percentage4);
  //   }
  // }
  getPieSlice(startPercentage: number, endPercentage: number, color: string): string {
    const radius = 100;
    const startAngle = (startPercentage / 100) * 360;
    const endAngle = (endPercentage / 100) * 360;
  
    const largeArc = (endAngle - startAngle) > 180 ? 1 : 0;
    const x1 = radius + radius * Math.cos(startAngle * (Math.PI / 180));
    const y1 = radius + radius * Math.sin(startAngle * (Math.PI / 180));
    const x2 = radius + radius * Math.cos(endAngle * (Math.PI / 180));
    const y2 = radius + radius * Math.sin(endAngle * (Math.PI / 180));

    return `M ${radius},${radius} L ${x1},${y1} A ${radius},${radius} 0 ${largeArc} 1 ${x2},${y2} Z`;
  }
  getTextTransform(): string {
    const radius = 70; // רדיוס העיגול
    const x = 95 + radius; // ממקם את הטקסט תמיד בצד ימין של העיגול
    const y = 90; // ממקם את הטקסט על הרדיוס המאוזן
  
    // מחזירים את ה-transform בתור מיקום x ו-y
    return `translate(${x}, ${y})`;
  }
  
  
}
