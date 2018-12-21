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
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { OrganizadorFormPage } from '../organizador-form/organizador-form';
import { AngularFireDatabase } from 'angularfire2/database';
import { EditOrganizadorPage } from '../edit-organizador/edit-organizador';
/**
 * Generated class for the OrganizadorPrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrganizadorPrincipalPage = /** @class */ (function () {
    function OrganizadorPrincipalPage(navCtrl, navParams, fireDB, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireDB = fireDB;
        this.actionSheetCtrl = actionSheetCtrl;
        this.organizador = {};
        this.nrOrganizadores = 1;
        this.organizadorRef$ = this.fireDB.list('/Organizador');
    }
    /**adicionaOrganizador(organizador: OrganizadorEntidade){
     this.organizadorRef$.push({
          id: Number(this.nrOrganizadores),
          nome: "Placeholder",
          sobrenome: "Placeholder"
     });
     
     this.organizador = {} as OrganizadorEntidade;
     this.nrOrganizadores = this.nrOrganizadores + 1;
  
    }*/
    OrganizadorPrincipalPage.prototype.menuOrganizador = function (organizador) {
        var _this = this;
        this.actionSheetCtrl.create({
            title: '${organizador.nome}',
            buttons: [
                {
                    text: 'Edit',
                    handler: function () {
                        _this.navCtrl.push(EditOrganizadorPage, {
                            organizadorID: organizador.id
                        });
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        _this.organizadorRef$.remove(organizador.$key);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log("Botão de cancelar selecionado");
                    }
                }
            ]
        }).present();
    };
    OrganizadorPrincipalPage.prototype.redirectTo = function (sub_page) {
        if (sub_page == 1) {
            //this.adicionaOrganizador(this.organizador);
            this.navCtrl.push(OrganizadorFormPage);
        }
    };
    OrganizadorPrincipalPage = __decorate([
        Component({
            selector: 'page-organizador-principal',
            templateUrl: 'organizador-principal.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            AngularFireDatabase, ActionSheetController])
    ], OrganizadorPrincipalPage);
    return OrganizadorPrincipalPage;
}());
export { OrganizadorPrincipalPage };
//# sourceMappingURL=organizador-principal.js.map