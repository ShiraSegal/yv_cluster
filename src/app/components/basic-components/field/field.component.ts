import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms'; // הוספת ייבוא של FormsModule
import { State } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-field',
  standalone: true,
  imports: [CommonModule, FormsModule],  // הוספת FormsModule כאן
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {
  @Input() error: boolean = false;
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Input() focused: boolean = false;
  @Input() populated: boolean = false;
  @Input() default: string = '';
  @Input() options: string[] = [];

  stateEnum: State = State.DEFAULT;
  state: string = 'default';
  selectedOption: string | null = null;
  dropdownOpen = false;
  stateEnumMain = State;

  ngOnChanges(changes: SimpleChanges) {
    if (this.error) {
      this.stateEnum = State.ERROR;
    } else if (this.disabled) {
      this.stateEnum = State.DISABLED;
    } else if (this.focused) {
      this.stateEnum = State.FOCUSED;
    } else if (this.populated) {
      this.stateEnum = State.POPULATED;
    } else if (this.default) {  // אם זה מצב DEFAULT
      this.stateEnum = State.DEFAULT;
    } else {
      this.stateEnum = State.DEFAULT;
    }
  }

  // פונקציות focus ו-blur קיימות כמו בקוד המקורי
}
