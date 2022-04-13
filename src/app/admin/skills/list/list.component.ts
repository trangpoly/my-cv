import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill/skill.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  skills: any;
  constructor(
    private ss: SkillService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ss.getSkills().subscribe(data=> {
      this.skills = data;
      // console.log(this.skills)
    })
  }
  onGetList(){
    this.ss.getSkills().subscribe(data=> {
      this.skills = data;
    })
  }
  onRemove(id: number){
    console.log(id);
    const confirm = window.confirm("Bạn chắc chắn muốn xóa?")
    if(confirm){
      this.ss.removeSkill(id).subscribe(data=> {
        this.onGetList()
      })
      this.router.navigate(['admin/skills'])
    }
    
  }

}
