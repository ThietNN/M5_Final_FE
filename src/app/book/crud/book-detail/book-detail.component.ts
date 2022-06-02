import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../interface/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  id: number;
  book: Book;
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((data) => {
      this.id = +data.get('id');
      this.showDetail(this.id);
    });
  }

  ngOnInit() {
  }
  showDetail(id) {
    this.bookService.getBookById(id).subscribe((data) => {
      this.book = data;
    }, error => {
      console.log(error);
    });
  }

}
