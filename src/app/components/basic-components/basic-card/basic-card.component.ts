import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardIcons } from 'src/app/enums/basic-enum';



@Component({
  selector: 'yv-cluster-basic-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-card.component.html',
  styleUrl: './basic-card.component.scss'
})
export class BasicCardComponent {
  CardIcons = CardIcons;
  @Input() text!: string;
   @Input() iconName!: CardIcons;
   ngOnInit(): void{
   }
}
