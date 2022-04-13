import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlApi = "http://localhost:3000/profiles"

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  
  getProfile(): Observable<any>{
    return this.http.get(`${urlApi}/1`);
  }
  updateProfile(id: number| string, data: any): Observable<any>{
    return this.http.put(`${urlApi}/${id}`, data);
  }
}
