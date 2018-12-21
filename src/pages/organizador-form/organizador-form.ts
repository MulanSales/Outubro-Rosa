import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { OrganizadorEntidade } from '../organizador-form/organizador-entidade.interface';

/**
 * Generated class for the OrganizadorFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-organizador-form',
  templateUrl: 'organizador-form.html',
})
export class OrganizadorFormPage {

  organizador = {} as OrganizadorEntidade

  organizadorRef$: FirebaseListObservable<OrganizadorEntidade[]>

  nrOrganizadores = 1; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public fireDB: AngularFireDatabase) {
  	
  	this.organizadorRef$ = this.fireDB.list('/Organizador');

  }

  adicionaOrganizador(organizador: OrganizadorEntidade){
   this.organizadorRef$.push({
   		id: Number(this.nrOrganizadores),
   		nome: organizador.nome,
   		sobrenome: organizador.sobrenome
   });
   
   this.organizador = {} as OrganizadorEntidade;
   this.nrOrganizadores = this.nrOrganizadores + 1;

  }

}
