package com.example.books.controllers;

import com.example.books.dataLayer.BookService;
import com.example.books.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;
@RestController
@RequestMapping("/api/v1")
public class BookController {
  private final BookService bookService;

  @Autowired
  public BookController(BookService bookService) {
    this.bookService = bookService;
  }

  @GetMapping("/books")
  public ResponseEntity<List<Book>> getBooks() {
      try {
          List<Book> books = bookService.getBooks();
          return ResponseEntity.ok().body(books);
      }
      catch (ResponseStatusException exc) {
          throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Foo Not Found", exc);
    }
  }
  @GetMapping("/book/{id}")
  public ResponseEntity<Book> getBook(@PathVariable(value = "id") Long bookId) throws ResponseStatusException {
      try {
          Book book = bookService.getBook(bookId);
          return ResponseEntity.ok().body(book);
      }
      catch (ResponseStatusException exc) {
          throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Foo Not Found", exc);
      }
  }
   @PostMapping("/book")
   public ResponseEntity<Book> createBook(@RequestBody Book book) throws ResponseStatusException {
       try {
           Book bookTemp = bookService.insertBook(book);
           return ResponseEntity.ok().body(bookTemp);
       }
       catch (ResponseStatusException exc) {
           throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Foo Not Found", exc);
       }
   }
   @PutMapping("/book/{id}")
   public ResponseEntity<Book> updateBook(@PathVariable(value = "id") Long bookId, @RequestBody Book book) throws ResponseStatusException {
       try {
           Book bookTemp = bookService.updateBook(book, bookId);
           return ResponseEntity.ok().body(bookTemp);
       }
       catch (ResponseStatusException exc) {
           throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Foo Not Found", exc);
       }
   }
   @DeleteMapping("/book/{id}")
   public ResponseEntity<Boolean> deleteBook(@PathVariable(value = "id") Long bookId) throws ResponseStatusException {
       try {
           Boolean deletedBook = bookService.deleteBook(bookId);
           return ResponseEntity.ok().body(deletedBook);
       }
       catch (ResponseStatusException exc) {
           throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Foo Not Found", exc);
       }
   }
}
