import { Component, inject, Input } from '@angular/core';
import { BasicToggleComponent } from '../../basic-components/basic-toggle/basic-toggle.component';
import { CommonModule } from '@angular/common';
import { CompareModalButtonComponent } from '../../basic-components/compare-modal-button/compare-modal-button.component';
import { Subscription } from 'rxjs';
import { ViewerComponent } from '../../basic-components/viewer/viewer.component';
import { RecordDetailsComponent } from '../record-details/record-details.component';
import { CompaereDetailsData } from 'src/app/models/compaereDetailsData';
import { ClusterService } from 'src/app/services/cluster.service';

@Component({
  selector: 'yv-cluster-compare-modal-table',
  standalone: true,
  imports: [CommonModule, BasicToggleComponent, CompareModalButtonComponent, ViewerComponent, RecordDetailsComponent],
  templateUrl: './compare-modal-table.component.html',
  styleUrls: ['./compare-modal-table.component.scss']
})
export class CompareModalTableComponent {
  compareData: any[] = [];
  #service = inject(ClusterService);
  subscription: Subscription = new Subscription();
  ngOnInit() {
    this.#service.getCompareData()
      .subscribe({
        next: (res: CompaereDetailsData[] | null) => {
          this.compareData = res || [];
          console.log("getCompareDataInCom", res);

          console.log("compareData", this.compareData);
        },
        error: (err) => {
          console.log("Error fetching compare data", err);
        },
        complete: () => {
          console.log("Observable completed");
        }
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleDetailsModeChange(isActive: boolean, index: number) {
    this.compareData[index].detailsOn = isActive; // מעדכן את המצב של details בקומפוננטת האב
  }

  handleImageModeChange(isActive: boolean, index: number) {
    this.compareData[index].imageOn = isActive; // מעדכן את המצב של details בקומפוננטת האב
  }
}