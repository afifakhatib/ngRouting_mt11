import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { UserdashboardComponent } from './shared/components/userdashboard/userdashboard.component';
import { ProductdashboardComponent } from './shared/components/productdashboard/productdashboard.component';
import { FairsComponent } from './shared/components/fairs/fairs.component';
import { UserComponent } from './shared/components/userdashboard/user/user.component';
import { UserFormComponent } from './shared/components/userdashboard/user-form/user-form.component';
import { ProductComponent } from './shared/components/productdashboard/product/product.component';
import { ProductFormComponent } from './shared/components/productdashboard/product-form/product-form.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserdashboardComponent,
    ProductdashboardComponent,
    FairsComponent,
    UserComponent,
    UserFormComponent,
    ProductComponent,
    ProductFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
