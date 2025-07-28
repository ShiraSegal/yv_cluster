// import { CommonModule } from '@angular/common';
// import { Component, inject, Input } from '@angular/core';
// import { TableGroupIdDetailsComponent } from '../../basic-components/table-group-id-details/table-group-id-details.component';
// import { IconButtonComponent } from '../../basic-components/icon-button/icon-button.component';
// import { IconType } from 'src/app/enums/icon-enum';
// import { SlidebarNavigationComponent } from '../../basic-components/slidebar-navigation/slidebar-navigation.component';
// import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { EnterBookidComponent } from '../../cluster-managment/enter-bookid/enter-bookid.component';

// @Component({
//   selector: 'yv-cluster-handling-suggestions-page',
//   standalone: true,
//   imports: [CommonModule,
//     TableGroupIdDetailsComponent,
//     IconButtonComponent,SlidebarNavigationComponent],
//   templateUrl: './handling-suggestions-page.component.html',
//   styleUrl: './handling-suggestions-page.component.scss'
// })
// export class HandlingSuggestionsPageComponent {
//   @Input() groupIdNumber!: number;

//    #dialog = inject(MatDialog);
//   iconType = IconType
//    dialogRef: MatDialogRef<EnterBookidComponent> | null = null;

//    openDialog() {
//    // // console.log("openDialog");

//    this.dialogRef = this.#dialog.open(EnterBookidComponent, {
//     data: { title: 'Data Distribution' },
//     disableClose: true,
//     hasBackdrop: true,
//     panelClass: 'custom-dialog',
//     autoFocus: false,
//     width: 'auto',  // מאפשר לדיאלוג להתאמת לגודל התוכן
//     height: 'auto',

//   });
//    }
//   onClick() {
//     // alert('test on click');
//     //// // console.log('test on click');
//    // // console.log("openPeiComponent");
//     this.openDialog()
//   }
// }
