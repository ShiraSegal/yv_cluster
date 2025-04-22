import { CommonModule } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  imports: [FormsModule, ReactiveFormsModule,CommonModule, ButtonComponent, HeadingComponent, BasicRadioButtonComponent,RadioButtonListComponent, BodyComponent, TableHeaderComponent, YvSelectComponent, ButtonComponent,TextareaComponent,HeaderCellsComponent,FieldComponent],
  templateUrl: './create-cluster.component.html',
  styleUrl: './create-cluster.component.scss'
})
export class CreateClusterComponent {
  constructor(private clusterData: ClusterApiService) { }
  formGroup!: FormGroup;
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
  radioControl!:string;
  // radioForm = new FormGroup({radioControl: this.radioControl});
  dataCells:any = new Observable<string[]>;
  selectedOption: string = '';
  options: string[] = ['Exact','Most Probable','Possible'];
  // radiosChoose:any=new FormControl('');
 #service=inject(ClusterService);
  

  
  ngOnInit() {
    this.formGroup = new FormGroup({
      radioControl: new FormControl('', [Validators.required]),
  },
      //   , [rarePriceValidator()]
  );
    // this.formGroup = new FormGroup({
    //   radiosChoose: new FormControl('', [Validators.required]),
    // },);
    
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
    
        
        // values[0].selectedOption=true;
        console.log("element",d);
        if(d.HasOtherOption)
          values.push("other");
         d.RadioOptions=values;
    });
    //  this.options.push("other"); 
     console.log("222222222222222222",this.dataCells);
  });


  }
  onRadioSelectionChange(selectedValue: string) {
    this.selectedOption = selectedValue;
    console.log("האפשרות שנבחרה:", this.selectedOption);
    
  }

  createCluster(){
    console.log("formGroup",this.formGroup);
    console.log("rrrrrrad",this.radioControl);
    
    if(!this.formGroup.valid){
     alert("Please fill all the fields");
    }
    else{
      alert("Cluster created successfully");
    }
  }
}
