import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  constructor() { 
  }

  ngOnInit() {
  }
  lists1 =[
    {name: 'Mau 1'},
    {name: 'Mau 2'},
    {name: 'Mau 3'},
  ];

  lists2 =[
    {name: 'Mau 1'},
    {name: 'Mau 2'},
    {name: 'Mau 3'},
    {name: 'Mau 4'},
    {name: 'Mau 5'},
    {name: 'Mau 6'},
    {name: 'Mau 7'},
  ];

  itemname = 'Marker Touch Bgln 60p màu';
  quantity : number;
  price: number = 30000;
  
  addtocart(quantity){
    console.log(this.quantity);
  }
}
