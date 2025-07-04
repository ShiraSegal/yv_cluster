import { Component, inject } from '@angular/core';
import { ClusterService } from 'src/app/services/cluster.service';
import { BasicCardComponent } from '../../basic-components/basic-card/basic-card.component';
import { IconType } from 'src/app/enums/icon-enum';
import { BasicTableRowPropertyVariants, DataCellType, HeaderCellType, HomeTableTabType, TextSize, TextWeight } from 'src/app/enums/basic-enum';
import { HeadingComponent } from '../../basic-components/heading/heading.component';
import { BasicTableWarpComponent } from '../../basic-components/basic-table-warp/basic-table-warp.component';
import { SuggestionsStatisticsComponent } from '../../basic-components/suggestions-statistics/suggestions-statistics.component';
import { log } from 'node:console';
import { BasicRadioButtonComponent } from '../../basic-components/basic-radio-button/basic-radio-button.component';
import { RadioButtonComponent } from '../../basic-components/radio-button/radio-button.component';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckComponent } from '../../basic-components/check/check.component';

@Component({
  selector: 'yv-cluster-home',
  standalone: true,
  imports: [BasicCardComponent, HeadingComponent,ReactiveFormsModule,
    BasicTableWarpComponent, SuggestionsStatisticsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  //enums
  iconType = IconType;
  textSize = TextSize;
  textWeight = TextWeight;
  // Injecting the ClusterService
  #clusterService = inject(ClusterService);
  //cards data
  selectedUser: any;
radioButtonValuesArray: { key: string, value: string }[] = [
      { key: "1", value: "a" },
      { key: "2", value: "b" },
      { key: "3", value: "c" },
      { key: "4", value: "d" },
      { key: "", value: "other" }
    ];
   //table-data
   tableData: Partial<Record<HomeTableTabType, {
    Headers: { data: string; type: HeaderCellType }[];
    Rows: {
      property: BasicTableRowPropertyVariants;
      showAction: boolean;
      cells: {
        data: string;
        type: DataCellType;
        moreData?: { [key: string]: any };
      }[];
    }[];
  }>> = {};
    #fb=inject(FormBuilder)
  //form
  //statistics data
  statisticsData: { color: string; value: number }[] = [];
  radius = 100;
  innerRadius = 50;
  //cards function
  form = new FormGroup({
  myCheckbox: new FormControl(true) // התחלה ב-false
});

  ngOnInit() {


    const userId = 4; // ID של המשתמש הרצוי
    //בעיקרון פה לוקחים את הID מהLOCALSTORAGE או משהו בסגנון
    this.#clusterService.getDashboardDataById(userId).subscribe({
      next: (user: any) => {
        this.selectedUser = user;
       // // console.log('Selected User:', this.selectedUser);
        // הכנת הנתונים לגרף
        this.statisticsData = [
          { color: '#1334B9', value: user.newSuggestionPending || 0 }, // New Suggestions
          { color: '#A5EBDD', value: user.oldSuggestionPending || 0 }, // Old Suggestions
          { color: '#A1AEE3', value: user.suggestionProcessedLastMonth || 0 }, // Suggestions Processed
          { color: '#F6CDCD', value: user.clustersCreatedManually || 0 }, // Clusters Created
        ];
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      },
    });
    this.#clusterService.getDashboardTableDataById(userId).subscribe({
      next: (user: any) => {
        this.processTableData(user);
      },
      error: (err) => {
        console.error('Error fetching user:', err);
      },
    });
  }
  processTableData(user: any): void {
    this.tableData = {
      [HomeTableTabType.NEW_SUGGESTIONS]: {
        Headers: [
          { data: 'Name List', type: HeaderCellType.TEXT },
          { data: 'To Do', type: HeaderCellType.TEXT }
        ],
        Rows: user.newSuggestions.map((suggestion: any) => ({
          property: BasicTableRowPropertyVariants.DEFAULT,
          showAction: true,
          cells: [
            { data: suggestion.nameList, type: DataCellType.TEXT },
            { data: suggestion.toDo, type: DataCellType.TEXT }
          ]
        }))
      },
      [HomeTableTabType.OLD_SUGGESTIONS]: {
        Headers: [
          { data: 'Name List', type: HeaderCellType.TEXT },
          { data: 'Done', type: HeaderCellType.TEXT },
          { data: 'To Do', type: HeaderCellType.TEXT }
        ],
        Rows: user.oldSuggestions.map((suggestion: any) => ({
          property: BasicTableRowPropertyVariants.DEFAULT,
          showAction: true,
          cells: [
            { data: suggestion.nameList, type: DataCellType.TEXT },
            { data: suggestion.done, type: DataCellType.SLIDER },
            { data: suggestion.toDo, type: DataCellType.TEXT }
          ]
        }))
      }
    };
   // // console.log("tableData", this.tableData);

  }
}
