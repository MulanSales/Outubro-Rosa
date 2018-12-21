import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CampanhaEntidade } from '../campanha-form/campanha-entidade.class'


/**
 * Generated class for the CampanhaFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-campanha-form',
  templateUrl: 'campanha-form.html',
})
export class CampanhaFormPage {

  campanha = {} as CampanhaEntidade;	
  campanhaLista: FirebaseListObservable<CampanhaEntidade[]>;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams, public fireDB: AngularFireDatabase) {
  	this.campanhaLista = this.fireDB.list('/Campanha');
  	this.campanha = new CampanhaEntidade();
  }


  cadastrarCampanha(){

  	this.campanhaLista.push(this.campanha).then(() => {
  		this.campanha = new CampanhaEntidade();
  	})


  }


}
