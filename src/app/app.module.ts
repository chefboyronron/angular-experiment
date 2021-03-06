import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RoutingComponent } from './routing/routing.component';
import { ChildRoutingComponent } from './routing/child-routing/child-routing.component';
import { HttpComponent } from './http/http.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app.routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoutingComponent,
    ChildRoutingComponent,
    HttpComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    // different approch on using with hash on the url
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
