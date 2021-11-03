import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { GlobalUtilities } from '../utilities/globalUtilities';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({ providedIn: 'root' })
export class BookService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT', 'mode': 'no-cors' });
  private apiUrl: string;
  constructor(private globalUtilities: GlobalUtilities, private httpClient: HttpClient) {
    this.apiUrl = this.globalUtilities.getApiUrl('books')
  }

  selectBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.apiUrl}/SelectBooks`, { headers: this.headers });
  }
  selectBook(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.apiUrl}/SelectBook/${id}`, { headers: this.headers });
  }
  insertBook(item: Book): Observable<Book> {
    return this.httpClient.post<Book>(`${this.apiUrl}/InsertBook`, item, { headers: this.headers });
  }
  updateBook(item: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.apiUrl}/UpdateBook/${item.id}`, item, { headers: this.headers });
  }
  deleteBook(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/DeleteBook/${id}`, { headers: this.headers });
  }
}
