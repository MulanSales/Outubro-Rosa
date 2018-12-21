import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CampanhaEntidade } from '../campanha-form/campanha-entidade.class';
import { CampanhaEditPage } from '../campanha-edit/campanha-edit';


/**
 * Generated class for the CampanhaSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-campanha-select',
  templateUrl: 'campanha-select.html',
})
export class CampanhaSelectPage {

  campanha = {} as CampanhaEntidade;	
  campanhaLista: FirebaseListObservable<CampanhaEntidade[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams
  	,public fireDB: AngularFireDatabase, public modal: ModalController) {

  	this.campanhaLista = this.fireDB.list('/Campanha');
  	this.campanha = new CampanhaEntidade();
  }

  editarCampanha(id){

  	this.modal.create(CampanhaEditPage, {id: id}).present();

  }


}
