import { Component, OnInit } from '@angular/core';
import { EducationService } from '../services/education/education.service';
import { ProfileService } from '../services/profile/profile.service';
import { ProjectService } from '../services/project/project.service';
import { SkillService } from '../services/skill/skill.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  profile: any;
  skills: any;
  educations: any;
  projects: any;
  constructor(
    private ps: ProfileService,
    private ss: SkillService,
    private es: EducationService,
    private pjs: ProjectService
  ) { }

  ngOnInit(): void {
    this.ps.getProfile().subscribe(data => {
      this.profile = data
    })
    this.ss.getSkills().subscribe(data => {
      this.skills = data
    })
    this.es.getEducatons().subscribe(data => {
      this.educations = data
    })
    this.pjs.getProjects().subscribe(data => {
      this.projects = data
    })
  }

}
