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
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the EditAnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditAnimalPage = /** @class */ (function () {
    function EditAnimalPage(navCtrl, navParams, fire, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.viewCtrl = viewCtrl;
        this.animal = {};
        this.id_animal = this.navParams.get('id');
        this.animal_car = this.navParams.get('animal');
        console.log(this.id_animal);
        this.ref = this.fire.object('/Animal/' + this.id_animal);
    }
    EditAnimalPage.prototype.salvarDados = function () {
        var _this = this;
        this.ref.update(this.animal).then(function () {
            _this.viewCtrl.dismiss();
        });
    };
    EditAnimalPage.prototype.fechar = function () {
        this.viewCtrl.dismiss();
    };
    EditAnimalPage = __decorate([
        Component({
            selector: 'page-edit-animal',
            templateUrl: 'edit-animal.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            AngularFireDatabase, ViewController])
    ], EditAnimalPage);
    return EditAnimalPage;
}());
export { EditAnimalPage };
//# sourceMappingURL=edit-animal.js.map