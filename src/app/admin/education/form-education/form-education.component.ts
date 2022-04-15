import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EducationService } from 'src/app/services/education/education.service';

@Component({
  selector: 'app-form-education',
  templateUrl: './form-education.component.html',
  styleUrls: ['./form-education.component.css']
})
export class FormEducationComponent implements OnInit {
  education: any;
  educationForm: FormGroup;
  id: any;
  constructor(
    private es: EducationService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) { 
    this.educationForm = new FormGroup({
      name: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ),
      time_start: new FormControl(
        '',
        [
          Validators.required
        ]
      ),
      end_time: new FormControl(
        '',
        [
          Validators.required
        ]
      ),
      achievements: new FormControl(
        '',
        [
          Validators.required
        ]
      )
      
    })
  }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.params['id'];
    if(this.id!==undefined){
      this.es.getEducation(this.id).subscribe(data => {
        this.education = data
      })
    }
    else {
      this.education = {
        name: '',
        time_start: '',
        end_time: '',
        achievements: ''
      }
    }
  }
  onEducation(obj: {name: string, time_start: string, end_time: string, achievements: string}){
    const time1 = this.education.time_start;
    const time2 = this.education.end_time;
    if(time1>=time2){
      alert("Start Time phải nhỏ hơn End Time")
    }
    else{
      if(this.id!==undefined){
        this.es.updateEducation(this.id, obj).subscribe(data => {
          this.router.navigate(['admin/educations'])
          alert("Cập nhật Education thành công!");
        })
      }
      else {
        this.es.createEducation(obj).subscribe(data => {
          this.router.navigate(['admin/educations'])
          alert("Thêm mới Education thành công!");
        })
      }
    }
    
  }

}
