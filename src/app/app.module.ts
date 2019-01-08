import { TasksPage } from './../pages/tasks/tasks';
import { MainPage } from './../pages/main/main';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Calendar } from '@ionic-native/calendar';
import { CalendarModule } from 'ionic3-calendar-en';
import { EventServiceProvider } from '../providers/event-service/event-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    TasksPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    TasksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventServiceProvider
  ]
})
export class AppModule {}
