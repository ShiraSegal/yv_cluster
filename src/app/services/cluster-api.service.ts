import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { sapirClusterModel } from '../models/sapir-cluster-model.model';
import { rootObject } from '../models/root-object.model';
import { rootObjectOfClusterGroupDetails } from '../models/root-object-of-cluster-group-details.model';


@Injectable({
  providedIn: 'root'
})
export class ClusterApiService {
  basicParam: string = 'reservations';
  #http = inject(HttpClient);
  apiUrl = 'assets/json-data';
  environmentUrl = environment.apiUrl;
  async getAutoClusterData() {
    return this.#http.get<string[]>(`${this.apiUrl}/getAutoCluster.json`);
  }

  getCreateClusterData() {
    return this.#http.get<sapirClusterModel>(`${this.apiUrl}/getCreateClusterData.json`);
  }

  getSingleItemByBookId(bookId: string) {
    return this.#http.post<rootObject | boolean>(`${this.apiUrl}/getByBookId.json`, bookId);
  }

  getClusterGroupByBookId(cluster: string) {
    return this.#http.post<rootObject | boolean>(`${this.apiUrl}/getByBookId.json`, cluster);
  }

  createCluster(sapirClusterModel: sapirClusterModel) {
    return this.#http.post<sapirClusterModel>(`${this.apiUrl}/getCreateClusterData.json`, sapirClusterModel);
  }
  // getstatisticData(): Observable<any> {
  //   return this.#http.get('./assets/json-data/getstatisticData.json');
  // }
  getstatisticData(): Observable<any> {
    return this.#http.get('https://localhost:7059/api/SystemCluster/GetstatisticData');
  }
  // getClusterGroupDetails(): Observable<any> {
  //   return this.#http.get('./assets/json-data/getClusterGroupDetails.json');
  // }
  getClusterGroupDetails(): Observable<rootObjectOfClusterGroupDetails> {
    let result: any;
     result= this.#http.get(`https://localhost:7059/api/SystemCluster/GetClusterGroupDetails`);
    return result;
  }



  // getCreateClusterData(): Observable<any[]> {
  //   return this.#http.get<any>(`${this.apiUrl}/getCreateClusterData.json`).pipe(
  //     map(response => response?.sapirClusterDetails || []) // מיפוי התוצאה להחזרת sapirClusterDetails בלבד
  //   );
  // }

  //environment.apiUrl + this.basicParam + '/' + reservationNumber +"?lang="+lang+"&ts="+new Date().valueOf()
  getAssigneeList(): Observable<{ name: string }[]> {
    return this.#http.get<{ name: string }[]>(`${this.apiUrl}/getAssignees.json`);
  }


}
