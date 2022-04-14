import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { AsideComponent } from './admin/aside/aside.component';
import { ProfileService } from './services/profile/profile.service';
import { SkillService } from './services/skill/skill.service';
import { ProjectService } from './services/project/project.service';
import { EducationService } from './services/education/education.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileValidateComponent } from './admin/components/profile-validate/profile-validate.component';
import { ListComponent } from './admin/skills/list/list.component';
import { FormComponent } from './admin/skills/form/form.component';
import { ListProjectComponent } from './admin/projects/list-project/list-project.component';
import { FormProjectComponent } from './admin/projects/form-project/form-project.component';
import { ListEducationComponent } from './admin/education/list-education/list-education.component';
import { FormEducationComponent } from './admin/education/form-education/form-education.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AdminComponent,
    ProfileComponent,
    AsideComponent,
    ProfileValidateComponent,
    ListComponent,
    FormComponent,
    ListProjectComponent,
    FormProjectComponent,
    ListEducationComponent,
    FormEducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [    
    ProfileService,
    SkillService,
    ProjectService,
    EducationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
