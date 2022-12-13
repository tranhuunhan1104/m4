import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { ProductAddComponent } from './tutorial-router/product-add/product-add.component';


import { ProductDeleteComponent } from './tutorial-router/product-delete/product-delete.component';
import { ProductEditComponent } from './tutorial-router/product-edit/product-edit.component';
import { ProductComponent } from './tutorial-router/product/product.component';
import { ProductsComponent } from './tutorial-router/products/products.component';
=======
>>>>>>> 00db47565c65a292a5ce9ecfa37fb3aed60c2d8f

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  }
]


@NgModule({
  declarations: [],
<<<<<<< HEAD
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
=======
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
>>>>>>> 00db47565c65a292a5ce9ecfa37fb3aed60c2d8f
})
export class AppRoutingModule { }
