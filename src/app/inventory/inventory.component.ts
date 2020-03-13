import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CategoryDialogComponent } from "./category-dialog/category-dialog.component";
import { Category } from "./contracts";
import { InventoryService } from "./inventory.service";

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.scss"]
})
export class InventoryComponent implements OnInit {
  categories: Category[];

  constructor(
    private dialog: MatDialog,
    private inventoryService: InventoryService
  ) {}

  ngOnInit(): void {
    this.inventoryService.getCategories().subscribe(categoryList => {
      this.categories = categoryList;
    });
  }

  getVisibleCategories() {
    if (!this.categories) {
      return [];
    }

    return this.categories.filter(({ isVisible }) => isVisible);
  }

  openCategoryDialog(category: Category, $event: any) {
    let position: any = {};
    if (
      $event.target &&
      $event.target.getBoundingClientRect &&
      $event.target.getBoundingClientRect()
    ) {
      const clientRect = $event.target.getBoundingClientRect();
      position.left = clientRect.x + "px";
      position.top = clientRect.y + clientRect.height + "px";
    }
    this.dialog.open(CategoryDialogComponent, {
      data: { category },
      backdropClass: "category-dialog-backdrop",
      position
    });
  }

  getItemCount({ items }: Category) {
    if (!items) {
      return 0;
    }

    return items.reduce((total, { count }) => (total += count), 0);
  }
}
