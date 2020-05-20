import { Component, OnInit } from '@angular/core';
import { Product } from '../entity/product';
import { ProductService } from '../service/product.service';
import { CategoryService } from '../service/category.service';
import { Category } from '../entity/category';
import { ToastrService } from 'ngx-toastr';
import { ProductImageService } from '../service/product-image.service';

@Component({
  selector: 'product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  products: Product[] = [];
  selectedProduct: Product;

  productPictureFile: File;

  /**
   * This is the product that is going to be modified.
   */
  inModifyProduct: Product = { id: 0, name: '', price: 0, description: '', categoryId: null };

  categories: Category[] = [];

  constructor(
    private productService: ProductService, 
    private categoryService: CategoryService, 
    private productImageService: ProductImageService, 
    private toastr: ToastrService) {

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
      this.toastr.success('Product deleted succesfully!', 'Done!' , {
        positionClass: 'toast-bottom-center'
      });
      this.refreshProducts(0);
    });
  }

  onUpdateBtnClick() {
    this.productService.updateProduct(this.inModifyProduct, updatedProduct => {
      this.toastr.success('Product updated succesfully!', 'Done!' , {
        positionClass: 'toast-bottom-center'
      });
      this.refreshProducts(updatedProduct.id);
    });
  }

  onCreateBtnClick() {
    this.productService.createProduct(this.inModifyProduct, createdProduct => {
      this.toastr.success('Product created succesfully!', 'Done!' , {
        positionClass: 'toast-bottom-center'
      });

      /* Uploading the image */
      this.productImageService.uploadProductImage(createdProduct.id, this.productPictureFile, jsonObject => {
        this.toastr.success('Product image uploaded succesfully!', 'Done!' , {
          positionClass: 'toast-bottom-center'
        });
      });

      this.refreshProducts(createdProduct.id);
    });
  }

  onFileInputChange(files: FileList) {
    this.productPictureFile = files.item(0);
  }

}
