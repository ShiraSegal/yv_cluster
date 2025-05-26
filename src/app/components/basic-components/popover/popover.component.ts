import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BadgeType, HeaderCellType, NativeOptionState, NativeOptionType, PopoverHeader, PopoverType, State, TextColor, TextSize, TextWeight } from 'src/app/enums/basic-enum';
import { HeaderCellsComponent } from '../header-cells/header-cells.component';
import { NativeOptionComponent } from '../native-option/native-option.component';
import { BadgeComponent } from '../badge/badge.component';
import { AssigneeComponent } from '../assignee/assignee.component';
import { IconType } from 'src/app/enums/icon-enum';
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
  imports: [CommonModule, NativeOptionComponent, BodyComponent,FieldComponent],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PopoverComponent),
      multi: true,
    },
  ],
})
export class PopoverComponent implements ControlValueAccessor {
  @Input() type: PopoverType;
  @Input() options: NativePopoverOption[]=[];

  @ViewChild('scrollable') scrollableRef: ElementRef;
  @ViewChild('customThumb') thumbRef: ElementRef;
  @ViewChild('nativeOption') nativeOption!: ElementRef;
  
  showScrollbar:boolean = false;



  filterdList: NativePopoverOption[];
  header: string;
  size: TextSize = TextSize.MEDIUM;
  weight: TextWeight = TextWeight.BOLD;
  color: TextColor = TextColor.SLATE_BLUE;

  // headerCellType = HeaderCellType.TEXT;
  optionType = NativeOptionType;
  optionState = NativeOptionState;
  badgeType = BadgeType;
  stateEnum=State;

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  ngAfterViewInit() {
    // console.log("this.wrapperRef.nativeElement",this.wrapperRef.nativeElement);
    
    const height = this.nativeOption.nativeElement.offsetHeight * this.options.length;
    console.log("Height of the wrapper:", height);
    console.log("showScrollbar:", this.showScrollbar);
    
    this.showScrollbar = height > 200; // 12.5rem = 200px
    console.log("showScrollbar:", this.showScrollbar);
    
    this.updateThumbHeight();
  }

  
  ngOnInit() {
    console.log("ffffffffffff",this.filterdList);
    console.log("ppppppppppppppppp",this.options);
    
     this.filterdList=this.options;
    if (this.type === 'status') {
      this.header = 'Status';
    } else if (this.type === 'assignee') {
      this.header = 'Assign Responsible';
    } else {
      this.header = 'Link To CRM';
    }
  }


  writeValue(value: any): void {
    // Implement logic to update the component's value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Implement logic to handle disabled state
  }

  onSelectedOption(option: NativePopoverOption): void {
    console.log('Selected option:', option.displayText || option.property);
    this.onChange(option.displayText || option.property); // עדכון הערך שנבחר
  }

  filterPopoverList(event: Event): void {
  const inputValue = (event.target as HTMLInputElement).value;  
  console.log(inputValue); // כאן תוכלי להשתמש בערך
  // if(inputValue!=''){
 this.filterdList=this.options.filter((option) => {
    const displayText = option.displayText || '';
    console.log(displayText.toLowerCase().includes(inputValue.toLowerCase()));
    return displayText.toLowerCase().includes(inputValue.toLowerCase());
  })
  console.log("ppppppppppppppppp",this.filterdList);
// }

// else{
//   this.popoverOptions=this.popoverList;
// }
}
onMouseScroll(event: WheelEvent) {
  event.preventDefault();
  const scrollable = this.scrollableRef.nativeElement;
  scrollable.scrollTop += event.deltaY;
  this.updateThumbPosition();
}

updateThumbHeight() {
  if (!this.scrollableRef || !this.thumbRef) return;
  const scrollable = this.scrollableRef.nativeElement;
  const thumb = this.thumbRef.nativeElement;
  const visibleRatio = scrollable.clientHeight / scrollable.scrollHeight;
  thumb.style.height = `${visibleRatio * scrollable.clientHeight}px`;
}

updateThumbPosition() {
  const scrollable = this.scrollableRef.nativeElement;
  const thumb = this.thumbRef.nativeElement;
  const scrollRatio = scrollable.scrollTop / scrollable.scrollHeight;
  const thumbTop = scrollRatio * scrollable.clientHeight;
  thumb.style.top = `${thumbTop}px`;
}

// גם כשמגללים עם פס המובנה (אם לא מבטלים overflow)
@HostListener('window:mouseup')
onMouseUp() {
  this.updateThumbPosition();
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

isDragging = false;
startY = 0;
startScrollTop = 0;

@HostListener('mousedown', ['$event'])
onThumbMouseDown(event: MouseEvent) {
  const thumb = this.thumbRef.nativeElement;
  if (event.target === thumb) {
    this.isDragging = true;
    this.startY = event.clientY;
    this.startScrollTop = this.scrollableRef.nativeElement.scrollTop;
    event.preventDefault();
  }
}
}