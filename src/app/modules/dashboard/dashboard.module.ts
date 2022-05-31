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
import { OverviewComponent } from './overview/overview.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { ReviewComponent } from './review/review.component';
import { AddressesComponent } from './addresses/addresses.component';
import { SparklineRowComponent } from './overview/partials/sparkline-row/sparkline-row.component';
import { SalesChartComponent } from './overview/partials/sales-chart/sales-chart.component';
import { CustomersCardComponent } from './overview/partials/customers-card/customers-card.component';
import { TopSellingComponent } from './overview/partials/top-selling/top-selling.component';
import { RecentOrdersComponent } from './overview/partials/recent-orders/recent-orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    InventoryComponent,
    MessagesComponent,
    ProductDetailsComponent,
    CollectionDetailsComponent,
    OrderListComponent,
    OverviewComponent,
    ProfileComponent,
    SettingsComponent,
    DiscountsComponent,
    ReviewComponent,
    AddressesComponent,
    SparklineRowComponent,
    SalesChartComponent,
    CustomersCardComponent,
    TopSellingComponent,
    RecentOrdersComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutingModule,
    SharedModule,
  ],
})
export class DashboardModule {}
