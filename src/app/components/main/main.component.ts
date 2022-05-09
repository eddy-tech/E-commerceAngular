import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  title: string = 'My Items Shop ZAKKE-STORE';

  productSub: Subscription | undefined;

  products: Product[] = [];
  isLoading: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.productSub = this.productService.getProduct().subscribe({
      next: (product: Product[]) => {
        this.products = product;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.log(error);
        this.isLoading = true;
      },
      complete: () => {
        console.log('Complete !');
      },
    });
  }
}
