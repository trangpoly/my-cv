import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill/skill.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  skill: any;
  skillForm: FormGroup;  
  id: any;
  constructor(
    private ss: SkillService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) { 
    this.skillForm = new FormGroup({
      name: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ),
      mark: new FormControl(
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.max(100)
        ]
      )
    })
  }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.params['id'];
    if(this.id !== undefined){
      this.ss.getSkill(this.id).subscribe(data => {
        this.skill = data
      })
    }
    else {
      this.skill = {
        name: '',
        mark: 0
    }
    }

  }
  onSkill(obj: {name: string, mark: number, status: number}){
    if(this.id!==undefined){
      this.ss.updateSkill(this.id,obj).subscribe(data => {
        this.router.navigate(['admin/skills']);
        alert("Cập nhật Skill thành công!");
      });
      
    }
    else{
      this.ss.createSkill(obj).subscribe(data => {
        this.router.navigate(['admin/skills']);
        alert("Thêm mới Skill thành công!");
      });
        
    }
  }

}
