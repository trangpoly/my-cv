import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlApi = "http://localhost:3000/educations";

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  constructor(private http: HttpClient) { }
  getEducatons(): Observable<any>{
    return this.http.get(urlApi)
  }
  getEducation(id: number | string): Observable<any>{
    return this.http.get(`${urlApi}/$${id}`)
  }
  createEducation(data: any): Observable<any>{
    return this.http.post(urlApi, data)
  }
  removeEducation(id: number | string): Observable<any>{
    return this.http.delete(`${urlApi}/${id}`)
  }
  updateEducation(id: number | string, data: any): Observable<any>{
    return this.http.put(`${urlApi}/${id}`, data)
  }
}
