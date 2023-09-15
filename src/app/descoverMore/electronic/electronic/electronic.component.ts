import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { AllProductsService } from 'src/app/shared/Services/all-products.service';
import { CartService } from 'src/app/shared/Services/cart.service';

@Component({
  selector: 'app-electronic',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.scss']
})
export class ElectronicComponent implements OnInit {
  elecs:Products[] = []
  error:string = ''
  result:any;
  p:number = 1;
  itemsPerPage:number = 9
  totalItems:Products[] =[];
  constructor(private _cartService:CartService, private _prodcuts:AllProductsService ){}

  ngOnInit(): void {
    this.multiProduct()
  }
  getCategory(categoryItem:string){
    let result = this._prodcuts.setCategory(categoryItem).subscribe((data)=>{
      data.products.map((el)=>{
        this.elecs.push(el)
      })
      result.unsubscribe()
      this.totalItems.length = data.limit
    },(error)=>{
      this.error = error
      result.unsubscribe()
    })
  }

  multiProduct(){
    let elecs = ["smartphones", "laptops", "automotive", "motorcycle"];
    for (let index = 0; index < elecs.length; index++) {
      this.getCategory(elecs[index])
    }
  }
  addProduct(product:any){
    this._cartService.addProduct(product)
  }
}
