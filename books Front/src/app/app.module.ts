import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book.component';
import { BooksComponent } from './components/books.component';
import { GlobalUtilities } from './shared/utilities/globalUtilities';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
     { path: '', component: BooksComponent, pathMatch: 'full' }
   ])
  ],
  providers: [GlobalUtilities],
  bootstrap: [AppComponent]
})
export class AppModule { }
