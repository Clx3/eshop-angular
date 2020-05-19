import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../entity/product';
import { Router } from '@angular/router';

const DESC_MAX_LENGTH: number = 100;

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

  getDescription(): string {
    const description = this.product.description;
    if (this.product.description.length > DESC_MAX_LENGTH) {
      return description.slice(0, DESC_MAX_LENGTH) + '...';
    } else {
      return description;
    }
  }

}
