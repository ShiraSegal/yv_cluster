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
  @Input() progress: number = 75; 
dashArray: number = 100; // מתוך מה לחשב את progress

get dashOffset(): number {
  return this.dashArray * (1 - this.progress / 100);
}
  // get dashOffset(): number {
  //   const clamped = Math.min(Math.max(this.progress, 0), 100); // הגבלה בין 0 ל-100
  //   return this.circumference - (clamped / 100) * this.circumference;
  // }
}
