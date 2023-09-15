import { Component, OnInit, OnDestroy } from '@angular/core';
import { Products } from 'src/app/models/products';
import { AllProductsService } from 'src/app/shared/Services/all-products.service';
import { CartService } from 'src/app/shared/Services/cart.service';

@Component({
  selector: 'app-women-clothes',
  templateUrl: './women-clothes.component.html',
  styleUrls: ['./women-clothes.component.scss']
})
export class WomenClothesComponent implements OnInit, OnDestroy {
  womenData: Products[] = []
  error:string = ''
  result:any;
  p:number = 1
  itemsPerPage:number = 9
  totalItems:Products[] =[];
  constructor( private _CartService:CartService, private _products:AllProductsService){}

  ngOnInit(): void {
    this.multiProduct()
  }
  getCategory(categoryItem:string){
   let result =  this._products.setCategory(categoryItem).subscribe((data)=>{
      data.products.map((el)=>{
        this.womenData.push(el)
      })
      result.unsubscribe()
      this.totalItems.length = data.limit;
    },(error)=>{
      this.error = error;
      result.unsubscribe();
    })
  }

  multiProduct(){
    let womens = ["womens-dresses","womens-shoes","womens-watches","womens-bags","womens-jewellery","sunglasses"];
    for (let index = 0; index < womens.length; index++) {
      this.getCategory(womens[index])
    }
  }

  addProduct(product:any){
    this._CartService.addProduct(product)
  }

  ngOnDestroy(): void {
    this.result.unsubscrib()
  }
}
