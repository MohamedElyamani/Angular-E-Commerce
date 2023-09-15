import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgShare from 'lightgallery/plugins/share'
import lgRotate from 'lightgallery/plugins/rotate'
import lgFullscreen from 'lightgallery/plugins/fullscreen'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true,
  }
  menItems = [
    {name:'Classic Spring' , price: '120$' , img: "../../../assets/img/men-01.jpg"},
    {name:'Air Force' , price: '150$' , img: "../../../assets/img/men-02.jpg"},
    {name:'Classic Spring' , price: '190$' , img: "../../../assets/img/men-03.jpg"},
  ];
  womenItems = [
    {name:'New Green Jacket' , price: '75$' , img: "../../../assets/img/women-01.jpg"},
    {name:'Classic Dress' , price: '150$' , img: "../../../assets/img/women-02.jpg"},
    {name:'Spring Collection' , price: '130$' , img: "../../../assets/img/women-03.jpg"},
  ];
  electronicItems = [
    {name:'Huawei Labtob' , price: '180$' , img: "../../../assets/img/elect-01.jpg"},
    {name:'Samsung TV' , price: '250$' , img: "../../../assets/img/elect-02.jpg"},
    {name:'Kingston SSD Hard Disk' , price: '80$' , img: "../../../assets/img/elect-03.jpg"},
  ];

  //light gallery code
  settings = {
    plugins:[lgThumbnail, lgShare, lgRotate, lgFullscreen]
  }
  ngOnInit(): void {
  }
}
