import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { BlogComponent } from './blog/blog.component';
import { AdminCategoryComponent } from './admin-blog/admin-category/admin-category.component';
import { AdminProductsComponent } from './admin-blog/admin-products/admin-products.component';
import { AdminBlogsComponent } from './admin-blog/admin-blogs/admin-blogs.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminBlogComponent,
    BlogComponent,
    AdminCategoryComponent,
    AdminProductsComponent,
    AdminBlogsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
