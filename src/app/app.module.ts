import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalProductViewComponent } from './components/modal/modal-product-view/modal-product-view.component';
import { HeaderComponent } from './components/header/header.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductDescriptionComponent } from './components/product-tabs/product-description/product-description.component';
import { ProductAdditionalInfoComponent } from './components/product-tabs/product-additional-info/product-additional-info.component';
import { ProductvendorComponent } from './components/product-tabs/productvendor/productvendor.component';
import { ProductReviewsComponent } from './components/product-tabs/product-reviews/product-reviews.component';
import { AsideNavComponent } from './components/aside-nav/aside-nav.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    FooterComponent,
    MainComponent,
    ProductComponent,
    ProductItemComponent,
    ProductListComponent,
    SigninComponent,
    SignupComponent,
    ModalProductViewComponent,
    HeaderComponent,
    PaymentCardComponent,
    ProductDetailsComponent,
    ProductDescriptionComponent,
    ProductAdditionalInfoComponent,
    ProductvendorComponent,
    ProductReviewsComponent,
    AsideNavComponent,
    HomeSliderComponent,
    ProductsContainerComponent,
    PageTitleComponent,
    ContactComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
