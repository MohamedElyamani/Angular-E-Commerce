import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import { MenRoutingModule } from './men-routing.module';
import { MenClothesComponent } from './men-clothes/men-clothes.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations: [
        MenClothesComponent
    ],
    imports: [
        CommonModule,
        MenRoutingModule,
        SharedModule,
        NgxPaginationModule
    ]
})
export class MenModule { }
