import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlApi = "http://localhost:3000/projects";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {}
  getProjects(): Observable<any>{
    return this.http.get(urlApi);
  }
  getProject(id: number | string): Observable<any>{
    return this.http.get(`${urlApi}/${id}`);
  }
  createProject(data: any): Observable<any>{
    return this.http.post(urlApi, data)
  }
  removeProject(id: number | string): Observable<any>{
    return this.http.delete(`${urlApi}/${id}`)
  }
  updateProject(id: number | string, data: any){
    return this.http.put(`${urlApi}/${id}`, data)
  }
}
