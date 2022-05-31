import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MessagesComponent } from './messages/messages.component';
import { ProductDetailsComponent } from './inventory/partials/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { CollectionDetailsComponent } from './inventory/partials/collection-details/collection-details.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InventoryComponent,
    MessagesComponent,
    ProductDetailsComponent,
    CollectionDetailsComponent,
    OrderListComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
