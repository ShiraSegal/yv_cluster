import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, take, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ClusterApiService } from './cluster-api.service';
import { lastName } from '../models/last-name.model';
import { lastNameInPlaces } from '../models/last-name-inplaces.model';
import { statisticDetail } from '../models/statistic-detail.model';
import { statisticData } from '../models/statistic-data.model';
import { ValueCodeItem } from '../models/value-code-item.model';
import { ClusterGroupWithCrmLinks } from '../models/cluster-group-with-crm-links.model';
// import { map } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { SapirClusterModel } from '../models/sapir-cluster-model.model';
// import { RootObject } from '../models/root-object.model';
import { LoadingService } from './loading.service';
import { BookIdDetails } from '../models/book-id-details.model';
import { MessageService } from './message.service';
import { MessageType } from '../enums/basic-enum';
import { log } from 'console';
import { CompaereDetailsData } from '../models/compaereDetailsData.model';



@Injectable({
  providedIn: 'root',
})
export class ClusterService {
  #translateService = inject(TranslateService);
  #clusterApiService = inject(ClusterApiService);
  #loadingService = inject(LoadingService);
  #messageService = inject(MessageService);

  fieldsToDisplayInCreateCluster: string[] = [
    'firstName',
    'lastName',
    'fatherFirstName',
    'motherFirstName',
    'spouseFirstName',
    'dateOfBirth',
    'placeOfBirth',
    'permanentPlace',
    'source',
    'placeOfDeath',
    'authenticDateOfBirth',
    'restoredDateOfBirth',
    'authenticDateOfDeath',
    'restoredDateOfDeath',
    'gender',
    'fate',
  ];

  // valuesToDisplayedFields: { [key in string]:
  //   { key: string, value: string }[]
  // }
  autoClusterListSubject$ = new BehaviorSubject<string[]>([]);

