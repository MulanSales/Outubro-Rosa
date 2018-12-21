import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AnimalEntidade } from '../animal/animal-entidade.class';

/**
 * Generated class for the EditAnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-edit-animal',
  templateUrl: 'edit-animal.html',
})
export class EditAnimalPage {

  ref: FirebaseObjectObservable<any>;
  id_animal: string;
  animal_car: AnimalEntidade;
  animal = {} as AnimalEntidade;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public fire: AngularFireDatabase, public viewCtrl: ViewController,
  	public alertCtrl: AlertController) {

  	this.id_animal = this.navParams.get('id');
  	this.animal_car = this.navParams.get('animal');
  	console.log(this.id_animal);
  	this.ref = this.fire.object('/Animal/' + this.id_animal);

  }

  salvarDados(){
  	this.ref.update(this.animal).then(() => {
  		this.viewCtrl.dismiss();
  	});
  }

  excluirDados(){
  	const alert = this.alertCtrl.create({
	    title: 'ATENÇÃO!',
	    message: 'Deseja apagar TODOS os dados do animal?',
	    buttons: [
	      {
	        text: 'Sim',
	        handler: () => {
	          this.ref.remove();
	          this.viewCtrl.dismiss();
	        }
	      },
	      {
	        text: 'Não',
	        handler: () => {
	          
	        }
	      }
	    ]
  	});
  	alert.present();
  }

  fechar(){
  	this.viewCtrl.dismiss();
  }
}
