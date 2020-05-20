import { Component, OnInit, Input } from '@angular/core';
import { API_BASE_URL } from '../constants';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  @Input() productId: number;
  source: string = "";

  constructor() { }

  ngOnInit(): void {
    this.source = `${API_BASE_URL}product_image_${this.productId}.png`;
    console.log(this.source)
  }

  onImageError() {
    this.source = "https://material.angular.io/assets/img/examples/shiba2.jpg";
  }

}
