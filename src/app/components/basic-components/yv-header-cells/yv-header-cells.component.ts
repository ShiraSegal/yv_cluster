import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { YvCheckComponent } from '../yv-check/yv-check.component';

@Component({
  selector: 'app-yv-header-cells',
  standalone: true,
  imports: [CommonModule,YvCheckComponent],
  templateUrl: './yv-header-cells.component.html',
  styleUrl: './yv-header-cells.component.css'
})
export class YvHeaderCellsComponent {
  @Input() header: string | undefined;
  @Input() type: string | undefined;
  @Output() sortEvent = new EventEmitter<{ column: string, direction: string }>();

  sortBy(column: string) {
    if (this.type === 'order' || this.type === 'order-down') {
      const direction = this.type === 'order' ? 'asc' : 'desc';
      this.sortEvent.emit({ column, direction });

      // Toggle the type between 'order' and 'order-down'
      this.type = this.type === 'order' ? 'order-down' : 'order';
    }
  }
}
