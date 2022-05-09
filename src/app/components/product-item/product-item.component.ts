import { Product } from './../../models/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product?: Product;

  // SLUG :chaine de caractère unique, qui permet de représenter un produit. Il améliore aussi le referencement de votre app

  @Output() deleteProductItem: EventEmitter<Product> =
    new EventEmitter<Product>();

  @Output() displayProductViewModal: EventEmitter<Product> =
    new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {
    console.log('zzzz');

    console.log(this.product);
  }

  handleClickProduct(product?: Product) {
    this.displayProductViewModal.emit(product);
  }

  deleteProduct(product?: Product) {
    //this.deleteProductItem.emit(product);
  }
}
