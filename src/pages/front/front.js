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
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from '../home/home';
/**
 * Generated class for the FrontPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FrontPage = /** @class */ (function () {
    function FrontPage(fire, navCtrl, navParams, fireDB) {
        /**this.email = fire.auth.currentUser.email;*/
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireDB = fireDB;
    }
    FrontPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FrontPage');
    };
    FrontPage.prototype.redirectToHome = function () {
        this.navCtrl.push(HomePage);
    };
    FrontPage.prototype.addNome = function (title) {
        this.fireDB.list('numero').push({ title: title });
        this.title = "";
    };
    FrontPage = __decorate([
        Component({
            selector: 'page-front',
            templateUrl: 'front.html',
        }),
        __metadata("design:paramtypes", [AngularFireAuth, NavController, NavParams, AngularFireDatabase])
    ], FrontPage);
    return FrontPage;
}());
export { FrontPage };
//# sourceMappingURL=front.js.map