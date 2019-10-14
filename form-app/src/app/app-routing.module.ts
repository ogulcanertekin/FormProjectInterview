import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFormComponent } from './form/create-form.component';
import { ListFormsComponent } from './form/list-forms.component';
import { FormDetailComponent } from './formDetail/formDetail.component';


const routes: Routes = [
  {path:'list', component:ListFormsComponent},
  {path:'create', component:CreateFormComponent},
  {path:'forms/:name',component:FormDetailComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
