import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SquareIconButtonIcon, SmallIconButtonIcon } from 'src/app/enums/basic-enum';
import { BasicSquareIconButtonComponent } from '../basic-square-icon-button/basic-square-icon-button.component';
import { BasicSmallIconButtonComponent } from '../basic-small-icon-button/basic-small-icon-button.component';

@Component({
  selector: 'yv-cluster-compare-modal-button',
  standalone: true,
  imports: [CommonModule, BasicSquareIconButtonComponent, BasicSmallIconButtonComponent],
  templateUrl: './compare-modal-button.component.html',
  styleUrls: ['./compare-modal-button.component.scss']
})
export class CompareModalButtonComponent {
  @Input() recordName!: string;
  @Input() index!: number; // Input for record index
  @Output() viewModeChange = new EventEmitter<{ index: number, mode: 'image' | 'details' }>(); // Output event emitter with index
  list = SquareIconButtonIcon.LIST;
  image = SquareIconButtonIcon.IMAGE;
  trash = SmallIconButtonIcon.TRASH;
  clipBoard = SmallIconButtonIcon.LIST;

  activeButton: 'image' | 'details' = 'details';

  setActive(button: 'image' | 'details') {
    this.activeButton = button;
    this.viewModeChange.emit({ index: this.index, mode: button }); // Emit change event with index
  }
}