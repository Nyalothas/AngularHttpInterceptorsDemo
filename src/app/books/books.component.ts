import { Component, OnInit } from '@angular/core';
import { IBook } from './Models/ibook';
import { BookService } from './book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: IBook[] = [];

  displayedColumns: string[] = ['url', 'name', 'isbn', 'numberOfPages', 'publisher', 'released'];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(r => this.books = r);
  }

  clear(): void {
    this.books = [];
  }

  getHome(): void {
    this.bookService.getHome().subscribe(r => console.log(r));
  }

}
