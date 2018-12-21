import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

import { OrganizadorFormPage } from '../organizador-form/organizador-form';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { OrganizadorEntidade } from '../organizador-form/organizador-entidade.interface';
import { EditOrganizadorPage } from '../edit-organizador/edit-organizador'

/**
 * Generated class for the OrganizadorPrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-organizador-principal',
  templateUrl: 'organizador-principal.html',
})
export class OrganizadorPrincipalPage {

  organizador = {} as OrganizadorEntidade

  organizadorRef$: FirebaseListObservable<OrganizadorEntidade[]>

  nrOrganizadores = 1; 

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  public fireDB: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
  
  	this.organizadorRef$ = this.fireDB.list('/Organizador');

  }

  /**adicionaOrganizador(organizador: OrganizadorEntidade){
   this.organizadorRef$.push({
   		id: Number(this.nrOrganizadores),
   		nome: "Placeholder",
   		sobrenome: "Placeholder"
   });
   
   this.organizador = {} as OrganizadorEntidade;
   this.nrOrganizadores = this.nrOrganizadores + 1;

  }*/
  
  menuOrganizador(organizador: OrganizadorEntidade){


  	this.actionSheetCtrl.create({
  		title: '${organizador.nome}',
  		buttons: [
  		{
  			text: 'Edit',
  			handler: () => {
          this.navCtrl.push(EditOrganizadorPage, { 
            organizadorID: organizador.id });
  			}
  		},
  		{
  			text: 'Delete',
  			role: 'destructive',
  			handler: () => {
  				this.organizadorRef$.remove(organizador.$key);
  			}
  		},
  		{
  			text: 'Cancel',
  			role: 'cancel',
  			handler: () => {
  				console.log("Botão de cancelar selecionado");
  			}
  		}
  		]
  	}).present();




  }


  redirectTo(sub_page: number){

  	if(sub_page == 1 ){
  		//this.adicionaOrganizador(this.organizador);
  		this.navCtrl.push(OrganizadorFormPage);
  	}
  }



}
