import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rating } from '../entity/rating';
import { API_BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private httpClient: HttpClient) { }

  getRatingsByProductId(productId: number, callback: (ratings: Rating[]) => any) {
    this.httpClient.get<Rating[]>(`${API_BASE_URL}products/${productId}/ratings/`).subscribe(jsonObject => {
      
      callback(jsonObject);
    });
  }

  createRating(rating: Rating, callback: (createdRating: Rating) => any) {
    this.httpClient.post<Rating>(`${API_BASE_URL}ratings/`, rating).subscribe(jsonObject => {
      
      callback(jsonObject);
    });
  }
}
