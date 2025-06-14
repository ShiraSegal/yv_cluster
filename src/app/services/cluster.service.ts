import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError,Observable, of, take, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ClusterApiService } from './cluster-api.service';
import { LastName } from '../models/last-name.model';
import { LastNameInPlaces } from '../models/last-name-inplaces.model';
import { StatisticDetail } from '../models/statistic-detail.model';
import { StatisticData } from '../models/statistic-data.model';
import { ValueCodeItem } from '../models/value-code-item.model';
import { ClusterGroupWithCrmLinks } from '../models/cluster-group-with-crm-links.model';
import { ClusteredNameRow } from '../models/clustered-name-row.model';
import { RootObjectOfClusterGroupDetails } from '../models/root-object-of-cluster-group-details.model';
// import { map } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { SapirClusterModel } from '../models/sapir-cluster-model.model';
import { RootObject } from '../models/root-object.model';


@Injectable({
  providedIn: 'root'
})
export class ClusterService
 {
  #translateService = inject(TranslateService);
  #clusterApiService = inject(ClusterApiService)

 autoClusterListSubject$ = new BehaviorSubject<string[]>([]);

  private isLoadingBehaviorSubject$= new BehaviorSubject<boolean>(false);
  private isDataFetched = false;
  currentUser: { id:number,name:string,role:string} = {
    "id": 1,
    "name": "Yehudit Leibowitz",
     "role": "manager"
    // "role": "worker"
};

  getDashboardDataById(id: number): Observable<any> {
    return this.#clusterApiService.getDashboardDataById(id).pipe(
      take(1),
      tap((user) => {
       // // console.log(`Fetched user with ID ${id}:`, user);
      }),
      catchError((err) => {
        return of(null); // החזרת ערך ברירת מחדל במקרה של שגיאה
      })
    );
  }

  getDashboardTableDataById(id: number): Observable<any> {
    return this.#clusterApiService.getDashboardTableDataById(id).pipe(
      take(1),
      tap((user) => {
      }),
      catchError((err) => {
        return of(null); // החזרת ערך ברירת מחדל במקרה של שגיאה
      })
    );
  }
  login(id: number): Observable<any> {
    return this.#clusterApiService.login(id).pipe(
      take(1),
      tap((user) => {
        this.currentUser = user
      }),
      catchError((err) => {
        return of(null); // החזרת ערך ברירת מחדל במקרה של שגיאה
      })
    );
  }

  getAutoClusterData(): Observable<string[]> {
    return this.#clusterApiService.getAutoClusterData().pipe(
      take(1),
      catchError(err => {
        console.error('Error fetching auto cluster data:', err);
        return of([]); // החזר מערך ריק במקרה של שגיאה
      })
    );
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


  //  createClusterData$ = new BehaviorSubject<any[]>([]);

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
        // map(res => res?.SapirClusterDetails || []), // מיפוי התוצאה להחזרת SapirClusterDetails בלבד

        tap(res => {
         // // console.log("getCreateClusterData", res);

        }),
        catchError(err => {
          return of(null);
        })
      );

     // // console.log("result",result);

    return result; // מחזיר את המערך SapirClusterDetails
  }


  createCluster(sapirClusterModel: SapirClusterModel) {
   return this.#clusterApiService.createCluster(sapirClusterModel)
      .pipe(
        take(1), // מבטיח שהבקשה תסתיים לאחר ערך אחד
        tap(res => {
          // console.log("Cluster created successfully:", res); // לוג לתוצאה
          // return res;
        }),
        catchError(err => {
          console.error("Error occurred while creating cluster:", err); // טיפול בשגיאה
          return of(false); // החזרת ערך ברירת מחדל במקרה של שגיאה
        })
      );
  }

  getSingleItemByBookId (bookId:string): Observable<RootObject |any> {
      return this.#clusterApiService.getSingleItemByBookId(bookId)
      .pipe(
        tap((res) => {
          // console.log("BookId fetched successfully:", res);
        }),
        catchError((err) => {
          console.error("Error occurred while fetching BookId:", err);
          return of(err); // מחזיר false במקרה של שגיאה
        })
      );
  }


  getClusterGroupByBookId(cluster:string): Observable<RootObject | any>{
     return this.#clusterApiService.getClusterGroupByBookId(cluster)
      .pipe(
        take(1), // מבטיח שהבקשה תסתיים לאחר ערך אחד
        tap(res => {
         // // console.log("Cluster added successfully:", res); // לוג לתוצאה
          // return res;
        }),
        catchError(err => {
          console.error("Error occurred while creating cluster:", err); // טיפול בשגיאה
          return of(err); // החזרת ערך ברירת מחדל במקרה של שגיאה
        })
      );
  }
 }
