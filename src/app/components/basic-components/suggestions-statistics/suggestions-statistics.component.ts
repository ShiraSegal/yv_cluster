import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'yv-cluster-suggestions-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suggestions-statistics.component.html',
  styleUrls: ['./suggestions-statistics.component.scss']
})
export class SuggestionsStatisticsComponent implements OnChanges {
  @Input() data: { color: string, value: number }[] = [];
  @Input() radius: number = 100;
  @Input() innerRadius: number = 50;

  segments: { color: string, startAngle: number, endAngle: number, className: string }[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.calculateSegments();
    }
  }

  calculateSegments(): void {
    const total = this.data.reduce((sum, item) => sum + item.value, 0);
    let startAngle = 0;

    this.segments = this.data.map((item, index) => {
      const endAngle = startAngle + (item.value / total) * 360;
      const segment = { color: item.color, startAngle, endAngle, className: `segment-${index}` };
      startAngle = endAngle;
      return segment;
    });
  }

  describeArc(x: number, y: number, radius: number, innerRadius: number, startAngle: number, endAngle: number): string {
    const startOuter = this.polarToCartesian(x, y, radius, endAngle);
    const endOuter = this.polarToCartesian(x, y, radius, startAngle);
    const startInner = this.polarToCartesian(x, y, innerRadius, endAngle);
    const endInner = this.polarToCartesian(x, y, innerRadius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M", startOuter.x, startOuter.y,
      "A", radius, radius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
      "L", endInner.x, endInner.y,
      "A", innerRadius, innerRadius, 0, largeArcFlag, 1, startInner.x, startInner.y,
      "Z"
    ].join(" ");
  }

  polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number): { x: number, y: number } {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }
}