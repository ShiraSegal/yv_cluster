import { Component, Input } from '@angular/core';

@Component({
  selector: 'yv-cluster-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent {
   @Input() cardText!:string;
      @Input() iconName!: string;
}
