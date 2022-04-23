import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
}
