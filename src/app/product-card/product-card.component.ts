import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../entity/product';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onViewBtnClick(): void {
    this.router.navigate(['/product', this.product.id]);
  }

}
