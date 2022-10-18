import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
 url="https://localhost:44311/api/NewsDetail/GetAll"
  constructor(private http:HttpClient) { }
  users()
  {
    return this.http.get(this.url)
  }
  UserCredentials(data:any): Observable<any>{
    debugger
   return this.http.post<any>("https://localhost:44311/api/Authenticate/login",data)
  }
}
