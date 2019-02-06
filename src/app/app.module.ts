import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
// import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { OutputsComponent } from './outputs/outputs.component';
import { SearchFormComponent } from './search-form/search-form.component';
// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressHttpModule } from '@ngx-progressbar/http';


@NgModule({
  declarations:[
    AppComponent,
    UserComponent,
    SearchFormComponent,
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    // NgProgressModule.forRoot(),// normal progress bar
    // NgProgressHttpModule // progress bar to load http requests
  ],
  // providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }