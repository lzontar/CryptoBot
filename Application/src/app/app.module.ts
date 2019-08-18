import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './comService/data.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { MainModule } from './main/main/main.module';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    MenuComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
