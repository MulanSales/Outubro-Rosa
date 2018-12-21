import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AnimalEntidade } from '../animal/animal-entidade.class';
import { ProprietarioEntidade } from '../proprietario/proprietario-entidade.class';

/**
 * Generated class for the EditProprietarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-proprietario',
  templateUrl: 'edit-proprietario.html',
})
export class EditProprietarioPage {

  animal: AnimalEntidade;

  id_proprietario: string;
  ref: FirebaseObjectObservable<any>;
  proprietario = {} as ProprietarioEntidade;
  proprietario_car: ProprietarioEntidade;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	public fire: AngularFireDatabase, public viewCtrl: ViewController,
  	public alertCtrl: AlertController) {

  	this.animal = this.navParams.get('animal');

  	this.id_proprietario = this.animal.id_proprietario;
  	this.ref = this.fire.object('/Proprietario/' + this.id_proprietario);
  	this.ref.subscribe(snapshot => {
  		this.proprietario_car = new ProprietarioEntidade();
      let p = this.proprietario_car;
      p.auto_contato = snapshot.auto_contato;
  		p.nome = snapshot.nome;
      p.sobrenome = snapshot.sobrenome;
      p.genero = snapshot.genero;
      p.data_de_nascimento = snapshot.data_de_nascimento;
      p.telefone_1 = snapshot.telefone_1;
      p.telefone_2 = snapshot.telefone_2;
      p.email = snapshot.email;
      p.estado_civil = snapshot.estado_civil;
      p.rua = snapshot.rua;
      p.cep = snapshot.cep;
      p.numero = snapshot.numero;
      p.complemento = snapshot.complemento;
      p.bairro = snapshot.bairro;
      p.cidade = snapshot.cidade;
      p.estado = snapshot.estado;
      p.pais = snapshot.pais;
  	});
  }

  salvarDados(){
  	this.ref.update(this.proprietario);
  }

  fechar(){
  	this.viewCtrl.dismiss();
  }

}
