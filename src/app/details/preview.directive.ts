import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPreview]'
})
export class PreviewDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')

  changeImg(){

    let src:any = this.el.nativeElement.src;
    let prev:any = document.getElementById('mainImg');
    prev.src = src
    let images = document.getElementsByClassName('forGallery')
    for(let i = 0; i < images.length; i++){
      images[i].classList.remove('active')
    }
    this.el.nativeElement.classList.add('active')
  }

}
