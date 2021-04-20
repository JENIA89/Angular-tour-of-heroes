import { MessagesModule } from './messages/messages.module';
import { InMemoryDataService } from './in-memory-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NzLayoutModule } from 'ng-zorro-antd/layout'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    BrowserAnimationsModule,
    MessagesModule,
    NzLayoutModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
