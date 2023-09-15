import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllProductsService{

  constructor(public _http:HttpClient) { }

  setAllProducts(totalItems:any):Observable<any> {
    return this._http.get(`https://dummyjson.com/products?limit=${totalItems}`)
  }

  setCategory(categoryItem:string):Observable<any>{
    return this._http.get(`https://dummyjson.com/products/category/${categoryItem}`)
  }

  setItemDetails(id:number):Observable<any>{
    return this._http.get(`https://dummyjson.com/products/${id}`)
  }

  search(item:any):Observable<any>{
    return this._http.get(`https://dummyjson.com/products/search?q=${item}`)
  }
}
