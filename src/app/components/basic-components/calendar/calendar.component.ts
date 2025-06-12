import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'calendar',
  standalone: true,
  templateUrl: './calendar.component.html',
  imports: [CommonModule],
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnChanges {
  @Input() selectedDate: Date = new Date();
  @Output() selectedDateChange = new EventEmitter<Date>();

  daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  currentMonth: Date = new Date();
  nextMonthDate: Date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1);

  currentCalendarDays: (Date | null)[] = [];
  nextCalendarDays: (Date | null)[] = [];

  ngOnInit() {
    this.setMonthByDate(this.selectedDate);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedDate'] && !changes['selectedDate'].firstChange) {
      this.setMonthByDate(this.selectedDate);
    }
  }

  setMonthByDate(date: Date) {
    this.currentMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    this.nextMonthDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    this.generateCalendar();
  }

  generateCalendar() {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const nextYear = this.nextMonthDate.getFullYear();
    const nextMonth = this.nextMonthDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const nextFirstDay = new Date(nextYear, nextMonth, 1).getDay();

    const daysInMonthCount = new Date(year, month + 1, 0).getDate();
    const nextDaysInMonthCount = new Date(nextYear, nextMonth + 1, 0).getDate();

    const currentDays: (Date | null)[] = [];
    const nextDays: (Date | null)[] = [];

    for (let i = 0; i < firstDay; i++) currentDays.push(null);
    for (let i = 1; i <= daysInMonthCount; i++) currentDays.push(new Date(year, month, i));
    while (currentDays.length < 42) currentDays.push(null);

    for (let i = 0; i < nextFirstDay; i++) nextDays.push(null);
    for (let i = 1; i <= nextDaysInMonthCount; i++) nextDays.push(new Date(nextYear, nextMonth, i));
    while (nextDays.length < 42) nextDays.push(null);

    this.currentCalendarDays = currentDays;
    this.nextCalendarDays = nextDays;
  }

  prevMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
    this.nextMonthDate = new Date(this.nextMonthDate.getFullYear(), this.nextMonthDate.getMonth() - 1, 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
    this.nextMonthDate = new Date(this.nextMonthDate.getFullYear(), this.nextMonthDate.getMonth() + 1, 1);
    this.generateCalendar();
  }

  selectDate(day: Date) {
    this.selectedDate = day;
    this.selectedDateChange.emit(day);
  }

  isSelected(date: Date | null): boolean {
    return date ? this.selectedDate.toDateString() === date.toDateString() : false;
  }
}
