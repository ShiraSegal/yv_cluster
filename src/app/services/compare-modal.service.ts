import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompareModalService {
  private viewModeSource = new BehaviorSubject<'image' | 'list'>('list');
  viewMode$ = this.viewModeSource.asObservable();

  setViewMode(mode: 'image' | 'list') {
    this.viewModeSource.next(mode);
  }
}