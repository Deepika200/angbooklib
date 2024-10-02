import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  {path:'home',component:HomeComponent  },
  {path:'categories',component:CategoriesComponent},
  { path: 'description/:categoryName', component: DescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
