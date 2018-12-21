import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';

/**
 * Generated class for the FrontPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-front',
  templateUrl: 'front.html',

})
export class FrontPage {

  email: string;
  title: string;
  nome: string;
  numero: string;
  items: Observable<any[]>;
  

  constructor( public navCtrl: NavController, public navParams: NavParams, public fireDB: AngularFireDatabase) {
  	/**this.email = fire.auth.currentUser.email;*/
   
  }

  redirectToHome(){

    this.navCtrl.push(HomePage);
  	this.navCtrl.setRoot(HomePage);

  }

  redirectToCadastro(){
    this.navCtrl.push(CadastroPage)
  }

  cancelar(){
     this.navCtrl.push(LoginPage);
     this.navCtrl.setRoot(LoginPage);
  }

}
