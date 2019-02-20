import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RestService } from './rest.service';

import { User } from '@app/interfaces';
import { ApiUrl  } from '@app/shared/enums/api-url';


@Injectable({
  providedIn: 'root'
})
export class UserService extends RestService {
  
  url: string = ApiUrl.User;
  
  constructor(http: HttpClient) {
    super(http);
  }
  
  fetchUsers(): Observable<User[]> {
    return this.get(this.url);
  }
  
  deleteUser(id: string): Observable<number> {
    return this.delete(`${this.url}/${id}`);
  }
  
  saveUser(type: string, body: User): Observable<number> {
    const id    = body.id ? body.id : '';
    const url   = `${this.url}/${id}`;
    return this.postOrPut(type, body, url);
  }
  
}
