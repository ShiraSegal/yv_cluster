import { CommonModule } from '@angular/common';
import { NativeOptionState, NativeOptionType, ToastNotificationIcons } from 'src/app/enums/basic-enum';
import { Component, forwardRef, inject, Inject } from '@angular/core';
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


@Component({
  selector: 'yv-cluster-create-cluster',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ButtonComponent, HeadingComponent, BasicRadioButtonComponent, RadioButtonListComponent, BodyComponent, ButtonComponent, HeaderCellsComponent, FieldComponent, ToastNotificationComponent, SelectComponent],
  templateUrl: './create-cluster.component.html',
  styleUrl: './create-cluster.component.scss'
})
export class CreateClusterComponent {
  // constructor(private clusterData: ClusterApiService) { }

  formBuilder = inject(FormBuilder);
  clusterService = inject(ClusterService);

  //form validation
  formGroup: FormGroup;
  formIsValid!: boolean;
  formGroupFields: any = {};

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
  tableHeader1: string = 'Field';
  size1: TextSize = TextSize.MEDIUM;
  weight1: TextWeight = TextWeight.BOLD;
  tableHeader2: string = 'Text Value';
  color1: TextColor = TextColor.SLATE_BLUE;

  //select
  selectLabel: string = 'Cluster Level';
  nativeOptionType = NativeOptionType;
  // options: string[] = ['Exact','Most Probable','Possible'];
  options = [
    { optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT },
    { optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT }
  ];

  //text field
  comments: string = '';

  //buttons
  button1: string = 'Cancel';
  button2: string = 'Set a cluster';
  btn_size: boolean = false;
  buttomType1: ButtonType = ButtonType.TERTIARY;
  buttomType2: ButtonType = ButtonType.PRIMARY;

  //toast notification
  ToastNotificationIcons = ToastNotificationIcons;



  ngOnInit() {
    console.log("formIsValid", this.formIsValid);
    this.createClusterFormData();
  }

  createClusterFormData() {
    this.clusterService.getCreateClusterData().subscribe({
      next: (res: SapirClusterModel | null) => {
        if (res) {
          console.log("getCreateClusterData", res);

          this.clusterModel = res as SapirClusterModel;
          console.log("this.clusterModel", this.clusterModel);

          this.dataCells = res.SapirClusterDetails; // Process the data if it's not null
          this.dataCells.forEach((d: any) => {
            let values: any = [];
            d.Values.forEach((v: any) => {
              if (v.NameCode === "") {
                console.log(`Value "${v.Value}" has an empty NameCode.`);
                v.NameCode = "unknown"; // או כל ערך ברירת מחדל אחר
              }
              values.push({ key: v.NameCode, value: v.Value });

            });
            if (d.HasOtherOption) {
              values.push({ key: "other", value: "other" });
            }
            d.RadioOptions = values;

            // Set default selection if NameCode is empty
            // const defaultOption = d.Values.find((v: any) => v.NameCode === "");
            // if (defaultOption) {
            //   // Remove the default selection logic
            //   this.formGroupFields[d.Field] = ['', Validators.required];
            // } else {
            //   this.formGroupFields[d.Field] = ['', Validators.required];
            // }

            // if (defaultOption) {
            //   this.formGroupFields[d.Field] = [defaultOption.NameCode, Validators.required];
            // }
          });

          console.log("222222222222222222", this.dataCells);

          this.initializeFormGroup();

          this.formGroup.get('comments')?.valueChanges.subscribe(value => {
            console.log('Comments value changed:', value);
          });

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
      this.formGroupFields[field.Field] = ['', Validators.required];
    });
    // this.formGroupFields['comments'] = [''];
    this.formGroupFields['comments'] = [''];

    console.log("this.formGroupFields", this.formGroupFields);


    this.formGroup = this.formBuilder.group(this.formGroupFields);
    console.log("this.formGroup", this.formGroup);


  }

  checkChange(index: string) {
    console.log("valid", this.formGroup.valid);
    console.log("index", index);
    // this.formGroup.get(selected)?.setValue(index);
    console.log("formGroup", this.formGroup.value);
    console.log("formGroup", this.formGroup);

  }

  createCluster() {
    console.log("formGroupFields", this.formGroupFields);
    console.log("formGroup", this.formGroup);

    if (this.formGroup.valid) {
      this.formIsValid = true;
      this.clusterModel.SapirClusterDetails.map((field: any) => {
        console.log("field", field);
        const values = field.Values.filter((value: any) => {
          return value.NameCode === this.formGroup.controls[field.Field].value;
        });
        console.log("values", values);

        field.Values = values;

        console.log("field.Values", field.Values);

      });
      console.log("this.clusterModel", this.clusterModel);
      console.log("comments", this.formGroup.value.comments);
      this.clusterModel.Comments = this.formGroup.value.comments;
      this.clusterService.createCluster(this.clusterModel).subscribe({
        next: (res) => {
          if (res) {
            console.log("Cluster created:", res);
          } else {
            console.warn("Cluster creation failed.");
          }
        },
        error: (err) => {
          console.error("Error during cluster creation:", err);
        }
      });
    }
    else {
      this.formIsValid = false;
    }
    console.log("formIsValid", this.formIsValid);
  }
}