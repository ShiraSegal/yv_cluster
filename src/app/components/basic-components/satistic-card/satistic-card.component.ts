import { Component, Input } from '@angular/core';

@Component({
  selector: 'yv-cluster-satistic-card',
  standalone: true,
  imports: [],
  templateUrl: './satistic-card.component.html',
  styleUrl: './satistic-card.component.scss'
})
export class SatisticCardComponent {
@Input() text!: string;
  @Input() doneNumber!: number;
  @Input() toDoNumber!: number;
  @Input() progress: number = 0;

  dashArray: number = 0; // סכום ההיקף של המעגל

  ngOnInit(): void {
    // חישוב ההיקף של המעגל
    this.dashArray = 2 * Math.PI * 76; // היקף המעגל (r=76)
   // // console.log("this.dashArray", this.dashArray);

    // חישוב אחוזי ההתקדמות
    this.calculateProgress();
  }

  calculateProgress(): void {
    if (this.toDoNumber + this.doneNumber === 0) {
      this.progress = 0;
    } else {
      this.progress = (this.doneNumber / (this.doneNumber + this.toDoNumber)) * 100; // חישוב האחוז
    }
   // // console.log("this.progress", this.progress);
  }

  get dashOffset(): number {
    return this.dashArray - (this.progress * this.dashArray / 100);
  }
}
