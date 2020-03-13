import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS
} from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CategoryDialogComponent } from "./category-dialog/category-dialog.component";
import { CategoryMenuComponent } from "./category-menu/category-menu.component";
import { InventoryComponent } from "./inventory.component";

@NgModule({
  declarations: [
    InventoryComponent,
    CategoryMenuComponent,
    CategoryDialogComponent,
    CategoryDialogComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule
  ],
  exports: [InventoryComponent],
  entryComponents: [CategoryDialogComponent],
  providers: []
})
export class InventoryModule {}
