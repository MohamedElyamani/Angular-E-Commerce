import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { ShowProductsComponent } from './show-products/show-products.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ToastModule } from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { FooterComponent } from './footer/footer.component';
import { UsfullinksComponent } from './usfullinks/usfullinks.component';
@NgModule({
  declarations: [
    SidebarComponent,
    LoadingComponent,
    FilterPipe,
    ShowProductsComponent,
    FooterComponent,
    UsfullinksComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    FormsModule,
    ToastModule,
    ReactiveFormsModule
  ],
  exports: [
    SidebarComponent,
    LoadingComponent,
    FilterPipe,
    ShowProductsComponent,
    FooterComponent,
    UsfullinksComponent,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [
    MessageService,
  ],
})
export class SharedModule { }
