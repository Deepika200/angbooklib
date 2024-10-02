import { Injectable, OnInit } from '@angular/core';
import { Categories } from './categories.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService implements OnInit {

 private dataurl= 'assets/mock-data.json'

//  private url = 'assets/mock-data.json';
 constructor(private http: HttpClient) {}
 ngOnInit() {}
 getCategories(): Observable<Categories[]> {
   return this.http.get<Categories[]>(this.dataurl);
 }
}
