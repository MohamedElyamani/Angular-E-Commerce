import { Component, OnInit,  } from '@angular/core';
import { CartService } from '../shared/Services/cart.service';
import { AuthService } from 'src/app/shared/Services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  isLogin:boolean = false;
  totalItems:any = 0;
  constructor(private _CartService: CartService, private _auth:AuthService){
  }

 ngOnInit(): void {
  this._auth.userData.subscribe(()=>{
    if(this._auth.userData.getValue() !== null){
      this.isLogin = true;
    }else{
      this.isLogin = false
    }
  })
  this.totalItems =  JSON.parse(localStorage.getItem('item')!);
  this.getTotalProduct();
  }

  getTotalProduct(){
   const sub = this._CartService.itemInCartEmitter.subscribe(val=>{

      this.totalItems = JSON.parse(localStorage.getItem('item')!);
    },
    (error)=>{
      sub.unsubscribe()
    })
  }

  logout(){
    this._auth.logout()
  }

}
