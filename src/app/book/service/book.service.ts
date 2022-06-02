import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../interface/book';
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getAllBook(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${API_URL}/books`);
  }
  createNewBook(data): Observable<Book> {
    return this.httpClient.post<Book>(`${API_URL}/books`, data);
  }
  getBookById(id): Observable<Book> {
    return this.httpClient.get<Book>(`${API_URL}/books/${id}`);
  }
  updateBookInfo(id, data): Observable<Book> {
    return this.httpClient.put<Book>(`${API_URL}/books/${id}`, data);
  }
  removeBook(id): Observable<Book> {
    return this.httpClient.delete<Book>(`${API_URL}/books/${id}`);
  }

}
