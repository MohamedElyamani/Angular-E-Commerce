import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomenClothesComponent } from './women-clothes/women-clothes.component';

const routes: Routes = [
  {path:'', component:WomenClothesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WomenRoutingModule { }
