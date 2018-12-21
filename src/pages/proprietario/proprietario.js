var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AnimalPage } from '../animal/animal';
/**
 * Generated class for the ProprietarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProprietarioPage = /** @class */ (function () {
    function ProprietarioPage(navCtrl, navParams, fire, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.toastCtrl = toastCtrl;
        this.proprietario = {};
        this.proprietarioLista = this.fire.list('/Proprietario');
    }
    ProprietarioPage.prototype.cadastrarProprietario = function () {
        this.proprietarioCache = this.proprietarioLista.push(this.proprietario).key;
        this.presentToast('Proprietário Cadastrado com Sucesso!');
    };
    ProprietarioPage.prototype.abrirAnimalForm = function () {
        this.navCtrl.push(AnimalPage, { id: this.proprietarioCache });
    };
    ProprietarioPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ProprietarioPage = __decorate([
        Component({
            selector: 'page-proprietario',
            templateUrl: 'proprietario.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            AngularFireDatabase, ToastController])
    ], ProprietarioPage);
    return ProprietarioPage;
}());
export { ProprietarioPage };
//# sourceMappingURL=proprietario.js.map