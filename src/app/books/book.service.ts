import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from './Models/ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url: string = "books"

  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBook[]> {
    return this.http.get(this.url) as Observable<IBook[]>;
  }

  getHome(): Observable<IBook[]> {
    return this.http.get('home') as Observable<IBook[]>;
  }

}
