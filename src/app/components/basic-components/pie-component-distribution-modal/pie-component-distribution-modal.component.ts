import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'yv-cluster-pie-component-distribution-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pie-component-distribution-modal.component.html',
  styleUrls: ['./pie-component-distribution-modal.component.scss']
})
export class PieComponentDistributionModalComponent implements OnInit {
  @Input() text!: string;
  beginPlace: number = 0;
  allDatabaseCount: number = 100;

  arrPrecent: number[] = [25, 20, 20, 20]
  arr: string[] = ['Last Name', 'Count', 'percent', 'Total name count'];
  colorsArray: string[] = ['#A1AEE3', '#A5EBDD', '#F6CDCD', '#A5B1C0', '#A5EBDD', '#B8C2EA'];

  date = {
    "LastName": [{
      "Count": 20,
      "Code": "T342541",
      "Value": "Bilstein"
    },{
      "Count": 10,
      "Code": "T342541",
      "Value": "Bilstein"
    },{
      "Count": 10,
      "Code": "T342541",
      "Value": "Bilstein"
    }
  ]
    
    
  }
  ngOnInit(): void {
    this.beginPlace = 0; // ודא שה-`beginPlace` מתאפס עם תחילת החישוב
  }

  // פונקציה לחישוב אחוז מתוך סכום כללי
  calculatePercentage(part: number): number {
    return (part / this.allDatabaseCount) * 100;
  }

  // פונקציה לעדכון המקום ההתחלתי של החתיכה בעיגול
  // פונקציה לעדכון ה-`beginPlace` לכל חלק
  updateBeginPlace(): void {
    let currentBeginPlace = 0;
    this.date.LastName.forEach(item => {
      const percentage = this.calculatePercentage(item.Count);
      currentBeginPlace += percentage;
    });
    this.beginPlace = currentBeginPlace;
  }

  // שינוי בgetPieSlice כדי לקחת את הbeginPlace הנכון לכל חלק
  getUpdatedBeginPlace(): number[] {
    let currentBeginPlace = 0;
    return this.date.LastName.map((item, index) => {
      const percentage = this.calculatePercentage(item.Count);
      const endPlace = currentBeginPlace + percentage;
      currentBeginPlace = endPlace;
      return endPlace;
    });
  }


  // פונקציה לקבלת קו עיגול בין אחוזים (קשת)
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
  // פונקציה להחזרת מיקום טקסט על רדיוס העיגול
  getTextTransform(): string {
    const radius = 70; // רדיוס העיגול
    const x = 95 + radius; // ממקם את הטקסט תמיד בצד ימין של העיגול
    const y = 90; // ממקם את הטקסט על הרדיוס המאוזן
    return `translate(${x}, ${y})`;
  }

}
