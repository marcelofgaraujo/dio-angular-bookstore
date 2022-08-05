import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../shared/services/product-list.service';
import { IBook } from './model/book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  books: any;
  bookService: ProductListService;

  constructor( bookService: ProductListService ) {
    this.bookService = bookService;
  }

  ngOnInit(): void {
    this.books = this.bookService.getBook().subscribe((data) => {
      this.books = data;
      console.log(this.books)
    })
  }

}
