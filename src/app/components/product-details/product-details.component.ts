import { Product } from './../../models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor() {}

  ngOnInit(): void {}

  handleChangeDetails(component: any) {
    component.product = this.product;
    // console.log({ Params: component });
  }
}
