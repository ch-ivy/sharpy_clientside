import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressesComponent } from './addresses/addresses.component';
import { DashboardComponent } from './dashboard.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MessagesComponent } from './messages/messages.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OverviewComponent } from './overview/overview.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewComponent } from './review/review.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'inventory',
        component: InventoryComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent,
      },
      {
        path: 'order-list',
        component: OrderListComponent,
      },
      {
        path: 'orders',
        component: OrderListComponent,
      },
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'reviews',
        component: ReviewComponent,
      },
      {
        path: 'discount',
        component: DiscountsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'manage-address',
        component: AddressesComponent,
      },
      {
        path: '',
        redirectTo: '/dashboard/overview',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '/dashboard/overview',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
