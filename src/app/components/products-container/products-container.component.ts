import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Subscription } from 'rxjs';
import { CategoriesService } from './../../services/categories.service';
import { Category } from './../../models/category';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css'],
})
export class ProductsContainerComponent implements OnInit, OnDestroy {
  categories: Category[] | undefined;
  products: Product[] = [];
  currentCategory: Category | undefined;
  isLoading: boolean = true;

  categoriesSub: Subscription | undefined;
  productSub: Subscription | undefined;

  constructor(
    private categoriesService: CategoriesService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.categoriesSub = this.categoriesService.getCategories().subscribe({
      next: (value: Category[]) => {
        this.categories = value;
        this.handleClick(null, this.categories[0]);
      },
      error: (message: string) => {
        console.log(message);
      },
    });
  }

  ngOnDestroy(): void {
    this.categoriesSub?.unsubscribe();
    this.productSub?.unsubscribe();
  }

  handleClick(event: any, category: Category) {
    this.currentCategory = category;
    window.scrollTo(0, 0);
    if (event) {
      event.preventDefault();
    }
    // this.isLoading = true;

    this.categoriesSub = this.productService.getProduct().subscribe({
      next: (resultData: Product[]) => {
        this.products = resultData;
        this.products = this.products.filter((product: Product) => {
          for (let index in product.categories) {
            if (product.categories[index].slug == category.slug) {
              return true;
            }
          }
          return false;
        });
        this.isLoading = false;
      },
      error: (message: string) => {
        console.log(message);
      },
    });
  }
}
