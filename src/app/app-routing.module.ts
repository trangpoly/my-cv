import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EducationsComponent } from './admin/educations/educations.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { FormComponent } from './admin/skills/form/form.component';
import { ListComponent } from './admin/skills/list/list.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'skills',
        component: ListComponent
      },
      {
        path: 'skills/edit/:id',
        component: FormComponent
      },
      {
        path: 'skills/create',
        component: FormComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'educations',
        component: EducationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
