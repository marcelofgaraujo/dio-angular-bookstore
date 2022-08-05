import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IBook } from '../../bookstore-app/product-list/model/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private url = "https://localhost:5001/api/bookstore";

  httpOptions = {
    Headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor( private http: HttpClient ) { }

  getBook(): Observable<IBook[]> {

    return this.http.get<IBook[]>(this.url);
    
  }
}
