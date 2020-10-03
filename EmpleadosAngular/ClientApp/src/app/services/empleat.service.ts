import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Empleat } from '../model/empleat';

@Injectable({
  providedIn: 'root'
})
export class EmpleatService {

  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  constructor(private http: HttpClient) {
    this.myAppUrl=environment.appUrl;
    this.myApiUrl='api/Empleats/';
   }

   getEmpleats():Observable<Empleat[]>{
     return this.http.get<Empleat[]>(this.myAppUrl+this.myApiUrl).pipe(
       retry(1),
       catchError(this.errorHandler)
     );
   }

   getEmpleat(Id: number): Observable<Empleat> {
    return this.http.get<Empleat>(this.myAppUrl + this.myApiUrl + Id)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
   }

   saveEmpleat(empleat): Observable<Empleat> {
    return this.http.post<Empleat>(this.myAppUrl + this.myApiUrl, JSON.stringify(empleat), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
   }

  updateEmpleat(Id: number, empleat): Observable<Empleat> {
    return this.http.put<Empleat>(this.myAppUrl + this.myApiUrl + Id, JSON.stringify(empleat), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  deleteEmpleat(Id: number): Observable<Empleat> {
    return this.http.delete<Empleat>(this.myAppUrl + this.myApiUrl + Id)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
}

errorHandler(error) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}
}
