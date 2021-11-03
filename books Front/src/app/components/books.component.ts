import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../shared/models/book';
import { BookService } from '../shared/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private router: Router) { }
  ngOnInit() {
    this.selectBooks();
  }

  selectBooks() {
    this.bookService.selectBooks().subscribe(
      (data) => { this.books = data; },
      (error) => { alert('Ha ocurrido un error al consultar los libros.'); }
    );
  }
  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(
      (data) => { this.deleteBookComplete() },
      (error) => { alert('Ha ocurrido un error al borrar el libros.'); }
    );
  }

  onclickInsertBook() {
    this.router.navigate(['Book', '-1']);
  }
  onclickUpdateBook(id: number) {
    this.router.navigate(['Book', id]);
  }
  onclickDeleteBook(id: number) {
    let confirmDeleteBook = confirm('¿Desea eliminar el libro?');
    if (!confirmDeleteBook)
      return;
    this.deleteBook(id);
  }
  deleteBookComplete() {
    alert('Proceso exitoso.');
    this.books = [];
    this.selectBooks();
  }
}
