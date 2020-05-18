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

  createCategory(category: Category, callback: (createdCategory: Category) => any) {
    this.httpClient.post<Category>(`${API_BASE_URL}category/`, category).subscribe(jsonObject => {
      callback(jsonObject);
    });
  }

  updateCategory(category: Category, callback: (updatedCategory: Category) => any) {
    this.httpClient.put<Category>(`${API_BASE_URL}category/`, category).subscribe(jsonObject => {
      callback(jsonObject);
    });
  }

  deleteCategory(id: number, callback: (jsonObject: object) => any) {
    this.httpClient.delete(`${API_BASE_URL}category/${id}`).subscribe(jsonObject => {
      callback(jsonObject);
    });
  }
  
}
