import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AllProductsService } from './all-products.service';
import { Products } from 'src/app/models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public itemInCart: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
	public itemInCartEmitter: Observable<boolean> = this.itemInCart.asObservable();

  public searchItem: BehaviorSubject<any> = new BehaviorSubject<any>('');
	public searchItemEmitter: Observable<any> = this.searchItem.asObservable();


  cartItemList:any[]=[];
  id:any;
  details:any = {}
  quantity:number = 1;
  constructor(private _products:AllProductsService) {}

  getItemDetails(){
    this._products.setItemDetails(this.id).subscribe((data:any)=>{
      this.details = data;
    })
  }
  addProduct(product:Products){
    product.quantity = 1
    if('item' in localStorage){
      this.cartItemList = JSON.parse(localStorage.getItem('item')!);
      this.cartItemList.push(product);
      localStorage.setItem('item',JSON.stringify(this.cartItemList))
    }else{
      this.cartItemList.push(product);
      localStorage.setItem('item',JSON.stringify(this.cartItemList))
    }
    this.itemInCart.next(true)
  }
}
