import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InventoryComponent,
    MessagesComponent
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
