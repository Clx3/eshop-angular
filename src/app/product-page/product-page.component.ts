import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../entity/product';
import { RatingService } from '../service/rating.service';
import { Rating } from '../entity/rating';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  productId: number;

  product: Product;
  ratings: Rating[] = [];

  userRating: Rating = { id: 0, productId: 0, username: '', comment: '', ratingValue: 2.5 };

  constructor(private route: ActivatedRoute, private productService: ProductService, private ratingService: RatingService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));

    this.productService.getProductById(this.productId, product => {
      this.product = product;
    });

    this.refreshRatings();
  }

  refreshRatings(): void {
    this.ratingService.getRatingsByProductId(this.productId, ratings => {
      this.ratings = ratings;
      this.userRating = { id: 0, productId: 0, username: '', comment: '', ratingValue: 2.5 };
    });
  }

  isUserRatingUsernameValid() {
    return this.userRating.username.length > 3;
  }

  onAddToCartBtnClick(): void {
    console.log("Add to cart!");
  }

  onAddRatingBtnClick(): void {
    this.userRating.productId = this.product.id;

    this.ratingService.createRating(this.userRating, rating => {
      this.toastr.success('Rating left succesfully!', 'Done!' , {
        positionClass: 'toast-bottom-center'
      });
      this.refreshRatings();
      console.log(rating);
    });
  }

}
