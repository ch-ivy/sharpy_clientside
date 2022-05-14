import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CollectionDetailsComponent } from './partials/collection-details/collection-details.component';
import { ProductDetailsComponent } from './partials/product-details/product-details.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  art_grid = [1, 2, 3, 4];
  collections = [1, 2];
  view_mode: 'collection' | 'products' = 'collection';
  product_list = [1, 2, 3, 4, 5];
  isDropdown = false;

  constructor(private ms: NgbModal) {}

  ngOnInit(): void {}

  openProduct() {
    this.ms.open(ProductDetailsComponent, {
      size: 'fullscreen',
      scrollable: true,
    });
  }

  openCollection() {
    this.ms.open(CollectionDetailsComponent, {
      size: 'fullscreen',
      scrollable: true,
    });
  }
}
