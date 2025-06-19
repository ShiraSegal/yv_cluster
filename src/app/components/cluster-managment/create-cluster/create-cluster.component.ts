import { CommonModule } from '@angular/common';
import { BadgeType, NativeOptionState, NativeOptionType } from 'src/app/enums/basic-enum';
import { Component, forwardRef, inject, Inject, Optional, OnDestroy } from '@angular/core'; // ← הוספנו OnDestroy
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../basic-components/button/button.component';
import { HeadingComponent } from '../../basic-components/heading/heading.component';
import { ButtonType, HeaderCellType, State, TextColor, TextSize, TextWeight } from 'src/app/enums/basic-enum';
import { RadioButtonListComponent } from '../../basic-components/radio-button-list/radio-button-list.component';
import { ClusterApiService } from 'src/app/services/cluster-api.service';
import { elementAt, Observable, Subject, takeUntil, Subscription } from 'rxjs'; // ← הוספנו Subject, takeUntil
import { ClusterService } from 'src/app/services/cluster.service';
import { HeaderCellsComponent } from '../../basic-components/header-cells/header-cells.component';
import { FieldComponent } from '../../basic-components/field/field.component';
import { ToastNotificationComponent } from '../../basic-components/toast-notification/toast-notification.component';
import { SelectComponent } from '../../basic-components/select/select.component';
import { SapirClusterModel } from 'src/app/models/sapir-cluster-model.model';
import { IconType } from 'src/app/enums/icon-enum';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RadioButtonComponent } from '../../basic-components/radio-button/radio-button.component';

type NativeSelectOption = {
  optionType: NativeOptionType;
  optionState: NativeOptionState;
  displayText: string;
  property?: BadgeType;
};

@Component({
  selector: 'yv-cluster-create-cluster',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ButtonComponent, HeadingComponent, RadioButtonListComponent, ButtonComponent, HeaderCellsComponent, FieldComponent, ToastNotificationComponent, SelectComponent],
  templateUrl: './create-cluster.component.html',
  styleUrl: './create-cluster.component.scss'
})
export class CreateClusterComponent {
  #dialogRef= inject(MatDialogRef<CreateClusterComponent>,{ optional: true });
  #data= inject(MAT_DIALOG_DATA,{ optional: true });
//{ optional: true }- האם צריך את זה?
  #formBuilder = inject(FormBuilder);
  #clusterService = inject(ClusterService);
  #destroy$ = new Subject<void>(); // ← ניהול ביטול האזנות

  createClusterForm: FormGroup = this.#formBuilder.group({
    clusterLevel: ['', Validators.required],
    comments: ['']
  });

  formIsValid!: boolean;
  createClusterFormFields: any = {};
  dataCells: any[];
  clusterModel: SapirClusterModel = new SapirClusterModel();
  close: boolean = false;

  header: string = 'Create Cluster';
  size: TextSize = TextSize.SMALL;
  weight: TextWeight = TextWeight.BOLD;
  color: TextColor = TextColor.NEUTRAL_GRAY;

  headerCellType = HeaderCellType;
  tableHeader1: string = 'Field';
  size1: TextSize = TextSize.MEDIUM;
  weight1: TextWeight = TextWeight.BOLD;
  tableHeader2: string = 'Text Value';
  color1: TextColor = TextColor.SLATE_BLUE;

  selectLabel: string = 'Cluster Level';
  options: {
    optionType: NativeOptionType;
    optionState: NativeOptionState;
    displayText: string;
  }[] = [
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT, displayText: 'Exact' },
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT, displayText: 'Most Probable' },
    { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT, displayText: 'Possible' }
  ];

  comments: string = '';

  button1: string = 'Cancel';
  button2: string = 'Set a cluster';
  btn_size: boolean = false;
  buttomType1: ButtonType = ButtonType.TERTIARY;
  buttomType2: ButtonType = ButtonType.PRIMARY;

  iconType = IconType;
  subscription: Subscription = new Subscription(); // ← ניהול subscriptions
  ngOnInit() {
    this.createClusterFormData();
    this.subscription.add(this.createClusterForm.valueChanges.subscribe((value) => {
      console.log('Form value changed: 💜💜💜💜💜', value);

    }))

  }

  createClusterFormData() {
    this.subscription.add(this.#clusterService.getCreateClusterData()
      .subscribe({
        next: (res: SapirClusterModel | null) => {
          if (res) {
            this.clusterModel = res;
            this.dataCells = res.sapirClusterDetails;
            this.dataCells.forEach((d: any) => {
              let values: any = [];
              d.values.forEach((v: any) => {
                if (v.nameCode === "") {
                  v.nameCode = "unknown";
                }
                values.push({ key: v.nameCode, value: v.value });
              });

              if (d.hasOtherOption) {
                values.push({ key: "other", value: "other" });
              }

              d.radioOptions = values;
            });

            this.initializeFormGroup();
          } else {
            console.warn("No data received from getCreateClusterData.");
            this.dataCells = [];
          }
        },
        error: (error) => {
          console.error("getCreateClusterData occurred:", error);
        },
      }));
  }

  initializeFormGroup() {
    this.dataCells.forEach((field: any) => {
      this.createClusterForm.addControl(field.field, new FormControl('', Validators.required));
    });
  }

  createCluster() {
    console.log("createClusterForm", this.createClusterForm.value);

    if (this.createClusterForm.valid) {
      this.formIsValid = true;
      this.closeDialogWithData({ bookId: "creat cluster succesfully😍❤" });
      console.log("this.clusterModel", "creat cluster succesfully😍❤");

      this.clusterModel.sapirClusterDetails.map((field: any) => {
        const values = field.values.filter((value: any) => {
          return value.nameCode === this.createClusterForm.controls[field.field].value;
        });

        field.Values = values;
      });

      this.clusterModel.level = this.createClusterForm.value.clusterLevel;
      this.clusterModel.comments = this.createClusterForm.value.comments;

     this.subscription.add(this.#clusterService.createCluster(this.clusterModel)
        .subscribe({
          next: (res) => {
            if (res) {
              console.log("Cluster created:", res);
            } else {
              console.warn("Cluster creation failed.");
            }
          },
          error: (err: any) => {
            console.error("Error during cluster creation:", err);
          }
        }));
    }
    else {
      this.formIsValid = false;
      this.closeDialogWithData({ bookId: "formIsNotValid" });
    }
  }

  closeDialogWithData(data: any): void {
    this.#dialogRef.close(data); // מעבירה את הנתונים לקומפוננטת האבא
  }

  ngOnDestroy(): void { // ← פונקציית ניקוי בסיום חיי הקומפוננטה
   // this.#destroy$.next();
   // this.#destroy$.complete();
   this.subscription.unsubscribe(); // מבטלת את כל המנויים שנוצרו
  }
}
