import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { CategoryData, Item } from "../contracts";

type ItemCounts = Map<string, number>;

@Component({
  selector: "app-category-dialog",
  templateUrl: "./category-dialog.component.html",
  styleUrls: ["./category-dialog.component.scss"]
})
export class CategoryDialogComponent implements OnInit {
  items: Item[] = [];

  itemCounts: ItemCounts;

  constructor(
    @Inject(MAT_DIALOG_DATA) { category: { items } }: CategoryData,
    private dialogRef: MatDialogRef<CategoryDialogComponent>
  ) {
    if (items) {
      this.items = items;
      this.setItemCounts(items);
    }
  }

  ngOnInit(): void {}

  add({ title }: Item) {
    this.itemCounts[title]++;
  }

  remove({ title }: Item) {
    this.itemCounts[title] = Math.max(--this.itemCounts[title], 0);
  }

  setItemCounts(items: Item[]) {
    this.itemCounts = items.reduce((output, item) => {
      output[item.title] = item.count;
      return output;
    }, {} as ItemCounts);
  }

  done() {
    this.saveItemCounts();
    this.dialogRef.close();
  }

  saveItemCounts() {
    this.items.forEach(item => (item.count = this.itemCounts[item.title]));
  }
}
