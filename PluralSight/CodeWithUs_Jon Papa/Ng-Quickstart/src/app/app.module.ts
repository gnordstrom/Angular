import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

// the @NgModule() is a decorator (function), which describes the class that follows it
@NgModule({
  imports:      [ BrowserModule ], // What stuff do I need
  declarations: [ AppComponent ],  // What things are in my app
  bootstrap:    [ AppComponent ]   // Where do I start?
})
export class AppModule { }
