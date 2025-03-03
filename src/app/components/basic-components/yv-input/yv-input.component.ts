import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-yv-input',
  standalone: true,
  imports: [],
  templateUrl: './yv-input.component.html',
  styleUrls: ['./yv-input.component.css']
})
export class YvInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
}
