import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, filter, map, Observable, take, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ClusterApiService } from './cluster-api.service';
import { CompaereDetailsData } from '../models/compaereDetailsData';


@Injectable({
  providedIn: 'root'
})
export class ClusterService {
  //       }
  //       else{
  //       this.showMessage("messageDialog.errorMessage.title","messageDialog.errorMessage.message");}
  //     }
  //   })).subscribe();
  //   return res;
  // }
  // getCompareDataObservable() {
  //   throw new Error('Method not implemented.');
  // }

  // getCompareDataObservable(): Observable<CompaereDetailsData[]> {
  //   console.log("1");
  //   var res= this.#clusterApiService.getCompareData(res).pipe(
  //     take(1),
  //     tap(res => {   
  //       console.log("2");
  //       console.log('Response received:', res); 
  //     }),
      
  //     map((res: any[]) => {
  //       // מיפוי הנתונים למודל CompaereDetailsData
  //       return res.map(item => {
  //         const { title, ...records } = item;
  //         return new CompaereDetailsData(title, records);
  //       });   
  //     })
  //   );
  // }
  #clusterApiService = inject(ClusterApiService)


  // getCompareDataObservable() {
  //   return this.#clusterApiService.getCompareData().pipe(
  //     take(1),
  //     tap(res => {
        
  //     }),
  //     map((res: any[]) => {
  //       // מיפוי הנתונים למודל CompaereDetailsData
  //       return res.map(item => {
  //         const { title, ...records } = item;
  //         return new CompaereDetailsData(title, records);
  //       });
  //     })
  //   );
  // }
  getCompareDataObservable() {
    return this.#clusterApiService.getCompareData().pipe(
    take(1),
      tap(res => {
      }),
      map(res => res)
    );
  }


  private autoClusterListSubject$ = new BehaviorSubject<string[]>([]);
  private isLoadingBehaviorSubject$ = new BehaviorSubject<boolean>(false);

  async getAutoClusterData() {
    var res = this.#clusterApiService.getAutoClusterData();
    (await res).pipe(take(1), tap(res => {
      if (res) {
        this.autoClusterListSubject$.next(res);
      }
    })).subscribe();
    return res;
  }

  get missingFieldsItem$() {
    //return this.autoClusterListSubject$.pipe(map(s=>{s.clusterID, s.comments})).asObservable();//filter only missingFileds
    return this.autoClusterListSubject$.asObservable();
  }

  get checklistItem$() {
    return this.autoClusterListSubject$.asObservable();//filter only missingFileds
  }

  get isLoading$() {
    return this.isLoadingBehaviorSubject$.asObservable();
  }

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
