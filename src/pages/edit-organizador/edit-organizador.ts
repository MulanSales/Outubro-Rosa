import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { OrganizadorEntidade } from '../../pages/organizador-form/organizador-entidade.interface';


/**
 * Generated class for the EditOrganizadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-organizador',
  templateUrl: 'edit-organizador.html',
})
export class EditOrganizadorPage {


  organizadorRef$ :FirebaseObjectObservable<OrganizadorEntidade>;
  organizador = {} as OrganizadorEntidade;

  id: string;

  constructor(public navCtrl: NavController, 
   public navParams: NavParams,
   public fireDB: AngularFireDatabase)
  {

  	//Captura o ID como um parametro
  	this.id = this.navParams.get('id');

  	this.organizadorRef$ = this.fireDB.object('/Organizador/' + this.id);

  	this.organizadorRef$.subscribe(
  		organizador =>  this.organizador = organizador);
  }

  editarOrganizador(organizador: OrganizadorEntidade){

  	this.organizadorRef$.update(organizador);
  }

}
