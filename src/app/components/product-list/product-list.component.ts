import { Product } from './../../models/product';
import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input() isLoading: boolean = true;

  @Input() resultData: Product[] = [];

  modalProduct?: Product;

  isDisplayModal: boolean = false;

  productSub?: Subscription;

  constructor() {}

  ngOnInit(): void {
    /*************************************  RECUPERER LES PROMISES DANS UN FICHIER TS  ********************************* */
    //   this.productService
    //     .getProduct()
    //     .then((product: Product[]) => {
    //       this.products = product;
    //     })
    //     .catch(() => {
    //       this.products = [];
    //     });
    // }
  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }

  handleDeleteProduct(product: Product) {
    this.resultData = this.resultData.filter((p) => p._id !== product._id);
  }

  handleDisplayProductViewModal(product: Product) {
    if (product) {
      this.isDisplayModal = true;
      this.modalProduct = product;
    }
  }

  handleCloseModal() {
    this.isDisplayModal = false;
    this.modalProduct = undefined;
  }
}
