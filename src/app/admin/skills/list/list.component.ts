import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill/skill.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  skills: any;
  constructor(
    private ss: SkillService
  ) { }

  ngOnInit(): void {
    this.ss.getSkills().subscribe(data=> {
      this.skills = data;
      console.log(this.skills)
    })
  }
  onRemove(id: number){
    
  }

}
