import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CurrTempResultsComponent } from './curr-temp-results.component';
import { UpperBarMenuComponent } from './upper-bar-menu.component';
import { TextAreaComponent } from './text-area.component';

//define which components our module recognises 
@NgModule({
  declarations: [
    AppComponent,
    CurrTempResultsComponent,
    UpperBarMenuComponent,
    TextAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  
  providers: [],
  //our entry point
  bootstrap: [AppComponent]
})
export class AppModule { }

