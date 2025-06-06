// notifiction.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifictionService {
  private notifictionSubject$ = new BehaviorSubject<any>(null);
  notifiction$ = this.notifictionSubject$.asObservable();

  showToastNotification(data: any) {
    this.notifictionSubject$.next(data);
    setTimeout(() => {
      this.hideToastNotification();
    }, data.duration || 3000); // ברירת מחדל אם אין duration
  }

  hideToastNotification() {
    this.notifictionSubject$.next(null);
  }

  // שליחה לפונקציה אמורה להראות כך:
//         this.#notifictionService.showToastNotification({
//           iconName: this.iconType.SUCCESS_SOLID,
//           title: 'Successfull',
//           message: result.bookId + "  added to the cluster successfully!",
//           duration: 3000
//         });
}
