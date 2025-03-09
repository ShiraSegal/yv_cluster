import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TextSize } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss'
})
export class HeadingComponent {
  @Input() title: string = '';
  @Input() isBold: boolean = true;
  @Input() size:TextSize = TextSize.LARGE;
}
