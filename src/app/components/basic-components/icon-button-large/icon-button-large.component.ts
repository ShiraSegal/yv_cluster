
// import { CommonModule } from '@angular/common';
// import {
//   Component,
//   EventEmitter,
//   forwardRef,
//   Input,
//   Output
// } from '@angular/core';
// import {
//   ControlValueAccessor,
//   NG_VALUE_ACCESSOR,
//   ReactiveFormsModule
// } from '@angular/forms';
// import { IconButtonLargeType } from 'src/app/enums/basic-enum';
// import { IconType } from 'src/app/enums/icon-enum';

// @Component({
//   selector: 'yv-cluster-icon-button-large',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './icon-button-large.component.html',
//   styleUrls: ['./icon-button-large.component.scss'],
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: forwardRef(() => IconButtonLargeComponent),
//       multi: true
//     }
//   ]
// })
// export class IconButtonLargeComponent{
//   @Input() icon!: IconType;
//   @Input() property!: IconButtonLargeType;

//   @Output() onClick = new EventEmitter<void>();


// }
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconType } from 'src/app/enums/icon-enum';
import { IconButtonLargeType } from 'src/app/enums/basic-enum';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'yv-cluster-icon-button-large',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './icon-button-large.component.html',
  styleUrls: ['./icon-button-large.component.scss']
})
export class IconButtonLargeComponent {
  @Input() icon!: IconType;
  @Input() property!: IconButtonLargeType;
  @Input() isSelected: boolean = false;

  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}