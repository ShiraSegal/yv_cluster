import { CommonModule } from '@angular/common';
import { BadgeType, NativeOptionState, NativeOptionType } from 'src/app/enums/basic-enum';
import { Component, forwardRef, inject, Inject, Optional } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../basic-components/button/button.component';
import { HeadingComponent } from '../../basic-components/heading/heading.component';
import { BasicRadioButtonComponent } from '../../basic-components/basic-radio-button/basic-radio-button.component';
import { ButtonType, HeaderCellType, State, TextColor, TextSize, TextWeight } from 'src/app/enums/basic-enum';
import { BodyComponent } from '../../basic-components/body/body.component';
import { RadioButtonListComponent } from '../../basic-components/radio-button-list/radio-button-list.component';
import { ClusterApiService } from 'src/app/services/cluster-api.service';
import { elementAt, Observable } from 'rxjs';
import { ClusterService } from 'src/app/services/cluster.service';
import { HeaderCellsComponent } from '../../basic-components/header-cells/header-cells.component';
import { FieldComponent } from '../../basic-components/field/field.component';
import { ToastNotificationComponent } from '../../basic-components/toast-notification/toast-notification.component';
import { SelectComponent } from '../../basic-components/select/select.component';
import { SapirClusterModel } from 'src/app/models/sapir-cluster-model.model';
import { SapirClusterDetail } from 'src/app/models/sapir-cluster-detail.model';
import { IconType } from 'src/app/enums/icon-enum';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

type NativeSelectOption = {
  optionType: NativeOptionType;
  optionState: NativeOptionState;
  displayText: string;
  property?: BadgeType;
};

@Component({
  selector: 'yv-cluster-create-cluster',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ButtonComponent, HeadingComponent, RadioButtonListComponent, ButtonComponent, HeaderCellsComponent, SelectComponent],
  templateUrl: './create-cluster.component.html',
  styleUrl: './create-cluster.component.scss'
})
export class CreateClusterComponent {
    data: { title: string } = inject(MAT_DIALOG_DATA, { optional: true });
  dialogRef: MatDialogRef<CreateClusterComponent> = inject(MatDialogRef, { optional: true })!;
  #formBuilder = inject(FormBuilder);
  #clusterService = inject(ClusterService);

  //form validation
  createClusterForm: FormGroup= this.#formBuilder.group({
    clusterLevel: ['', Validators.required],
    comments: ['']
  });

  formIsValid!: boolean;
  createClusterFormFields: any = {};

  //form data
  dataCells: any[];
  clusterModel: SapirClusterModel = new SapirClusterModel();

  //close dialog
  close: boolean = false;

  //header
  header: string = 'Create Cluster';
  size: TextSize = TextSize.SMALL;
  weight: TextWeight = TextWeight.BOLD;
  color: TextColor = TextColor.NEUTRAL_GRAY;

  //table header
  headerCellType= HeaderCellType;
  tableHeader1: string = 'Field';
  size1: TextSize = TextSize.MEDIUM;
  weight1: TextWeight = TextWeight.BOLD;
  tableHeader2: string = 'Text Value';
  color1: TextColor = TextColor.SLATE_BLUE;

  //select
  selectLabel: string = 'Cluster Level';
  // options: string[] = ['Exact','Most Probable','Possible'];
  options: {
    optionType: NativeOptionType;
    optionState: NativeOptionState;
    displayText: string;
  }[] = [{optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT, displayText: 'Exact'},
    {optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT, displayText: 'Most Probable'},
    {optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT, displayText: 'Possible'}
  ];

  //comment field
  comments: string = '';

  //buttons
  button1: string = 'Cancel';
  button2: string = 'Set a cluster';
  btn_size: boolean = false;
  buttomType1: ButtonType = ButtonType.TERTIARY;
  buttomType2: ButtonType = ButtonType.PRIMARY;

  //toast notification
iconType=IconType;


  ngOnInit() {
    this.createClusterFormData();
  }

  createClusterFormData() {
    this.#clusterService.getCreateClusterData().subscribe({
      next: (res: SapirClusterModel | null) => {
        if (res) {
          // console.log("getCreateClusterData", res);

          this.clusterModel = res;
          // console.log("this.clusterModel", this.clusterModel);

          this.dataCells = res.sapirClusterDetails; // Process the data if it's not null
          // console.log("check1",this.clusterModel.SapirClusterDetails);
          
          this.dataCells.forEach((d: any) => {
            let values: any = [];
            d.values.forEach((v: any) => {
              if (v.nameCode === "") {
                // console.log(`Value "${v.Value}" has an empty NameCode.`);
                v.nameCode = "unknown"; // או כל ערך ברירת מחדל אחר
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
    });
  }

  initializeFormGroup() {
    this.dataCells.forEach((field: any) => {
      this.createClusterForm.addControl(field.field, new FormControl('', Validators.required));
    });

  }

  // checkChange(index: string) {
  //  // console.log("valid", this.createClusterForm.valid);
  //  // console.log("index", index);
  //   // this.createClusterForm.get(selected)?.setValue(index);
  //   // console.log("createClusterForm", this.createClusterForm.value);
  //   // console.log("createClusterForm", this.createClusterForm);

  // }

  createCluster() {
    console.log("createClusterForm", this.createClusterForm.value)

    if (this.createClusterForm.valid) {
      this.formIsValid = true;
      this.closeDialogWithData({ bookId:"creat cluster succesfully😍❤"});
      console.log("this.clusterModel", "creat cluster succesfully😍❤");
      this.clusterModel.sapirClusterDetails.map((field: any) => {
        const values = field.values.filter((value: any) => {
          return value.nameCode === this.createClusterForm.controls[field.field].value;
        });

        field.Values = values;

      });
      this.clusterModel.level= this.createClusterForm.value.clusterLevel;
      this.clusterModel.comments = this.createClusterForm.value.comments;
      this.#clusterService.createCluster(this.clusterModel).subscribe({
        next: (res) => {
          if (res) {
            console.log("Cluster created:", res);
          } else {
            console.warn("Cluster creation failed.");
          }
        },
        error: (err:any) => {
          console.error("Error during cluster creation:", err);
        }
      });
    }
    else {
      this.formIsValid = false;
      this.closeDialogWithData({ bookId: "formIsNotValid" });
    }
  }

  closeDialogWithData(data: any): void {
    this.dialogRef.close(data);
  }
}
