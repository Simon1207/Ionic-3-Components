import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  activarPrincipal(){
    //selecciona el tab1
    this.navCtrl.parent.select(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

}
