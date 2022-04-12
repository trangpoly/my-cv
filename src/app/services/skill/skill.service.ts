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
  getSkill(id: null | string): Observable<any>{
    return this.http.get(`${urlApi}/${id}`)
  }

}
