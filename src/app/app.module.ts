import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { ProductsComponent } from './tutorial-router/products/products.component';
import { ProductComponent } from './tutorial-router/product/product.component';
import { ProductAddComponent } from './tutorial-router/product-add/product-add.component';
import { ProductEditComponent } from './tutorial-router/product-edit/product-edit.component';
import { ProductDeleteComponent } from './tutorial-router/product-delete/product-delete.component';
=======
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";

import { ProductModule } from './product/product.module';
>>>>>>> 00db47565c65a292a5ce9ecfa37fb3aed60c2d8f

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
<<<<<<< HEAD
    CommonModule,
=======
    ReactiveFormsModule,
    AppRoutingModule,
    ProductModule,
    HttpClientModule
>>>>>>> 00db47565c65a292a5ce9ecfa37fb3aed60c2d8f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
