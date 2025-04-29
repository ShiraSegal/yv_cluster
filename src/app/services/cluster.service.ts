import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, filter, lastValueFrom, Observable, of, take, tap } from 'rxjs';
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
  private isDataFetched = false;
  
  getAutoClusterData() {
    var res = this.#clusterApiService.getAutoClusterData(
      
    )
      .pipe(
        take(1),
        tap(res => {
        }),
        catchError(err => {
          return of(null);
        })
      );
    return res;
    
  }


  get isLoading$() {
    return this.isLoadingBehaviorSubject$.asObservable();
  }

 

}
