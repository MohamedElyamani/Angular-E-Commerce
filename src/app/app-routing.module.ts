import { WomenModule } from './descoverMore/women/women.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { authGuard } from './Auth/auth.guard';

const routes: Routes = [
  {path:'', component:NavbarComponent,

  children:[
    {path:'',loadChildren: () => import('./Auth/login/login.module').then(m => m.LoginModule)},
    {path:'home',loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate:[authGuard]},
    {path:'about',loadChildren: () => import('./about/about.module').then(m => m.AboutModule), canActivate:[authGuard]},
    {path:'contact-us',loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule), canActivate:[authGuard]},
    {path:'details/:id',loadChildren: () => import('./details/details.module').then(m => m.DetailsModule), canActivate:[authGuard]},
    {path:'products',loadChildren: () => import('./all-products/all-products.module').then (m => m.AllProductsModule), canActivate:[authGuard]},
    {path:'cart', loadChildren: ()=> import ('./cart/cart.module').then (m => m.CartModule), canActivate:[authGuard]},
    {path:'electronic', loadChildren: ()=> import ('./descoverMore/electronic/electronic.module').then(m => m.ElectronicModule), canActivate:[authGuard]},
    {path:'men-clothes', loadChildren: ()=> import ('./descoverMore/men/men.module').then(m => m.MenModule), canActivate:[authGuard]},
    {path:'women-clothes', loadChildren: ()=> import ('./descoverMore/women/women.module').then(m => m.WomenModule), canActivate:[authGuard]},
    {path:'login', loadChildren: ()=> import('./Auth/login/login.module').then(m => m.LoginModule)},
    {path:'register', loadChildren: ()=> import('./Auth/registeration/register.module').then(m => m.RegisterModule)}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
