import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '@app/interfaces';


export abstract class RestService {

  protected baseUrl: string = 'http://localhost:3000';
  
  constructor(private http: HttpClient) {}
  
  protected request(type: string, relativeUrl: string): Observable<User[]>;
  protected request(type: string, relativeUrl: string, data: User): Observable<HttpResponse<string>>;
  protected request(type: string, relativeUrl: string, data?: User): Observable<any> {
    const postPutUrl  =  this.http[type](`${this.baseUrl}/${relativeUrl}`, data);
    const getDelUrl   =  this.http.get(`${this.baseUrl}${relativeUrl}`);
    
    const action = type === 'get' || 'delete' ? getDelUrl : postPutUrl;
    
    return action.pipe(map(res => res));
  }
  
}
