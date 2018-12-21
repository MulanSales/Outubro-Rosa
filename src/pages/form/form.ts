import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProprietarioPage } from '../proprietario/proprietario';


/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams){
  }

	abrirProprietarioForm(){

    this.navCtrl.push(ProprietarioPage);

  }



}
