import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IBookModule } from './ibook/ibook.module';
import { WordsAPIService } from './services/wordsAPI.service';
import { AppHttpInterceptor } from './interceptor/http-interceptor.service';
import { NotificationService } from './services/notification.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IBookModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true,
    },
    WordsAPIService,
    NotificationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
