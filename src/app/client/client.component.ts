import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile/profile.service';
import { SkillService } from '../services/skill/skill.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  profile: any;
  skills: any;
  constructor(
    private ps: ProfileService,
    private ss: SkillService
  ) { }

  ngOnInit(): void {
    this.ps.getProfile().subscribe(data => {
      this.profile = data
    })
    this.ss.getSkills().subscribe(data => {
      this.skills = data
    })
  }

}
