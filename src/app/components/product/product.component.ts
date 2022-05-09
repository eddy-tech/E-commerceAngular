import { ProductService } from './../../services/product.service';
import { Subscription } from 'rxjs';
import { Product } from './../../models/product';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
  slug: string | undefined;
  isLoading: boolean = true;
  currentImage: string | undefined;

  product?: Product;
  productSub?: Subscription;

  constructor(
    private activedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.slug = this.activedRoute.snapshot.params['slug'];
    this.productSub = this.productService.getProduct().subscribe({
      next: (products: Product[]) => {
        this.product = products.filter((p) => p.slug === this.slug)[0];
        this.currentImage = this.product.imageUrl[0];
        this.isLoading = false;
        console.log(this.product);
      },
      error: (error: any) => {
        console.log('Error :', error);
        this.isLoading = true;
      },
    });
  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }

  handleChangeCurrentImage(url: string) {
    this.currentImage = url;
  }
}
