import { Component, inject } from '@angular/core';
import { ClusterService } from 'src/app/services/cluster.service';
import { BasicCardComponent } from '../../basic-components/basic-card/basic-card.component';
import { IconType } from 'src/app/enums/icon-enum';
import { BasicTableRowPropertyVariants, DataCellType, HeaderCellType, HomeTableTabType, TextSize, TextWeight } from 'src/app/enums/basic-enum';
import { HeadingComponent } from '../../basic-components/heading/heading.component';
import { BasicTableWarpComponent } from '../../basic-components/basic-table-warp/basic-table-warp.component';

@Component({
  selector: 'yv-cluster-home',
  standalone: true,
  imports: [BasicCardComponent,HeadingComponent,
  BasicTableWarpComponent
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
    (await this.clusterService.getAutoClusterData()).subscribe({
      next: (data: any) => {
        console.log('Received data:', data);
        this.tableData = data;
      },
      error: (err: any) => {
        console.error('Error fetching data:', err);
      }
    });
  }
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
