import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { SapirClusterModel} from '../models/sapir-cluster-model.model';
// import { RootObject } from 'src/app/models/root-object.model';
import { ClusterGroupWithCrmLinks } from '../models/cluster-group-with-crm-links.model';
import { BookIdDetails } from '../models/book-id-details.model';



@Injectable({
  providedIn: 'root'
})
export class ClusterApiService {
  basicParam: string = 'reservations';
  #http = inject(HttpClient);
  apiUrl = 'assets/json-data';
  url = 'https://localhost:7059/api';


  getAutoClusterData() : Observable<any> {
    return this.#http.get(`${this.apiUrl}/getAutoCluster.json`);
}
  
getCreateClusterData(bookIds: string[]) {
  const queryParams = bookIds.map(bookId => `bookIds=${bookId}`).join('&');
  return this.#http.get<BookIdDetails[]>(`${this.url}/SystemCluster/GetCreateClusterData?${queryParams}`);
}

  getSingleItemByBookId (bookId:string){
    // let url= `${this.apiUrl}/getByBookId.json`;
    return this.#http.get<BookIdDetails | boolean>(`${this.url}/SystemCluster/AddBookId?bookId=${bookId}`)
  }

  getClusterGroupByBookId(clusterId:string){
    // let url= `${this.apiUrl}/getByBookId.json`;
    return this.#http.get<BookIdDetails | boolean>(`${this.url}/SystemCluster/AddBookIdsByClusterId?clusterId=${clusterId}`)
  }

  createCluster(SapirClusterModel: SapirClusterModel){
    return this.#http.post<SapirClusterModel>(`${this.url}/CreateCluster/CreateNewCluster`, SapirClusterModel);
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
  getClusterGroupDetails(groupId:string): Observable<ClusterGroupWithCrmLinks> {
    let result: any;
     result= this.#http.get(`https://localhost:7059/api/SystemCluster/GetClusterGroupDetails/${groupId}`);
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
  // apiUrl: any;

  //  getAutoClusterData()  {
  //   return this.#http.get<string[]>('/assets/getAutoCluster.json');
  // }

  getCompareData() {
    return this.#http.get<string[]>("/assets/json-data/getCompareData.json");
  }

  // environment.apiUrl + this.basicParam + '/' + reservationNumber +"?lang="+lang+"&ts="+new Date().valueOf()

}
