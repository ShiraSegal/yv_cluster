import { Component, inject } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { YvSelectComponent } from './components/basic-components/yv-select/yv-select.component';
import { TestComponent } from './components/test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet,TestComponent],
})
export class AppComponent {
  title = 'yv-clusters';
  constructor() {
  }


}
