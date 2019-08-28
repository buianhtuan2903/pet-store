import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  
  private basePath = '/dogname';
  
  constructor(private db: AngularFireDatabase) { } 

  addDog(data) {
  const obj = this.db.database.ref(this.basePath);
  // obj.child("dogdata").set(data);
  obj.push(data);
  alert('Success');
  }
  
  getDog(path): Observable<any[]> {
    return this.db.list(path).valueChanges();
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
