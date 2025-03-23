import { Component, Input } from '@angular/core';
import { ButtonIcon, ButtonSize, ButtonType } from 'src/app/enums/basic-enum';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'yv-cluster-filter-section',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.scss'
})
export class FilterSectionComponent {

  @Input() buttonText: string = 'test';
  @Input() icon:ButtonIcon = ButtonIcon.PLUS;

  ButtonSize = ButtonSize;
  primary = ButtonType.PRIMARY


  onClick() {
    alert('test on click');
    console.log('test on click');
  }
}
