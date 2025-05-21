import { Component, Input } from '@angular/core';

@Component({
  selector: 'yv-cluster-tooltip',
  standalone: true,
  imports: [],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  @Input() text: string='text';

}
