import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { AdminCategoryComponent } from './admin-blog/admin-category/admin-category.component';
import { AdminProductsComponent } from './admin-blog/admin-products/admin-products.component';
import { AdminBlogsComponent } from './admin-blog/admin-blogs/admin-blogs.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'admin-blog/blogs' },
  { path: 'blog', component: BlogComponent },
  {
    path: 'admin-blog', component: AdminBlogComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'category' },
      { path: 'category', component: AdminCategoryComponent },
      { path: 'products', component: AdminProductsComponent },
      { path: 'blogs', component: AdminBlogsComponent }
    ]
  },
  { path: '**', component: AdminBlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
