import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageService} from 'primeng/api'; // message will show when add product
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details/details.component';
import { PreviewDirective } from './preview.directive';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    DetailsComponent,
    PreviewDirective
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule,
    ToastModule,
    SharedModule
  ],
  providers: [
    MessageService,
  ],
})
export class DetailsModule { }
