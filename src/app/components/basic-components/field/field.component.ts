
import { CommonModule } from '@angular/common';
import {
  Component,
  forwardRef,
  Input
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule
} from '@angular/forms';
import { State } from 'src/app/enums/basic-enum';

@Component({
  selector: 'yv-cluster-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldComponent),
      multi: true
    }
  ]
})
export class FieldComponent {
  @Input() property!: State;
  @Input() label!: string ;
  @Input() textControl:FormControl = new FormControl<string>('');
  @Input() placeholder: string = '';
  stateEnum =  State ;

}
