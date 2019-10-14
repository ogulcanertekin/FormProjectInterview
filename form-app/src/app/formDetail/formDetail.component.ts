import { Component, OnInit } from '@angular/core';
import {FormService} from '../services/Form.service'
import {Form} from '../models/Form'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formDetail',
  templateUrl: './formDetail.component.html',
  styleUrls: ['./formDetail.component.css']
})
export class FormDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private formService:FormService) { }

  formValue :Form;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let form = this.formService.getFormByNameFromLocalStorage(params);
      this.formValue = form;
    });
  }

}
