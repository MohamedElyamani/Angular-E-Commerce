import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LightgalleryModule } from 'lightgallery/angular';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    LightgalleryModule,
    SharedModule
  ],

})
export class HomeModule { }
