import { Component, inject } from '@angular/core';
import { ClusterService } from './services/cluster.service';
import { ToastMessageComponent } from './components/basic-components/toast-message/toast-message.component';
import { MessageService } from './services/message.service';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { IconType } from './enums/icon-enum';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SlidebarNavigationComponent } from './components/basic-components/slidebar-navigation/slidebar-navigation.component';
import { RouterOutlet } from '@angular/router';
// import {Component, inject} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MatSnackBarModule,SlidebarNavigationComponent,RouterOutlet],
})
export class AppComponent {
  #clusterService = inject(ClusterService);
  messageService = inject(MessageService);


  type=IconType;
  currentUser: { id:number,name:string,role:string} = this.#clusterService.currentUser;

  ngOnInit() {
    this.messageService.message$.subscribe(message => {
      console.log('📩 message from service:', message);
    });
  }

  // openSnackBar(message: string, action: string) {
  //   this.#snackBar.open(message, action);
  
  // ngOnInit() {
  //   this.#clusterService.login(1).subscribe({
  //     next: (user: any) => {
  //      // // console.log(' fetching user:', user);
  //     },
  //     error: (err) => {
  //       console.error('Error fetching user:', err);
  //     },
  //   });
  // }
}

