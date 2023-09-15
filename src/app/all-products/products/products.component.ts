import { CartService } from './../../shared/Services/cart.service';
import { Component,OnInit } from '@angular/core';
import { AllProductsService } from '../../shared/Services/all-products.service';
import { ActivatedRoute } from '@angular/router';

import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit  {
  products:Products[]=[];
  p:number = 1;
  itemsPerPage:number = 18;
  totalItems:Products[] =[];
  loading:boolean = false;
  searchText:string = '';
  result:any;
  error:string = ''
  constructor(private _products:AllProductsService, private route: ActivatedRoute, private _CartService:CartService){}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params:any) => {
      if(params.params.filter){
        this.filter(params.params.filter)
      }else{
        this.getAllProduct();
      }
    })
    this.filterAction();
  }
    getAllProduct(){
      this.loading = true;
      let result =  this._products.setAllProducts(this.totalItems.length).subscribe((data:any)=>{
      this.products = data.products;
      this.totalItems.length = data.limit;
      this.loading = false;
    },(error)=>{
      this.error = error
    })
  }

  filter(filter:any){
    this._products.setCategory(filter).subscribe((data:any)=>{
    this.products = data.products
    })
  }
  addProduct(product:any){
    this._CartService.addProduct(product);
  }

  requstSearch(event:any){
    this._products.search(event).subscribe((data)=>{
      this.products = data['products']
      if(event.length == 0) this.getAllProduct()
    })
  }

  filterAction(){
    const sub = this._CartService.searchItemEmitter.subscribe(val=>{
      this.requstSearch(val)
    },
    (error)=>{
      sub.unsubscribe()
    })
  }

}
