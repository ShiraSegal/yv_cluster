import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../basic-components/button/button.component';
import { HeadingComponent } from '../../basic-components/heading/heading.component';
import { BasicRadioButtonComponent } from '../../basic-components/basic-radio-button/basic-radio-button.component';
import { ButtonSize, ButtonType, HeaderCellType, TextColor, TextSize, TextWeight } from 'src/app/enums/basic-enum';
import { BodyComponent } from '../../basic-components/body/body.component';
import { TableHeaderComponent } from '../../basic-components/table-header/table-header.component';
import { YvSelectComponent } from '../../basic-components/yv-select/yv-select.component';
import { RadioButtonListComponent } from '../../basic-components/radio-button-list/radio-button-list.component';

@Component({
  selector: 'yv-cluster-create-cluster',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule, ButtonComponent, HeadingComponent, BasicRadioButtonComponent,RadioButtonListComponent, BodyComponent, TableHeaderComponent, YvSelectComponent, ButtonComponent],
  templateUrl: './create-cluster.component.html',
  styleUrl: './create-cluster.component.scss'
})
export class CreateClusterComponent {
  formGroup: FormGroup = new FormGroup({});
  header: string = 'Create Cluster';
  size: TextSize = TextSize.SMALL;
  // selectedLabel: string = 'Cluster Name';
  weight: TextWeight = TextWeight.BOLD;
  color: TextColor = TextColor.NEUTRAL_GRAY;
  tableHeader1: string = 'Field';
  size1: TextSize = TextSize.MEDIUM;
  weight1: TextWeight = TextWeight.BOLD;
  tableHeader2: string = 'Text Value';
  color1: TextColor = TextColor.SLATE_BLUE;
  dataCells: string[] = ['First Name', 'Last Name', 'Maiden Name', 'Place Of Birth', 'Authentic Date Of Birth', 'Restored Date Of Birth', 'Permanent Place', 'Place of Death', 'Gender', 'Fate'];
  hederType: HeaderCellType = HeaderCellType.TEXT;
  options:string[]=['first name','שם בעברית','other'];
  // label1: string = 'first name';
  // checked1: boolean = true;
  // label2: string = 'שם בעברית';
  // checked2: boolean = false;
  // label3: string = 'other';
  selectLabel: string = 'Cluster Level';
  button1: string = 'Cancel';
  button2: string = 'Set a cluster';
  btn_size1: ButtonSize = ButtonSize.SMALL;
  btn_size2: ButtonSize = ButtonSize.SMALL;
  buttomType1: ButtonType = ButtonType.TERTIARY;
  buttomType2: ButtonType = ButtonType.PRIMARY;

  selectionChange(){
    
  }
}
