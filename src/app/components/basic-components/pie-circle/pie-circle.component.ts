import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'yv-cluster-pie-circle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pie-circle.component.html',
  styleUrl: './pie-circle.component.scss'
})
export class PieCircleComponent {
  beginPlace: number = 0;
  pieColorsArray: string[] = ['#F6CDCD', '#A5B1C0', '#A1AEE3', '#A5EBDD',];
  @Input() totalValue!: { TotalCount: number; Value: string };
  @Input() data!: { Count: number; Code: string; Value: string }[];
  allDatabaseCount: number = 10000;
  theRestPercents: number = this.allDatabaseCount;

  // פונקציה לחישוב אחוז מתוך סכום כללי
  calculatePercentage(part: number): number {
    return (part / this.totalValue.TotalCount) * 100;
  }

  // פונקציה לעדכון המקום ההתחלתי של החתיכה בעיגול
  // פונקציה לעדכון ה-`beginPlace` לכל חלק
  updateBeginPlace(): void {
    let currentBeginPlace = 0;
    this.data.forEach(item => {
      const percentage = this.calculatePercentage(item.Count);
      currentBeginPlace += percentage;
    });
    this.beginPlace = currentBeginPlace;
  }

  // שינוי בgetPieSlice כדי לקחת את הbeginPlace הנכון לכל חלק
  getUpdatedBeginPlace(): number[] {
    let currentBeginPlace = 0;
    return this.data.map((item, index) => {
      const percentage = this.calculatePercentage(item.Count);
      const endPlace = currentBeginPlace + percentage;
      currentBeginPlace = endPlace;
      if (endPlace < 100) {
        return endPlace;
      }
      else
        return 100
    });
  }

  getPieSlice(startPercentage: number, endPercentage: number): string {
    const radius = 100;
    const startAngle = (360 - (startPercentage / 100) * 360);
    const endAngle = (360 - (endPercentage / 100) * 360);

    const largeArc = (startAngle - endAngle) > 180 ? 1 : 0;
    const x1 = radius + radius * Math.cos(startAngle * (Math.PI / 180));
    const y1 = radius + radius * Math.sin(startAngle * (Math.PI / 180));
    const x2 = radius + radius * Math.cos(endAngle * (Math.PI / 180));
    const y2 = radius + radius * Math.sin(endAngle * (Math.PI / 180));

    return `M ${radius},${radius} L ${x1},${y1} A ${radius},${radius} 0 ${largeArc} 0 ${x2},${y2} Z`;
  }


  getTextPosition(startPercentage: number, endPercentage: number): { x: number, y: number } {
    const radius = 100;

    // נחשב את הזוויות של קודקודי החתיכה
    const startAngle = (360 - (startPercentage / 100) * 360);
    const endAngle = (360 - (endPercentage / 100) * 360);

    // נחשב את המיקום האמצעי בין הזוויות של החתיכה
    const midAngle = (startAngle + endAngle) / 2;

    // המרחק מהמרכז של העיגול (לא קרוב מדי כדי למנוע גלישה החוצה)
    const offsetRadius = radius * 0.7; // ממקם את הטקסט במרכז החתיכה מבלי לגלוש החוצה

    // חישוב המיקום של ה-X וה-Y של הטקסט
    const angleRad = midAngle * (Math.PI / 180);
    const x = radius + offsetRadius * Math.cos(angleRad);
    const y = radius + offsetRadius * Math.sin(angleRad);

    // החזרת המיקום החדש של הטקסט ללא סיבוב
    return { x, y };
  }
}
