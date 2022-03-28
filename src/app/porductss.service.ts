import { Injectable } from '@angular/core';
import {  HttpClient,HttpErrorResponse } from '@angular/common/http';
import { map, catchError} from 'rxjs';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorductssService {
  arrData:any=[];
  constructor(private  http: HttpClient ) {
   // console.log("hellow");
   }
   saveFileLogs(data:any){
    console.log(data);
    return this.http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
      return res;
    }))
  }

  products:any = [];
  baseUrl = "./assets"

   

  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Db.json`).pipe(
      map((res)=>{
        this.products = res;
        return this.products
      }),
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:HttpErrorResponse){
    console.log(error);
    return throwError("error");
  }
}
