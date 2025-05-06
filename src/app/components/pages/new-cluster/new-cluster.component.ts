import { Component } from '@angular/core';
import { TableGroupIdDetailsComponent } from '../../basic-components/table-group-id-details/table-group-id-details.component';

@Component({
  selector: 'yv-cluster-new-cluster',
  standalone: true,
  imports: [TableGroupIdDetailsComponent],
  templateUrl: './new-cluster.component.html',
  styleUrl: './new-cluster.component.scss'
})
export class NewClusterComponent {
groupId:number; // הגדרת ה-Group Id, ניתן לשנות לפי הצורך
}
