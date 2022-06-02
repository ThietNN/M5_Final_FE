import { Component, OnInit } from '@angular/core';
import {Book} from '../../interface/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: Book[] = [];
  bookCount: number;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBook();
  }

  getAllBook() {
    this.bookService.getAllBook().subscribe((data) => {
      this.bookList = data;
      this.bookCount = data.length;
    }, error => {
      console.log(error);
    });
  }
}
