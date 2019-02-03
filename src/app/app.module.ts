import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent, MyPipe} from './app.component';
import { ZdarComponent } from './zdar/zdar.component';
import { ZdarparamComponent } from './zdarparam/zdarparam.component';

@NgModule({
  declarations: [
    AppComponent , MyPipe, ZdarComponent, ZdarparamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
