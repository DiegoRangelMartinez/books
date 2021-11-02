package com.example.books.dataLayer;

import com.example.books.models.Book;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class BookService {
  private final BookRepository bookRepository;

  public BookService(BookRepository bookRepository) {
    this.bookRepository = bookRepository;
  }

  public List<Book> getBooks() {
    return bookRepository.findAll();
  }
  public Book getBook(long id) {
    Optional<Book> optionalBook = bookRepository.findById(id);
    return optionalBook.get();
  }
  public Book insertBook(Book book) {
    return bookRepository.save(book);
  }
  public Book updateBook(Book book, long bookId) {
    Optional<Book> optionalBook = bookRepository.findById(bookId);
    Book updatedBook = optionalBook.get();
    updatedBook.setName(book.getName());
    updatedBook.setAuthor(book.getAuthor());
    updatedBook.setEditorial(book.getEditorial());
    updatedBook.setGender(book.getGender());
    updatedBook.setPages(book.getPages());
    return bookRepository.save(updatedBook);
  }
  public boolean deleteBook(long bookId) {
    Optional<Book> optionalBook = bookRepository.findById(bookId);
    Book book = optionalBook.get();
    bookRepository.delete(book);
    return Boolean.TRUE;
  }
}