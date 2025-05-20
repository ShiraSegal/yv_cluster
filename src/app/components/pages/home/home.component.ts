import { Component, inject } from '@angular/core';
import { ClusterService } from 'src/app/services/cluster.service';
import { BasicCardComponent } from '../../basic-components/basic-card/basic-card.component';
import { IconType } from 'src/app/enums/icon-enum';
import { BasicTableRowPropertyVariants, DataCellType, HeaderCellType, HomeTableTabType, TextSize, TextWeight } from 'src/app/enums/basic-enum';
import { HeadingComponent } from '../../basic-components/heading/heading.component';
import { BasicTableWarpComponent } from '../../basic-components/basic-table-warp/basic-table-warp.component';
import { SuggestionsStatisticsComponent } from '../../basic-components/suggestions-statistics/suggestions-statistics.component';

@Component({
  selector: 'yv-cluster-home',
  standalone: true,
  imports: [BasicCardComponent,HeadingComponent,
  BasicTableWarpComponent,SuggestionsStatisticsComponent
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
  //cards function
  
  ngOnInit() {
    const userId = 4; // ID של המשתמש הרצוי
//בעיקרון פה לוקחים את הID מהLOCALSTORAGE או משהו בסגנון
    this.#clusterService.getDashboardDataById(userId).subscribe({
      next: (user: any) => {
        this.selectedUser = user;
        console.log('Selected User:', this.selectedUser);
       // הכנת הנתונים לגרף
       this.statisticsData = [
        { color: '#A5EBDD', value: user.newSuggestionPending || 0 }, // New Suggestions
        { color: '#1334B9', value: user.oldSuggestionPending || 0 }, // Old Suggestions
        { color: '#A1AEE3', value: user.suggestionProcessedLastMonth || 0 }, // Suggestions Processed
        { color: '#F6CDCD', value: user.clustersCreatedManually || 0 }, // Clusters Created
      ];
    },
      error: (err) => {
        console.error('Error fetching user:', err);
      },
    });
  }
//table-data

 //statistics data
 statisticsData: { color: string; value: number }[] = [];
 radius = 100;
 innerRadius = 50;
}
