import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TextColor, TextSize, TextWeight } from 'src/app/enums/basic-enum';

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
@Input() weight:TextWeight=TextWeight.NORMAL;
@Input() color:TextColor=TextColor.SLATE_BLUE;
}
