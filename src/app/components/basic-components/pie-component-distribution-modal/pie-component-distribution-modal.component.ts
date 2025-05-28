import { CommonModule } from '@angular/common';
import { Component, Inject, inject, Input, Optional, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PieCircleComponent } from '../pie-circle/pie-circle.component';
import { PieTableComponent } from '../pie-table/pie-table.component';
import { ButtonComponent } from '../button/button.component';
import { ButtonSize, ButtonType } from 'src/app/enums/basic-enum';
import { from, Observable } from 'rxjs';
import { ClusterService } from 'src/app/services/cluster.service';
import { StatisticData } from 'src/app/models/statistic-data.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'yv-cluster-pie-component-distribution-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, PieCircleComponent, PieTableComponent],
  templateUrl: './pie-component-distribution-modal.component.html',
  styleUrls: ['./pie-component-distribution-modal.component.scss']
})
export class PieComponentDistributionModalComponent {
  @Input() title: string;
  #clusterService = inject(ClusterService)
  tertiany: ButtonType = ButtonType.TERTIARY;
  size: ButtonSize = ButtonSize.SMALL;
  colorsArray: string[] = ['#F6CDCD', '#A5B1C0', '#A1AEE3', '#A5EBDD',];
  showAllThaDatabasePie: boolean = true;
  statisticData: StatisticData;
  lastNames: any[] = []; // מערך של LastName
  lastNamesInPlaces: any[] = []; // מערך של LastNameInPlaces
  totalCount: number = 0; // סך כל ה-countים
  subscription: Observable<any>[] = [];

  constructor(
    private clusterService: ClusterService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { title: string },
    @Optional() public dialogRef: MatDialogRef<PieComponentDistributionModalComponent>
    ) {}
    onClose(): void {
      this.dialogRef.close();  // סוגר את הדיאלוג
    }
  ngOnInit() {
    this.title = this.data.title;

    this.#clusterService.getStatisticData().subscribe({
      next: (res: any) => {
        this.statisticData = res;
       // console.log("this.bigData", this.statisticData);
        // עיבוד הנתונים
        this.lastNames = this.statisticData.details.map((detail: any) => detail.lastName);
        this.lastNamesInPlaces = this.statisticData.details.map((detail: any) => detail.lastNameInPlaces);
        this.totalCount = this.statisticData.totalCount;
       // console.log("Total Count:", this.totalCount);
       // console.log("Last Names:", this.lastNames);
       // console.log("Last Names In Places:", this.lastNamesInPlaces);
      },
      error: (error) => {
        console.error("getSpecialActivitiesData occurred:", error);
        // this.#loadingServise.decrement();
      }


    })


  }
  changeTheShowingPei() {
    this.showAllThaDatabasePie = !this.showAllThaDatabasePie;
   // console.log("האם הפאי של כל המסד נתונים מוצג?:" + this.showAllThaDatabasePie);

  }
}
