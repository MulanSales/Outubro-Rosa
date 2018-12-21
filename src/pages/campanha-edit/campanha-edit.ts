import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { CampanhaEntidade } from '../campanha-form/campanha-entidade.class'

/**
 * Generated class for the CampanhaEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-campanha-edit',
  templateUrl: 'campanha-edit.html',
})
export class CampanhaEditPage {

  campanhaRef: FirebaseObjectObservable<CampanhaEntidade[]>;
  campanha = {} as CampanhaEntidade;
  id: string;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams, public fireDB: AngularFireDatabase,
  	public viewCtrl: ViewController) {

  	this.id = this.navParams.get('id');
  	this.campanhaRef = this.fireDB.object('/Campanha/' + this.id);

  }

  salvarCampanha(){
  	this.campanhaRef.update(this.campanha).then(() => {
  		this.viewCtrl.dismiss();
  	})
  }

  removerCampanha(){
  	this.campanhaRef.remove();
  	this.viewCtrl.dismiss();
  }

  fecharCampanhaEdit(){
    this.viewCtrl.dismiss();
  }


}
