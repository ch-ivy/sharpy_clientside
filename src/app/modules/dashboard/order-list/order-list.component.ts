import { Component, OnInit } from '@angular/core';
import { OrderStatus } from 'src/app/models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  table = [1, 2, 3, 4, 5, 6, 7];
  status: OrderStatus = 'pending';
  page_state: 'list' | 'detail' = 'list';
  constructor() {}

  ngOnInit(): void {}

  acceptOrder() {
    this.status = 'accepted';
  }

  declineOrder() {
    this.status = 'rejected';
  }

  changePageState(state: 'list' | 'detail') {
    this.page_state = state;
  }
}
