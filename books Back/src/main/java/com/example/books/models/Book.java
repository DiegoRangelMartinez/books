package com.example.books.models;

import javax.persistence.*;

@Entity
@Table(name = "books")
public class Book {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
  @Column(name = "name", nullable = false)
  private String name;
  @Column(name = "author", nullable = false)
  private String author;
  @Column(name = "pages", nullable = false)
  private int pages;
  @Column(name = "editorial", nullable = false)
  private String editorial;
  @Column(name = "gender", nullable = false)
  private String gender;
  
  public long getId() {
    return id;
  }
  public void setId(long id) {
    this.id = id;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public String getAuthor() {
    return author;
  }
  public void setAuthor(String author) {
    this.author = author;
  }
  public int getPages() {
    return pages;
  }
  public void setPages(int pages) {
    this.pages = pages;
  }
  public String getEditorial() {
    return editorial;
  }
  public void setEditorial(String editorial) {
    this.editorial = editorial;
  }
  public String getGender() {
    return gender;
  }
  public void setGender(String gender) {
    this.gender = gender;
  }
}
