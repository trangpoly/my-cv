import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.css']
})
export class FormProjectComponent implements OnInit {
  projectForm: FormGroup;
  project: any;
  id: any;
  constructor(
    private ps: ProjectService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) { 
    this.projectForm = new FormGroup({
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
      start_time: new FormControl(
        '',
        [
          Validators.required
        ]
      ),
      end_time: new FormControl(
        '',
        [
          Validators.required,

        ]
      ),
      desc: new FormControl(
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
      this.ps.getProject(this.id).subscribe(data => {
        this.project = data;
        
      })
    }
    else {
      this.project = {
        name: '',
        time_start: '',
        end_start: '',
        desc: ''
      }
    }
    
  }
  onProject(obj:{name: string, time_end: string, end_time: string, desc: string}){
    if(this.id!==undefined){
      this.ps.updateProject(this.id, obj).subscribe(data => {
        this.router.navigate(['admin/projects'])
      })
    }
    else {
      this.ps.createProject(obj).subscribe(data => {
        this.router.navigate(['admin/projects'])
      })
    }
  }

}
