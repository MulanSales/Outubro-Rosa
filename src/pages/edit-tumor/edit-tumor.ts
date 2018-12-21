import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { TumorEntidade } from '../tumor/tumor-entidade.class';
import { AnimalEntidade } from '../animal/animal-entidade.class';


/**
 * Generated class for the EditTumorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-tumor',
  templateUrl: 'edit-tumor.html',
})
export class EditTumorPage {

  animal: AnimalEntidade;

  id_animal: string;
  ref: FirebaseObjectObservable<any>;
  refList$: FirebaseListObservable<any>;

  id_tumor: string;
  tumor = {} as TumorEntidade;
  tumor_car: TumorEntidade;


  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public fire: AngularFireDatabase, public viewCtrl: ViewController) {

  	this.id_animal = this.navParams.get('id');
  	this.refList$ = this.fire.list('/Tumor',  { preserveSnapshot: true});
  	this.tumor_car = new TumorEntidade();
  	this.refList$.subscribe(snapshot => {
  		 snapshot.forEach(snapshot => {
  		 	if(this.id_animal == snapshot.id_animal){
  		 		this.ref = snapshot;
  		 		this.ref.subscribe(data => {
  		 			console.log(data.id_animal)
  					let t = this.tumor_car;
  					t.local = data.local;
  					t.tamanho = data.tamanho;
  		 		});
  		 		
  		 	}

  		 })	
  	});
  	console.log(this.id_tumor);


  }

  salvarDados(){
  	this.ref.update(this.tumor).then(() => {
  		this.viewCtrl.dismiss();
  	});
  }

  fechar(){
  	this.viewCtrl.dismiss();
  }

}
