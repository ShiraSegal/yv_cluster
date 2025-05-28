import { CommonModule } from '@angular/common';
import { BadgeType, NativeOptionState, NativeOptionType } from 'src/app/enums/basic-enum';
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
import { IconType } from 'src/app/enums/icon-enum';

type NativeSelectOption = {
  optionType: NativeOptionType;
  optionState: NativeOptionState;
  displayText: string;
  property?: BadgeType;
};

@Component({
  selector: 'yv-cluster-create-cluster',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ButtonComponent, HeadingComponent, BasicRadioButtonComponent, RadioButtonListComponent, BodyComponent, ButtonComponent, HeaderCellsComponent, FieldComponent, ToastNotificationComponent, SelectComponent],
  templateUrl: './create-cluster.component.html',
  styleUrl: './create-cluster.component.scss'
})
export class CreateClusterComponent {
  // constructor(private clusterData: ClusterApiService) { }

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
  // options = [
  //   { optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT },
  //   { optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT },
  //   { optionType: NativeOptionType.TEXT, optionState: NativeOptionState.DEFAULT }
  // ];

  //text field
  comments: string = '';

  //buttons
  button1: string = 'Cancel';
  button2: string = 'Set a cluster';
  btn_size: boolean = false;
  buttomType1: ButtonType = ButtonType.TERTIARY;
  buttomType2: ButtonType = ButtonType.PRIMARY;

  //toast notification
iconType=IconType;


//   //buttons
//   button1: string = 'Cancel';
//   button2: string = 'Set a cluster';
//   btn_size:boolean = false;
//   buttomType1: ButtonType = ButtonType.TERTIARY;
//   buttomType2: ButtonType = ButtonType.PRIMARY;

  ngOnInit() {
   // console.log("formIsValid", this.formIsValid);
    this.createClusterFormData();
  }

  createClusterFormData() {
    this.#clusterService.getCreateClusterData().subscribe({
      next: (res: SapirClusterModel | null) => {
        if (res) {
         // console.log("getCreateClusterData", res);

          this.clusterModel = res;
         // console.log("this.clusterModel", this.clusterModel);

          this.dataCells = res.SapirClusterDetails; // Process the data if it's not null
         // console.log("check1",this.clusterModel.SapirClusterDetails);

          this.dataCells.forEach((d: any) => {
            let values: any = [];
            d.Values.forEach((v: any) => {
              if (v.NameCode === "") {
               // console.log(`Value "${v.Value}" has an empty NameCode.`);
                v.NameCode = "unknown"; // או כל ערך ברירת מחדל אחר
              }
              values.push({ key: v.NameCode, value: v.Value });

            });

            if (d.HasOtherOption) {
              values.push({ key: "other", value: "other" });
            }
            d.RadioOptions = values;
         // console.log("check2",this.clusterModel.SapirClusterDetails);

          });
         // console.log("check13",this.clusterModel.SapirClusterDetails);

         // console.log("222222222222222222", this.dataCells);

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
      this.createClusterForm.addControl(field.Field, new FormControl('', Validators.required));
    });
    // this.createClusterFormFields['comments'] = [''];
    // this.createClusterForm.controls['comments'] = new FormControl('');
    // this.createClusterFormFields=

   // console.log("this.createClusterForm", this.createClusterForm);


    // this.createClusterForm = this.#formBuilder.group(this.createClusterFormFields);
    //// console.log("this.createClusterForm", this.createClusterForm);


  }

  checkChange(index: string) {
   // console.log("valid", this.createClusterForm.valid);
   // console.log("index", index);
    // this.createClusterForm.get(selected)?.setValue(index);
   // console.log("createClusterForm", this.createClusterForm.value);
   // console.log("createClusterForm", this.createClusterForm);

  }

  createCluster() {
   // console.log("createClusterFormFields", this.createClusterFormFields);
   // console.log("createClusterForm", this.createClusterForm);

    if (this.createClusterForm.valid) {
      this.formIsValid = true;
      this.clusterModel.SapirClusterDetails.map((field: any) => {
       // console.log("field", field);
        const values = field.Values.filter((value: any) => {
          return value.NameCode === this.createClusterForm.controls[field.Field].value;
        });
       // console.log("values", values);

        field.Values = values;

       // console.log("field.Values", field.Values);

      });
     // console.log("this.clusterModel", this.clusterModel);
     // console.log("comments", this.createClusterForm.value.comments);
      this.clusterModel.Level= this.createClusterForm.value.clusterLevel;
      this.clusterModel.Comments = this.createClusterForm.value.comments;
      this.#clusterService.createCluster(this.clusterModel).subscribe({
        next: (res) => {
          if (res) {
           // console.log("Cluster created:", res);
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
    }
   // console.log("formIsValid", this.formIsValid);
  }
}
