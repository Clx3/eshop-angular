import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../entity/category';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: ['./category-manager.component.css']
})
export class CategoryManagerComponent implements OnInit {

  categories: Category[] = [];
  selectedCategory: Category;

  /**
   * This it the category that is going to be used
   * in the input elements.
   */
  inModifyCategory: Category = { id: 0, name: '' };

  constructor(private categoryService: CategoryService, private toastr: ToastrService) {
    this.refreshCategories(0);
  }

  refreshCategories(setInModifyCategoryId: number) {
    this.categoryService.getCategories(categories => {
      this.categories = [
        { id: 0, name: 'New category' },
        ...categories
      ];

      if (setInModifyCategoryId === 0) {
        this.selectedCategory = this.categories[0];
        this.inModifyCategory = { id: 0, name: '' };
      } else {
        const category = this.categories.find(category => category.id === setInModifyCategoryId);
        this.selectedCategory = category;
        this.inModifyCategory = { ...category };
      }
      console.log(this.categories);
    });
  }

  ngOnInit(): void {
  }

  onCategorySelectionChange(category: Category) {
    this.inModifyCategory = { ...category };
    console.log(this.inModifyCategory);
  }

  onDeleteBtnClick() {
    this.categoryService.deleteCategory(this.inModifyCategory.id, jsonObject => {
      this.toastr.success('Category deleted successfully!', 'Done!' , {
        positionClass: 'toast-bottom-center'
      });
      this.refreshCategories(0);
    });
  }

  onUpdateBtnClick() {
    this.categoryService.updateCategory(this.inModifyCategory, updatedCategory => {
      this.toastr.success('Category updated successfully!', 'Done!' , {
        positionClass: 'toast-bottom-center'
      });
      this.refreshCategories(updatedCategory.id);
    });
  }

  onCreateBtnClick() {
    this.categoryService.createCategory(this.inModifyCategory, createdCategory => {
      this.toastr.success('Category created successfully!', 'Done!' , {
        positionClass: 'toast-bottom-center'
      });
      this.refreshCategories(createdCategory.id);
    });
  }

}
