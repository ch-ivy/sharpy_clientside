import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralPagesRoutingModule } from './general-pages-routing.module';
import { GeneralPagesComponent } from './general-pages.component';


@NgModule({
  declarations: [
    GeneralPagesComponent
  ],
  imports: [
    CommonModule,
    GeneralPagesRoutingModule
  ]
})
export class GeneralPagesModule { }
