import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private database: AngularFirestore) { }

  ngOnInit() {
  }


  products = [
    {name: 'BỘ tạ', price: 10000, quantity: 2},
    {name: 'BỘ tạ 2', price: 20000, quantity: 10},
  ];
  
  money1 : number ;
  money2 : number = 50000;
  times = [
    {option: '7:00-8:00'},
    {option: '8:00-9:00'},
    {option: '9:00-10:00'},
    {option: '10:00-11:00'},
    {option: '11:00-12:00'},
    {option: '12:00-13:00'},
    {option: '13:00-14:00'},
    {option: '14:00-15:00'},
    {option: '15:00-16:00'},
    {option: '16:00-17:00'},
    {option: '17:00-18:00'},
    {option: '18:00-19:00'},
    {option: '19:00-20:00'},
    {option: '20:00-21:00'},
    {option: '21:00-22:00'},
  ];

  order(data){
    this.database.collection("orders").add(data)
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }
}

