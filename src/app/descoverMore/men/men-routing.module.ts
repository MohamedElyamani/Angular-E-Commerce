import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenClothesComponent } from './men-clothes/men-clothes.component';

const routes: Routes = [
  {path:'', component:MenClothesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenRoutingModule { }
