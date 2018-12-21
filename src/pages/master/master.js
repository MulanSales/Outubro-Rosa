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
import { CampanhaFormPage } from '../campanha-form/campanha-form';
import { CampanhaSelectPage } from '../campanha-select/campanha-select';
/**
 * Generated class for the MasterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MasterPage = /** @class */ (function () {
    function MasterPage(navCtrl, navParams, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
    }
    MasterPage.prototype.abrirCampanhaForm = function () {
        this.navCtrl.push(CampanhaFormPage);
    };
    MasterPage.prototype.abrirCampanhaSelect = function () {
        this.navCtrl.push(CampanhaSelectPage);
    };
    MasterPage = __decorate([
        Component({
            selector: 'page-master',
            templateUrl: 'master.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams, ModalController])
    ], MasterPage);
    return MasterPage;
}());
export { MasterPage };
//# sourceMappingURL=master.js.map