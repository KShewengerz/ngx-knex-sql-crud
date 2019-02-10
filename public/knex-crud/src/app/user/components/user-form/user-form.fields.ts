import { FormlyFieldConfig } from '@ngx-formly/core';


export const userModels = { firstName: '', lastName: '', emailAddress: '' };

export const userFormFields: FormlyFieldConfig[] = [
  {
    key: 'firstName',
    type: 'input',
    templateOptions: {
      placeholder: 'First Name',
      required: true
    },
  },
  {
    key: 'lastName',
    type: 'input',
    templateOptions: {
      placeholder: 'Last Name',
      required: true
    }
  },
  {
    key: 'emailAddress',
    type: 'input',
    templateOptions: {
      placeholder: 'Email Address',
      required: true
    },
    validators: {
      email: {
        expression: ctr => /[\w.\-]*[^\-._]@\w+\.\w+/g.test(ctr.value),
        message: 'Invalid Email Address'
      }
    }
  }
];
