import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private urlApi: string = environment.serverUrl;

  constructor(private httpClient: HttpClient) {}

  /***************************** FAIRE DES REQUETES AVEC UNE PROMISE ********************************* */

  // getProduct(): Promise<Product[]> {
  //   return new Promise((resolve, rejects) => {
  //     if (this.products.length) {
  //       resolve(this.products);
  //     } else {
  //       rejects([]);
  //     }
  //   });
  // }

  /*************************************************************************************************** */

  getProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.urlApi + '/products');
  }

  getSecond(): Observable<Number> {
    return interval(1000);
  }

  getNumber(): Observable<Number> {
    return of(50);
  }

  addproduct(product: Product) {}

  editProduct(_id: string, product: Product) {}

  deleteProduct(_id: string, product: Product) {}
}
