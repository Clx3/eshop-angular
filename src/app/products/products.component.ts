import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../entity/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(productService: ProductService) {
    productService.getProducts((products) => {
      this.products = products;
      console.log(this.products);
    });
  }

  ngOnInit(): void {
  }

}
