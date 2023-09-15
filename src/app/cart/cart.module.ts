import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {NgConfirmModule} from 'ng-confirm-box';
import {MessageService} from 'primeng/api'; // message will show when add product
import { ToastModule } from 'primeng/toast';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    TableModule,
    FormsModule,
    InputNumberModule,
    NgConfirmModule,
    ToastModule,
    SharedModule
  ],
  providers: [
    MessageService,
  ],
})
export class CartModule { }
