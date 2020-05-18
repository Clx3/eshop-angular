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

  products: Product[] = [];
  selectedProduct: Product;

  /**
   * This is the product that is going to be modified.
   */
  inModifyProduct: Product = { id: 0, name: '', price: 0, description: '', categoryId: null };

  categories: Category[] = [];

  constructor(productService: ProductService, categoryService: CategoryService) {
    this.productService = productService;
    this.categoryService = categoryService;

    this.refreshProducts(0);

    this.categoryService.getCategories(categories => {
      this.categories = categories;
    });
  }

  ngOnInit(): void {
  }

  refreshProducts(setInModifyProductId: number) {
    this.productService.getProducts(products => {
      this.products = [
        { id: 0, name: 'New product', price: 0, description: '', categoryId: null },
        ...products];

        if (setInModifyProductId === 0) {
          this.selectedProduct = this.products[0];
          this.inModifyProduct = { id: 0, name: '', price: 0, description: '', categoryId: null };
        } else {
          const product = this.products.find(product => product.id === setInModifyProductId);
          this.selectedProduct = product;
          this.inModifyProduct = { ...product };
        }
      console.log(this.products);
    });
  }

  onProductSelectionChange(product: Product) {
    this.inModifyProduct = { ...product };
    console.log(this.inModifyProduct)
  }

  onDeleteBtnClick() {
    const deleteId = this.inModifyProduct.id;

    this.productService.deleteProduct(deleteId, jsonObject => {
      this.refreshProducts(0);
    });
  }

  onUpdateBtnClick() {
    this.productService.updateProduct(this.inModifyProduct, updatedProduct => {
      console.log(updatedProduct);
      this.refreshProducts(updatedProduct.id);
    });
  }

  onCreateBtnClick() {
    this.productService.createProduct(this.inModifyProduct, createdProduct => {
      console.log(createdProduct);
      this.refreshProducts(createdProduct.id);
    });
  }

}
