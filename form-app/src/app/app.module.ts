import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFormComponent } from './form/create-form.component';
import { ListFormsComponent } from './form/list-forms.component';
import { FormDetailComponent } from './formDetail/formDetail.component';

@NgModule({
   declarations: [
      AppComponent,
      CreateFormComponent,
      ListFormsComponent,
      FormDetailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
