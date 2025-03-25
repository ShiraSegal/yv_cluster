import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, filter, map, Observable, take, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ClusterApiService } from './cluster-api.service';


@Injectable({
  providedIn: 'root'
})
export class ClusterService {
  #translateService = inject(TranslateService);
  #clusterApiService = inject(ClusterApiService)

  private autoClusterListSubject$ = new BehaviorSubject<string[]>([]);
  private isLoadingBehaviorSubject$= new BehaviorSubject<boolean>(false);
  private statisticDataSubject$ = new BehaviorSubject<any[]>([]);
 
  async getAutoClusterData() {
    var res = this.#clusterApiService.getAutoClusterData();
      (await res).pipe(take(1), tap(res => {
        if(res){
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

  get statisticData$(): Observable<any[]> {
    if(!this.statisticDataSubject$.value.length){
      this.getStatisticData();
    }
    return this.statisticDataSubject$.asObservable();
  }

  async getStatisticData() {
    var res = this.#clusterApiService.getStatisticData();
      (await res).pipe(take(1), tap(res => {
        if(res){
        this.statisticDataSubject$.next(res);
        }
      })).subscribe();
      return res;
    }
  
 

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
