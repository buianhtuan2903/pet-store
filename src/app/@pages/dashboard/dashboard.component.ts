import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/@services/database.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { DogData } from 'src/app/@services/dogdata';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  constructor() { }
 

  ngOnInit() {

  }

  lists1 =[
    {name: 'Mau 1'},
    {name: 'Mau 2'},
    {name: 'Mau 3'},
  ];

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
