import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEmployee } from './employeeInterface';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public _url: string = "https://reqres.in/api/users?page=1";

  getDetails(): Observable<any> {
    return this.http.get<any>(this._url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }

}