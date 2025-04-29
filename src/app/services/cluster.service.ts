import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, filter, lastValueFrom, Observable, take, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ClusterApiService } from './cluster-api.service';
import { map } from 'rxjs/operators';


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
 
   
   createClusterData$ = new BehaviorSubject<any[]>([]);
   
  // get ClusterData$()
  //   {
  //     if(!this.createClusterData$.value.length)
  //     {
  //       this.getCreateClusterData();
  //     }
  //     return this.createClusterData$.asObservable();
  //   }
   


   getCreateClusterData() {
    
    const result = this.#clusterApiService.getCreateClusterData()
      .pipe(
        take(1),
        map(res => res?.SapirClusterDetails || []), // מיפוי התוצאה להחזרת SapirClusterDetails בלבד
       
        tap(details => { debugger
          if (details) {
            this.createClusterData$.next(details); // עדכון ה-Subject עם המערך
          }
        })
      )
      console.log("result",result);
      
    return result; // מחזיר את המערך SapirClusterDetails
  }
 }
