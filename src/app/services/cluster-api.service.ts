import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ClusterApiService {
  basicParam: string = 'reservations';
  #http = inject(HttpClient);
  apiUrl: any;

  async getAutoClusterData() {
    return this.#http.get<string[]>('/assets/getAutoCluster.json');
  }

  getCompareData() {
    return this.#http.get<string[]>("/assets/json-data/getCompareData.json");
  }

  // environment.apiUrl + this.basicParam + '/' + reservationNumber +"?lang="+lang+"&ts="+new Date().valueOf()

}
