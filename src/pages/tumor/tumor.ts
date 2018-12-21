import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';

import { TumorEntidade } from '../tumor/tumor-entidade.class';

/**
 * Generated class for the TumorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tumor',
  templateUrl: 'tumor.html',
})
export class TumorPage {

  //Constantes relacionadas a camêra
  image: string;
  id_photo: number;

  //Referência de classes anteriores
  id_animal: string;
  id_proprietario: string;
  

  tumor = {} as TumorEntidade;
  tumorAnimalLista: FirebaseListObservable<TumorEntidade[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
   private camera: Camera, public fire: AngularFireDatabase, 
   public toastCtrl: ToastController) {
    //Inicializa a aplicação ao banco de dados localmente;
    //initializeApp(fireBaseConfig);

    this.id_proprietario = navParams.get('id_proprietario');
    this.id_animal = navParams.get('id_animal');

    this.tumorAnimalLista = this.fire.list('/Tumor');

  }

  cadastrarTumor(){

    this.presentToast('Tumor Cadastrado com Sucesso!');

    this.tumor.id_animal = this.id_animal;
    this.tumorAnimalLista.push(this.tumor);

  }


  async tirarFoto(){
    try{
      const options: CameraOptions = {
      quality: 100,
      targetHeight: 600,
      targetWidth: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
     }

      const result = await this.camera.getPicture(options);

      this.image = 'data:image/jpeg;base64,' + result; 

      const picture = storage().ref('Imagens/' + this.id_animal);
      picture.putString(this.image, 'data_url'); 
    }
    catch(e){
      console.error(e);
    }
  }	

  finalizarForm(){
    this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-4));
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
