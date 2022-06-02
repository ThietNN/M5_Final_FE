import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book/crud/book-list/book-list.component';
import {BookCreateComponent} from './book/crud/book-create/book-create.component';
import {BookUpdateComponent} from './book/crud/book-update/book-update.component';
import {BookRemoveComponent} from './book/crud/book-remove/book-remove.component';
import {BookDetailComponent} from './book/crud/book-detail/book-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'create',
    component: BookCreateComponent
  },
  {
    path: 'update/:id',
    component: BookUpdateComponent
  },
  {
    path: 'remove/:id',
    component: BookRemoveComponent
  },
  {
    path: 'detail/:id',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
