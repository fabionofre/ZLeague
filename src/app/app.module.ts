import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { GuiaPage } from '../pages/guia/guia';
import { CriarTimePage } from '../pages/criar-time/criar-time'
import { DashboardPage } from '../pages/dashboard/dashboard'


@NgModule({
  declarations: [
    MyApp,
    GuiaPage,
    CriarTimePage,
    DashboardPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GuiaPage,
    CriarTimePage,
    DashboardPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
