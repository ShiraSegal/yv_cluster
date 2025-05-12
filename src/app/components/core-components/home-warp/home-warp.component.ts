import { Component, inject } from '@angular/core';
import { ClusterService } from 'src/app/services/cluster.service';

@Component({
  selector: 'yv-cluster-home-warp',
  standalone: true,
  imports: [],
  templateUrl: './home-warp.component.html',
  styleUrl: './home-warp.component.scss'
})
export class HomeWarpComponent {
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

  
}
