import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  
  private basePath = '/dogname';
  
  constructor(private db: AngularFireDatabase, private db2: AngularFirestore) { } 

  // addDog(data) {
  // const obj = this.db.database.ref(this.basePath);
  // obj.child("dogdata").set(data);
  // obj.push(data);
  // alert('Success');
  // }
  
  addProduct(data){
    
    this.db2.collection("products").add(data)
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  
  }

  getDog(path): Observable<any[]> {
    return this.db.list(path).valueChanges();
  }

  getProduct(){
    const documents = [];
    this.db2.collection("products").ref.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          documents.push(doc.data());
          // console.log(documents);
      });
  });
  }
  

  findDog(data2){
    this.db.database.ref(this.basePath).orderByChild('name').equalTo(data2).on("value", function(snapshot) {
      console.log(snapshot.val());
      snapshot.forEach(function(data) {
      // alert(data.val().power);
      var cac1 = data.val();
      alert(cac1.price);
      });
    });
  }

}
