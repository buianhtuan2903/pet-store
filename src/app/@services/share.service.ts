import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class ShareService {
  private basePath = '/dogname';
  public items: any;
  public item: any;
  constructor(private db: AngularFireDatabase) { } 
  addShare(data) {
  const obj = this.db.database.ref(this.basePath);
  // obj.child("dogdata").set(data);
  obj.push(data);
  alert('Success');
  }
  
  getShares(path): Observable<any[]> {
    return this.db.list(path).valueChanges();
  }

  finddog() {
    this.db.database.ref(this.basePath).orderByChild('name').equalTo('con cho').on("value", function(snapshot) {
      console.log(snapshot.val());
      snapshot.forEach(function(data) {
      // alert(data.val().power);
      var cac1 = data.val();
      alert(cac1.power);
      });
      
    });
  
  }

}
