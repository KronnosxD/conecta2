import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
