import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  bookUpdateForm: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });
  id: number;
  constructor(private bookService: BookService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((data) => {
      this.id = +data.get('id');
      this.getById(this.id);
    });
  }

  ngOnInit() {
  }
  getById(id: number) {
    return this.bookService.getBookById(id).subscribe((book) => {
      this.bookUpdateForm = new FormGroup({
        id: new FormControl(id),
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description)
      });
    });
  }
  updateInfo(id: number) {
    const book = this.bookUpdateForm.value;
    this.bookService.updateBookInfo(id, book).subscribe(() => {
      alert('successfully updated book info');
      this.router.navigate(['']);
    });
  }
}
