import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlApi = "http://localhost:3000/skills";

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(
    private http: HttpClient
  ) { }
  getSkills(): Observable<any>{
    return this.http.get(urlApi);
  }
  getSkill(id: number | string): Observable<any>{
    return this.http.get(`${urlApi}/${id}`)
  }
  updateSkill(id: number | string, data: any): Observable<any>{
    return this.http.put(`${urlApi}/${id}`, data)
  }
  createSkill(data:any): Observable<any>{
    return this.http.post(urlApi, data)
  }
  removeSkill(id: number | string): Observable<any>{
    return this.http.delete(`${urlApi}/${id}`)
  }

}
