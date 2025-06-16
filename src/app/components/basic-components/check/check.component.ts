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

  onChange: (value: boolean) => void = () => {};
  onTouched: () => void = () => {};
  cdr = inject(ChangeDetectorRef);

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  toggleCheckbox() {
    this.value = !this.value;
    this.cdr.detectChanges();
    this.onChange(this.value);
    this.onTouched();
  }
}
