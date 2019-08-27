import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/@services/share.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public shares: Observable<any[]>;
  constructor(private shareservice: ShareService) { }
  angForm = new FormGroup ({
    name: new FormControl(''),
    power: new FormControl('')
  })

  ngOnInit() {
    this.shares = this.getShares('/dogname');
  }

  addShare(name, power) {
    const dataObj = {
     name: name,
     power: power
   };
   
   this.shareservice.addShare(dataObj);
  }
  
  getShares(path) {
    return this.shareservice.getShares(path);
  }

  finddog(){
    this.shareservice.finddog();
  }

}
