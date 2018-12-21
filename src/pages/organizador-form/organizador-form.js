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
/**
 * Generated class for the OrganizadorFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrganizadorFormPage = /** @class */ (function () {
    function OrganizadorFormPage(navCtrl, navParams, fireDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireDB = fireDB;
        this.organizador = {};
        this.nrOrganizadores = 1;
        this.organizadorRef$ = this.fireDB.list('/Organizador');
    }
    OrganizadorFormPage.prototype.adicionaOrganizador = function (organizador) {
        this.organizadorRef$.push({
            id: Number(this.nrOrganizadores),
            nome: organizador.nome,
            sobrenome: organizador.sobrenome
        });
        this.organizador = {};
        this.nrOrganizadores = this.nrOrganizadores + 1;
    };
    OrganizadorFormPage = __decorate([
        Component({
            selector: 'page-organizador-form',
            templateUrl: 'organizador-form.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AngularFireDatabase])
    ], OrganizadorFormPage);
    return OrganizadorFormPage;
}());
export { OrganizadorFormPage };
//# sourceMappingURL=organizador-form.js.map