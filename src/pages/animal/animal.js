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
import { TumorPage } from '../tumor/tumor';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the AnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnimalPage = /** @class */ (function () {
    function AnimalPage(navCtrl, navParams, fire, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.toastCtrl = toastCtrl;
        this.animal = {};
        this.proprietario = {};
        this.proprietarioId = navParams.get('id');
        this.proprietarioAnimalLista = this.fire.list('/Animal');
    }
    AnimalPage.prototype.cadastrarAnimal = function () {
        this.animal.id_proprietario = this.proprietarioId;
        this.animalCache = this.proprietarioAnimalLista.push(this.animal).key;
        this.presentToast('Animal Cadastrado com Sucesso!');
    };
    AnimalPage.prototype.abrirTumorForm = function () {
        this.navCtrl.push(TumorPage, {
            id_proprietario: this.proprietarioId,
            id_animal: this.animalCache
        });
    };
    AnimalPage.prototype.presentToast = function (message) {
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
    AnimalPage = __decorate([
        Component({
            selector: 'page-animal',
            templateUrl: 'animal.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            AngularFireDatabase, ToastController])
    ], AnimalPage);
    return AnimalPage;
}());
export { AnimalPage };
//# sourceMappingURL=animal.js.map