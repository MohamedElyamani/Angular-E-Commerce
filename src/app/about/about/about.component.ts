import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  services = [
    {name: 'Synther Vaporware', 
    desc: 'Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend',
    img: 'assets/img/service-01.jpg'},

    {name: 'Locavore Squidward', 
    desc: 'Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend',
    img: 'assets/img/service-02.jpg'},

    {name: 'Health Gothfam', 
    desc: 'Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend',
    img: 'assets/img/service-03.jpg'},

  ]
  
  team = [
    {name: 'Jwal Frankstien', jobTitle: 'Product Caretaker', img: 'assets/img/team-member-01.jpg'},
    {name: 'Arthur Pop', jobTitle: 'Product Caretaker', img: 'assets/img/team-member-02.jpg'},
    {name: 'Peter Rodri', jobTitle: 'Product Caretaker', img: 'assets/img/team-member-03.jpg'},
  ]
}
