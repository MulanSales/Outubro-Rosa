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
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { CampanhaEntidade } from '../campanha-form/campanha-entidade.class';
/**
 * Generated class for the CampanhaFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CampanhaFormPage = /** @class */ (function () {
    function CampanhaFormPage(navCtrl, navParams, fireDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireDB = fireDB;
        this.campanha = {};
        this.campanhaLista = this.fireDB.list('/Campanha');
        this.campanha = new CampanhaEntidade();
    }
    CampanhaFormPage.prototype.cadastrarCampanha = function () {
        var _this = this;
        this.campanhaLista.push(this.campanha).then(function () {
            _this.campanha = new CampanhaEntidade();
        });
    };
    CampanhaFormPage = __decorate([
        Component({
            selector: 'page-campanha-form',
            templateUrl: 'campanha-form.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams, AngularFireDatabase])
    ], CampanhaFormPage);
    return CampanhaFormPage;
}());
export { CampanhaFormPage };
//# sourceMappingURL=campanha-form.js.map