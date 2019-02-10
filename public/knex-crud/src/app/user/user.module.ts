import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from '@app/user/user.component';


@NgModule({
  declarations: [ UserComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [ UserComponent ]
})
export class UserModule { }
