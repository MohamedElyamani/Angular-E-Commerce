import { CartService } from './../Services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  searchTerm: string = ''
 // @Input() selectedOrder: Order

  constructor(private _CartService:CartService){}
  ngOnInit(): void {}

search(event:any){
  this._CartService.searchItem.next(event.target.value)
}
  toolBarItems:any[]=[
    {label:'Men',items:[{label:'Mens-shoes',value:'mens-shoes'},{label:'Mens-shirts',value:'mens-shirts'},{label:'Mens-watches',value:'mens-watches'}]},
    {label:'Women', items:[{label:'Womens-dresses',value:'womens-dresses'},{label:'womens-shoes',value:'womens-dresses'},{label:'Womens-watches',value:'womens-watches'},{label:'Womens-bags',value:'womens-bags'},{label:'Womens-jewellery',value:'womens-jewellery'}]},
    {label:'Electronics', items:[{label:'Laptops',value:'laptops'},{label:'Smartphones',value:'smartphones'}]},
    {label:'Decore', items:[{label:'Lighting',value:'lighting'},{label:'Furnitures',value:'furniture'},{label:'Home-Decoration',value:'home-decoration'}]},
    {label:'Top Rated', items:[{label:'Top Rated',value:'tops'}]},
    {label:'Skin Care', items:[{label:'Fragrances',value:'fragrances'},{label:'Skincare',value:'skincare'}]},
    {label:'Groceries', items:[{label:'Groceries',value:'groceries'}]},
    {label:'Accessories', items:[{label:'Sunglasses',value:'sunglasses'},{label:'Automotive',value:'automotive'},{label:'Motorcycle',value:'motorcycle'}]},

]




}
