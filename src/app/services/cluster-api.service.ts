import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClusterApiService {
  basicParam: string = 'reservations';
  #http = inject(HttpClient);

  // async getAutoClusterData() {
  //   return this.#http.get<object>('assets/json-data/getAutoCluster.json');
  // }


  getAutoClusterData(): Observable<any> {
    return this.#http.get('assets/json-data/getAutoCluster.json');
  }

  //environment.apiUrl + this.basicParam + '/' + reservationNumber +"?lang="+lang+"&ts="+new Date().valueOf()

  getStatisticData(): Observable<any[]> {
    return this.#http.get<any[]>(environment.apiUrl + './assets/json-data/getStatisticData.json');
  }
  }

