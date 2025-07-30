import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonEngine } from '@angular/ssr';
import { IconType } from 'src/app/enums/icon-enum';

@Component({
  selector: 'yv-cluster-search-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchFieldComponent),
      multi: true
    }
  ]
})
export class SearchFieldComponent implements ControlValueAccessor {
  value: string = null;
  isFilled: boolean = false;
  isHovered: boolean = false;
  isFocused: boolean = false;
  isPlaceolder: string = 'Search';
  iconType: IconType
  private onChange = (_: any) => { };
  private onTouched = () => { };
  writeValue(value: string): void {
  this.value = value ?? '';
if (this.value.length > 0) { 
      this.isPlaceolder = '';
      this.isFilled = true;
    }
    else {
      this.isPlaceolder = 'Search';
      this.isFilled = false;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.value = val;
  
    if (this.value.length > 0) {
      this.isPlaceolder = '';
      this.isFilled = true;
    } else {
      this.isPlaceolder = 'Search';
      this.isFilled = false;
    }
  
    this.onChange(val); // עדכון ה-value של ControlValueAccessor
  }
  

  onBlur(): void {
    this.isPlaceolder = '';
    this.isFocused = false;
    this.onTouched();
  }
  onFocus(): void {
    this.isPlaceolder = '';
    this.isFocused = true;
  }

  onMouseOver(): void {
    this.isHovered = true;
    this.isPlaceolder = '';
  }

  onMouseOut(): void {
    this.isHovered = false;
    this.isPlaceolder = 'Search';
  }
  cancle() {
    this.value = null;
    this.isPlaceolder = 'Search';
    this.isFilled = false;
    this.onChange(this.value);
  }

}
