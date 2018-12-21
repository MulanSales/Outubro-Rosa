import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	@ViewChild('username') nome;
	@ViewChild('password') senha;
  @ViewChild('confirm_password') confirmar_senha;

  statusVoluntario: boolean = false;
  statusOrganizador: boolean = false;

  alert(message: string){

    this.alertCtrl.create({

      title: 'Info',
      subTitle: message,
      buttons: ['OK']

    }).present();

  }


  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }


  redirectToLogin(){
    this.navCtrl.push(LoginPage);
  }

  cadastraUsuario(){
    if(this.senha.value == this.confirmar_senha.value){
      this.fire.auth.createUserWithEmailAndPassword(this.nome.value, 
        this.senha.value)
      .then(data => {
      console.log('dados cadastrados', data);
      this.alert('Cadastro Completado. Faça Login!');
      this.navCtrl.pop();

      })

      .catch(error => {
        console.log('ocorreu um erro', error);
        this.alert(error.message);

      })

      console.log("Dados de cadastro:",this.nome.value, this.senha.value);
    } else{
      this.alert('Senha e Confirmação de Senha não estão iguais. Verifique autenticação');
    }
    
  }
}
