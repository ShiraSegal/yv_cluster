import { Component, Input } from '@angular/core';
import { BasicToggleComponent } from '../../basic-components/basic-toggle/basic-toggle.component';
import { CommonModule } from '@angular/common';
import { CompareModalButtonComponent } from '../../basic-components/compare-modal-button/compare-modal-button.component';
import { Subscription } from 'rxjs';
import { CompareModalService } from 'src/app/services/compare-modal.service';
import { ViewerComponent } from '../../basic-components/viewer/viewer.component';
import { ClusterService } from 'src/app/services/cluster.service';


@Component({
  selector: 'yv-cluster-compare-modal-table',
  standalone: true,
  imports: [CommonModule, BasicToggleComponent, CompareModalButtonComponent, ViewerComponent],
  templateUrl: './compare-modal-table.component.html',
  styleUrls: ['./compare-modal-table.component.scss']
})
export class CompareModalTableComponent {
  clusterNumber: String = "Rec 00000";
  toggleState!: string;
  @Input() viewMode: 'image' | 'list' = 'list'; // Input for view mode
  @Input() records: Array<{ name: string, status: 'details' | 'image', image: string }> = []; // Input for records
  // status: boolean = true
  private subscription: Subscription = new Subscription();
  constructor(private compareModalService: CompareModalService) { }
  // constructor(private clusterService: ClusterService) {}

  ngOnInit(): void {
    this.subscription = this.compareModalService.viewMode$.subscribe(mode => {
      this.viewMode = mode;
    });
  }

  handleToggleChange(state: string) {
    this.toggleState = state;
  }

  columns = [
    { header: 'CLUSTER_ID', values: ['16229261', '16229261', '16229261', '16229261', '', ''] },
    { header: 'FIRST_NAME', values: ['Matilda', 'Matilda', 'Matilda Matia', 'Matilda', 'Matilda', 'Adler'] },
    { header: 'LAST_NAME', values: ['Reinish Pozes', 'Reinish Pozes', 'Reinisch Reinish Pozes', 'Reinisch Reinish Pozes', 'Reinisch Reinish Pozes', 'Adler'] },
    { header: 'MAIDEN_NAME', values: ['', '', '', '', '', ''] },
    { header: 'TITLE', values: ['', '', '', '', '', ''] },
    { header: 'GENDER', values: ['Female', 'Female', 'Female', 'Female', 'Female', 'Male'] },
    { header: 'FATHER_FIRST_NAME', values: ['Shlomo Zalman', 'Shlomo Zalman', 'Shlomo Zalman', 'Shlomo Zalman', '', ''] },
    { header: 'FATHER_FIRST_NAME', values: ['Shlomo Zalman', 'Shlomo Zalman', 'Shlomo Zalמן', 'Shlomo Zalman', '', ''] },
    { header: 'CLUSTER_ID', values: ['16229261', '16229261', '16229261', '16229261', '', ''] },
    { header: 'FIRST_NAME', values: ['Matilda', 'Matilda', 'Matilda Matia', 'Matilda', 'Matilda', 'Adler'] },
    { header: 'FIRST_NAME', values: ['Matilda', 'Matilda', 'Matilda Matia', 'Matilda', 'Matilda', 'Adler'] },
    { header: 'CLUSTER_ID', values: ['16229261', '16229261', '16229261', '16229261', '', ''] },
    { header: 'FIRST_NAME', values: ['Matilda', 'Matilda', 'Matilda Matia', 'Matilda', 'Matilda', 'Adler'] },
    { header: 'FIRST_NAME', values: ['Matilda', 'Matilda', 'Matilda Matia', 'Matilda', 'Matilda', 'Adler'] },

    { header: 'FIRST_NAME', values: ['Matilda', 'Matilda', 'Matilda Matia', 'Matilda', 'Matilda', 'Adler'] },
    // { header: 'FIRST_NAME', values: ['Matilda', 'Matilda', 'Matilda Matia', 'Matilda', 'Matilda', 'Adler'] },
    // { header: 'FIRST_NAME', values: ['Matilda', 'Matilda', 'Matilda Matia', 'Matilda', 'Matilda', 'Adler'] },


  ];
  // isRecordImageMode(): boolean {
  //   return this.records.some(record => record.status === 'image');
  // } ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
