import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RestService } from './rest.service';

import { User } from '@app/interfaces';
import { ApiUrls } from '@app/enums';


@Injectable({
  providedIn: 'root'
})
export class UserService extends RestService {
  
  constructor(http: HttpClient) {
    super(http);
  }
  
  fetchUsers(): Observable<User[]> {
    return this.request('get', ApiUrls.User);
  }
  
}
