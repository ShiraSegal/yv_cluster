import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClusterApiService {
  basicParam: string = 'reservations';
  #http = inject(HttpClient);
  apiUrl = 'assets/json-data';
  async getAutoClusterData() {
    return this.#http.get<string[]>('/assets/getAutoCluster.json');
  }
  async getCreateClusterData() {
    return this.#http.get<any>(`${this.apiUrl}/getCreateClusterData.json`);
  }
  // getCreateClusterData(): Observable<any[]> {
  //   return this.#http.get<any>(`${this.apiUrl}/getCreateClusterData.json`).pipe(
  //     map(response => response?.SapirClusterDetails || []) // מיפוי התוצאה להחזרת SapirClusterDetails בלבד
  //   );
  // }

  //environment.apiUrl + this.basicParam + '/' + reservationNumber +"?lang="+lang+"&ts="+new Date().valueOf()

  getStatisticData(): Observable<any> {
    return this.#http.get('./assets/json-data/getStatisticData.json');
  }
  }


