import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/@services/database.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { DogData } from 'src/app/@services/dogdata';
import { AuthService } from 'src/app/@services/auth.service';
import { StorageService } from 'src/app/@services/storage.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

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

  constructor(private databaseservice: DatabaseService, private storage: AngularFireStorage, private authService: AuthService, private router: Router) { }

  angForm = new FormGroup ({
    name: new FormControl(''),
    type: new FormControl(''),
    price: new FormControl(''),
  })

  ngOnInit() {
    this.databaseservice.getProduct();
  }

  // Database
  addProduct(name, type, price) {
    const dataObj : DogData = {
      name: name,
      type: type,
      price: price
    };
    this.databaseservice.addProduct(dataObj);
  }
  
  getProduct(path) {
    return this.databaseservice.getProduct();
  }

  findvalueForm = new FormGroup({
    findvalue: new FormControl('')
  })
  // findvalue ='nhut';
  findDog(findvalue){
    this.databaseservice.findDog(findvalue);
  }

  // Storage


  uploadFile(event) {
    
    const file = event.target.files[0];
    const filePath = 'image';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL())
      )
    .subscribe()
  }

  routing(routinglink){
    this.router.navigate([this.redirectUrl]);
    this.redirectUrl = null;
  }

  logout() {
    this.authService.logout();
    this.routing(this.redirectUrl);
  }

}
