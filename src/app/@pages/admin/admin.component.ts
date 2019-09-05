import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/@services/database.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Products } from 'src/app/@services/productdata';
import { AuthService } from 'src/app/@services/auth.service';
import { StorageService } from 'src/app/@services/storage.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public redirectUrl: string = 'manage';

  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { 
  }
  
  ngOnInit() {  }
  
  // Auth
  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  routing(routinglink){
    this.router.navigate([this.redirectUrl]);
    this.redirectUrl = null;
  }
  
  login(data) {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
    // this.routing(this.redirectUrl);
  }
  

  logout() {
    this.authService.logout();
  }

}
