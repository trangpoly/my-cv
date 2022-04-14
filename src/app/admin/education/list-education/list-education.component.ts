import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education/education.service';

@Component({
  selector: 'app-list-education',
  templateUrl: './list-education.component.html',
  styleUrls: ['./list-education.component.css']
})
export class ListEducationComponent implements OnInit {
  educations: any
  constructor(
    private es: EducationService
  ) { }

  ngOnInit(): void {
    this.es.getEducatons().subscribe(data => {
      this.educations = data;
    })
  }
  onRemove(id: number){
    console.log(id)
  }
}
