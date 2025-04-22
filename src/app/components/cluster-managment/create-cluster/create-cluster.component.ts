import { CommonModule } from '@angular/common';
import { Component, forwardRef, inject, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../basic-components/button/button.component';
import { HeadingComponent } from '../../basic-components/heading/heading.component';
import { BasicRadioButtonComponent } from '../../basic-components/basic-radio-button/basic-radio-button.component';
import { ButtonType, HeaderCellType, State, TextColor, TextSize, TextWeight } from 'src/app/enums/basic-enum';
import { BodyComponent } from '../../basic-components/body/body.component';
import { TableHeaderComponent } from '../../basic-components/table-header/table-header.component';
import { YvSelectComponent } from '../../basic-components/yv-select/yv-select.component';
import { RadioButtonListComponent } from '../../basic-components/radio-button-list/radio-button-list.component';
import { TextareaComponent } from '../../basic-components/textarea/textarea.component';
import { ClusterApiService } from 'src/app/services/cluster-api.service';
import { elementAt, Observable } from 'rxjs';
import { ClusterService } from 'src/app/services/cluster.service';
import { log } from 'console';
import { HeaderCellsComponent } from '../../basic-components/header-cells/header-cells.component';
import { FieldComponent } from '../../basic-components/field/field.component';

@Component({
  selector: 'yv-cluster-create-cluster',
  standalone: true,
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() =>),
  //     multi: true,
  //   }
  // ],
  imports: [FormsModule, ReactiveFormsModule,CommonModule, ButtonComponent, HeadingComponent, BasicRadioButtonComponent,RadioButtonListComponent, BodyComponent, TableHeaderComponent, YvSelectComponent, ButtonComponent,TextareaComponent,HeaderCellsComponent,FieldComponent],
  templateUrl: './create-cluster.component.html',
  styleUrl: './create-cluster.component.scss'
})
export class CreateClusterComponent {
  constructor(private clusterData: ClusterApiService) { }
   formGroup: FormGroup = new FormGroup({});
  header: string = 'Create Cluster';
  size: TextSize = TextSize.SMALL;
  weight: TextWeight = TextWeight.BOLD;
  color: TextColor = TextColor.NEUTRAL_GRAY;
  tableHeader1: string = 'Field';
  size1: TextSize = TextSize.MEDIUM;
  weight1: TextWeight = TextWeight.BOLD;
  tableHeader2: string = 'Text Value';
  color1: TextColor = TextColor.SLATE_BLUE;
  //dataCells: string[] = [];//['First Name', 'Last Name', 'Maiden Name', 'Place Of Birth', 'Authentic Date Of Birth', 'Restored Date Of Birth', 'Permanent Place', 'Place of Death', 'Gender', 'Fate'];
  hederType: HeaderCellType = HeaderCellType.TEXT;
  selectLabel: string = 'Cluster Level';
  button1: string = 'Cancel';
  button2: string = 'Set a cluster';
  btn_size:boolean = false;
  buttomType1: ButtonType = ButtonType.TERTIARY;
  buttomType2: ButtonType = ButtonType.PRIMARY;
  stateEnum =  State ;
  radioControl = new FormControl<string | null>(null);
  dataCells:any = new Observable<string[]>;
  selectedOption: string = '';
  // options: string[] = [];
  private formBuilder = inject(FormBuilder);

 #service=inject(ClusterService);
  ngOnInit() {
  //  this.#service.ClusterData$.subscribe(data => {
  //   this.createClusterData=data;
  //  });
  // this.#service.getCreateClusterData();
  this.#service.ClusterData$.subscribe(data => {
    console.log('SapirClusterDetails:', data); // כאן תקבל את הנתונים עצמם
     this.dataCells = data; // שמירת הנתונים במשתנה
     this.dataCells.forEach((d:any) => {
      let values:any=[];
        d.Values.forEach((v:any) => {
          values.push(v.Value);
        });
        this.radioControl.setValue(values[0].selectedOption);
        console.log("rrrrrrrrrr",this.radioControl);
        
        // values[0].selectedOption=true;
        console.log("element",d);
        if(d.HasOtherOption)
          values.push("other");
         d.RadioOptions=values;
    });
    //  this.options.push("other"); 
     console.log("222222222222222222",this.dataCells);
  });

  this.formGroup = this.formBuilder.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    PlaceOfBirth: ['', Validators.required],
    AuthenticDateOfBirth: ['', Validators.required],
    RestoredDateOfBirth: ['', Validators.required],
    PermanentPlace: ['', Validators.required],
    PlaceOfDeath: ['', Validators.required],
    AuthenticDateOfDeath: ['', Validators.required],
    RestoredDateOfDeath: ['', Validators.required],
    Gender: ['', Validators.required],
    Fate: ['', Validators.required],

    // values: this.formBuilder.array([], [this.dataCells])
  });

  }

  // get values(): FormArray {
  //   return this.formGroup.get('values') as FormArray;
  // }
  // // radioForm = new FormGroup({radioControl: this.radioControl});
  // addValue(): void {
  //   this.values.push(this.formBuilder.control('', Validators.required));
  // }

  onRadioSelectionChange(selectedValue: string, index: number) {
    this.selectedOption = selectedValue;
    console.log("האפשרות שנבחרה:", this.selectedOption);
    console.log("index", index);
    console.log(this.formGroup.controls);
    
    
  }


}
