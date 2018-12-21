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
import { VoluntarioEntidade } from '../voluntario/voluntario-entidade.class';
/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams, fire) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.voluntario = {};
        this.voluntarioLista = this.fire.list('/Voluntario');
        this.voluntario = new VoluntarioEntidade();
    }
    CadastroPage.prototype.cadastrarVoluntario = function () {
        var _this = this;
        this.voluntarioLista.push(this.voluntario).then(function () {
            _this.voluntario = new VoluntarioEntidade();
        });
    };
    CadastroPage = __decorate([
        Component({
            selector: 'page-cadastro',
            templateUrl: 'cadastro.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            AngularFireDatabase])
    ], CadastroPage);
    return CadastroPage;
}());
export { CadastroPage };
//# sourceMappingURL=cadastro.js.map