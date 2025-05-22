import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlidebarNavigationComponent } from './components/basic-components/slidebar-navigation/slidebar-navigation.component';
import { ClusterService } from './services/cluster.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, SlidebarNavigationComponent],
})
export class AppComponent {
  #clusterService = inject(ClusterService);
  currentUser: { id:number,name:string,role:string} = this.#clusterService.currentUser;
  ngOnInit() {
    this.#clusterService.login(1).subscribe({
      next: (user: any) => {
        console.log(' fetching user:', user);
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      },
    });
  }
}