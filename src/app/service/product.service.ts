import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../constants';
import { Product } from '../entity/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {

  }

  // Test
  getProducts(callback: (products: Product[]) => any): void {
    this.httpClient.get<Product[]>(`http://localhost:3000/products/`).subscribe(jsonObject => {
      
      callback(jsonObject);
    });
  }
}
