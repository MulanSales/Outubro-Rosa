import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ProprietarioEntidade } from '../proprietario/proprietario-entidade.class';

import { AnimalPage } from '../animal/animal';

/**
 * Generated class for the ProprietarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-proprietario',
  templateUrl: 'proprietario.html',
})
export class ProprietarioPage {

  proprietarioCache: string;
  proprietario = {} as ProprietarioEntidade;
  proprietarioLista: FirebaseListObservable<ProprietarioEntidade[]>;

  proprietarioObject: FirebaseObjectObservable<ProprietarioEntidade>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public fire: AngularFireDatabase, public toastCtrl: ToastController) {

  	this.proprietarioLista = this.fire.list('/Proprietario');

  }


  cadastrarProprietario(){

   	  this.proprietarioCache = this.proprietarioLista.push(this.proprietario).key;
      this.presentToast('Proprietário Cadastrado com Sucesso!');
  }

  abrirAnimalForm(){
       
  	  this.navCtrl.push(AnimalPage, {id: this.proprietarioCache});

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
