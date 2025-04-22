import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, filter, take, tap } from 'rxjs';
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
 
   
    private createClusterData$ = new BehaviorSubject<any[]>([]);
   
  get ClusterData$()
    {
      if(!this.createClusterData$.value.length)
      {
        this.getCreateClusterData();
      }
      return this.createClusterData$.asObservable();
    }
   


  async getCreateClusterData() {
    const res = this.#clusterApiService.getCreateClusterData();
    console.log("res",res);
    
    const result = (await res)
      .pipe(
        take(1),
        map(res => res?.SapirClusterDetails || []), // מיפוי התוצאה להחזרת SapirClusterDetails בלבד
        tap(details => {
          if (details) {
            this.createClusterData$.next(details); // עדכון ה-Subject עם המערך
          }
        })
      )
      .subscribe(); // המרה ל-Promise כדי לעבוד עם await
      console.log("result",result);
      
    return result; // מחזיר את המערך SapirClusterDetails
  }
 }
