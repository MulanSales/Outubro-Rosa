import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { AnimalEntidade } from '../animal/animal-entidade.class';
import { ProprietarioEntidade } from '../proprietario/proprietario-entidade.class';

import { TumorPage } from '../tumor/tumor';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the AnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-animal',
  templateUrl: 'animal.html',
})
export class AnimalPage {

  animal = {} as AnimalEntidade;
  animalCache: string;

  proprietarioId: string;	
  proprietario = {} as ProprietarioEntidade;
  proprietarioAnimalLista: FirebaseListObservable<ProprietarioEntidade[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public fire: AngularFireDatabase, public toastCtrl: ToastController) {

  		this.proprietarioId = navParams.get('id');
  		this.proprietarioAnimalLista = this.fire.list('/Animal');

  }

  cadastrarAnimal(){

    this.animal.id_proprietario = this.proprietarioId;
  	this.animalCache = this.proprietarioAnimalLista.push(this.animal).key

    this.presentToast('Animal Cadastrado com Sucesso!');

  } 

  abrirTumorForm(){

    this.navCtrl.push(TumorPage, {
      id_proprietario: this.proprietarioId,
      id_animal: this.animalCache
    });

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
