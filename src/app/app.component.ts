import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GuiaPage } from '../pages/guia/guia';
import { DashboardPage } from '../pages/dashboard/dashboard'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;

  rootPage:any = GuiaPage;
  paginaAtiva: any;

  pages: Array<{title: string, component: any}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      { 
        title: 'Dashboard', 
        component: DashboardPage
      },
      {
        title: 'Escalação',
        component: DashboardPage
      }
    ];

    this.paginaAtiva = this.pages[0]

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.show();
      splashScreen.hide();
    });

  }

  openPage(page) {
    this.nav.setRoot(page.component);
    this.paginaAtiva = page
  }

  checaAtivo(page){
    return page == this.paginaAtiva
  }

  getActivePage(): string {
    if(typeof this.nav.getActive() === 'object'){
      return this.nav.getActive().name
    }
    return ''
  }

}

