import { Component } from '@angular/core';
import { TestComponent } from './components/test/test.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet,],
})
export class AppComponent {
 

}
