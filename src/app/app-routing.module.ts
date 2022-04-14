import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FormEducationComponent } from './admin/education/form-education/form-education.component';
import { ListEducationComponent } from './admin/education/list-education/list-education.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { FormProjectComponent } from './admin/projects/form-project/form-project.component';
import { ListProjectComponent } from './admin/projects/list-project/list-project.component';
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
        children: [
          {
            path: '',
            component: ListComponent
          },
          {
            path: 'edit/:id',
            component: FormComponent
          },
          {
            path: 'create',
            component: FormComponent
          },
        ]
      },
      {
        path: 'projects',
        children: [
          {
            path: '',
            component: ListProjectComponent
          },
          {
            path: 'edit/:id',
            component: FormProjectComponent
          },
          {
            path: 'create',
            component: FormProjectComponent
          }
        ]
      },
      {
        path: 'educations',
        children: [
          {
            path: '',
            component: ListEducationComponent
          },
          {
            path: 'create',
            component: FormEducationComponent
          },
          {
            path: 'edit/:id',
            component: FormEducationComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
