import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsRoutingModule } from './all-products-routing.module';
import { ProductsComponent } from './products/products.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastModule } from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {MessageService} from 'primeng/api'; // message will show when add product
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,

  ],
  imports: [
    CommonModule,
    AllProductsRoutingModule,
    SharedModule,
    NgxPaginationModule,
    ToastModule,
    ButtonModule,
  ],
    providers: [
    MessageService,
  ],
})
export class AllProductsModule { }
