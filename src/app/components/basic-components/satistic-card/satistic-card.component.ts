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
}
