import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { userFormFields, userModels } from '@app/user/components/user-form/user-form.fields';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  
  form: FormGroup = new FormGroup({});
  fields: FormlyFieldConfig[] = userFormFields;
  
  model = userModels;
  
  constructor() { }
  
  save(data): void {
    console.log(data);
  }

}
