import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {

  constructor(private httpClient: HttpClient) { }

  uploadProductImage(productId: number, imageFile: File, callback: (jsonObject: Object) => any) {
    const formData: FormData = new FormData();
    formData.append('product_image', imageFile, imageFile.name);
    formData.append('productId', productId.toString());
    this.httpClient.post(`${API_BASE_URL}productimage/`, formData).subscribe(jsonObject => {
      callback(jsonObject);
    });
  }

}
