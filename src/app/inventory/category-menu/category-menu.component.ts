import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../contracts';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit {
  @Input()
  categories: Category[];
  
  constructor() { }

  ngOnInit(): void {
  }

  toggle(category:Category) {
    category.isVisible = !category.isVisible;
  }
}
