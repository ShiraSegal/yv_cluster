import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BigCardSize } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';
@Component({
  selector: 'yv-cluster-big-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent {
  @Input() text!: string;
  @Input() number!: number;
  @Input() iconName!: IconType;
  @Input() size!: BigCardSize;
  @Input() circleColor!: string; 
  @Input() iconColor!: string;
  
  iconType = IconType;
  bigCardSize=BigCardSize;

  constructor(private el: ElementRef) {}
  ngOnInit() {
    const element = this.el.nativeElement;
    element.style.setProperty('--circle-color', this.circleColor);
    element.style.setProperty('--icon-color', this.iconColor);
  }
  formatNumber(num: number): string {
    if (num % 1 === 0) {
      // מספר שלם
      return num.toString();
    } else {
      // עשרוני - שלוש ספרות אחרי הנקודה
      return num.toFixed(3);
    }
  }
}
