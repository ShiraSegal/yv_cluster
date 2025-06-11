import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
// Ensure the correct path to the model file
// Ensure the correct path to the model file
import { SapirClusterModel } from '../models/sapir-cluster-model.model';
import { RootObject } from '../models/root-object.model';


@Injectable({
  providedIn: 'root'
})
export class ClusterApiService {
  basicParam: string = 'reservations';
  #http = inject(HttpClient);
  apiUrl = 'assets/json-data';

  getAutoClusterData(params?: { [key: string]: string | number }) {
    return this.#http.get<any>(`${this.apiUrl}/getAutoCluster.json`).pipe(
      map(data => {
        if (!params || !params['currentTabKey']) return { pagedData: data, totalRows: 0 };
  
        const tabKey = params['currentTabKey'] as string;
        const allRows = Array.isArray(data[tabKey]) ? data[tabKey] : [];
        const totalRows = allRows.length;
        const page = +(params['_page'] || 1);
        const limit = +(params['_limit'] || 20);

  
        // Only slice for the requested page
        const pagedRows = allRows.slice((page - 1) * limit, page * limit);
  
        // Return the same data structure as backend would
        return { pagedData: { ...data, [tabKey]: pagedRows }, totalRows };
      })
    );
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
