import {
  Component, Input, ViewChild, ElementRef, forwardRef,
  HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  BadgeType, NativeOptionType, NativeOptionState,
  PopoverType, State, TextColor, TextSize, TextWeight
} from 'src/app/enums/basic-enum';
import { NativeOptionComponent } from '../native-option/native-option.component';
import { BodyComponent } from '../body/body.component';
import { FieldComponent } from '../field/field.component';

type NativePopoverOption = {
  optionType: NativeOptionType;
  optionState: NativeOptionState;
  displayText?: string;
  property?: BadgeType;
};

@Component({
  selector: 'yv-cluster-popover',
  standalone: true,
  imports: [CommonModule, NativeOptionComponent, BodyComponent, FieldComponent],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PopoverComponent),
      multi: true
    }
  ]
})
export class PopoverComponent implements ControlValueAccessor {
  @Input() type: PopoverType;
  @Input() options: NativePopoverOption[] = [];

  @ViewChild('scrollable') scrollableRef: ElementRef;
  @ViewChild('customThumb') thumbRef: ElementRef;
  @ViewChild('nativeOption') nativeOption!: ElementRef;

  showScrollbar = false;
  isDragging = false;
  startY = 0;
  startScrollTop = 0;

  filterdList: NativePopoverOption[] = [];
  header = '';
  size = TextSize.MEDIUM;
  weight = TextWeight.BOLD;
  color = TextColor.SLATE_BLUE;

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit() {
    this.filterdList = this.options;
    this.header = this.type === 'status' ? 'Status' :
                  this.type === 'assignee' ? 'Assign Responsible' :
                  'Link To CRM';
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateThumbHeight();
      this.updateThumbPosition();
    });
    const height = this.nativeOption.nativeElement.offsetHeight * this.options.length;
    this.showScrollbar = height > 200;
    this.updateThumbHeight();
  }

  writeValue(value: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState?(isDisabled: boolean): void {}

  onSelectedOption(option: NativePopoverOption): void {
    this.onChange(option.displayText || option.property);
  }

  filterPopoverList(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.filterdList = this.options.filter(option =>
      (option.displayText || '').toLowerCase().includes(inputValue.toLowerCase())
    );

    setTimeout(() => {
      this.updateThumbHeight();
      this.updateThumbPosition();
    });
  }

  onMouseScroll(event: WheelEvent) {
    event.preventDefault();
    this.scrollableRef.nativeElement.scrollTop += event.deltaY;
    this.updateThumbPosition();
  }

  updateThumbHeight() {
    const scrollable = this.scrollableRef.nativeElement;
    const thumb = this.thumbRef.nativeElement;
  
    const visibleRatio = scrollable.clientHeight / scrollable.scrollHeight;
    const thumbHeight = Math.max(visibleRatio * scrollable.clientHeight, 20); // מינימום גובה
  
    thumb.style.height = `${thumbHeight}px`;
  }
  

  updateThumbPosition() {
    const scrollable = this.scrollableRef.nativeElement;
    const thumb = this.thumbRef.nativeElement;
  
    const scrollableHeight = scrollable.scrollHeight - scrollable.clientHeight;
    const thumbHeight = thumb.offsetHeight;
    const maxThumbTop = scrollable.clientHeight - thumbHeight;
  
    const scrollRatio = scrollable.scrollTop / scrollableHeight;
    const thumbTop = scrollRatio * maxThumbTop;
  
    thumb.style.top = `${thumbTop}px`;
  }
  

  @HostListener('window:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const scrollbar = this.scrollableRef.nativeElement;
      const thumb = this.thumbRef.nativeElement;
      const scrollHeight = scrollbar.scrollHeight - scrollbar.clientHeight;
      const delta = event.clientY - this.startY;
      const scrollRatio = scrollHeight / (scrollbar.clientHeight - thumb.offsetHeight);
      scrollbar.scrollTop = this.startScrollTop + delta * scrollRatio;
      this.updateThumbPosition();
    }
  }

  @HostListener('mousedown', ['$event'])
  onThumbMouseDown(event: MouseEvent) {
    if (event.target === this.thumbRef.nativeElement) {
      this.isDragging = true;
      this.startY = event.clientY;
      this.startScrollTop = this.scrollableRef.nativeElement.scrollTop;
      event.preventDefault();
    }
  }
}
