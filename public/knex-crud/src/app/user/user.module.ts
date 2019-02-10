import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyFieldConfig, FormlyModule} from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { UserComponent } from '@app/user/containers/user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';


@NgModule({
  declarations: [
    UserComponent,
    UserFormComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: (error, field: FormlyFieldConfig) => `${field.templateOptions.placeholder} is required.` }
      ]
    }),
    FormlyBootstrapModule,
    AngularFontAwesomeModule
  ],
  exports: [ UserComponent ]
})
export class UserModule { }
