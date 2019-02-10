import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UserModule } from '@app/user/user.module';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    UserModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
