import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { sapirClusterModel } from '../models/sapir-cluster-model.model';
import { rootObjectOfClusterGroupDetails } from '../models/root-object-of-cluster-group-details.model';
import { RootObject } from 'src/app/models/root-object.model';


@Injectable({
  providedIn: 'root'
})
export class ClusterApiService {
  basicParam: string = 'reservations';
  #http = inject(HttpClient);
  apiUrl = 'assets/json-data';

  getAutoClusterData() : Observable<any> {
    return this.#http.get(`${this.apiUrl}/getAutoCluster.json`);
  }

  getCreateClusterData() {
    return this.#http.get<sapirClusterModel>(`${this.apiUrl}/getCreateClusterData.json`);
  }

  getSingleItemByBookId (bookId:string){
    // let url= `${this.apiUrl}/getByBookId.json`;
    return this.#http.get<RootObject | boolean>(`${this.apiUrl}/getByBookId.json`);
  }

  getClusterGroupByBookId(cluster:string){
    return this.#http.get<RootObject | boolean>(`${this.apiUrl}/getByBookId.json`);
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
  getDashboardDataById(id: number): Observable<any> {
    return this.#http.get<any[]>(`${this.apiUrl}/getDataForDashboard.json`).pipe(
      map((data: any[]) => data.find((user: any) => user.id === id)) // סינון לפי ID
    );
  }
  getDashboardTableDataById(id: number): Observable<any> {
    return this.#http.get<any[]>(`${this.apiUrl}/getDataForDashboardTable.json`).pipe(
      map((data: any[]) => data.find((user: any) => user.id === id)) // סינון לפי ID
    );
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

  login(id: number): Observable<any> {
    return this.#http.get<any[]>(`${this.apiUrl}/getAssignees.json`).pipe(
      map((data: any[]) => data.find((user: any) => user.id === id)) // סינון לפי ID
    );
  }

}
