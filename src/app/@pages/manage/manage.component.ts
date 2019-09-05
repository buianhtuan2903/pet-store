import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/@services/database.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Users } from 'src/app/@services/userdata';
import { AuthService } from 'src/app/@services/auth.service';
import { StorageService } from 'src/app/@services/storage.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

interface Products {
  id: number;
  name: string;
  type: string;
  price: number;
  imgURL: string;
}

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  
  public dogs: Observable<any[]>;

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  public redirectUrl: string = 'admin';

  allproduct: AngularFirestoreCollection<Products>;
  products: Observable<Products[]>;

  constructor(private databaseservice: DatabaseService, private database: AngularFirestore, 
    private storage: AngularFireStorage, private storageservice: StorageService, private authService: AuthService, private router: Router) { }

  angForm = new FormGroup ({
    name: new FormControl(''),
    type: new FormControl(''),
    price: new FormControl(''),
  })

  ngOnInit() {
    this.allproduct = this.database.collection('products');
    this.products = this.allproduct.valueChanges();
  }

  // Database
  addProduct(dataObj) {
    // const dataObj : Users = {
    //   id : null,
    //   name: name,
    //   type: type,
    //   price: price,
    //   imgURL: null
    // };
    this.databaseservice.addProduct(dataObj);
    this.angForm.reset();
  }
  
  getProduct() {
    return this.databaseservice.getProduct();
  }

  findvalueForm = new FormGroup({
    findvalue: new FormControl('')
  })

  // findProduct(findvalue){
  //   this.databaseservice.findProduct(findvalue);
  // }

  // Storage
  uploadFile(event) {
    
    const file = event.target.files[0];
    // const name = event.target.files[0].name;
    const filePath = 'product/sampleimage';
    // this.storage2.pushUpload(file);
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL())
      )
    .subscribe()
    console.log(this.downloadURL);
    const test = this.downloadURL;
    // this.document.querySelector('img').src = this.downloadURL;
  }

  // routing(routinglink){
  //   this.router.navigate([this.redirectUrl]);
  //   this.redirectUrl = null;
  // }

  logout() {
    this.authService.logout();
    // this.routing(this.redirectUrl);
  }

}
