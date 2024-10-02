import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories.model';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'

})
export class CategoriesComponent implements OnInit{
categories:Categories[]=[];
selectedCategory: Categories|undefined;

constructor(private categoryservice:CategoriesService,private router:Router){}

ngOnInit(): void {
  this.categoryservice.getCategories().subscribe((data)=>{
    this.categories=data;
    console.log('Categories loaded:', this.categories); // Check if categories are loaded

  })
}
onSelectedCategory(event:Event):void{
  const selectedCategoryName = (event.target as HTMLSelectElement).value;
  this.selectedCategory = this.categories.find(category => category.name === selectedCategoryName);

}
viewMore() {
  if (this.selectedCategory) {
    this.router.navigate(['/description', this.selectedCategory.name]);
  }
}

}
