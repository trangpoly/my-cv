import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.css']
})
export class FormProjectComponent implements OnInit {
  project: any;
  id: any;
  constructor(
    private ps: ProjectService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.params['id'];
    console.log(this.id)
  }

}
