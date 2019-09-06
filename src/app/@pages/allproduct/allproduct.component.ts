import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/@services/database.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Products } from 'src/app/@services/productdata';
import { AuthService } from 'src/app/@services/auth.service';
import { StorageService } from 'src/app/@services/storage.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

  allproduct: AngularFirestoreCollection<Products>;
  products: Observable<Products[]>;
  public lists1: Observable<Products[]>;

  constructor(private database: AngularFirestore) { }

  ngOnInit() {
    this.allproduct = this.database.collection('products');
    this.products = this.allproduct.valueChanges();
    this.createlist1();
  }

  createlist1(){ 
    this.database.collection("products").ref.where("type", "==", "Màu vẽ")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }
  // lists1 =[
  //   {name: 'Mau 1'},
  //   {name: 'Mau 2'},
  //   {name: 'Mau 3'},
  // ];

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
