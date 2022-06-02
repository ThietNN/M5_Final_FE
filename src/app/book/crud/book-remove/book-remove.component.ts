import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-remove',
  templateUrl: './book-remove.component.html',
  styleUrls: ['./book-remove.component.css']
})
export class BookRemoveComponent implements OnInit {

  constructor(private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((data) => {
      const id = data.get('id');
      this.removeById(id);
    });
  }

  ngOnInit() {
  }

  removeById(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.bookService.removeBook(id) .subscribe(() => {
          this.router.navigate(['']);
        });
        Swal.fire(
          'Deleted!',
          'Your book has been deleted.',
          'success'
        );

      } else {
        this.router.navigate(['']);
      }
    });
  }
}
