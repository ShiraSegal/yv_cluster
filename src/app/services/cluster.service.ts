import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, filter, lastValueFrom, map, Observable, of, take, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ClusterApiService } from './cluster-api.service';
import { LastNameInPlaces } from '../models/LastNameInPlaces';
import { LastName } from '../models/LastName';
import { StatisticDetail } from '../models/StatisticDetail';
import { StatisticData } from '../models/StatisticData';
import { CompaereDetailsData } from '../models/compaereDetailsData';


@Injectable({
  providedIn: 'root'
})
export class ClusterService {
  #translateService = inject(TranslateService);
  #clusterApiService = inject(ClusterApiService)

  private autoClusterListSubject$ = new BehaviorSubject<string[]>([]);
  private isLoadingBehaviorSubject$= new BehaviorSubject<boolean>(false);
  private isDataFetched = false;
  private compareData$=new BehaviorSubject<string[]>([]);
  

  
  // getCompareData() {
  //   const result = this.#clusterApiService.getCompareData()
  //     .pipe(
  //       take(1),
  //       // map(res => res?.SapirClusterDetails || []), // מיפוי התוצאה להחזרת SapirClusterDetails בלבד
  //       tap(res => {
  //         console.log("getcompareClusterData", res);
  //       }),
  //       catchError(err => {
  //         console.log("error", err);
  //         return of(null);
  //       })
  //     );
  //     console.log("result",result);

  //   return result; // מחזיר את המערך SapirClusterDetails
  // }
  getCompareData() {
    const result = this.#clusterApiService.getCompareData()
      .pipe(
        take(1),
        map((res: any[]) => {
          // יצירת מבנה שבו כל recordX הוא מפתח עם הערכים שלו
          const recordsMap: { [key: string]: { [key: string]: string } } = {};
  
          res.forEach(item => {
            Object.keys(item).forEach(key => {
              if (key.startsWith('record')) {
                if (!recordsMap[key]) {
                  recordsMap[key] = {};
                }
                recordsMap[key][item.title] = item[key] || ''; // הוספת הערך למילון
              }
            });
          });
  
          // המרת המילון למערך של RecordDetailsData
          return Object.keys(recordsMap).map(recordKey => {
            return new CompaereDetailsData(recordKey, recordsMap[recordKey]);
          });
        }),
        tap(mappedRes => {
          console.log("Mapped Compare Data", mappedRes);
        }),
        catchError(err => {
          console.log("error", err);
          return of([]); // החזר מערך ריק במקרה של שגיאה
        })
      );
  
    console.log("result", result);
  
    return result; // מחזיר את המערך בצורת המודל RecordDetailsData
  }
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
