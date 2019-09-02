import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './@layout/navbar/navbar.component';
import { FoobarComponent } from './@layout/foobar/foobar.component';
import { DashboardComponent } from './@pages/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { ContentComponent } from './@layout/content/content.component';
import { PageRoutingModule } from './@layout/content/page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './@services/database.service';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AdminComponent } from './@pages/admin/admin.component';
import { CarouselComponent } from './@pages/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './@services/auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { StorageService } from './@services/storage.service';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ManageComponent } from './@pages/manage/manage.component';
import { ProductComponent } from './@pages/product/product.component';
import { CartComponent } from './@pages/cart/cart.component';
import { AuthGuard } from './@services/auth.guard';
import { AllproductComponent } from './@pages/allproduct/allproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavbarComponent,
    FoobarComponent,
    DashboardComponent,
    AdminComponent,
    CarouselComponent,
    ManageComponent,
    ProductComponent,
    CartComponent,
    AllproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireStorageModule, 
  ],
  providers: [
    DatabaseService,
    AuthService,
    StorageService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
