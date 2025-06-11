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
  iconType = IconType;
  textSize = TextSize;
  textWeight = TextWeight;

  tableData: any;
  clusterService = inject(ClusterService);
  async ngOnInit() {
    try {
      const data = await this.clusterService.getAutoClusterData();
      console.log('Received data:', data);
      this.tableData = data;
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }
  statisticsData = [
    { color: '#FF5733', value: 40 }, // Example segment 1
    { color: '#33FF57', value: 30 }, // Example segment 2
    { color: '#3357FF', value: 20 }, // Example segment 3
    { color: '#F3FF33', value: 10 }  // Example segment 4
  ];

  radius = 120; // Outer radius
  innerRadius = 60; // Inner radius
    data = {
      [HomeTableTabType.NEW_SUGGESTIONS]: {
        Headers: [
          { data: 'Name List', type: HeaderCellType.TEXT },
          { data: 'To Do', type: HeaderCellType.TEXT },
          { data: '', type: HeaderCellType.CHECK },
        ],
        Rows: [
          {
            property: BasicTableRowPropertyVariants.VARIANT2,
            showAction: true,
            cells: [
              { data: 'sapir cluster', type: DataCellType.TEXT },
              { data: 'In Progress', type: DataCellType.TEXT },
              { data: '', type: DataCellType.ICON },
            ],
          },
          {
            property: BasicTableRowPropertyVariants.VARIANT2,
            showAction: false,
            cells: [
              { data: 'sapir cluster', type: DataCellType.TEXT },
              { data: 'In Progress', type: DataCellType.TEXT },
              { data: '', type: DataCellType.ICON },
            ],
          },
        ],
      },
    }
}
