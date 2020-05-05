import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'manage', component: ControlPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
