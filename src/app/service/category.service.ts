import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from '../entity/category';
import { API_BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getCategories(callback: (products: Category[]) => any): void {
    this.httpClient.get<Category[]>(`${API_BASE_URL}category/`).subscribe(jsonObject => {
      
      callback(jsonObject);
    });
  }
}
