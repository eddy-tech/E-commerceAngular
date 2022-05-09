import { Item } from './../../models/item';
import { nav_items, auth_items } from './../../api/nav';
import { ProductService } from './../../services/product.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  data?: Number;
  dataSub?: Subscription;

  second?: Number;
  secondSub?: Subscription;

  siteName: string = environment.siteName;
  navs_data: Item[] = nav_items;
  auths_data: Item[] = auth_items;

  isDisplayMobileNav: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.dataSub = this.productService.getNumber().subscribe(
      (value: Number) => {
        this.data = value;
      },
      (err) => {
        console.log(err);
      }
    );

    this.secondSub = this.productService.getSecond().subscribe({
      next: (value: Number) => {
        this.second = value;
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('Complete Product');
      },
    });

    console.log(this.navs_data);
  }

  ngOnDestroy(): void {
    this.secondSub?.unsubscribe();
  }

  handleDisplayMobileNav() {
    this.isDisplayMobileNav = !this.isDisplayMobileNav;
  }

  handleCloseMobileNav() {
    this.isDisplayMobileNav = false;
  }
}
