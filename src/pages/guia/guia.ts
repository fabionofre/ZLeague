import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { CriarTimePage } from '../criar-time/criar-time'

/**
 * Generated class for the GuiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guia',
  templateUrl: 'guia.html',
})
export class GuiaPage {

  CriarTimePage: any

  slides = [
    {
      titulo: 'Bem-vindo, invocador!',
      descricao: 'No ZLeague você monta seu próprio time com jogadores reais de League of Legends e acompanha os campeonatos de uma maneira mais divertida',
      imagem: "./assets/imgs/poro.png"
    },
    {
      titulo: 'Seja lendário nas ligas',
      descricao: 'Desafie seus amigos e veja quem será o solado da rodada participando das ligas :)',
      imagem: './assets/imgs/poros-juntos.png'

    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.CriarTimePage = CriarTimePage
  }

  ionViewDidLoad() {
      
  }



}
