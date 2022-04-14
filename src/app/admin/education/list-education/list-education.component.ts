import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducationService } from 'src/app/services/education/education.service';

@Component({
  selector: 'app-list-education',
  templateUrl: './list-education.component.html',
  styleUrls: ['./list-education.component.css']
})
export class ListEducationComponent implements OnInit {
  educations: any
  constructor(
    private es: EducationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.es.getEducatons().subscribe(data => {
      this.educations = data;
    })
  }
  onGetListEducation(){
    this.es.getEducatons().subscribe(data => {
      this.educations = data;
    })
  }
  onRemove(id: number){
    // console.log(id)
    const confirm = window.confirm("Bạn chắc chắn muốn xóa?");
    if(confirm){
      this.es.removeEducation(id).subscribe(data => {
        this.onGetListEducation();
        this.router.navigate(['admin/educations'])
    })
    }
    
  }
}
