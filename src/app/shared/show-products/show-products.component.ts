import { Component, EventEmitter, Input, Output } from '@angular/core';

import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent {
  @Input() data:any = []
  @Output() addToCart = new EventEmitter();
  constructor(private messageService: MessageService){}

  addProduct(data:any){
    this.addToCart.emit(data)
        //this line is for showSuccessMessage
        this.messageService.add({severity:'success', summary:'Product Added Successfuly', detail:'Go to shop more', life: 1000});
  }
}
