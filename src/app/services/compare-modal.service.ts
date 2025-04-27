
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, filter, map, take, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ClusterApiService } from './cluster-api.service';

@Injectable({
  providedIn: 'root'
})
export class CompareModalService {
  private viewModeSource = new BehaviorSubject<'image' | 'list'>('list');
  viewMode$ = this.viewModeSource.asObservable();
    #clusterApiService = inject(ClusterApiService)
  

  setViewMode(mode: 'image' | 'list') {
    this.viewModeSource.next(mode);
  }
  private compareData$ = new BehaviorSubject<any[]>([]);

  get CompareData$()
    {
      if(!this.compareData$.value.length)
      {
        this.getCompareData();
      }
      return this.compareData$.asObservable();
    }

    async getCompareData() {
      const res = this.#clusterApiService.getCompareData();
      console.log("res",res);
      
      const result = (await res)
        .pipe(
          take(1),
          map(res => res || []), // מיפוי התוצאה להחזרת SapirClusterDetails בלבד
          tap(details => {
            if (details) {
              this.compareData$.next(details); // עדכון ה-Subject עם המערך
            }
          })
        )
        .subscribe(); // המרה ל-Promise כדי לעבוד עם await
        console.log("result",result);
        
      return result; // מחזיר את המערך SapirClusterDetails
    }
}