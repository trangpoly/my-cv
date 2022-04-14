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
  imageBase64: any;
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
    const submitData = {
      ...obj,
      avt: this.imageBase64 ? this.imageBase64 : this.profile.avt
    }
    this.ps.updateProfile(this.profile.id, submitData).subscribe();
    const alert = window.alert("Cập nhật profile thành công!");
    this.router.navigate(['admin/'])
  }
  resultString (e:any) {
    if (e && e.target && typeof e.target.result == 'string') {
      return e.target.result;
    }
    return '';
  }
  changeImg(event :any) {
    const arrayImageTypes = ['image/png', 'image/jpg'];
    const file = event.target.files[0];
    if (file.size > 500000) {
      return alert('Kích thước file quá lớn');
    } else if (!arrayImageTypes.includes(file.type)) {
      return alert('Kiểu dữ liệu không phù hợp');
    }
    console.log(file.size, file.type);
    // 1. Định nghĩa 1 thể hiện của FileReader để đọc file
    const reader = new FileReader();
    // 2. Định nghĩa phương thức đọc file
    reader.onload = (e) => {
      this.imageBase64 = e.target?.result;
      const image = new Image();
      image.src = this.resultString(e);
      console.log(image.width, image.height);
    }
    // 3. Đây là lúc bắt đầu đọc file để chạy phần 2.
    reader.readAsDataURL(file);
  }

}
