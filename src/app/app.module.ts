import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFieldsetComponent } from './my-fieldset/my-fieldset.component';
import { MyCamComponent } from './my-cam/my-cam.component';
import { WebCamComponent } from 'ack-angular-webcam';


@NgModule({
  declarations: [
    AppComponent,
    MyFieldsetComponent,
    MyCamComponent,
    WebCamComponent

  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
