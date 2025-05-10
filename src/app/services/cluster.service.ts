import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, filter, lastValueFrom, map, Observable, of, take, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ClusterApiService } from './cluster-api.service';
import { LastName } from '../models/LastName';
import { LastNameInPlaces } from '../models/LastNameInPlaces';
import { StatisticDetail } from '../models/StatisticDetail';
import { StatisticData } from '../models/StatisticData';
import { ValueCodeItem } from '../models/ValueCodeItem';
import { ClusterGroupWithCrmLinks } from '../models/ClusterGroupWithCrmLinks';
import { ClusteredNameRow } from '../models/ClusteredNameRow';
import { RootObjectOfClusterGroupDetails } from '../models/RootObjectOfClusterGroupDetails';
// import { map } from 'rxjs/operators';


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

  getStatisticData(): Observable<StatisticData | null> {
    return this.#clusterApiService.getStatisticData().pipe(
      take(1),
      map((res: any) => {
        // Map the raw data to the defined StatisticData structure
        return new StatisticData(
          res.totalCount,
          res.details.map((detail: any) => new StatisticDetail(
            new LastName(detail.LastName.Count, detail.LastName.Code, detail.LastName.Value),
            new LastNameInPlaces(
              detail.LastNameInPlaces.TotalCount,
              detail.LastNameInPlaces.Count,
              detail.LastNameInPlaces.Code,
              detail.LastNameInPlaces.Value
            )
          ))
        );
      }),
      catchError(err => {
        console.error('Error fetching statistic data:', err);
        return of(null);
      })
    );
  }

  getClusterGroupDetails(): Observable<RootObjectOfClusterGroupDetails | null> {
    return this.#clusterApiService.getClusterGroupDetails().pipe(
      take(1),
      map((res: any) => {
        const clusteredPeople: ClusteredNameRow[] = res.d.ClusteredNameRowList.map((row: any) => new ClusteredNameRow(
          row.__type,
          row.BookId,
          new ValueCodeItem(row.FirstName.__type, row.FirstName.Code, row.FirstName.Value),
          new ValueCodeItem(row.LastName.__type, row.LastName.Code, row.LastName.Value),
          new ValueCodeItem(row.FatherFirstName.__type, row.FatherFirstName.Code, row.FatherFirstName.Value),
          new ValueCodeItem(row.MotherFirstName.__type, row.MotherFirstName.Code, row.MotherFirstName.Value),
          new ValueCodeItem(row.PlaceOfBirth.__type, row.PlaceOfBirth.Code, row.PlaceOfBirth.Value),
          new ValueCodeItem(row.PermanentPlace.__type, row.PermanentPlace.Code, row.PermanentPlace.Value),
          new ValueCodeItem(row.DateOfBirth.__type, row.DateOfBirth.Code, row.DateOfBirth.Value),
          new ValueCodeItem(row.Source.__type, row.Source.Code, row.Source.Value),
          new ValueCodeItem(row.SpouseFirstName.__type, row.SpouseFirstName.Code, row.SpouseFirstName.Value),
          row.MaidenName,
          row.IsClustered,
          row.ExistsClusterId,
          row.RelatedFnameGroupId,
          row.IsHasRelatedFname,
          row.Ind,
          row.HasRelatedGroups,
          row.Score,
          row.NumberOfSuggestions,
          row.RelatedFnameList
        ));
  
        const clusterGroup = new ClusterGroupWithCrmLinks(
          res.d.__type,
          clusteredPeople,
          res.d.CrmLinkList,
          res.d.contact
        );
  
        return new RootObjectOfClusterGroupDetails(clusterGroup);
      }),
      catchError(err => {
        console.error('Error fetching cluster group details:', err);
        return of(null);
      })
    );
  }
  deleteClusteredNameByBookId(list: any[], bookId: string): any[] {
    return list.filter(item => item[1].data !== bookId);
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


