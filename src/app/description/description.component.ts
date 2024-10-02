import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';
import { Categories } from '../categories.model';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.css',
})
export class DescriptionComponent implements OnInit {
  selectedCategory: Categories;
  id: Number;
  constructor(
    private categoryService: CategoriesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const categoryName = this.activatedRoute.snapshot.params.categoryName;

    console.log(this.activatedRoute.snapshot);

    this.categoryService.getCategories().subscribe((categories) => {
      this.selectedCategory = categories.find((category) => {
        return categoryName.toLowerCase() === category.name.toLowerCase();
      });
      console.log('categoryName from route params: ', categoryName);
      console.log('selected Category :', this.selectedCategory);
    });
  }
}