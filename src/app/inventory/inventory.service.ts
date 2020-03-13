import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Category, CategoryResponse } from "./contracts";
import { map } from "rxjs/operators";

const DATA_URL = "data/items.json";

@Injectable({
  providedIn: "root"
})
export class InventoryService {
  constructor(private http: HttpClient) {}

  private getData() {
    return this.http.get(DATA_URL);
  }

  getCategories() {
    return this.getData().pipe(
      map<CategoryResponse, Category[]>(CategoryResponseMapper)
    );
  }
}

function CategoryResponseMapper({ categories }: CategoryResponse) {
  return Object.keys(categories).map<Category>(category => ({
    title: category,
    isVisible: false,
    items: categories[category]
      ? categories[category].map(itemName => ({
          title: itemName,
          count: 0
        }))
      : []
  }));
}
