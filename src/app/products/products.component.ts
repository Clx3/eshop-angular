import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../entity/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Category } from '../entity/category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  searchInputText: string = '';

  categories: Category[] = [{ id: 0, name: 'All products' }];
  selectedCategory: Category = this.categories[0];

  constructor(productService: ProductService, categoryService: CategoryService) {
    productService.getProducts((products) => {
      this.products = products;
      console.log(this.products);
    });

    categoryService.getCategories(categories => {
      this.categories = this.categories.concat(categories);
      console.log(this.categories)
    });
  }

  ngOnInit(): void {
  }

  filterProducts(): void {
    console.log(this.searchInputText)
    console.log(this.selectedCategory)
  }

}
