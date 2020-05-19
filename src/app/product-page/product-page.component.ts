import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../entity/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    this.productService.getProductById(Number(productId), product => {
      this.product = product;
    });
  }

  onAddToCartBtnClick(): void {
    console.log("Add to cart!");
  }

}
