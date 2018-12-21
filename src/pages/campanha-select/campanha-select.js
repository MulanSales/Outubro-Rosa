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
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { CampanhaEntidade } from '../campanha-form/campanha-entidade.class';
import { CampanhaEditPage } from '../campanha-edit/campanha-edit';
/**
 * Generated class for the CampanhaSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CampanhaSelectPage = /** @class */ (function () {
    function CampanhaSelectPage(navCtrl, navParams, fireDB, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireDB = fireDB;
        this.modal = modal;
        this.campanha = {};
        this.campanhaLista = this.fireDB.list('/Campanha');
        this.campanha = new CampanhaEntidade();
    }
    CampanhaSelectPage.prototype.editarCampanha = function (id) {
        this.modal.create(CampanhaEditPage, { id: id }).present();
    };
    CampanhaSelectPage = __decorate([
        Component({
            selector: 'page-campanha-select',
            templateUrl: 'campanha-select.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            AngularFireDatabase, ModalController])
    ], CampanhaSelectPage);
    return CampanhaSelectPage;
}());
export { CampanhaSelectPage };
//# sourceMappingURL=campanha-select.js.map