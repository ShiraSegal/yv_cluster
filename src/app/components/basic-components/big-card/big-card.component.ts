import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BigCardIcons } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-big-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent {
  BigCardIcons=BigCardIcons;
   @Input() text!:string;
   @Input() number!:number;
      @Input() iconName!: string;
      
}
