import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { CampanhaFormPage } from '../campanha-form/campanha-form'
import { CampanhaSelectPage } from '../campanha-select/campanha-select'

/**
 * Generated class for the MasterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-master',
  templateUrl: 'master.html',
})
export class MasterPage {

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams, public modal: ModalController) {
  }

  abrirCampanhaForm(){

  	this.navCtrl.push(CampanhaFormPage);

  }

  abrirCampanhaSelect(){

  	this.navCtrl.push(CampanhaSelectPage);

  }


}
