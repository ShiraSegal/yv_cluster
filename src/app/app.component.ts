import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { SlidebarNavigationComponent } from './components/basic-components/slidebar-navigation/slidebar-navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet,SlidebarNavigationComponent],
})
export class AppComponent {

}