
import { CartService } from './../../shared/Services/cart.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgConfirmService } from 'ng-confirm-box';
import { MessageService } from 'primeng/api';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  cartItemList:Products[] = [];
  empty:boolean= false;
  finalProductsPrice: any = 0;
  total: number = 0;
 constructor(private _CartService:CartService, private confirmService: NgConfirmService, private messageService: MessageService){}

ngOnInit(): void {
  if('item' in localStorage){
    this.cartItemList = JSON.parse(localStorage.getItem('item')!);
  }
  this.getFinalProductsPrice()
}

getFinalProductsPrice(){
  this.finalProductsPrice = 0;
    this.cartItemList.map((prod:Products, i)=>{
      this.finalProductsPrice += prod.quantity * this.cartItemList[i].price
    })
  }
  moreItem(product:any ,index:any){
    product.quantity++
    this.getFinalProductsPrice()
    localStorage.setItem('item',JSON.stringify(this.cartItemList))
  }
  lessItem(product:any ,index:any){
      if(product.quantity == 1){
        product.quantity = 1
        return
      }else{
        product.quantity--
        this.getFinalProductsPrice()
        localStorage.setItem('item',JSON.stringify(this.cartItemList))
      }
  }

 removeSingleItem(index:any){
  this.confirmService.showConfirm("Are you sure want to Delete this item?",
     () => {
      this.cartItemList.splice(index, 1)
      this.getFinalProductsPrice()
      localStorage.setItem('item',JSON.stringify(this.cartItemList))
      this._CartService.itemInCart.next(true)
      this.messageService.add({severity:'error', summary:'Product Deleted Successfuly', detail:'Go to shop more', life: 1000});
    },
    () => {
      //do nothing just close
    })
  }
 removeAllItem(){
  this.confirmService.showConfirm("Are you sure want to Delete this item?",
  () => {
    localStorage.clear();
    this.cartItemList = []
    this.getFinalProductsPrice()
    this._CartService.itemInCart.next(true)
    this.messageService.add({severity:'error', summary:'Cart Deleted Successfuly', detail:'Go to shop more', life: 1000});
 },
 () => {
   //do nothing just close
 })
}

}
