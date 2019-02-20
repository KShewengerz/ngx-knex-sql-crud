import {HttpClient, HttpResponse, HttpErrorResponse, HttpRequest} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from '@app/interfaces';
import { ApiEndpoint  } from '@app/shared/enums/api-url';


export abstract class RestService {

  protected baseUrl: string = ApiEndpoint.Base;
  
  constructor(private http: HttpClient) {}
  
  
  protected postOrPut(type: string, body: User, relativeUrl: string): Observable<number> {
    const request = this.http[type](`${this.baseUrl}/${relativeUrl}`, body, { observe: 'response', responseType: 'text' });
    
    return this.actionPipe(request, true);
  }
  
  protected get(relativeUrl: string): Observable<User[]> {
    const request = this.http.get(`${this.baseUrl}/${relativeUrl}`);
    return this.actionPipe(request);
  }
  
  protected delete(relativeUrl: string): Observable<number> {
    const request = this.http.delete(`${this.baseUrl}/${relativeUrl}`, { observe: 'response' });
    return this.actionPipe(request, true);
  }
  
  private actionPipe(action: Observable<any>, returnStatus?: boolean): Observable<any> {
    return action.pipe(
        map(res => returnStatus ? res.status : res),
        catchError((error: HttpErrorResponse) => throwError(error.message))
      );
  }
  
}
