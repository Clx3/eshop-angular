import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ProductPageComponent } from './product-page/product-page.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'manage', component: ControlPanelComponent },
  { path: 'product/:id', component: ProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
