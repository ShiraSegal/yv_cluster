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
// import { SelectComponent } from '../../basic-components/select/select.component';

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

//   //form validation
//   formGroup!: FormGroup;
//   formIsValid!: boolean;
//   formGroupFields: any = {};

  //form data
  dataCells: any = new Observable<string[]>;

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
  //dataCells: string[] = [];//['First Name', 'Last Name', 'Maiden Name', 'Place Of Birth', 'Authentic Date Of Birth', 'Restored Date Of Birth', 'Permanent Place', 'Place of Death', 'Gender', 'Fate'];
  // hederType: HeaderCellType = HeaderCellType.TEXT;

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
  stateEnum = State;

  //buttons
  button1: string = 'Cancel';
  button2: string = 'Set a cluster';
  btn_size: boolean = false;
  buttomType1: ButtonType = ButtonType.TERTIARY;
  buttomType2: ButtonType = ButtonType.PRIMARY;

  //toast notification
  ToastNotificationIcons = ToastNotificationIcons;


//   //buttons
//   button1: string = 'Cancel';
//   button2: string = 'Set a cluster';
//   btn_size:boolean = false;
//   buttomType1: ButtonType = ButtonType.TERTIARY;
//   buttomType2: ButtonType = ButtonType.PRIMARY;

  ngOnInit() {
    console.log("formIsValid", this.formIsValid);
    this.createClusterFormData();


  }
  createClusterFormData() {
    this.clusterService.getCreateClusterData().subscribe(data => {
      debugger
      console.log('SapirClusterDetails:', data); // כאן תקבל את הנתונים עצמם
      this.dataCells = data; // שמירת הנתונים במשתנה
      this.dataCells.forEach((d: any) => {
        let values: any = [];
        d.Values.forEach((v: any) => {
          values.push({ key: v.NameCode, value: v.Value });
        });


        // values[0].selectedOption=true;
        console.log("element", d);
        if (d.HasOtherOption)
          values.push({ key: "other", value: "other" });
        d.RadioOptions = values;
      });
      console.log("222222222222222222", this.dataCells);

      this.initializeFormGroup();
    });
  }
  initializeFormGroup() {
    this.dataCells.forEach((field: any) => {
      this.formGroupFields[field.Field] = ['', Validators.required];
    });
    this.formGroup = this.formBuilder.group(this.formGroupFields);
  }
  checkChange(selected: string) {

    console.log("valid", this.formGroup.valid);
    console.log("formGroup", this.formGroup);

  }

  createCluster() {
    console.log("formGroupFields", this.formGroupFields);
    // console.log("clusterLevel",this.formGroupFields['ClusterLevel']);
    console.log("formGroup", this.formGroup);

    if (this.formGroup.valid) {
      this.formIsValid = true;
    }
    else {
      // this.disabled=false
      this.formIsValid = false;
    }
    console.log("formIsValid", this.formIsValid);

  }


// }