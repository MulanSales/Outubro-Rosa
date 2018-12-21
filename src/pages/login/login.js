var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FrontPage } from '../front/front';
import { MasterPage } from '../master/master';
import { RegisterPage } from '../register/register';
import { Facebook } from '@ionic-native/facebook';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, fire, navCtrl, navParams, facebook, platform) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facebook = facebook;
        this.platform = platform;
    }
    LoginPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Login Completo!',
            subTitle: 'Você está logado!',
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.push(RegisterPage);
    };
    LoginPage.prototype.signIn = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.nome.value, this.senha.value)
            .then(function (data) {
            console.log('Dados do Usuário', _this.fire.auth.currentUser);
            if (_this.nome.value == "master@or.com.br" && _this.senha.value == "pepino") {
                _this.navCtrl.setRoot(MasterPage);
            }
            else {
                _this.navCtrl.setRoot(FrontPage);
            }
            _this.alert('Você está logado!');
        })
            .catch(function (error) {
            console.log('Ocorreu um erro', error);
            _this.alert(error.message);
        });
        console.log("Logar com:", this.nome.value, this.senha.value);
    };
    LoginPage.prototype.loginFacebook = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            return this.facebook.login(['email', 'public_profile']).then(function (res) {
                var facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
                _this.navCtrl.setRoot(FrontPage);
                return firebase.auth().signInWithCredential(facebookCredential);
            }).catch(function (error) {
                console.log('Ocorreu um erro', error);
                _this.alert(error.message);
            });
        }
        else {
            return this.fire.auth
                .signInWithPopup(new firebase.auth.FacebookAuthProvider())
                .then(function (res) {
                _this.navCtrl.setRoot(FrontPage);
                console.log(res);
            }).catch(function (error) {
                console.log('Ocorreu um erro', error);
                _this.alert(error.message);
            });
        }
    };
    __decorate([
        ViewChild('username'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "nome", void 0);
    __decorate([
        ViewChild('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "senha", void 0);
    LoginPage = __decorate([
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [AlertController,
            AngularFireAuth, NavController,
            NavParams, Facebook,
            Platform])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map