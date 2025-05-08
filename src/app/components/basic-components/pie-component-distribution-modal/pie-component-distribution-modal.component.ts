// import { CommonModule } from '@angular/common';
// import { Component, inject, Input, SimpleChanges } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { PieCircleComponent } from '../pie-circle/pie-circle.component';
// import { PieTableComponent } from '../pie-table/pie-table.component';
// import { ButtonComponent } from '../button/button.component';
// import { ButtonSize, ButtonType } from 'src/app/enums/basic-enum';
// import { from, Observable } from 'rxjs';
// import { ClusterService } from 'src/app/services/cluster.service';
// import { StatisticData } from 'src/app/models/StatisticData';

// @Component({
//   selector: 'yv-cluster-pie-component-distribution-modal',
//   standalone: true,
//   imports: [CommonModule, FormsModule, PieCircleComponent, PieTableComponent, ButtonComponent],
//   templateUrl: './pie-component-distribution-modal.component.html',
//   styleUrls: ['./pie-component-distribution-modal.component.scss']
// })
// export class PieComponentDistributionModalComponent {
//   @Input() title: string;
//   #clusterService = inject(ClusterService)
//   tertiany: ButtonType = ButtonType.TERTIARY;
//   size: ButtonSize = ButtonSize.SMALL;
//   colorsArray: string[] = ['#F6CDCD', '#A5B1C0', '#A1AEE3', '#A5EBDD',];
//   showAllThaDatabasePie: boolean = true;
//   statisticData: StatisticData;
//   lastNames: any[] = []; // מערך של LastName
//   lastNamesInPlaces: any[] = []; // מערך של LastNameInPlaces
//   totalCount: number = 0; // סך כל ה-countים
//   // data = {
//   //   "LastName": [{
//   //     "Count": 3000,
//   //     "Code": "T342541",
//   //     "Value": "Bilstein"
//   //   }, {
//   //     "Count": 1000,
//   //     "Code": "T342541",
//   //     "Value": "Goldstein"
//   //   }, {
//   //     "Count": 600,
//   //     "Code": "T342541",
//   //     "Value": "Frankens"
//   //   }, {
//   //     "Count": 1500,
//   //     "Code": "T342541",
//   //     "Value": "Blumen"
//   //   }
//   //     // , {
//   //     //   "Count": 200,
//   //     //   "Code": "T342541",
//   //     //   "Value": "Glukigen"
//   //     // }
//   //     // , {
//   //     //   "Count": 200,
//   //     //   "Code": "T342541",
//   //     //   "Value": "Glukigen"
//   //     // }
//   //     // , {
//   //     //   "Count": 200,
//   //     //   "Code": "T342541",
//   //     //   "Value": "Glukigen"
//   //     // }
//   //   ]
//   //   ,
//   //   "LastNameInPlaces": [
//   //     {
//   //       "TotalCount": 11816,
//   //       "Count": 2200,
//   //       "Code": "5430861",
//   //       "Value": "Loeln"

//   //     },
//   //     {
//   //       "TotalCount": 11816,
//   //       "Count": 3000,
//   //       "Code": "5430861",
//   //       "Value": "Koeln"

//   //     },
//   //     {
//   //       "TotalCount": 11816,
//   //       "Count": 1500,
//   //       "Code": "5430861",
//   //       "Value": "Rhine"

//   //     }
//   //   ]
//   // };

//   subscription: Observable<any>[] = [];
//   constructor(private clusterService: ClusterService) { }
//   ngOnInit() {
//     this.#clusterService.getStatisticData().subscribe({

//       next: (res: any) => {
//         this.statisticData = res;
//         console.log("this.bigData", this.statisticData);
//         // עיבוד הנתונים
//         this.lastNames = this.statisticData.details.map((detail: any) => detail.lastName);
//         this.lastNamesInPlaces = this.statisticData.details.map((detail: any) => detail.lastNameInPlaces);
//         this.totalCount = this.statisticData.totalCount;
//         console.log("Total Count:", this.totalCount);
//         console.log("Last Names:", this.lastNames);
//         console.log("Last Names In Places:", this.lastNamesInPlaces);
//       },
//       error: (error) => {
//         console.error("getSpecialActivitiesData occurred:", error);
//         // this.#loadingServise.decrement();
//       }


//     })


//   }
//   changeTheShowingPei() {
//     this.showAllThaDatabasePie = !this.showAllThaDatabasePie;
//     console.log("האם הפאי של כל המסד נתונים מוצג?:" + this.showAllThaDatabasePie);

//   }
// }
