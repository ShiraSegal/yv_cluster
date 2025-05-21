
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeType } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  @Input() property: BadgeType = BadgeType.TODO;

  get label(): string {
    // החזרה של תצוגה בהתאם לסוג
    switch (this.property) {
      case BadgeType.TODO:
        return 'To do';
      case BadgeType.DONE:
        return 'Done';
      default:
        return this.property;
    }
  }

  switchState() {
    this.property = this.property === BadgeType.TODO ? BadgeType.DONE : BadgeType.TODO;
  }
}
