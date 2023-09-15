import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { AllProductsService } from 'src/app/shared/Services/all-products.service';
import { CartService } from 'src/app/shared/Services/cart.service';

@Component({
  selector: 'app-men-clothes',
  templateUrl: './men-clothes.component.html',
  styleUrls: ['./men-clothes.component.scss']
})
export class MenClothesComponent implements OnInit{
  p:number = 1;
  itemsPerPage:number = 9;
  totalItems:Products[] =[];
  menData: Products[] = []
  result:any;
  error:string = ''
  constructor( private _CartService:CartService, private _products:AllProductsService){}

  ngOnInit(): void {
    this.multiProduct()
  }

  getCategory(categoryItem:string){
   let result =  this._products.setCategory(categoryItem).subscribe((data:any)=>{
      data.products.map((el)=>{
        this.menData.push(el)
      })
      result.unsubscribe()
      this.totalItems.length = data.limit;
    },(error)=>{
      this.error = error
      result.unsubscribe()
    })

  }
  multiProduct(){
    let mens = ["mens-shirts","mens-shoes","mens-watches","sunglasses"];
    for (let index = 0; index < mens.length; index++) {
      this.getCategory(mens[index])
    }
  }

  addProduct(product:any){
    this._CartService.addProduct(product);
  }
}


