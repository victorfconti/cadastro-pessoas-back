import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ApiService} from './service/api-service';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AddUserComponent} from './user/add-user/add-user.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
