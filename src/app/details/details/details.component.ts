import { CartService } from './../../shared/Services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AllProductsService } from 'src/app/shared/Services/all-products.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  constructor(private _products:AllProductsService, private _ActivatedRoute:ActivatedRoute, private _CartService:CartService, private messageService: MessageService){}
  id:any;
  details:any = {}
  imgList:string[]=[]
  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.getItemDetails();
  }

  getItemDetails(){
    this._products.setItemDetails(this.id).subscribe((data:any)=>{
      this.details = data;
    })
  }

  addProduct(item:any){
    this._CartService.addProduct(item)
    this.messageService.add({severity:'success', summary:'Product Added Successfuly', detail:'Go to shop more', life: 1000});
  }


}
