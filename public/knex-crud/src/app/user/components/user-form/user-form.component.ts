import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { userFormFields, userModels } from '@app/user/components/user-form/user-form.fields';

import { User } from '@app/interfaces';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  
  @Input() set editUser(user: User) {
    this.model = user ? { ...this.model, ...user } : userModels;
  }
  
  @Output() save: EventEmitter<User> = new EventEmitter<User>();
  
  form: FormGroup = new FormGroup({});
  fields: FormlyFieldConfig[] = userFormFields;
  
  model: User;
  
  constructor() { }
  
}
