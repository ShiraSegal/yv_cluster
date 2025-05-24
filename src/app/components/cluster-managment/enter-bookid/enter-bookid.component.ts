import { Component, Inject, inject, Input, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonType, RadioButtonListDirection, State, TextColor, TextSize, TextWeight } from 'src/app/enums/basic-enum';
import { ButtonComponent } from '../../basic-components/button/button.component';
import { HeadingComponent } from '../../basic-components/heading/heading.component';
import { BasicRadioButtonComponent } from '../../basic-components/basic-radio-button/basic-radio-button.component';
import { RadioButtonListComponent } from '../../basic-components/radio-button-list/radio-button-list.component';
import { FieldComponent } from '../../basic-components/field/field.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastNotificationComponent } from '../../basic-components/toast-notification/toast-notification.component';
import { ClusterService } from 'src/app/services/cluster.service';
import { IconType } from 'src/app/enums/icon-enum';
import { RootObject } from 'src/app/models/root-object.model';

@Component({
  selector: 'yv-cluster-enter-bookid',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ButtonComponent, HeadingComponent, BasicRadioButtonComponent, RadioButtonListComponent, FieldComponent, ToastNotificationComponent],
  templateUrl: './enter-bookid.component.html',
  styleUrl: './enter-bookid.component.scss'
})
export class EnterBookidComponent {


  showRadioButtons: { showRadioButtons: boolean } = inject(MAT_DIALOG_DATA);
  dialogRef: MatDialogRef<EnterBookidComponent> = inject(MatDialogRef, { optional: true })!;
  #clusterService = inject(ClusterService);

  // @Input() showRadioButtons: boolean;

  //form
  // dialogRef: MatDialogRef<EnterBookidComponent> | null = null;
  enterBookIdOrClusterForm: FormGroup = new FormGroup({
    input: new FormControl('', Validators.required)
  });

  close: boolean = false;
  formIsValid: boolean;

  //header
  header: string = 'Enter Book ID';
  size: TextSize = TextSize.SMALL;
  weight: TextWeight = TextWeight.BOLD;
  color: TextColor = TextColor.NEUTRAL_GRAY;

  //radio buttons
  direction: RadioButtonListDirection = RadioButtonListDirection.ROW;
  radioButtonArray: any[] = [{ key: 'Book ID', value: 'Book ID' }, { key: 'Cluster', value: 'Cluster' }];

  //buttons
  buttomType1: ButtonType = ButtonType.TERTIARY;
  buttomType2: ButtonType = ButtonType.PRIMARY;
  btn_size: boolean = false;
  button1: string = 'Cancel';
  button2: string = 'Add';


  //selected radio button
  selected: string = 'Book Id';



  //toast notification
  iconType = IconType
  message: string = `${this.selected} Submitted!`;

  ngOnInit() {
    if (this.showRadioButtons) {
      this.enterBookIdOrClusterForm.addControl('selection', new FormControl('', Validators.required));
    }
    console.log("showRadioButtons", this.showRadioButtons);
    
  }

  checkedChange(selected: string) {
    this.selected = selected;
  }


  add() {
    //להוריד שורה זו אחרי שה POST עובד
    this.closeDialogWithData({ bookId: this.enterBookIdOrClusterForm.value.input })

    if (this.enterBookIdOrClusterForm.valid) {
      if (this.enterBookIdOrClusterForm.value.selection == 'Book ID') {
        this.#clusterService.getSingleItemByBookId(this.enterBookIdOrClusterForm.value.input).subscribe({
          next: (res: RootObject | boolean) => {
            console.log("**********************", { bookId: this.enterBookIdOrClusterForm.value.input });
            this.closeDialogWithData({ bookId: this.enterBookIdOrClusterForm.value.input })
            if (res) {
              console.log("bookId add:", res);

            } else {
              console.warn("add bookId failed.");
            }
          },
          error: (err: any) => {
            console.error("Error during cluster creation:", err);
          }
        });
        this.formIsValid = true;
        this.close = true;
      }
      else if (this.enterBookIdOrClusterForm.value.selection == 'Cluster') {
        this.#clusterService.getClusterGroupByBookId(this.enterBookIdOrClusterForm.value.input).subscribe({
          next: (res: RootObject | boolean) => {
            console.log("res", res);

            console.log("**********************", { bookId: this.enterBookIdOrClusterForm.value.input });
            this.closeDialogWithData({ bookId: this.enterBookIdOrClusterForm.value.input })
            if (res) {
              console.log("Cluster add:", res);
            } else {
              console.warn("add cluster failed.");
            }
          },
          error: (err: any) => {
            console.error("Error during cluster creation:", err);
          }
        });
      }

    }
    else {
      this.formIsValid = false;
      this.closeDialogWithData({ bookId: "formIsNotValid" })
    }
  }
  // cancel() {
  //   this.close = true;
  //     this.dialogRef.close();  // סוגר את הדיאלוג
  // }

  closeDialogWithData(data: any): void {
    this.dialogRef.close(data); // מעבירה את הנתונים לקומפוננטת האבא
  }
}