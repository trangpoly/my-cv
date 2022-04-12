import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileValidateComponent } from './profile-validate.component';

describe('ProfileValidateComponent', () => {
  let component: ProfileValidateComponent;
  let fixture: ComponentFixture<ProfileValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileValidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
