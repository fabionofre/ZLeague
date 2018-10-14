import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard'

/**
 * Generated class for the CriarTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-time',
  templateUrl: 'criar-time.html',
})
export class CriarTimePage {

  dashboardPage: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dashboardPage = DashboardPage
  }

  ionViewDidLoad() {
  }

}
