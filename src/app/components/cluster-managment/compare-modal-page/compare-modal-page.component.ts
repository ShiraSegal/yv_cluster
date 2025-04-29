import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CompareModalTableComponent } from '../compare-modal-table/compare-modal-table.component';
import { CompareModalButtonComponent } from '../../basic-components/compare-modal-button/compare-modal-button.component';
import { ClusterService } from 'src/app/services/cluster.service';
import { CompareModalService } from 'src/app/services/compare-modal.service';


@Component({
  selector: 'yv-cluster-compare-modal-page',
  standalone: true,
  imports: [CommonModule, CompareModalTableComponent, CompareModalButtonComponent],
  templateUrl: './compare-modal-page.component.html',
  styleUrls: ['./compare-modal-page.component.scss']
})
export class CompareModalPageComponent {
  data: any[] = []; 
    constructor(private compareModalService: CompareModalService) { }
    // ngOnInit(){
    //   this.compareModalService.CompareData$.subscribe(data => {
    //     console.log("data",data);
    //     this.data = data;
    //   });
    // }  
}