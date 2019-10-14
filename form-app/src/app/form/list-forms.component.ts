import { Component, OnInit } from '@angular/core';
import {FormService} from '../services/Form.service'
import {Form} from '../models/Form'

@Component({
  selector: 'app-list-forms',
  templateUrl: './list-forms.component.html',
  styleUrls: ['./list-forms.component.css'],
  providers: [FormService]
})
export class ListFormsComponent implements OnInit {

  constructor(private formService:FormService) { }

  FormArray : Form [] ; 

  ngOnInit() {
    let array = (JSON.parse(localStorage.getItem('forms')));
    this.FormArray = array;
  }



}
