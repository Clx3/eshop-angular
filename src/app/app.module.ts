import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ProductService } from './service/product.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { CategoryService } from './service/category.service';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { CategoryManagerComponent } from './category-manager/category-manager.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RatingService } from './service/rating.service';
import { ProductImageService } from './service/product-image.service';
import { ProductImageComponent } from './product-image/product-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ControlPanelComponent,
    ProductCardComponent,
    ProductManagerComponent,
    CategoryManagerComponent,
    ProductPageComponent,
    ProductImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    MatTabsModule,
    MatSliderModule,
    ToastrModule.forRoot()
  ],
  exports: [
    ProductCardComponent
  ],
  providers: [ProductService, CategoryService, RatingService, ProductImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
