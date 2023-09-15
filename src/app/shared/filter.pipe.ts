import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../models/products';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Products[], filterName:string, titleName:string): any {
    let result = [];
    if(!value || filterName == '' || titleName == ''){
      return value;
    }
    value.forEach(el=>{
      if(el[titleName].toLowerCase().includes(filterName.toLowerCase())){
        result.push(el)
      }
    })
    return result;
  }

}
