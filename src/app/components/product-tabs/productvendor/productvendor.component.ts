import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productvendor',
  templateUrl: './productvendor.component.html',
  styleUrls: ['./productvendor.component.css'],
})
export class ProductvendorComponent implements OnInit {
  product: Product | undefined;

  constructor() {}

  ngOnInit(): void {}
}
