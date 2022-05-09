import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { ProductReviewsComponent } from './components/product-tabs/product-reviews/product-reviews.component';
import { ProductvendorComponent } from './components/product-tabs/productvendor/productvendor.component';
import { ProductAdditionalInfoComponent } from './components/product-tabs/product-additional-info/product-additional-info.component';
import { ProductDescriptionComponent } from './components/product-tabs/product-description/product-description.component';
import { ProductComponent } from './components/product/product.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'signin',
    component: SigninComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsContainerComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full',
  },
  {
    path: 'products/:slug',
    component: ProductComponent,
    children: [
      {
        path: '',
        redirectTo: 'description',
        pathMatch: 'prefix',
      },
      {
        path: 'description',
        component: ProductDescriptionComponent,
      },
      {
        path: 'additional-info',
        component: ProductAdditionalInfoComponent,
      },
      {
        path: 'vendor-info',
        component: ProductvendorComponent,
      },
      {
        path: 'reviews',
        component: ProductReviewsComponent,
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
