import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'yv-cluster-check',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckComponent),
    multi: true
  }]
})
export class CheckComponent implements ControlValueAccessor {
  value: boolean = false;

  onChange: (value: boolean) => void = () => {
  };
  onTouched: () => void = () => {};
  cdr = inject(ChangeDetectorRef);

  writeValue(value: boolean): void {
    this.value = value;
    this.onChange(this.value);
    this.cdr.detectChanges(); // Ensure UI updates
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  toggleCheckbox() {
    this.value = !this.value;
    this.onChange(this.value); // Notify the FormControl of the change
    this.onTouched(); // Mark the control as touched
    this.cdr.detectChanges(); // Ensure UI updates
  } 
}

