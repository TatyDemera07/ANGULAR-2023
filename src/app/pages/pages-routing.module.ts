import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //rutas protegidas

      { path: '', component: PagesComponent },
      { path: 'dashboard', component:DashboardComponent},
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent },
    
    ];

  //{path:'**', component: NoFoundPageComponent},

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class PagesRoutingModule { }
