import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-validate',
  templateUrl: './profile-validate.component.html',
  styleUrls: ['./profile-validate.component.css']
})
export class ProfileValidateComponent implements OnInit {
  @Input() formField: any;
  @Input() key: string
  constructor() {
    this.key=""
   }

  ngOnInit(): void {
    console.log(this.key)
  }

}
