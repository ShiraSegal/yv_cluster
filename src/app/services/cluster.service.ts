import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError,Observable, of, take, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ClusterApiService } from './cluster-api.service';
import { lastName } from '../models/last-name.model';
import { lastNameInPlaces } from '../models/last-name-inplaces.model';
import { statisticDetail } from '../models/statistic-detail.model';
import { statisticData } from '../models/statistic-data.model';
import { valueCodeItem } from '../models/value-code-item.model';
import { clusterGroupWithCrmLinks } from '../models/cluster-group-with-crm-links.model';
import { clusteredNameRow } from '../models/clustered-name-row.model';
import { rootObjectOfClusterGroupDetails } from '../models/root-object-of-cluster-group-details.model';
// import { map } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { sapirClusterModel } from '../models/sapir-cluster-model.model';
import { RootObject } from '../models/root-object.model';
import { LoadingService } from './loading.service';


@Injectable({
  providedIn: 'root'
})
export class ClusterService
 {
  #translateService = inject(TranslateService);
  #clusterApiService = inject(ClusterApiService)
  #loadingService = inject(LoadingService)

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

  getstatisticData(): Observable<statisticData | null> {
    return this.#clusterApiService.getstatisticData().pipe(
      take(1),
      map((res: any) => {
        // Map the raw data to the defined statisticData structure
        return new statisticData(
          res.totalCount,
          res.details.map((detail: any) => new statisticDetail(
            new lastName(detail.lastName.count, detail.lastName.code, detail.lastName.value),
            new lastNameInPlaces(
              detail.lastNameInPlaces.totalCount,
              detail.lastNameInPlaces.count,
              detail.lastNameInPlaces.code,
              detail.lastNameInPlaces.value
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

  getClusterGroupDetails(): Observable<rootObjectOfClusterGroupDetails | null> {
    //  this.#loadingService.show();
    return this.#clusterApiService.getClusterGroupDetails().pipe(
      take(2),
      map((res: any) => {
        if (!res) {
          return null
        }
        const clusteredPeople: clusteredNameRow[] = res.d.clusteredNameRowList.map((row: any) => new clusteredNameRow(
          row.__type,
          row.bookId,
          new valueCodeItem(row.firstName.__type, row.firstName.code, row.firstName.value),
          new valueCodeItem(row.lastName.__type, row.lastName.code, row.lastName.value),
          new valueCodeItem(row.fatherFirstName.__type, row.fatherFirstName.code, row.fatherFirstName.value),
          new valueCodeItem(row.motherFirstName.__type, row.motherFirstName.code, row.motherFirstName.value),
          new valueCodeItem(row.placeOfBirth.__type, row.placeOfBirth.code, row.placeOfBirth.value),
          new valueCodeItem(row.permanentPlace.__type, row.permanentPlace.code, row.permanentPlace.value),
          new valueCodeItem(row.dateOfBirth.__type, row.dateOfBirth.code, row.dateOfBirth.value),
          new valueCodeItem(row.source.__type, row.source.code, row.source.value),
          new valueCodeItem(row.spouseFirstName.__type, row.spouseFirstName.code, row.spouseFirstName.value),
          row.maidenName,
          row.isClustered,
          row.existsClusterId,
          row.relatedFnameGroupId,
          row.isHasRelatedFname,
          row.ind,
          row.hasRelatedGroups,
          row.score,
          row.numberOfSuggestions,
          row.relatedFnameList
        ));

        const clusterGroup = new clusterGroupWithCrmLinks(
          res.d.__type,
          clusteredPeople,
          res.d.crmLinkList,
          res.d.contact
        );
        console.log("new rootObjectOfClusterGroupDetails(clusterGroup):" + new rootObjectOfClusterGroupDetails(clusterGroup));
        //  this.#loadingService.hide();
        return new rootObjectOfClusterGroupDetails(clusterGroup);

      }),
      catchError(err => {
        this.#loadingService.hide();
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


  createCluster(sapirClusterModel: sapirClusterModel) {
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
