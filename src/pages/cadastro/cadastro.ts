import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { VoluntarioEntidade } from '../voluntario/voluntario-entidade.class';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  voluntario = {} as VoluntarioEntidade;	
  voluntarioLista: FirebaseListObservable<VoluntarioEntidade[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public fire: AngularFireDatabase, public toastCtrl: ToastController) {

  	this.voluntarioLista = this.fire.list('/Voluntario');
  	this.voluntario = new VoluntarioEntidade();

  }

  cadastrarVoluntario(){

  	this.voluntarioLista.push(this.voluntario).then(() => {
  		this.voluntario = new VoluntarioEntidade();
  		})
    this.presentToast('Solicitação de Cadastro enviada com Sucesso!');
    this.navCtrl.pop();
  	
  }

  cancelar(){
    this.navCtrl.pop();
  }

  presentToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }    

}
