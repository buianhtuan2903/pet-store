import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

  constructor() { }

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
}
