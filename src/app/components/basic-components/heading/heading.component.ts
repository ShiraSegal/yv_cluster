import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TextColor, TextSize, TextWeight } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss'
})
export class HeadingComponent {
  @Input() title: string = '';
  @Input() weight: TextWeight = TextWeight.NORMAL;
  @Input() size:TextSize = TextSize.LARGE;
  @Input() color:TextColor = TextColor.SLATE_BLUE;
}
