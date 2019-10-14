import { Injectable } from '@angular/core';
import{Form} from '../models/Form'

@Injectable({
  providedIn: 'root'
})
export class FormService {

constructor() { }

//stringArr: Array<String> = [];
FormArray : Array<any> = []

addFormToLocalStorage(createdForm:Form){
  console.log(createdForm);
  let createdTime = new Date().toLocaleString();
  createdForm.createdAt = createdTime;
  let StringObj = JSON.stringify(createdForm);

  let StringArray = [];
  StringArray.push(createdForm);
  console.log(StringArray);
  StringArray.push(JSON.parse(localStorage.getItem('forms')));
  localStorage.setItem('forms',JSON.stringify(StringArray));
  console.log(JSON.parse(localStorage.getItem('forms')));
}

getFormsFromLocalStorage(){
  return localStorage.getItem(JSON.parse(localStorage.getItem('forms')));
}

getFormByNameFromLocalStorage(formName:string){
  let forms = localStorage.getItem(JSON.parse(localStorage.getItem('forms')));
  let form = forms.find(i => i.name === formName);
  return form;

}


}
