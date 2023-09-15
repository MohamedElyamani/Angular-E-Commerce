import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import { WomenRoutingModule } from './women-routing.module';
import { WomenClothesComponent } from './women-clothes/women-clothes.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WomenClothesComponent
  ],
  imports: [
    CommonModule,
    WomenRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class WomenModule { }