  private isLoadingBehaviorSubject$ = new BehaviorSubject<boolean>(false);
  private isDataFetched = false;
  currentUser: { id: number; name: string; role: string } = {
    id: 1,
    name: 'Yehudit Leibowitz',
    role: 'manager',
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
      tap((user) => {}),
      catchError((err) => {
        return of(null); // החזרת ערך ברירת מחדל במקרה של שגיאה
      })
    );
  }
  login(id: number): Observable<any> {
    return this.#clusterApiService.login(id).pipe(
      take(1),
      tap((user) => {
        this.currentUser = user;
      }),
      catchError((err) => {
        return of(null); // החזרת ערך ברירת מחדל במקרה של שגיאה
      })
    );
  }

  
  getCompareData(): Observable<CompaereDetailsData[]> {
    return this.#clusterApiService.getCompareData().pipe(
      take(1),
      map((res: any[]) => {
        const recordsMap: { [key: string]: { [key: string]: string } } = {};
        res.forEach(item => {
          Object.keys(item).forEach(key => {
            if (key.startsWith('record')) {
              if (!recordsMap[key]) {
                recordsMap[key] = {};
              }
              recordsMap[key][item.title] = item[key] || '';
            }
          });
        });
        return Object.keys(recordsMap).map(recordKey => {
          return new CompaereDetailsData(recordKey, recordsMap[recordKey]);
        });
      }),
      tap(mappedRes => console.log("Mapped Compare Data", mappedRes)),
      catchError(err => {
        console.error("Error in getCompareData:", err);
        return of([]);
      })
    );
  }
   async getAutoClusterData(): Promise<Observable<string[]>> {
    return (await (this.#clusterApiService.getAutoClusterData())).pipe(
      take(1),
      catchError((err) => {
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
          res.details.map(
            (detail: any) =>
              new statisticDetail(
                new lastName(
                  detail.lastName.count,
                  detail.lastName.code,
                  detail.lastName.value
                ),
                new lastNameInPlaces(
                  detail.lastNameInPlaces.totalCount,
                  detail.lastNameInPlaces.count,
                  detail.lastNameInPlaces.code,
                  detail.lastNameInPlaces.value
                )
              )
          )
        );
      }),
      catchError((err) => {
        console.error('Error fetching statistic data:', err);
        return of(null);
      })
    );
  }

  getClusterGroupDetails(
    groupId: string
  ): Observable<ClusterGroupWithCrmLinks | null> {
    //  this.#loadingService.show();
    return this.#clusterApiService.getClusterGroupDetails(groupId).pipe(
      take(2),
      map((res: any) => {
        if (!res) {
          return null;
        }
        const clusteredPeople: BookIdDetails[] = res.bookIdDetailsList.map(
          (row: any) =>
            new BookIdDetails(
              row.bookId,
              new ValueCodeItem(row.firstName.code, row.firstName.value),
              new ValueCodeItem(row.lastName.code, row.lastName.value),
              new ValueCodeItem(
                row.fatherFirstName.code,
                row.fatherFirstName.value
              ),
              new ValueCodeItem(
                row.motherFirstName.code,
                row.motherFirstName.value
              ),
              new ValueCodeItem(row.placeOfBirth.code, row.placeOfBirth.value),
              new ValueCodeItem(
                row.permanentPlace.code,
                row.permanentPlace.value
              ),
              new ValueCodeItem(row.dateOfBirth.code, row.dateOfBirth.value),
              new ValueCodeItem(row.source.code, row.source.value),
              new ValueCodeItem(
                row.spouseFirstName.code,
                row.spouseFirstName.value
              ),
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
            )
        );

        const clusterGroup = new ClusterGroupWithCrmLinks(
          clusteredPeople,
          res.crmLinkList,
          res.contact
        );
        //  this.#loadingService.hide();
        return clusterGroup;

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
      this.#clusterApiService
        .getAssigneeList()
        .pipe(
          take(1),
          map((data) => data.map((item) => item.name)),
          tap((names) => this.assigneeList$.next(names))
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

  getCreateClusterData(bookIds: string[]) {
    const result = this.#clusterApiService.getCreateClusterData(bookIds).pipe(
      take(1),
      // map(res => res?.SapirClusterDetails || []), // מיפוי התוצאה להחזרת SapirClusterDetails בלבד

      tap((res) => {
        console.log('getCreateClusterData', res);
        //  this.#messageService.showToastMessage(
        //   {
        //    type: MessageType.SUCCESS,
        //    heading: 'Success',
        //    content: "Cluster created successfully!"
        //   }
        //   );
      }),
      catchError((err) => {
        this.#messageService.showToastMessage({
          type: MessageType.ERROR,
          heading: 'Error',
          content: err.message,
        });
        return of(null);
      })
    );

    // // console.log("result",result);

    return result; // מחזיר את המערך SapirClusterDetails
  }
  checkDuplicateValues(field: { key: string, value: string }[], item: { key: string, value: string }): boolean {
    return field.some(existingItem => existingItem.key === item.key && existingItem.value === item.value);
  }

  id:number = 0;
  dispalayFieldsToCreateClusterForm(
    bookIdDetails: BookIdDetails,
    valuesToDisplayedFields: {
      [key in string]: { key: string; value: string }[];
    }
  ) {
    this.fieldsToDisplayInCreateCluster.forEach((field) => {
      const fieldValue = bookIdDetails[field];
      if (fieldValue && !this.checkDuplicateValues(valuesToDisplayedFields[field], { key: fieldValue.code, value: fieldValue.value })) {
        // if(fieldValue.code===null){
        //   // console.log("fieldValue.code is empty", field, fieldValue);
        //   fieldValue.code = `${field}${this.id++}`; // Assign a unique code if it's null
        // }
        // console.log("Adding field value to valuesToDisplayedFields", field, fieldValue);
        
        valuesToDisplayedFields[field].push({
          key: fieldValue.code,
          value: fieldValue.value,
        });
      }
    });
    return valuesToDisplayedFields;
  }

  createCluster(sapirClusterModel: SapirClusterModel) {
    return this.#clusterApiService.createCluster(sapirClusterModel).pipe(
      take(1), // מבטיח שהבקשה תסתיים לאחר ערך אחד
      tap((res) => {
        // console.log("Cluster created successfully:", res); // לוג לתוצאה
        // return res;
      }),
      catchError((err) => {
        console.error('Error occurred while creating cluster:', err); // טיפול בשגיאה
        //  return of(err); // החזרת ערך ברירת מחדל במקרה של שגיאה
        this.#messageService.showToastMessage({
          type: MessageType.ERROR,
          heading: 'Error',
          content: err.message,
        });
        return of(null);
      })
    );
  }

  getSingleItemByBookId(bookId: string): Observable<BookIdDetails | any> {
    return this.#clusterApiService.getSingleItemByBookId(bookId).pipe(
      tap((res) => {
        console.log('BookId fetched successfully:', res);
      }),
      catchError((err) => {
        this.#messageService.showToastMessage({
          type: MessageType.ERROR,
          heading: 'Error',
          content: err.message,
        });
        return of(null);
      })
    );
  }

  getClusterGroupByBookId(cluster: string): Observable<BookIdDetails | any> {
    return this.#clusterApiService.getClusterGroupByBookId(cluster).pipe(
      take(1), // מבטיח שהבקשה תסתיים לאחר ערך אחד
      tap((res) => {
        // // console.log("Cluster added successfully:", res); // לוג לתוצאה
        // return res;
      }),
      catchError((err) => {
        console.error('Error occurred while creating cluster:', err); // טיפול בשגיאה
        return of(err); // החזרת ערך ברירת מחדל במקרה של שגיאה
      })
    );
  }
}