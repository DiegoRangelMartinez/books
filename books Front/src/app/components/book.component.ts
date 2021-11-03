import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../shared/models/book';
import { BookService } from '../shared/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
  querystringParams = { id: -1 };
  title = 'Agregar libro';
  form: FormGroup;
  book: Book;

    constructor(
      private formBuilder: FormBuilder,
      private activatedRoute: ActivatedRoute,
      private bookService: BookService,
      private router: Router) { }
    ngOnInit() {
      this.createForm();
      this.getQuerystringParams();
      this.setFormValuesAsync();
    }

    onSubmit() {
      if (!this.form.valid)
        return alert('Verifique el formulario');
      if (!this.form.dirty)
        return alert('Realice algún cambio');
      const mergedItem = { ...this.book, ...this.form.value };
      if (!this.book) {
        this.insertBook(mergedItem);
        return;
      }
      this.updateBook(mergedItem);
    }

    selectBook(id: number) {
      this.bookService.selectBook(id).subscribe(
        (data) => { this.selectBookComplete(data) },
        (error) => { alert("Ha ocurrido un error al consultar el libro."); });
    }
    insertBook(item: Book) {
      this.bookService.insertBook(item).subscribe(
        (data) => { this.insertBookComplete() },
        (error) => { alert('Ha ocurrido un error al agregar el libro.'); });
    }
    updateBook(item: Book) {
      this.bookService.updateBook(item).subscribe(
        () => { this.updateBookComplete() },
        (error) => { alert('Ha ocurrido un error al editar el libro.'); });
    }

    createForm() {
      this.form = this.formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(40)]],
        author: ['', [Validators.required, Validators.maxLength(30)]],
        pages: ['', [Validators.required, Validators.maxLength(4)]],
        editorial: ['', [Validators.required, Validators.maxLength(30)]],
        gender: ['', [Validators.required, Validators.maxLength(20)]]
      });
    }
    getQuerystringParams() {
      const id = this.activatedRoute.snapshot.params.get('id') ? +this.activatedRoute.snapshot.params.get('id') : -1;
      if (id === -1)
        return;
      this.querystringParams.id = id;
    }
    setFormValuesAsync() {
      if (this.querystringParams.id == -1)
        return;
      this.selectBook(this.querystringParams.id);
    }
    selectBookComplete(Book: Book) {
      if (!Book)
        return;
      this.createTitle(Book.name);
      this.setBookForm(Book);
    }
    createTitle(bookName: string) {
      this.title = `Editar ${bookName}`;
    }
    setBookForm(book: Book) {
      if (book == null)
        return;
      this.book = book;
      this.form.patchValue({
        name: book.name,
        author: book.author,
        pages: book.pages,
        editorial: book.editorial,
        gender: book.gender
      });
    }
    insertBookComplete() {
      this.saveBookComplete();
    }
    updateBookComplete() {
      this.saveBookComplete();
    }
    saveBookComplete() {
      alert('Procesado con exito.');
      this.router.navigate(['']);
    }
}
