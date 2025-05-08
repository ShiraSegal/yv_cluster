import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, filter, lastValueFrom, map, Observable, of, take, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ClusterApiService } from './cluster-api.service';
import { LastNameInPlaces } from '../models/LastNameInPlaces';
import { LastName } from '../models/LastName';
import { StatisticDetail } from '../models/StatisticDetail';
import { StatisticData } from '../models/StatisticData';


@Injectable({
  providedIn: 'root'
})
export class ClusterService {
  #translateService = inject(TranslateService);
  #clusterApiService = inject(ClusterApiService)

  private autoClusterListSubject$ = new BehaviorSubject<string[]>([]);
  private isLoadingBehaviorSubject$= new BehaviorSubject<boolean>(false);
  private isDataFetched = false;
   
  // async getAutoClusterData(): Promise<string[]> {
  //   if (this.isDataFetched) {
  //     return this.autoClusterListSubject$.getValue(); // כבר הבאנו, נחזיר את הערך
  //   }
   
  //   this.isDataFetched = true;
   
  //   // ממיר Observable ל-Promise
  //   const data = await lastValueFrom((await this.#clusterApiService.getAutoClusterData()).pipe(take(1)));
   
  //   if (data) {
  //     this.autoClusterListSubject$.next(data);
  //   }
   
  //   return data;
  // }
  getAutoClusterData() {
     return this.#clusterApiService.getAutoClusterData();
    // .subscribe(data => {
    //   console.log('Real data:', data);
    //   // this.autoClusterListSubject$.next(data);
    //   return data.ClustersWithMissingFields;
    //   // now you can use data however you like
    // });
    //return this.autoClusterListSubject$.pipe(map(s=>{s.clusterID, s.comments})).asObservable();//filter only missingFileds
  }

  get checklistItem$() {
    return this.autoClusterListSubject$.asObservable();//filter only missingFileds
  }

  get isLoading$() {
    return this.isLoadingBehaviorSubject$.asObservable();
  }

  // getStatisticData() {
  //   // let lang = this.#clusterApiService.getStatisticData === undefined ? Language.English : this.#translateService.currentLang;
  //   var res = this.#clusterApiService.getStatisticData()
  //     .pipe(
  //       take(1),
  //       tap(res => {
  //       }),
  //       catchError(err => {
  //         return of(null);
  //       })
  //     );
  //   return res;
  // }
  
  // getStatisticData(): Observable<StatisticData | null> {
  //   return this.#clusterApiService.getStatisticData().pipe(
  //     take(1),
  //     map((res: any) => {
  //       // Map the raw data to the defined StatisticData structure
  //       return new StatisticData(
  //         res.totalCount,
  //         res.details.map((detail: any) => new StatisticDetail(
  //           new LastName(detail.LastName.Count, detail.LastName.Code, detail.LastName.Value),
  //           new LastNameInPlaces(
  //             detail.LastNameInPlaces.TotalCount,
  //             detail.LastNameInPlaces.Count,
  //             detail.LastNameInPlaces.Code,
  //             detail.LastNameInPlaces.Value
  //           )
  //         ))
  //       );
  //     }),
  //     catchError(err => {
  //       console.error('Error fetching statistic data:', err);
  //       return of(null);
  //     })
  //   );
  // }


// =================================


  // createReservation() {
  //   var res = this.#newReservationApiService.createReservation(reservtion);
  //   res.pipe(take(1), tap(res => {
  //     if(res.isOk){
  //     this.reservationItemBehaviorSubject$.next(res.responseObject as ReservationItem);
  //     }else{
  //       if(res.message==="NO_ROOM"){
  //         this.showMessage("messageDialog.noRoom.title","messageDialog.noRoom.message");
  //       }
  //       else{
  //       this.showMessage("messageDialog.errorMessage.title","messageDialog.errorMessage.message");}
  //     }
  //   })).subscribe();
  //   return res;
  // }

}
