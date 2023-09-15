import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import { ElectronicRoutingModule } from './electronic-routing.module';
import { ElectronicComponent } from './electronic/electronic.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ElectronicComponent
  ],
  imports: [
    CommonModule,
    ElectronicRoutingModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class ElectronicModule { }
