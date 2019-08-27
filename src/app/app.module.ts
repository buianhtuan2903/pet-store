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
import { ShareService } from './@services/share.service';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavbarComponent,
    FoobarComponent,
    DashboardComponent
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
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
