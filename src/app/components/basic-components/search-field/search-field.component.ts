import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { IconType } from 'src/app/enums/icon-enum';

@Component({
  selector: 'yv-cluster-search-field',
  standalone: true,
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements ControlValueAccessor {
  @Input() placeholder: string = 'Search';
  value: string = '';
  isFilled: boolean = false;
  isHovered: boolean = false;
  isFocused: boolean = false;
  iconType :IconType
  private onChange = (_: any) => { };
  private onTouched = () => { };

  writeValue(value: string): void {
    this.value = value || '';
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
    if(this.value.length> 0)
      this.isFilled = true;
    else
      this.isFilled = false;
    this.onChange(val);
  }

  onBlur(): void {
    this.isFocused = false;
    this.onTouched();
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onMouseOver(): void {
    this.isHovered = true;
  }

  onMouseOut(): void {
    this.isHovered = false;
  }

}
