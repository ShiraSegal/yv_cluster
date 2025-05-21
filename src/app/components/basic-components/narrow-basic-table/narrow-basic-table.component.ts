// import { CommonModule } from '@angular/common';
// import { Component, inject, Input } from '@angular/core';
// import {  ButtonType, DataCellType, HeaderCellType, NarrowBasicTableRowInputState, State } from 'src/app/enums/basic-enum';
// import { NarrowBasicTableRowComponent } from '../narrow-basic-table-row/narrow-basic-table-row.component';
// import { TableHeaderComponent } from '../table-header/table-header.component';
// import { ButtonIconProperty, NativeOptionState, NativeOptionType } from 'src/app/enums/native-option-enum';
// import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
// import { IconType } from 'src/app/enums/icon-enum';
// import { FilterSectionComponent } from "../filter-section/filter-section.component";
// import { log } from 'console';

// @Component({
//   selector: 'yv-cluster-narrow-basic-table',
//   standalone: true,
//   imports: [CommonModule,NarrowBasicTableRowComponent, TableHeaderComponent, FilterSectionComponent],
//   templateUrl: './narrow-basic-table.component.html',
//   styleUrl: './narrow-basic-table.component.scss'
// })
// export class NarrowBasicTableComponent {


//   @Input() Headers: { data: string; type: HeaderCellType }[] = [];
//   @Input() Rows: {
//     property: NarrowBasicTableRowInputState;
//     showAction: boolean;
//     cells: {
//       data: string;
//       type: DataCellType;
//       moreData?: { [key: string]: any };
//     }[];
//   }[] | undefined = [];
//   filterValues: any = {};
//   filteredRows: typeof this.Rows = [];
  
//   label: string = 'Select Label';
//   primary = ButtonType.PRIMARY
//   variant3 = ButtonIconProperty.VARIANT3
// iconType = IconType
//   // property :NarrowBasicTableRowInputState = NarrowBasicTableRowInputState.DEFAULT;
//   // cells:{ data: string; type: DataCellType ; moreData?: { [key: string]: any }}[] = [{data: 'test', type: DataCellType.TEXT},{data: '' ,type: DataCellType.CHECK}];
//   stateEnum = State
//   nativeOptions = NativeOptionType;
//   rowProperty: NarrowBasicTableRowInputState = NarrowBasicTableRowInputState.DEFAULT;

//   nativeOptionswe = [
//     { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
//     { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT },
//     { optionType: NativeOptionType.ASSIGNEE, optionState: NativeOptionState.DEFAULT }
//   ];
//   #fb = inject(FormBuilder)
//   tableDataForm: FormGroup = this.#fb.group({
//     rows: this.#fb.array([])
//   });
//   ngOnInit() {
//     this.filteredRows = [...(this.Rows || [])]; // עותק התחלה להצגה

  
//     console.log('Rows on Init:', this.Rows);
//     this.Rows?.forEach((row, index) => {
//       const control = this.#fb.group({
//         checked: [false],
//         id: [row.cells[index].data]
//       });
//       this.rows.push(control);
//     });
//     console.log("ros", this.Rows![0].cells);
//     console.log("tttt", this.tableDataForm);
    
//   }
//   get rows(): FormArray {
//     return this.tableDataForm.get('rows') as FormArray;
//   }
//   trackByFn(index: number, item: any): any {
//     return index;
//   }
//   onClick() {
//     alert('test on click');
//     console.log('test on click');
//   }
//   onClickAddCluster(){
//     //open dialog create new cluster
//   }
//   onClicShowkAssineeOrStatus(){

//   }
//   onFilterValuesChange(values: any[]){
//    console.log('filter values:', values);
//    //create filter arr 
//    // filter this.Rows based on the values

//   }
//   //status assun
//   //rows- מי שבחור לשנו ת את הסטטוס או האסימי בטופס כמובן
// }
import {
  Component,
  Input,
  Signal,
  signal,
  computed
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterSectionComponent } from '../filter-section/filter-section.component';
import { TableHeaderComponent } from '../table-header/table-header.component';
import { NarrowBasicTableRowComponent } from '../narrow-basic-table-row/narrow-basic-table-row.component';
import {
  HeaderCellType,
  DataCellType,
  NarrowBasicTableRowInputState
} from 'src/app/enums/basic-enum';

type TableRow = {
  property: NarrowBasicTableRowInputState;
  showAction: boolean;
  cells: { data: string; type: DataCellType }[];
};

type TableCell = { data: string; type: DataCellType };

@Component({
  selector: 'yv-cluster-narrow-basic-table',
  standalone: true,
  imports: [CommonModule, FilterSectionComponent, TableHeaderComponent, NarrowBasicTableRowComponent],
  templateUrl: './narrow-basic-table.component.html',
  styleUrls: ['./narrow-basic-table.component.scss']
})
export class NarrowBasicTableComponent {
  @Input() Headers: { data: string; type: HeaderCellType }[] = [];

  @Input() set Rows(value: TableRow[]) {
    this.rowsSignal.set(value || []);
  }

  private rowsSignal = signal<TableRow[]>([]);
  private filterSignal = signal<any>({});

  filteredRows = computed(() => {
    const filters = this.filterSignal();
    const rows = this.rowsSignal();
    const search = filters.search?.toLowerCase?.() ?? '';

    if (!search) return rows;

    return rows.filter((row: TableRow) => {
      return row.cells.some((cell: TableCell) => {
        const value = cell.data?.toLowerCase?.() ?? '';
        return value.includes(search);
      });
    });
  });

  onClickAddCluster() {
    console.log('🟦 Add Cluster Clicked');
  }

  onClicShowkAssineeOrStatus() {
    console.log('🟨 Toggle Assignee/Status Clicked');
  }

  onFilterValuesChange(values: any) {
    console.log('🔍 Search filter changed:', values.search);
    this.filterSignal.set(values);
  }
}
