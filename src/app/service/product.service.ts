import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_BASE_URL } from '../constants';
import { Product } from '../entity/product';
import { ProductFilter } from '../entity/productFilter';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {

  }

  getProducts(callback: (products: Product[]) => any): void {
    this.httpClient.get<Product[]>(`http://localhost:3000/products/`).subscribe(jsonObject => {
      
      callback(jsonObject);
    });
  }

  getProductsByFilters(searchText: string, categoryId: number, callback: (products: Product[]) => any) {
    let params = new HttpParams();

    params = params.append('searchText', searchText);
    
    if (categoryId !== 0) {
      params = params.append('categoryId', categoryId.toString());
    }

    this.httpClient.get<Product[]>(`http://localhost:3000/products/`, { params: params }).subscribe(jsonObject => {
      console.log(jsonObject)
      callback(jsonObject);
    });
  }
}
