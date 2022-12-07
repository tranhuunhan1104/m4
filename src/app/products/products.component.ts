import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:Product[]=[];
  constructor( private __ProductService:ProductService){}



  ngOnInit(){
  //  goi phuonbg thuc all cua service
    let items = this.__ProductService.all();
    console.log(items);

  // goi phuong thuc find cua service
    let item = this.__ProductService.find(0);
    console.log(item);
  // goi phuong thuc tore cua service

  // goi phuong thuc update cua service
    let update 
  // goi phuong thuc destroy cua service
  }


}
