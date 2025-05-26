import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
// Ensure the correct path to the model file
import { SapirClusterModel } from '../models/sapir-cluster-model';
import { RootObject } from '../models/root-object.model';


@Injectable({
  providedIn: 'root'
})
export class ClusterApiService {
  basicParam: string = 'reservations';
  #http = inject(HttpClient);
  apiUrl = 'assets/json-data';

   getAutoClusterData(params?: { [key: string]: string | number }): Observable<string[]> {
    return this.#http.get<string[]>(`${this.apiUrl}/getAutoCluster.json`, { params });
  }
  
  getCreateClusterData() {
    return this.#http.get<SapirClusterModel>(`${this.apiUrl}/getCreateClusterData.json`);
  }

  getSingleItemByBookId (bookId:string){
    return this.#http.post<RootObject | boolean>(`${this.apiUrl}/getByBookId.json`, bookId);
  }

  getClusterGroupByBookId(cluster:string){
    return this.#http.post<RootObject | boolean>(`${this.apiUrl}/getByBookId.json`, cluster);
  }

  createCluster(SapirClusterModel: SapirClusterModel){
    return this.#http.post<SapirClusterModel>(`${this.apiUrl}/getCreateClusterData.json`, SapirClusterModel);
  }
    getStatisticData(): Observable<any> {
    return this.#http.get('./assets/json-data/getStatisticData.json');
  }
  getClusterGroupDetails(): Observable<any> {
    return this.#http.get('./assets/json-data/getClusterGroupDetails.json');
  }
  // getCreateClusterData(): Observable<any[]> {
  //   return this.#http.get<any>(`${this.apiUrl}/getCreateClusterData.json`).pipe(
  //     map(response => response?.SapirClusterDetails || []) // מיפוי התוצאה להחזרת SapirClusterDetails בלבד
  //   );
  // }

  //environment.apiUrl + this.basicParam + '/' + reservationNumber +"?lang="+lang+"&ts="+new Date().valueOf()
  getAssigneeList(): Observable<{ name: string }[]> {
    return this.#http.get<{ name: string }[]>(`${this.apiUrl}/getAssignees.json`);
  }
  
  
}
