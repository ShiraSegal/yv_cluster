import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';


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

   getCreateClusterData():Observable<string[]> {
    return this.#http.get<string[]>(`${this.apiUrl}/getCreateClusterData.json`);
  }
  //environment.apiUrl + this.basicParam + '/' + reservationNumber +"?lang="+lang+"&ts="+new Date().valueOf()

}
