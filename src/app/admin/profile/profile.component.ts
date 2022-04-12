import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  profileForm: FormGroup;
  constructor(
    private ps: ProfileService,
    private router: Router
  ) {
    this.profileForm = new FormGroup({
      name: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ),
      phone: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
        ]
      ),
      email : new FormControl(
        '',
        [
          Validators.required,
          Validators.email
        ]
      ),
      birthday: new FormControl(
        '',
        [
          Validators.required
        ]
      ),
      job: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(6)
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
    this.ps.getProfile().subscribe(data => {
      this.profile = data;
      console.log(this.profile)
    })
  }
  editProfile(obj: any){
    this.ps.updateProfile(this.profile.id, obj).subscribe();
    const alert = window.alert("Cập nhật profile thành công!");
    this.router.navigate(['admin/'])
  }

}
