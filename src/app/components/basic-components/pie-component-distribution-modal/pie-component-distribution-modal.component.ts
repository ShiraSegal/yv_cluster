import { CommonModule } from '@angular/common';
import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PieCircleComponent } from '../pie-circle/pie-circle.component';
import { PieTableComponent } from '../pie-table/pie-table.component';
import { ButtonComponent } from '../button/button.component';
import { ButtonSize, ButtonType } from 'src/app/enums/basic-enum';
import { Observable } from 'rxjs';
import { ClusterService } from 'src/app/services/cluster.service';

@Component({
  selector: 'yv-cluster-pie-component-distribution-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, PieCircleComponent, PieTableComponent,ButtonComponent],
  templateUrl: './pie-component-distribution-modal.component.html',
  styleUrls: ['./pie-component-distribution-modal.component.scss']
})
export class PieComponentDistributionModalComponent {
    #clusterService = inject(ClusterService)
  @Input() title!: string;
  colorsArray: string[] = ['#F6CDCD', '#A5B1C0', '#A1AEE3', '#A5EBDD',];

  showAllThaDatabasePie: boolean = true;
  tertiany:ButtonType=ButtonType.TERTIARY;
  size:ButtonSize=ButtonSize.SMALL;

  constructor(private clusterService: ClusterService) {}
  statisticData: any; // מערך ולא Observable
  ngOnInit() {
    this.clusterService.statisticData$.subscribe(data => {
      this.statisticData = data;
    });
    console.log("statisticData:", this.statisticData); // ככה הנתונים יודפסו נכון
  }

  data = {
    "LastName": [{
      "Count": 3000,
      "Code": "T342541",
      "Value": "Bilstein"
    }, {
      "Count": 1000,
      "Code": "T342541",
      "Value": "Goldstein"
    }, {
      "Count": 600,
      "Code": "T342541",
      "Value": "Frankens"
    }, {
      "Count": 1500,
      "Code": "T342541",
      "Value": "Blumen"
    }
    // , {
    //   "Count": 1200,
    //   "Code": "T342541",
    //   "Value": "Glukigen"
    // }
    // , {
    //   "Count": 200,
    //   "Code": "T342541",
    //   "Value": "Glukigen"
    // }
    // , {
    //   "Count": 200,
    //   "Code": "T342541",
    //   "Value": "Glukigen"
    // }
    ]
    ,
    "LastNameInPlaces": [
      {
        "TotalCount": 11816,
        "Count": 2200,
        "Code": "5430861",
        "Value": "Loeln"

      },
      {
        "TotalCount": 11816,
        "Count": 3000,
        "Code": "5430861",
        "Value": "Koeln"

      },
      {
        "TotalCount": 11816,
        "Count": 1500,
        "Code": "5430861",
        "Value": "Rhine"

      }
    ]
  }
  changeTheShowingPei() {
    this.showAllThaDatabasePie = !this.showAllThaDatabasePie;
    console.log("האם הפאי של כל המסד נתונים מוצג?:" + this.showAllThaDatabasePie);

  }
}
