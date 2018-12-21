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
import { NavController, ModalController, ActionSheetController, Platform } from 'ionic-angular';
import { ProprietarioPage } from '../proprietario/proprietario';
import { AnimalEntidade } from '../animal/animal-entidade.class';
import { EditAnimalPage } from '../edit-animal/edit-animal';
import { AngularFireDatabase } from 'angularfire2/database';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, fire, modal, aSCtrl, platform) {
        this.navCtrl = navCtrl;
        this.fire = fire;
        this.modal = modal;
        this.aSCtrl = aSCtrl;
        this.platform = platform;
        this.animaisLista = this.fire.list('/Animal');
        this.animal = new AnimalEntidade();
    }
    HomePage.prototype.abrirForm = function () {
        this.navCtrl.push(ProprietarioPage);
    };
    HomePage.prototype.editarAnimal = function (id, animal) {
        var _this = this;
        var actionSheet = this.aSCtrl.create({
            title: 'Dados do Animal',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Editar Animal',
                    icon: 'paw',
                    handler: function () {
                        _this.modal.create(EditAnimalPage, { id: id, animal: animal }).present();
                    }
                },
            ]
        });
        actionSheet.present();
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, AngularFireDatabase,
            ModalController, ActionSheetController,
            Platform])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map