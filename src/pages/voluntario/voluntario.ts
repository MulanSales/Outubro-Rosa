import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { VoluntarioEntidade } from '../voluntario/voluntario-entidade.class';

/**
 * Generated class for the VoluntarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-voluntario',
  templateUrl: 'voluntario.html',
})
export class VoluntarioPage {

  voluntarioLista: FirebaseListObservable<any>;
  voluntario: VoluntarioEntidade;	

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	public fire: AngularFireDatabase) {

  	this.voluntarioLista = this.fire.list('/Voluntario');
  	this.voluntario = new VoluntarioEntidade();

  }

}
