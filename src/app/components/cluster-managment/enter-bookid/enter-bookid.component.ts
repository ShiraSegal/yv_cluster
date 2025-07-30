import {
  Component,
  Inject,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ButtonType,
  RadioButtonListDirection,
  TextColor,
  TextSize,
  TextWeight,
} from 'src/app/enums/basic-enum';
import { ButtonComponent } from '../../basic-components/button/button.component';
import { HeadingComponent } from '../../basic-components/heading/heading.component';
import { RadioButtonListComponent } from '../../basic-components/radio-button-list/radio-button-list.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClusterService } from 'src/app/services/cluster.service';
import { IconType } from 'src/app/enums/icon-enum';
// import { RootObject } from 'src/app/models/root-object.model';
import { Subscription } from 'rxjs';
import { FieldComponent } from '../../basic-components/field/field.component';
import { BookIdDetails } from 'src/app/models/book-id-details.model';
import { NewClusterFromSystem } from 'src/app/models/new-cluster-from-system.model';

@Component({
  selector: 'yv-cluster-enter-bookid',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    HeadingComponent,
    RadioButtonListComponent,
    FieldComponent,
  ],
  templateUrl: './enter-bookid.component.html',
  styleUrl: './enter-bookid.component.scss',
})
export class EnterBookidComponent implements OnInit, OnDestroy {
  // data: { title: string } = inject(MAT_DIALOG_DATA, { optional: true });
  // dialogRef: MatDialogRef<EnterBookidComponent> = inject(MatDialogRef, { optional: true })!;
  data: { showRadioButtons: boolean; checkBoxList: string[] } =
    inject(MAT_DIALOG_DATA);
  dialogRef: MatDialogRef<EnterBookidComponent> = inject(MatDialogRef, {
    optional: true,
  })!;
 
  #clusterService = inject(ClusterService);

// showRadioButtons: boolean = this.data.showRadioButtons;

  subscription = new Subscription(); // 🟦 ניהול subscriptions

  newClusterFromSystem: NewClusterFromSystem = new NewClusterFromSystem();
  enterBookIdOrClusterForm: FormGroup = new FormGroup({
    input: new FormControl('', Validators.required),
  });

  close: boolean = false;
  formIsValid: boolean;

  header: string = 'Enter Book ID / Cluster';
  size: TextSize = TextSize.SMALL;
  weight: TextWeight = TextWeight.BOLD;
  color: TextColor = TextColor.NEUTRAL_GRAY;

  direction: RadioButtonListDirection = RadioButtonListDirection.ROW;
  radioButtonArray: any[] = [
    { key: 'Book ID', value: 'Book ID' },
    { key: 'Cluster', value: 'Cluster' },
  ];

  buttomType1: ButtonType = ButtonType.TERTIARY;
  buttomType2: ButtonType = ButtonType.PRIMARY;
  btn_size: boolean = false;
  button1: string = 'Cancel';
  button2: string = 'Add';

  selected: string = 'Book Id';

  iconType = IconType;
  message: string = `${this.selected} Submitted!`;

  ngOnInit() {
    if (this.data.showRadioButtons) {
      this.enterBookIdOrClusterForm.addControl(
        'selection',
        new FormControl('', Validators.required)
      );
    }
    console.log('showRadioButtons', this.data.showRadioButtons);
  }

  checkedChange(selected: string) {
    this.selected = selected;
  }

  add() {
    if (this.enterBookIdOrClusterForm.valid) {
      // this.closeDialogWithData({ bookId: this.enterBookIdOrClusterForm.value.input })
      const input = this.enterBookIdOrClusterForm.value.input;
      const selection = this.enterBookIdOrClusterForm.value.selection;
      if (!this.data.showRadioButtons) {
        console.log("send", { data:this.data.checkBoxList,input: input });
        this.newClusterFromSystem.bookId = this.data.checkBoxList;
        this.newClusterFromSystem.clusterId = input;
        this.subscription.add(
          this.#clusterService
            .addBookIdExsitCluster(this.newClusterFromSystem)
            .subscribe({
              next: () => {
                // אין צורך לבדוק res, כי אין תוכן
                this.closeDialogWithData({ success: true, bookId: input });
              },
              error: (err: any) => {
                console.error('Error during cluster creation:', err);
              },
            })
        );
      }
      if (selection === 'Book ID') {
        this.subscription.add(
          this.#clusterService.getSingleItemByBookId(input).subscribe({
            next: (res: BookIdDetails | boolean) => {
              console.log('**********************', { bookId: input });
              if (res) {
                console.log('bookId add:', res);
                this.closeDialogWithData(res);
              } else {
                console.warn('add bookId failed.');
              }
            },
            error: (err: any) => {
              console.error('Error during cluster creation:', err);
            },
          })
        ); // 🟦 הוספה למנוי
        this.formIsValid = true;
        this.close = true;
      } else if (selection === 'Cluster') {
        this.subscription.add(
          this.#clusterService.getClusterGroupByBookId(input).subscribe({
            next: (res: BookIdDetails | boolean) => {
              console.log('**********************!!!!!!!!', res);
              if (res) {
                console.log('Cluster add:', res);
                this.closeDialogWithData(res);
              } else {
                console.warn('add cluster failed.');
              }
            },
            error: (err: any) => {
              console.error('Error during cluster creation:', err);
            },
          })
        ); // 🟦 הוספה למנוי
      }
    } else {
      this.formIsValid = false;
      this.closeDialogWithData({ bookId: 'formIsNotValid' });
    }
  }

  closeDialogWithData(data: any): void {
    this.dialogRef.close(data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // 🟥 ביטול כל המנויים בעת השמדת הקומפוננטה
  }
}
