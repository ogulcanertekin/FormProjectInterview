import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder,FormArray } from '@angular/forms';
import {FormService} from '../services/Form.service';
import {Form} from '../models/Form'
import {Field} from '../models/Field'

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  FormCreateForm: FormGroup;

  constructor(private formBuilder:FormBuilder,private formService:FormService) { }

  createdForm: any = {}

  ngOnInit() {
    this.FormCreateForm = this.formBuilder.group({
      name: ['',Validators.required],
      description:['',Validators.required],
      fields:this.formBuilder.array([
        this.addFieldFormGroup()
      ])
    });

    this.FormCreateForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.FormCreateForm);
    });

  }

  addFieldFormGroup():FormGroup{
    return this.formBuilder.group({
      name: ['',Validators.required],
      required: ['',Validators.required],
      dataType:['',Validators.required],
    });
  }

  addFieldButtonClick():void{
    (<FormArray>this.FormCreateForm.get('fields')).push(this.addFieldFormGroup());
  }

  deleteFieldButtonClick(fieldIndex:number):void {
    (<FormArray>this.FormCreateForm.get('fields')).removeAt(fieldIndex);
  }

  logValidationErrors(group: FormGroup = this.FormCreateForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
  
      this.FormCreateForm[key] = '';
      if (abstractControl && !abstractControl.valid &&
        (abstractControl.touched || abstractControl.dirty)) {
        const messages = this.validationMessages[key];
  
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.FormCreateForm[key] += messages[errorKey] + ' ';
          }
        }
      }
  
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
    });
  }

  validationMessages = {
    'name': {
      'required': 'Form Name is required.'
    },
    'description': {
      'required': 'Form description is required.'
    }
  };

  onSubmit():void{
   
    this.createdForm = Object.assign({},this.FormCreateForm.value)
    this.formService.addFormToLocalStorage(this.createdForm);
  }

}
