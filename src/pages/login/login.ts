import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FrontPage } from '../front/front';
import { MasterPage } from '../master/master';
import { RegisterPage} from '../register/register';

import { Facebook } from '@ionic-native/facebook';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	@ViewChild('username') nome;
	@ViewChild('password') senha;

  constructor(private alertCtrl: AlertController, 
    private fire: AngularFireAuth, public navCtrl: NavController, 
    public navParams: NavParams, private facebook: Facebook, 
    private platform: Platform) {
  }

  alert(message: string){

    this.alertCtrl.create({

      title: 'Atenção',
      subTitle: message,
      buttons: ['OK']

    }).present();

  }

  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }

  signIn(){

   this.fire.auth.signInWithEmailAndPassword(this.nome.value, this.senha.value)
    .then( data => {
      console.log('Dados do Usuário', this.fire.auth.currentUser);
      
      if(this.nome.value == "master@or.com.br" && this.senha.value == "pepino"){
          this.navCtrl.setRoot( MasterPage );
      }
      else{
         this.navCtrl.setRoot( FrontPage );
        }
        this.alert('Você está logado!');
      })
      .catch( error => {
        console.log('Ocorreu um erro', error);
        this.alert(error.message);

      })

  	console.log("Logar com:", this.nome.value, this.senha.value);

  }

  loginFacebook(){
    if (this.platform.is('cordova')) {
      return this.facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        this.navCtrl.setRoot( FrontPage );
        return firebase.auth().signInWithCredential(facebookCredential);

      }).catch( error => {
        console.log('Ocorreu um erro', error);
        this.alert(error.message);
      })
    }
    else {
      return this.fire.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res =>{
          this.navCtrl.setRoot( FrontPage );
          console.log(res);
      }).catch( error =>{
        console.log('Ocorreu um erro', error);
        this.alert(error.message);
      })
    }
  }

}
