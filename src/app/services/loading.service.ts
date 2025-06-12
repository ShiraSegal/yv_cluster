// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoadingService {
//   private loadingSubject$ = new BehaviorSubject<boolean>(false);
//   loading$ = this.loadingSubject$.asObservable();

//   show() {
//     this.loadingSubject$.next(true);
//     console.log("Loading started");
    
//   }

//   hide() {
//     this.loadingSubject$.next(false);
//     console.log("Loading finished");
    
//   }
// }
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingCount = 0;
  private loadingSubject$ = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject$.asObservable();

  show() {
    this.loadingCount++;
    if (this.loadingCount === 1) {
      this.loadingSubject$.next(true);
      console.log("Loading started");
    }
  }

  hide() {
    if (this.loadingCount > 0) {
      this.loadingCount--;
      if (this.loadingCount === 0) {
        this.loadingSubject$.next(false);
        console.log("Loading finished");
      }
    }
  }
}
