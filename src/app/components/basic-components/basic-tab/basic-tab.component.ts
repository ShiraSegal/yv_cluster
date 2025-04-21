// import { CommonModule } from '@angular/common';
// import { Component, Input, Output,EventEmitter } from '@angular/core';
// import { StatusActiveOrNotActive } from 'src/app/enums/basic-enum';


// @Component({
//   selector: 'yv-cluster-basic-tab',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './basic-tab.component.html',
//   styleUrl: './basic-tab.component.scss'
// })
// export class BasicTabComponent {
//   @Input() status:StatusActiveOrNotActive=StatusActiveOrNotActive.ACTIVE;
//   @Input() text!: string;
//   @Output() tabChange = new EventEmitter<boolean>();

//   changeStatus(){
//     this.status=='active'?this.status=StatusActiveOrNotActive.NOT_ACTIVE:this.status=StatusActiveOrNotActive.ACTIVE;
//     this.tabChange.emit(this.status=='active');
//   }

// }
