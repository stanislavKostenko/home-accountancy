import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {AuthModule} from './auth/auth.module';
import {SystemModule} from './system/system.module';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AuthService} from '@services/auth.service';
import {ApiService} from '@services/api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
    SystemModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
