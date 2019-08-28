import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/@services/database.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { DogData } from 'src/app/@services/dogdata';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public dogs: Observable<any[]>;

  constructor(private shareservice: DatabaseService) { }
  angForm = new FormGroup ({
    name: new FormControl(''),
    type: new FormControl(''),
    price: new FormControl(''),
  })

  ngOnInit() {
    this.dogs = this.getDog('/dogname');
  }

  addDog(name, type, price) {
    const dataObj : DogData = {
      name: name,
      type: type,
      price: price,
    };
    this.shareservice.addDog(dataObj);
  }
  
  getDog(path) {
    return this.shareservice.getDog(path);
  }

  findvalueForm = new FormGroup(  
    findvalue: new FormControl('')
  )

  findDog(findvalue){
    const dataObj2 = {
      findvalue: findvalue,
    };
    this.shareservice.findDog(this.findvalue);
  }

}
