import { Component, OnInit } from '@angular/core';
import { Product } from '../entity/product';
import { ProductService } from '../service/product.service';
import { CategoryService } from '../service/category.service';
import { Category } from '../entity/category';

@Component({
  selector: 'product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  productService: ProductService;
  categoryService: CategoryService;

  products: Product[] = [{ id: 0, name: 'None', price: 0, description: '', categoryId: null }];
  selectedProduct: Product = this.products[0];

  /**
   * This is the product that is going to be modified.
   */
  inModifyProduct: Product = { ...this.products[0] };

  categories: Category[] = [];

  constructor(productService: ProductService, categoryService: CategoryService) {
    this.productService = productService;
    this.categoryService = categoryService;

    this.productService.getProducts(products => {
      this.products = this.products.concat(products);
      console.log(this.products);
    });

    this.categoryService.getCategories(categories => {
      this.categories = categories;
    });
  }

  ngOnInit(): void {
  }

  onProductSelectionChange(product: Product) {
    this.inModifyProduct = { ...product };
    console.log(this.inModifyProduct)
  }

  onDeleteBtnClick() {
    console.log("Delete");
  }

  onUpdateBtnClick() {
    console.log(this.inModifyProduct)
  }

  onCreateBtnClick() {
    console.log("create");
  }

}
