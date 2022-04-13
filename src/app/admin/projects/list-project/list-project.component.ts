import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  projects: any;
  constructor(
    private ps: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ps.getProjects().subscribe(data => {
      this.projects = data
    })
  }
  onGetListProject(){
    this.ps.getProjects().subscribe(data => {
      this.projects = data
    })
  }
  onRemove(id: number){
    const confirm = window.confirm("Bạn chắc chắn muốn xóa?")
    if(confirm){
      this.ps.removeProject(id).subscribe(data=> {
        this.onGetListProject();
        this.router.navigate(['admin/projects'])
      });
    }
  }

}
