import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, filter, lastValueFrom, Observable, of, take, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ClusterApiService } from './cluster-api.service';
import { map } from 'rxjs/operators';
import { NativeOptionState, NativeOptionType } from '../enums/basic-enum';


@Injectable({
  providedIn: 'root'
})
export class ClusterService {
  #translateService = inject(TranslateService);
  #clusterApiService = inject(ClusterApiService)

 autoClusterListSubject$ = new BehaviorSubject<string[]>([]);
  private isLoadingBehaviorSubject$= new BehaviorSubject<boolean>(false);
  private isDataFetched = false;
  
  async getAutoClusterData() {
    try {
      const res = (await this.#clusterApiService.getAutoClusterData())
        .pipe(
          take(1),
          tap((data: any) => {
            console.log('Fetched data:', data); // בדיקה שהנתונים מגיעים
            this.autoClusterListSubject$.next(data); // שמירת הנתונים ב-BehaviorSubject
          }),
          catchError(err => {
            console.error('Error fetching auto cluster data:', err);
            return of([]);
          })
        );
      return res.toPromise();
    } catch (error) {
      console.error('Error in getAutoClusterData:', error);
      return [];
    }
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
  private assigneeList$ = new BehaviorSubject<string[]>([]);

  get AssigneeList$(): Observable<string[]> {
    if (!this.assigneeList$.value.length) {
      this.#clusterApiService.getAssigneeList()
        .pipe(
          take(1),
          map(data => data.map(item => item.name)),
          tap(names => this.assigneeList$.next(names))
        )
        .subscribe();
    }
  
    return this.assigneeList$.asObservable();
  }
}