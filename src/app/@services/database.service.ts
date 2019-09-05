import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  
  constructor(private database: AngularFirestore) { } 
  
  addProduct(data){
    this.database.collection("products").add(data)
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  }

  getDog(path): Observable<any[]> {
    return this.database.collection("products").valueChanges();
  }

  getProduct(){
    const documents = [];
    this.database.collection("products").ref.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          documents.push(doc.data());
          // console.log(documents);
      });
  });
  }
  

 /* findProduct(data2){
    this.database.collection("products").ref.get().orderByChild('name').equalTo(data2).on("value", function(snapshot) {
      console.log(snapshot.val());
      snapshot.forEach(function(data) {
      var cac1 = data.val();
      alert(cac1.price);
      });
    });
  } */

}
