import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { UserdashboardComponent } from './shared/components/userdashboard/userdashboard.component';
import { ProductdashboardComponent } from './shared/components/productdashboard/productdashboard.component';
import { FairsComponent } from './shared/components/fairs/fairs.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductComponent } from './shared/components/productdashboard/product/product.component';
import { ProductFormComponent } from './shared/components/productdashboard/product-form/product-form.component';
import { UserFormComponent } from './shared/components/userdashboard/user-form/user-form.component';
import { UserComponent } from './shared/components/userdashboard/user/user.component';

const routes: Routes = [
  {
    path : '', 
    component  : HomeComponent
  },
  {
    path : 'home',
    component  : HomeComponent
  },
  {
     path : 'users',
     component : UserdashboardComponent 
  },
  {
    path : 'users/addUser',
    component :UserFormComponent
  },
  {
    path : 'users/:userId',
    component : UserComponent
  },
  {
    path : 'users/:userId/editUser',
    component : UserFormComponent
  },
  {
    path : 'products',
    component : ProductdashboardComponent
  },
  {
    path : 'products/addProd',
    component : ProductFormComponent
  },
  {
    path : 'products/:prodId',
    component : ProductComponent
  },
  {
    path : 'products/:prodId/editProd',
    component : ProductFormComponent
  },
  {
    path : 'fairs',
    component : FairsComponent
  },
  {
    path : 'page-not-found',
    component : PageNotFoundComponent
  },
  {
    path : '**',
    redirectTo : 'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
