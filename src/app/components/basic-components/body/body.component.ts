import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TextSize } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
@Input() bodyText:string = '';
@Input() size:TextSize = TextSize.LARGE;
@Input() isBold:boolean = true;
}
