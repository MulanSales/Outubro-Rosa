import { Component } from '@angular/core';
import { NavController, ModalController, ActionSheetController, Platform } from 'ionic-angular';

import { ProprietarioPage } from '../proprietario/proprietario';
import { AnimalEntidade } from '../animal/animal-entidade.class';
import { EditAnimalPage } from '../edit-animal/edit-animal';
import { EditProprietarioPage } from '../edit-proprietario/edit-proprietario';
//import { EditTumorPage } from '../edit-tumor/edit-tumor';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animaisLista: FirebaseListObservable<any>;
  animal: AnimalEntidade;	

  constructor(public navCtrl: NavController, public fire: AngularFireDatabase,
    public modal: ModalController, public aSCtrl: ActionSheetController, 
    public platform: Platform) {

  	this.animaisLista = this.fire.list('/Animal');
  	this.animal = new AnimalEntidade();
  }

  abrirForm(){

  	this.navCtrl.push(ProprietarioPage);

  }

  editarAnimal(id, animal){
    let actionSheet = this.aSCtrl.create({
      title:'Dados do Animal',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Editar Animal',
          icon: 'paw',
          handler: () =>{
            this.modal.create(EditAnimalPage, {id: id, animal: animal}).present();
          }

        },
        {
          text: 'Editar Proprietário',
          icon: 'paw',
          handler: () =>{
            this.modal.create(EditProprietarioPage, {animal: animal}).present();
          }

        },
        {
          text: 'Editar Tumor',
          icon: 'paw',
          handler: () =>{
            //this.modal.create(EditTumorPage, {id: id, animal: animal}).present();
          }

        },
        {
          text: 'Cancelar',
          icon: 'paw',
          handler: () =>{
            
          }

        }

      ]
    });
    actionSheet.present();
  }

}
