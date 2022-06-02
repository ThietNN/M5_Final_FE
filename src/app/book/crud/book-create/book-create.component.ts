import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookCreateForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }
  createNewBook() {
    const book = this.bookCreateForm.value;
    this.bookService.createNewBook(book).subscribe(() => {
      alert('successfully added');
    });
    this.bookCreateForm.reset();
  }

}
