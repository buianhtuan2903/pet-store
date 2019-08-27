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
    power: new FormControl('')
  })

  ngOnInit() {
    this.dogs = this.getDog('/dogname');
  }

  addDog(name, power) {
    const dataObj : DogData = {
      name: name,
      power: power
    };
    this.shareservice.addDog(dataObj);
  }
  
  getDog(path) {
    return this.shareservice.getDog(path);
  }

  findDog(){
    this.shareservice.findDog();
  }

}
