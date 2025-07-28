import {
  Component, Input, ViewChild, ElementRef, forwardRef,
  HostListener, inject, AfterViewInit, NgZone
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule
} from '@angular/forms';
import {
  BadgeType, NativeOptionType, NativeOptionState,
  PopoverType, TextColor, TextSize, TextWeight
} from 'src/app/enums/basic-enum';
import { NativeOptionComponent } from '../native-option/native-option.component';
import { BodyComponent } from '../body/body.component';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { debounceTime, distinctUntilChanged, take } from 'rxjs/operators';


type NativePopoverOption = {
  optionType: NativeOptionType;
  optionState: NativeOptionState;
  displayText?: string;
  property?: BadgeType;
};

@Component({
  selector: 'yv-cluster-popover',
  standalone: true,
  imports: [CommonModule, NativeOptionComponent, BodyComponent, SearchFieldComponent, ReactiveFormsModule],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PopoverComponent),
    multi: true
  }]
})
export class PopoverComponent implements ControlValueAccessor, AfterViewInit {
  @Input() type: PopoverType;
  @Input() options: NativePopoverOption[] = [];

  @ViewChild('scrollable') scrollableRef: ElementRef;
  @ViewChild('customThumb') thumbRef: ElementRef;
  @ViewChild('nativeOption') nativeOption!: ElementRef;

  fb = inject(FormBuilder);
  zone = inject(NgZone);

  searchFieldForm: FormGroup = this.fb.group({
    searchField: new FormControl('')
  });

  showScrollbar = false;
  isDragging = false;
  startY = 0;
  startScrollTop = 0;

  filterdList: NativePopoverOption[] = [];
  header = '';
  size = TextSize.MEDIUM;
  weight = TextWeight.BOLD;
  color = TextColor.SLATE_BLUE;

  onChange = (value: any) => {};
  onTouched = () => {};

  ngOnInit() {
    this.filterdList = this.options;
    this.setHeaderByType();

this.searchFieldForm.get('searchField')?.valueChanges.pipe(
  debounceTime(200),
  distinctUntilChanged()
).subscribe(searchTerm => {
  this.filterdList = this.filterOptions(searchTerm);

  this.setScrollbarVisibility(); // ← עדכן נראות של scrollbar

  this.zone.onStable.pipe(take(1)).subscribe(() => {
    if (this.showScrollbar) {
      this.updateScrollbarUI();
    } else {
      // מנקה גובה ותזוזה של scrollbar כשלא צריך
      const thumb = this.thumbRef?.nativeElement;
      if (thumb) {
        thumb.style.height = '0px';
        thumb.style.top = '0px';
      }
    }
  });
});


  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setScrollbarVisibility();
      this.updateScrollbarUI();
    });
  }

  setHeaderByType() {
    switch (this.type) {
      case 'status':
        this.header = 'Status';
        break;
      case 'assignee':
        this.header = 'Assign Responsible';
        break;
      default:
        this.header = 'Link To CRM';
    }
  }

  filterOptions(searchTerm: string): NativePopoverOption[] {
    const term = (searchTerm || '').toLowerCase();
    return this.options.filter(opt =>
      (opt.displayText || '').toLowerCase().includes(term)
    );
  }

  writeValue(value: any): void {}
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState?(isDisabled: boolean): void {}

  onSelectedOption(option: NativePopoverOption): void {
    this.onChange(option.displayText || option.property);
  }

onMouseScroll(event: WheelEvent) {
  const scrollable = this.scrollableRef.nativeElement;
  const prevScrollTop = scrollable.scrollTop;
  scrollable.scrollTop += event.deltaY;

  // רק אם באמת יש גלילה, תמנע ברירת מחדל
  if (scrollable.scrollHeight > scrollable.clientHeight && scrollable.scrollTop !== prevScrollTop) {
    event.preventDefault();
    this.updateThumbPosition();
  }}

  updateScrollbarUI() {
    setTimeout(() => {
      this.updateThumbHeight();
      this.updateThumbPosition();
    });
  }

  setScrollbarVisibility() {
    const height = this.nativeOption?.nativeElement?.offsetHeight * this.filterdList.length;
    this.showScrollbar = height > 200;
  }

  updateThumbHeight() {
    const scrollable = this.scrollableRef.nativeElement;
    const thumb = this.thumbRef.nativeElement;

    const visibleRatio = scrollable.clientHeight / scrollable.scrollHeight;
    const thumbHeight = Math.max(visibleRatio * scrollable.clientHeight, 20);
    thumb.style.height = `${thumbHeight}px`;
  }

  updateThumbPosition() {
    const scrollable = this.scrollableRef.nativeElement;
    const thumb = this.thumbRef.nativeElement;

    const scrollableHeight = scrollable.scrollHeight - scrollable.clientHeight;
    const maxThumbTop = scrollable.clientHeight - thumb.offsetHeight;
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
    if (!this.isDragging) return;

    const scrollable = this.scrollableRef.nativeElement;
    const thumb = this.thumbRef.nativeElement;
    const scrollHeight = scrollable.scrollHeight - scrollable.clientHeight;
    const delta = event.clientY - this.startY;
    const scrollRatio = scrollHeight / (scrollable.clientHeight - thumb.offsetHeight);

    scrollable.scrollTop = this.startScrollTop + delta * scrollRatio;
    this.updateThumbPosition();
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
