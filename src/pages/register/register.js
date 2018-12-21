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
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(alertCtrl, fire, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statusVoluntario = false;
        this.statusOrganizador = false;
    }
    RegisterPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    RegisterPage.prototype.redirectToLogin = function () {
        this.navCtrl.push(LoginPage);
    };
    RegisterPage.prototype.cadastraUsuario = function () {
        var _this = this;
        if (this.senha.value == this.confirmar_senha.value) {
            this.fire.auth.createUserWithEmailAndPassword(this.nome.value, this.senha.value)
                .then(function (data) {
                console.log('dados cadastrados', data);
                _this.alert('Cadastro Completado. Aguarde Confirmação!');
            })
                .catch(function (error) {
                console.log('ocorreu um erro', error);
                _this.alert(error.message);
            });
            console.log("Dados de cadastro:", this.nome.value, this.senha.value);
        }
        else {
            this.alert('Senha e Confirmação de Senha não estão iguais. Verifique autenticação');
        }
    };
    __decorate([
        ViewChild('username'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "nome", void 0);
    __decorate([
        ViewChild('password'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "senha", void 0);
    __decorate([
        ViewChild('confirm_password'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "confirmar_senha", void 0);
    RegisterPage = __decorate([
        Component({
            selector: 'page-register',
            templateUrl: 'register.html',
        }),
        __metadata("design:paramtypes", [AlertController, AngularFireAuth, NavController, NavParams])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.js.map