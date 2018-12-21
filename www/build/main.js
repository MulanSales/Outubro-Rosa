webpackJsonp([0],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proprietario_proprietario__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animal_animal_entidade_class__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_animal_edit_animal__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_proprietario_edit_proprietario__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { EditTumorPage } from '../edit-tumor/edit-tumor';

var HomePage = (function () {
    function HomePage(navCtrl, fire, modal, aSCtrl, platform) {
        this.navCtrl = navCtrl;
        this.fire = fire;
        this.modal = modal;
        this.aSCtrl = aSCtrl;
        this.platform = platform;
        this.animaisLista = this.fire.list('/Animal');
        this.animal = new __WEBPACK_IMPORTED_MODULE_3__animal_animal_entidade_class__["a" /* AnimalEntidade */]();
    }
    HomePage.prototype.abrirForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__proprietario_proprietario__["a" /* ProprietarioPage */]);
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
                        _this.modal.create(__WEBPACK_IMPORTED_MODULE_4__edit_animal_edit_animal__["a" /* EditAnimalPage */], { id: id, animal: animal }).present();
                    }
                },
                {
                    text: 'Editar Proprietário',
                    icon: 'paw',
                    handler: function () {
                        _this.modal.create(__WEBPACK_IMPORTED_MODULE_5__edit_proprietario_edit_proprietario__["a" /* EditProprietarioPage */], { animal: animal }).present();
                    }
                },
                {
                    text: 'Editar Tumor',
                    icon: 'paw',
                    handler: function () {
                        //this.modal.create(EditTumorPage, {id: id, animal: animal}).present();
                    }
                },
                {
                    text: 'Cancelar',
                    icon: 'paw',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color ="lassie_default">\n       <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>PetCan</ion-title>\n      <ion-buttons end>\n     <button ion-button icon-only>\n        <ion-icon name="paw" item-end>\n           <ion-badge item-start color="light">2017</ion-badge>\n        </ion-icon>\n      </button>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>  \n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 align=center>Animais no Evento</h3>\n\n \n  <ion-list>\n    <ion-item *ngFor="let animal of animaisLista | async" (click)="editarAnimal(animal.$key, animal)">\n      <img src="assets/img/dog.png">\n      <h2>\n        NOME: {{animal.nome}} \n      </h2>\n      <h3>\n        IDADE: {{animal.idade}}\n        RAÇA: {{animal.raca}}\n      </h3>\n    </ion-item>\n  </ion-list>\n\n\n   <ion-fab right bottom>\n    <button ion-fab color="lassie_default" (click) = "abrirForm()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n\n\n\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProprietarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animal_animal__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProprietarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProprietarioPage = (function () {
    function ProprietarioPage(navCtrl, navParams, fire, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.toastCtrl = toastCtrl;
        this.proprietario = {};
        this.proprietarioLista = this.fire.list('/Proprietario');
    }
    ProprietarioPage.prototype.cadastrarProprietario = function () {
        this.proprietarioCache = this.proprietarioLista.push(this.proprietario).key;
        this.presentToast('Proprietário Cadastrado com Sucesso!');
    };
    ProprietarioPage.prototype.abrirAnimalForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__animal_animal__["a" /* AnimalPage */], { id: this.proprietarioCache });
    };
    ProprietarioPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    ProprietarioPage.prototype.presentToast = function (message) {
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
    return ProprietarioPage;
}());
ProprietarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-proprietario',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/proprietario/proprietario.html"*/'<!--\n  Generated template for the ProprietarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-title>Proprietario</ion-title>\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n\n      <ion-item>\n          <ion-label>Autoriza Contato?</ion-label>\n          <ion-toggle value="foo" checked="true" unchecked="false"[(ngModel)]="proprietario.auto_contato"></ion-toggle>\n      </ion-item>\n\n		  <ion-item>\n      		<ion-label fixed>Nome:</ion-label>\n      		<ion-input type="text" [(ngModel)]="proprietario.nome"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Sobrenome:</ion-label>\n      		<ion-input type="text" [(ngModel)]="proprietario.sobrenome"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Gênero:</ion-label>\n      		<ion-select [(ngModel)]="proprietario.genero">\n      			<ion-option value="f">Feminino</ion-option>\n            	<ion-option value="m">Masculino</ion-option>\n            </ion-select>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Data de Nascimento:</ion-label>\n      		<ion-input type="date" [(ngModel)]="proprietario.data_de_nascimento"></ion-input>\n   		</ion-item>\n\n\n   		<ion-item>\n      		<ion-label fixed>Tel. 1:</ion-label>\n      		<ion-input type="number" [(ngModel)]="proprietario.telefone_1"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Tel. 2:</ion-label>\n      		<ion-input type="number" [(ngModel)]="proprietario.telefone_2"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Email:</ion-label>\n      		<ion-input type="text" [(ngModel)]="proprietario.email"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Estado Civil:</ion-label>\n      		<ion-select [(ngModel)]="proprietario.estado_civil">\n      		    <ion-option value="1">Solteiro</ion-option>\n            	<ion-option value="2">Casado</ion-option>\n            	<ion-option value="3">Viúvo</ion-option>\n            	<ion-option value="3">Divorciado</ion-option>\n            	<ion-option value="9">Sem Informação</ion-option>\n            </ion-select>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Rua:</ion-label>\n      		<ion-input type="text" [(ngModel)]="proprietario.rua"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>CEP:</ion-label>\n      		<ion-input type="number" [(ngModel)]="proprietario.cep"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Numero:</ion-label>\n      		<ion-input type="number" [(ngModel)]="proprietario.numero"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Complemento:</ion-label>\n      		<ion-input type="text" [(ngModel)]="proprietario.complemento"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Bairro:</ion-label>\n      		<ion-input type="text" [(ngModel)]="proprietario.bairro"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Cidade:</ion-label>\n      		<ion-input type="text" [(ngModel)]="proprietario.cidade"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Estado:</ion-label>\n      		<ion-input type="text" [(ngModel)]="proprietario.estado"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>País:</ion-label>\n      		<ion-input type="text" [(ngModel)]="proprietario.pais"></ion-input>\n   		</ion-item>\n\n         <button block color="lassie_default" class="entrar" ion-button round (click)="cadastrarProprietario()">Adicionar Proprietario</button>\n\n         <button block color="lassie_default" class="entrar" ion-button round (click)="cancelar()">Cancelar</button>\n\n   	</ion-list>\n\n   \n      \n\n      <button block color="lassie_default" class="entrar" ion-button round (click)="abrirAnimalForm()">Próximo>></button>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/proprietario/proprietario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], ProprietarioPage);

//# sourceMappingURL=proprietario.js.map

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cadastro_cadastro__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the FrontPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FrontPage = (function () {
    function FrontPage(navCtrl, navParams, fireDB) {
        /**this.email = fire.auth.currentUser.email;*/
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireDB = fireDB;
    }
    FrontPage.prototype.redirectToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    FrontPage.prototype.redirectToCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    FrontPage.prototype.cancelar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return FrontPage;
}());
FrontPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-front',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/front/front.html"*/'<!--\n  Generated template for the FrontPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n\n    <div class="front-wrap">\n        <ion-img class="icone-outubrorosa" src="assets/img/dogEspera.png"></ion-img>\n        <h1>Aguardando confirmação do Administrador</h1>\n\n        <div padding>\n              <button  block color="lassie_default" ion-button class="botao-verifica" (click)="redirectToHome()">Verificar confirmação</button>\n        </div>\n        <div padding>\n              <button  block color="lassie_default" ion-button class="botao-reenvia" (click)="redirectToCadastro()">Realizar Solicitação </button>\n        </div>\n        <div padding>\n              <button  block color="lassie_default" ion-button class="botao-sair" (click)="cancelar()">Sair</button>\n        </div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/front/front.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], FrontPage);

//# sourceMappingURL=front.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tumor_tumor__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnimalPage = (function () {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tumor_tumor__["a" /* TumorPage */], {
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
    return AnimalPage;
}());
AnimalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-animal',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/animal/animal.html"*/'<!--\n  Generated template for the AnimalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-title>Animal</ion-title>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n  	<ion-item>\n        	<ion-label fixed>Nome:</ion-label>\n        	<ion-input type="text" [(ngModel)]="animal.nome"></ion-input>\n     	</ion-item>\n\n     	<ion-item>\n        	<ion-label fixed>Data de Nascimento:</ion-label>\n        	<ion-input type="date" [(ngModel)]="animal.data_de_nascimento"></ion-input>\n     	</ion-item>\n\n      <ion-item>\n        	<ion-label fixed>Idade:</ion-label>\n        	<ion-input type="number" [(ngModel)]="animal.idade"></ion-input>\n     	</ion-item>\n\n     	<ion-item>\n        	<ion-label fixed>Raça:</ion-label>\n        	<ion-input type="text" [(ngModel)]="animal.raca"></ion-input>\n     	</ion-item>\n\n     	<ion-item>\n        	<ion-label fixed>Data de Castração:</ion-label>\n        	<ion-input type="date" [(ngModel)]="animal.data_de_castracao"></ion-input>\n     	</ion-item>\n\n      <ion-item>\n        <ion-label fixed>Sexo:</ion-label>\n        	<ion-select [(ngModel)]="animal.sexo">\n        		    <ion-option value="1">Fêmea</ion-option>\n              	<ion-option value="2">Macho</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n\n      <ion-item>\n        <ion-label fixed>Porte:</ion-label>\n        	<ion-select [(ngModel)]="animal.porte">\n        		    <ion-option value="1">Pequeno</ion-option>\n              	<ion-option value="2">Médio</ion-option>\n              	<ion-option value="3">Grande</ion-option>\n              	<ion-option value="4">Gigante</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n     	<ion-item>\n        <ion-label fixed>Espécie:</ion-label>\n        	<ion-select [(ngModel)]="animal.especie">\n        		    <ion-option value="1">Canino</ion-option>\n              	<ion-option value="2">Felino</ion-option>\n              	<ion-option value="8">Outro</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n     	<ion-item>\n        <ion-label fixed>Estado Reprodutivo:</ion-label>\n        	<ion-select [(ngModel)]="animal.castracao">\n        		    <ion-option value="1">Inteira</ion-option>\n              	<ion-option value="2">Castrado</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n      <ion-item>\n        <ion-label fixed>Motivo da Castração:</ion-label>\n        	<ion-select [(ngModel)]="animal.motivo_de_castracao">\n        		    <ion-option value="1">Adquiriu Castrado</ion-option>\n              	<ion-option value="2">Eletiva</ion-option>\n              	<ion-option value="3">Motivos de saúde</ion-option>\n              	<ion-option value="4">Evitar Cancêr de Mama</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n              	<ion-option value="10">Não se Aplica</ion-option>\n          </ion-select>\n     	</ion-item>\n\n      <ion-item>\n        <ion-label fixed>Ciclo Estral:</ion-label>\n        	<ion-select [(ngModel)]="animal.ciclo_estral">\n        		    <ion-option value="1">Antes do 1º</ion-option>\n              	<ion-option value="2">Entre o 1º e o 2º</ion-option>\n              	<ion-option value="2">Após o 2º</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n     	<ion-item>\n        <ion-label fixed>Uso de Anticoncepcional:</ion-label>\n        	<ion-select [(ngModel)]="animal.anticoncepcional">\n        		    <ion-option value="1">Sim</ion-option>\n              	<ion-option value="2">Não</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n     	<ion-item>\n        <ion-label fixed>Participação na última campanha:</ion-label>\n        	<ion-select [(ngModel)]="animal.ultima_campanha">\n        		    <ion-option value="1">Sim</ion-option>\n              	<ion-option value="2">Não</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n     	<ion-item>\n        <ion-label fixed>Histórico de Pseudociese:</ion-label>\n        	<ion-select [(ngModel)]="animal.pseudociese">\n        		    <ion-option value="1">Sim</ion-option>\n              	<ion-option value="2">Não</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n     	<ion-item>\n        <ion-label fixed>Idas ao Veterinário:</ion-label>\n        	<ion-select [(ngModel)]="animal.idas_vet_ano">\n        		    <ion-option value="1">Uma vez por ano</ion-option>\n              	<ion-option value="2">Duas vezes por ano</ion-option>\n              	<ion-option value="3">Três vezes por ano</ion-option>\n              	<ion-option value="4">Quatro ou mais vezes por ano</ion-option>\n              	<ion-option value="5">Nunca</ion-option>\n              	<ion-option value="8">Outro</ion-option>\n              	<ion-option value="5">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n     	<ion-item>\n        <ion-label fixed>Frequencia do exame em casa:</ion-label>\n        	<ion-select [(ngModel)]="animal.idas_vet_ano">\n        		    <ion-option value="1">Uma vez por ano</ion-option>\n              	<ion-option value="2">Duas vezes por ano</ion-option>\n              	<ion-option value="3">Três vezes por ano</ion-option>\n              	<ion-option value="4">Quatro ou mais vezes por ano</ion-option>\n              	<ion-option value="5">Nunca</ion-option>\n              	<ion-option value="8">Outro</ion-option>\n              	<ion-option value="5">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n     	<ion-item>\n        <ion-label fixed>Conhece exame em casa:</ion-label>\n        	<ion-select [(ngModel)]="animal.pseudociese">\n        		    <ion-option value="1">Sim</ion-option>\n              	<ion-option value="2">Não</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n     \n       <button block color="lassie_default" class="entrar" ion-button round (click)="cadastrarAnimal()">Adicionar Animal</button>\n    </ion-list>\n   \n      <button block color="lassie_default" class="entrar" ion-button round (click)="abrirTumorForm()">Próximo>></button>\n\n</ion-content>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/animal/animal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], AnimalPage);

//# sourceMappingURL=animal.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TumorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the TumorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TumorPage = (function () {
    function TumorPage(navCtrl, navParams, camera, fire, toastCtrl) {
        //Inicializa a aplicação ao banco de dados localmente;
        //initializeApp(fireBaseConfig);
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.fire = fire;
        this.toastCtrl = toastCtrl;
        this.tumor = {};
        this.id_proprietario = navParams.get('id_proprietario');
        this.id_animal = navParams.get('id_animal');
        this.tumorAnimalLista = this.fire.list('/Tumor');
    }
    TumorPage.prototype.cadastrarTumor = function () {
        this.presentToast('Tumor Cadastrado com Sucesso!');
        this.tumor.id_animal = this.id_animal;
        this.tumorAnimalLista.push(this.tumor);
    };
    TumorPage.prototype.tirarFoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, result, picture, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        options = {
                            quality: 100,
                            targetHeight: 600,
                            targetWidth: 600,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        result = _a.sent();
                        this.image = 'data:image/jpeg;base64,' + result;
                        picture = Object(__WEBPACK_IMPORTED_MODULE_4_firebase__["storage"])().ref('Imagens/' + this.id_animal);
                        picture.putString(this.image, 'data_url');
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TumorPage.prototype.finalizarForm = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 4));
    };
    TumorPage.prototype.presentToast = function (message) {
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
    return TumorPage;
}());
TumorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tumor',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/tumor/tumor.html"*/'<!--\n  Generated template for the TumorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-title>Tumor</ion-title>\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-list>\n    \n  <ion-card>\n    <ion-card-content>\n      <img [src]="image" *ngIf="image"/>\n    </ion-card-content>\n  </ion-card>\n\n  <button ion-button full round icon-start color="lassie_default"  (click)="tirarFoto()">Foto\n    <ion-icon name="camera"></ion-icon>\n  </button>\n\n  <ion-item>\n        <ion-label fixed>Local:</ion-label>\n        <ion-input type="text" [(ngModel)]="tumor.local"></ion-input>\n  </ion-item>\n\n  <ion-item>\n        <ion-label fixed>Tamanho:</ion-label>\n        <ion-input type="number" [(ngModel)]="tumor.tamanho"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Lateralidade:</ion-label>\n      <ion-select [(ngModel)]="tumor.lateralidade">\n          <ion-option value="1">Direita</ion-option>\n          <ion-option value="2">Esquerda</ion-option>\n          <ion-option value="3">Bilateral</ion-option>\n          <ion-option value="9">Sem Informação</ion-option>\n      </ion-select>\n  </ion-item>\n\n  <ion-item>\n        <ion-label fixed>Tempo de Evolução:</ion-label>\n        <ion-input type="number" [(ngModel)]="tumor.tempo_evolucao"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Em Tratamento:</ion-label>\n      <ion-select [(ngModel)]="tumor.em_tratamento">\n          <ion-option value="1">Sim</ion-option>\n          <ion-option value="2">Não</ion-option>\n          <ion-option value="9">Sem Informação</ion-option>\n      </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Conhecimento Prévio:</ion-label>\n      <ion-select [(ngModel)]="tumor.conhecimento_previo">\n          <ion-option value="1">Sim</ion-option>\n          <ion-option value="2">Não</ion-option>\n          <ion-option value="9">Sem Informação</ion-option>\n      </ion-select>\n  </ion-item>\n\n  <ion-item>\n        <ion-label fixed>Observações:</ion-label>\n        <ion-textarea type="text" [(ngModel)]="tumor.observacoes"></ion-textarea>>\n  </ion-item>\n\n  <button block color="lassie_default" class="entrar" ion-button round (click)="cadastrarTumor()">Adicionar Tumor</button>\n\n</ion-list>\n\n\n	<div id="topButtons">\n		<button ion-button color="lassie_default" full center icon-bottom (click)= "finalizarForm()">\n  			<ion-icon name="md-share-alt"></ion-icon>\n  			Finalizar Formulário\n		</button>\n	</div>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/tumor/tumor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], TumorPage);

//# sourceMappingURL=tumor.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAnimalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EditAnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditAnimalPage = (function () {
    function EditAnimalPage(navCtrl, navParams, fire, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
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
    EditAnimalPage.prototype.excluirDados = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'ATENÇÃO!',
            message: 'Deseja apagar TODOS os dados do animal?',
            buttons: [
                {
                    text: 'Sim',
                    handler: function () {
                        _this.ref.remove();
                        _this.viewCtrl.dismiss();
                    }
                },
                {
                    text: 'Não',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    EditAnimalPage.prototype.fechar = function () {
        this.viewCtrl.dismiss();
    };
    return EditAnimalPage;
}());
EditAnimalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-animal',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/edit-animal/edit-animal.html"*/'<!--\n  Generated template for the EditAnimalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="lassie_default">\n    \n    <button ion-button color="lassie_default" icon-only (click)="fechar()">\n        <ion-icon name="close"></ion-icon>\n    </button>\n\n    <ion-title>Editar Animal</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="animal_update" color="lassie_default">\n      <ion-segment-button value="display">\n        <ion-icon name="clipboard"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="update">\n        <ion-icon name="cloud-upload"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div [ngSwitch]="animal_update">\n		<ion-list *ngSwitchCase="\'update\'">\n  		<ion-item>\n        	<ion-label fixed >Nome:</ion-label>\n        	<ion-input type="text" placeholder={{ref.nome}} [(ngModel)]="animal.nome"></ion-input>\n     	</ion-item>\n\n     	<ion-item>\n        	<ion-label fixed>Data de Nascimento:</ion-label>\n        	<ion-input type="date" [(ngModel)]="animal.data_de_nascimento"></ion-input>\n     	</ion-item>\n\n      <ion-item>\n        	<ion-label fixed>Idade:</ion-label>\n        	<ion-input type="number" [(ngModel)]="animal.idade"></ion-input>\n     	</ion-item>\n\n     	<ion-item>\n        	<ion-label fixed>Raça:</ion-label>\n        	<ion-input type="text" [(ngModel)]="animal.raca"></ion-input>\n     	</ion-item>\n\n     	<ion-item>\n        	<ion-label fixed>Data de Castração:</ion-label>\n        	<ion-input type="date" [(ngModel)]="animal.data_de_castracao"></ion-input>\n     	</ion-item>\n\n      <ion-item>\n        <ion-label fixed>Sexo:</ion-label>\n        	<ion-select [(ngModel)]="animal.sexo">\n        		    <ion-option value="1">Fêmea</ion-option>\n              	<ion-option value="2">Macho</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n\n      <ion-item>\n        <ion-label fixed>Porte:</ion-label>\n        	<ion-select [(ngModel)]="animal.porte">\n        		    <ion-option value="1">Pequeno</ion-option>\n              	<ion-option value="2">Médio</ion-option>\n              	<ion-option value="3">Grande</ion-option>\n              	<ion-option value="4">Gigante</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n     	<ion-item>\n        <ion-label fixed>Espécie:</ion-label>\n        	<ion-select [(ngModel)]="animal.especie">\n        		    <ion-option value="1">Canino</ion-option>\n              	<ion-option value="2">Felino</ion-option>\n              	<ion-option value="8">Outro</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n     	<ion-item>\n        <ion-label fixed>Estado Reprodutivo:</ion-label>\n        	<ion-select [(ngModel)]="animal.castracao">\n        		    <ion-option value="1">Inteira</ion-option>\n              	<ion-option value="2">Castrado</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n      <ion-item>\n        <ion-label fixed>Motivo da Castração:</ion-label>\n        	<ion-select [(ngModel)]="animal.motivo_de_castracao">\n        		    <ion-option value="1">Adquiriu Castrado</ion-option>\n              	<ion-option value="2">Eletiva</ion-option>\n              	<ion-option value="3">Motivos de saúde</ion-option>\n              	<ion-option value="4">Evitar Cancêr de Mama</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n              	<ion-option value="10">Não se Aplica</ion-option>\n          </ion-select>\n     	</ion-item>\n\n      <ion-item>\n        <ion-label fixed>Ciclo Estral:</ion-label>\n        	<ion-select [(ngModel)]="animal.ciclo_estral">\n        		    <ion-option value="1">Antes do 1º</ion-option>\n              	<ion-option value="2">Entre o 1º e o 2º</ion-option>\n              	<ion-option value="2">Após o 2º</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n     	<ion-item>\n        <ion-label fixed>Uso de Anticoncepcional:</ion-label>\n        	<ion-select [(ngModel)]="animal.anticoncepcional">\n        		    <ion-option value="1">Sim</ion-option>\n              	<ion-option value="2">Não</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n     	<ion-item>\n        <ion-label fixed>Participação na última campanha:</ion-label>\n        	<ion-select [(ngModel)]="animal.ultima_campanha">\n        		    <ion-option value="1">Sim</ion-option>\n              	<ion-option value="2">Não</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n     	<ion-item>\n        <ion-label fixed>Histórico de Pseudociese:</ion-label>\n        	<ion-select [(ngModel)]="animal.pseudociese">\n        		    <ion-option value="1">Sim</ion-option>\n              	<ion-option value="2">Não</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n     	<ion-item>\n        <ion-label fixed>Idas ao Veterinário:</ion-label>\n        	<ion-select [(ngModel)]="animal.idas_vet_ano">\n        		    <ion-option value="1">Uma vez por ano</ion-option>\n              	<ion-option value="2">Duas vezes por ano</ion-option>\n              	<ion-option value="3">Três vezes por ano</ion-option>\n              	<ion-option value="4">Quatro ou mais vezes por ano</ion-option>\n              	<ion-option value="5">Nunca</ion-option>\n              	<ion-option value="8">Outro</ion-option>\n              	<ion-option value="5">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n     	<ion-item>\n        <ion-label fixed>Frequencia do exame em casa:</ion-label>\n        	<ion-select [(ngModel)]="animal.idas_vet_ano">\n        		    <ion-option value="1">Uma vez por ano</ion-option>\n              	<ion-option value="2">Duas vezes por ano</ion-option>\n              	<ion-option value="3">Três vezes por ano</ion-option>\n              	<ion-option value="4">Quatro ou mais vezes por ano</ion-option>\n              	<ion-option value="5">Nunca</ion-option>\n              	<ion-option value="8">Outro</ion-option>\n              	<ion-option value="5">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n     	<ion-item>\n        <ion-label fixed>Conhece exame em casa:</ion-label>\n        	<ion-select [(ngModel)]="animal.pseudociese">\n        		    <ion-option value="1">Sim</ion-option>\n              	<ion-option value="2">Não</ion-option>\n              	<ion-option value="9">Sem Informação</ion-option>\n          </ion-select>\n     	</ion-item>\n\n     	<ion-item>\n      		<button ion-button color="lassie_default" (click)="salvarDados()">Atualizar</button>\n    	</ion-item>\n\n		</ion-list>\n\n		<ion-list *ngSwitchCase="\'display\'">\n			<ion-item *ngIf="animal_car"  >\n				<img src="assets/img/dog.png">\n				Formulário Atual\n				<div>\n        			Nome: {{animal_car.nome}}\n        		</div>\n        			Data de Nascimento: {{animal_car.data_de_nascimento}}\n        		<div>\n        			Idade: {{animal_car.idade}}\n        		</div>\n        		<div>\n        			Especie: {{animal_car.especie}}\n        		</div>\n        		<div>\n        			Sexo: {{animal_car.sexo}}\n        		</div>\n        		<div>\n        			Certeza de Idade: {{animal_car.certeza_idade}}\n        		</div>\n        		<div>\n        			Porte: {{animal_car.porte}}\n        		</div>\n        		<div>\n        			Raça: {{animal_car.raca}}\n        		</div>\n        		<div>\n        			Estado Reprodutivo: {{animal_car.castracao}}\n        		</div>\n        		<div>\n        			Data de Castração: {{animal_car.data_de_castracao}}\n        		</div>\n        		<div>\n        			Motivo de Castração: {{animal_car.motivo_de_castracao}}\n        		</div>\n        		<div>\n        			Ciclo Estral: {{animal_car.ciclo_estral}}\n        		</div>\n        		<div>\n        			Pseudociese: {{animal_car.pseudociese}}\n        		</div>\n        		<div>\n        			Esteve na Última Campanha: {{animal_car.ultima_campanha}}\n        		</div>\n        		<div>\n        			Como soube da Campanha: {{animal_car.como_soube_da_campanha}}\n        		</div>\n        		<div>\n        			Idas ao Veterinario: {{animal_car.idas_vet_ano}}\n        		</div>\n        		<div>\n        			Conhece exame em casa: {{animal_car.frequencia_exame_em_casa}}\n        		</div>\n        	</ion-item>\n\n        	<ion-item>\n      			<button ion-button color="lassie_default" (click)="excluirDados()">Deletar</button>\n    		</ion-item>\n\n		</ion-list>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/edit-animal/edit-animal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], EditAnimalPage);

//# sourceMappingURL=edit-animal.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProprietarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proprietario_proprietario_entidade_class__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditProprietarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProprietarioPage = (function () {
    function EditProprietarioPage(navCtrl, navParams, fire, viewCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.proprietario = {};
        this.animal = this.navParams.get('animal');
        this.id_proprietario = this.animal.id_proprietario;
        this.ref = this.fire.object('/Proprietario/' + this.id_proprietario);
        this.ref.subscribe(function (snapshot) {
            _this.proprietario_car = new __WEBPACK_IMPORTED_MODULE_3__proprietario_proprietario_entidade_class__["a" /* ProprietarioEntidade */]();
            var p = _this.proprietario_car;
            p.auto_contato = snapshot.auto_contato;
            p.nome = snapshot.nome;
            p.sobrenome = snapshot.sobrenome;
            p.genero = snapshot.genero;
            p.data_de_nascimento = snapshot.data_de_nascimento;
            p.telefone_1 = snapshot.telefone_1;
            p.telefone_2 = snapshot.telefone_2;
            p.email = snapshot.email;
            p.estado_civil = snapshot.estado_civil;
            p.rua = snapshot.rua;
            p.cep = snapshot.cep;
            p.numero = snapshot.numero;
            p.complemento = snapshot.complemento;
            p.bairro = snapshot.bairro;
            p.cidade = snapshot.cidade;
            p.estado = snapshot.estado;
            p.pais = snapshot.pais;
        });
    }
    EditProprietarioPage.prototype.salvarDados = function () {
        this.ref.update(this.proprietario);
    };
    EditProprietarioPage.prototype.fechar = function () {
        this.viewCtrl.dismiss();
    };
    return EditProprietarioPage;
}());
EditProprietarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-proprietario',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/edit-proprietario/edit-proprietario.html"*/'<ion-header>\n\n  <ion-navbar color="lassie_default">\n    \n    <button ion-button color="lassie_default" icon-only (click)="fechar()">\n        <ion-icon name="close"></ion-icon>\n    </button>\n\n    <ion-title>Editar Proprietario</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="proprietario_update" color="lassie_default">\n      <ion-segment-button value="display">\n        <ion-icon name="clipboard"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="update">\n        <ion-icon name="cloud-upload"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div [ngSwitch]="proprietario_update">\n		<ion-list *ngSwitchCase="\'update\'">\n\n		<ion-item>\n          <ion-label>Autoriza Contato?</ion-label>\n          <ion-toggle value="foo" checked="true" unchecked="false"[(ngModel)]="proprietario.auto_contato"></ion-toggle>\n      	</ion-item>\n\n		  <ion-item>\n      		<ion-label fixed>Nome:</ion-label>\n      		<ion-input type="text" [(ngModel)]="proprietario.nome"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Sobrenome:</ion-label>\n      		<ion-input type="text" [(ngModel)]="proprietario.sobrenome"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Gênero:</ion-label>\n      		<ion-select [(ngModel)]="proprietario.genero">\n      			<ion-option value="f">Feminino</ion-option>\n            	<ion-option value="m">Masculino</ion-option>\n            </ion-select>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Data de Nascimento:</ion-label>\n      		<ion-input type="date" [(ngModel)]="proprietario.data_de_nascimento"></ion-input>\n   		</ion-item>\n\n\n   		<ion-item>\n      		<ion-label fixed>Tel. 1:</ion-label>\n      		<ion-input type="number" [(ngModel)]="proprietario.telefone_1"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Tel. 2:</ion-label>\n      		<ion-input type="number" [(ngModel)]="proprietario.telefone_2"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Email:</ion-label>\n      		<ion-input type="text" [(ngModel)]="proprietario.email"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Estado Civil:</ion-label>\n      		<ion-select [(ngModel)]="proprietario.estado_civil">\n      		    <ion-option value="1">Solteiro</ion-option>\n            	<ion-option value="2">Casado</ion-option>\n            	<ion-option value="3">Viúvo</ion-option>\n            	<ion-option value="3">Divorciado</ion-option>\n            	<ion-option value="9">Sem Informação</ion-option>\n            </ion-select>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Rua:</ion-label>\n      		<ion-input type="text" [(ngModel)]="proprietario.rua"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>CEP:</ion-label>\n      		<ion-input type="number" [(ngModel)]="proprietario.cep"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Numero:</ion-label>\n      		<ion-input type="number" [(ngModel)]="proprietario.numero"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Complemento:</ion-label>\n      		<ion-input type="text" [(ngModel)]="proprietario.complemento"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Bairro:</ion-label>\n      		<ion-input type="text" [(ngModel)]="proprietario.bairro"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Cidade:</ion-label>\n      		<ion-input type="text" [(ngModel)]="proprietario.cidade"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>Estado:</ion-label>\n      		<ion-input type="text" [(ngModel)]="proprietario.estado"></ion-input>\n   		</ion-item>\n\n   		<ion-item>\n      		<ion-label fixed>País:</ion-label>\n      		<ion-input type="text" [(ngModel)]="proprietario.pais"></ion-input>\n   		</ion-item>\n\n     	<ion-item>\n      		<button ion-button color="lassie_default" (click)="salvarDados()">Atualizar</button>\n    	</ion-item>\n\n		</ion-list>\n\n		<ion-list *ngSwitchCase="\'display\'">\n			<ion-item *ngIf="proprietario_car"  >\n				<img src="assets/img/student.png">\n				Formulário Atual\n        <div>\n              Autoriza Contato?: {{proprietario_car.auto_contato}}\n        </div>\n\n				<div>\n        			Nome: {{proprietario_car.nome}} \n              {{proprietario_car.sobrenome}}\n        </div>\n              \n        <div>\n              Gênero: {{proprietario_car.genero}}\n        </div>\n        <div>\n              Data de Nascimento: {{proprietario_car.data_de_nascimento}}\n        </div>\n        <div>\n              Telefone(1): {{proprietario_car.telefone_1}}\n        </div>\n        <div>\n              Telefone(2): {{proprietario_car.telefone_2}}\n        </div>\n        <div>\n              Email: {{proprietario_car.email}}\n        </div>\n        <div>\n              Estado Civil: {{proprietario_car.estado_civil}}\n        </div>\n        <div>\n              Rua: {{proprietario_car.rua}}\n        </div>\n        <div>\n              CEP: {{proprietario_car.cep}}\n        </div>\n        <div>\n              Complemento: {{proprietario_car.complemento}}\n        </div>\n        <div>\n              Bairro: {{proprietario_car.bairro}}\n        </div>\n        <div>\n              Cidade: {{proprietario_car.cidade}}\n        </div>\n        <div>\n              Estado: {{proprietario_car.estado}}\n        </div>\n        <div>\n              Pais: {{proprietario_car.pais}}\n        </div>\n\n        	</ion-item>\n		</ion-list>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/edit-proprietario/edit-proprietario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], EditProprietarioPage);

//# sourceMappingURL=edit-proprietario.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voluntario_voluntario_entidade_class__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroPage = (function () {
    function CadastroPage(navCtrl, navParams, fire, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.toastCtrl = toastCtrl;
        this.voluntario = {};
        this.voluntarioLista = this.fire.list('/Voluntario');
        this.voluntario = new __WEBPACK_IMPORTED_MODULE_3__voluntario_voluntario_entidade_class__["a" /* VoluntarioEntidade */]();
    }
    CadastroPage.prototype.cadastrarVoluntario = function () {
        var _this = this;
        this.voluntarioLista.push(this.voluntario).then(function () {
            _this.voluntario = new __WEBPACK_IMPORTED_MODULE_3__voluntario_voluntario_entidade_class__["a" /* VoluntarioEntidade */]();
        });
        this.presentToast('Solicitação de Cadastro enviada com Sucesso!');
        this.navCtrl.pop();
    };
    CadastroPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    CadastroPage.prototype.presentToast = function (message) {
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
    return CadastroPage;
}());
CadastroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cadastro',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/cadastro/cadastro.html"*/'<!--\n  Generated template for the CadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-title>Cadastro Voluntário</ion-title>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n		<ion-item>\n      		<ion-label fixed>Nome:</ion-label>\n      		<ion-input type="text" [(ngModel)]="voluntario.nome"></ion-input>\n    	</ion-item>\n\n		<ion-item>\n      		<ion-label fixed>Sobrenome:</ion-label>\n      		<ion-input type="text" [(ngModel)]="voluntario.sobrenome"></ion-input>\n    	</ion-item>\n\n		<ion-item>\n      		<ion-label fixed>CRMV(Opcional):</ion-label>\n      		<ion-input type="text" [(ngModel)]="voluntario.crmv"></ion-input>\n    	</ion-item>\n\n		<ion-item>\n      		<ion-label fixed>CPF:</ion-label>\n      		<ion-input type="text" [(ngModel)]="voluntario.cpf"></ion-input>\n    	</ion-item>\n\n		<ion-item>\n      		<ion-label fixed>Telefone(1):</ion-label>\n      		<ion-input type="text" [(ngModel)]="voluntario.telefone_1"></ion-input>\n    	</ion-item>\n\n    	<ion-item>\n      		<ion-label fixed>Telefone(2):</ion-label>\n      		<ion-input type="text" [(ngModel)]="voluntario.telefone_2"></ion-input>\n    	</ion-item>\n    </ion-list>\n\n    <button ion-button color="lassie_default" (click)="cadastrarVoluntario()">Cadastrar</button>\n\n    <button ion-button color="lassie_default" (click)="cancelar()">Cancelar</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/cadastro/cadastro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], CadastroPage);

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoluntarioEntidade; });
var VoluntarioEntidade = (function () {
    function VoluntarioEntidade() {
    }
    return VoluntarioEntidade;
}());

//# sourceMappingURL=voluntario-entidade.class.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__campanha_form_campanha_form__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__campanha_select_campanha_select__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MasterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MasterPage = (function () {
    function MasterPage(navCtrl, navParams, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
    }
    MasterPage.prototype.abrirCampanhaForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__campanha_form_campanha_form__["a" /* CampanhaFormPage */]);
    };
    MasterPage.prototype.abrirCampanhaSelect = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__campanha_select_campanha_select__["a" /* CampanhaSelectPage */]);
    };
    return MasterPage;
}());
MasterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-master',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/master/master.html"*/'<!--\n  Generated template for the MasterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>master</ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-background-page">\n\n <ion-card>\n    <img src="assets/img/card-back-01.jpg"/>\n    <div class="card-title">Campanha Ativa</div>\n    <div class="card-subtitle">Outubro Rosa PET</div>\n  </ion-card>\n\n\n  <button color=lassie_default ion-button full (click)="abrirCampanhaForm()">\n    <ion-icon name="star"></ion-icon>\n    Adicionar Campanha\n  </button>\n\n  <button color=lassie_default ion-button full (click)="abrirCampanhaSelect()">\n    <ion-icon name="star"></ion-icon>\n    Editar Campanha \n  </button>\n\n  <button color=lassie_default ion-button full>\n    <ion-icon name="star"></ion-icon>\n    Autorizar Organizador \n  </button>\n\n   <button color=lassie_default ion-button full>\n    <ion-icon name="star"></ion-icon>\n    Editar Organizador \n  </button>\n\n  <button color=lassie_default ion-button full>\n    <ion-icon name="star"></ion-icon>\n    Dados Campanha \n  </button>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/master/master.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], MasterPage);

//# sourceMappingURL=master.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampanhaFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__campanha_form_campanha_entidade_class__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CampanhaFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CampanhaFormPage = (function () {
    function CampanhaFormPage(navCtrl, navParams, fireDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireDB = fireDB;
        this.campanha = {};
        this.campanhaLista = this.fireDB.list('/Campanha');
        this.campanha = new __WEBPACK_IMPORTED_MODULE_3__campanha_form_campanha_entidade_class__["a" /* CampanhaEntidade */]();
    }
    CampanhaFormPage.prototype.cadastrarCampanha = function () {
        var _this = this;
        this.campanhaLista.push(this.campanha).then(function () {
            _this.campanha = new __WEBPACK_IMPORTED_MODULE_3__campanha_form_campanha_entidade_class__["a" /* CampanhaEntidade */]();
        });
    };
    return CampanhaFormPage;
}());
CampanhaFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-campanha-form',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/campanha-form/campanha-form.html"*/'<!--\n  Generated template for the CampanhaFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>campanha_form</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n <ion-list>\n    <ion-item>\n      <ion-label fixed>Nome:</ion-label>\n      <ion-input type="text" [(ngModel)]="campanha.nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Ano:</ion-label>\n      <ion-input type="text" [(ngModel)]="campanha.ano"></ion-input>\n    </ion-item>\n      <ion-item>\n       <ion-label>Pais</ion-label>\n        <ion-select [(ngModel)]="campanha.pais" multiple="true">\n          <ion-option value="Brasil" >Brasil</ion-option>\n          <ion-option value="Outro">Outro</ion-option>\n        </ion-select>\n     </ion-item>\n    <ion-item>\n      <button ion-button color="lassie_default" (click)="cadastrarCampanha()">Cadastrar</button>\n    </ion-item>\n </ion-list>    \n\n</ion-content>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/campanha-form/campanha-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], CampanhaFormPage);

//# sourceMappingURL=campanha-form.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampanhaEntidade; });
var CampanhaEntidade = (function () {
    function CampanhaEntidade() {
    }
    return CampanhaEntidade;
}());

//# sourceMappingURL=campanha-entidade.class.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampanhaSelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__campanha_form_campanha_entidade_class__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__campanha_edit_campanha_edit__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CampanhaSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CampanhaSelectPage = (function () {
    function CampanhaSelectPage(navCtrl, navParams, fireDB, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireDB = fireDB;
        this.modal = modal;
        this.campanha = {};
        this.campanhaLista = this.fireDB.list('/Campanha');
        this.campanha = new __WEBPACK_IMPORTED_MODULE_3__campanha_form_campanha_entidade_class__["a" /* CampanhaEntidade */]();
    }
    CampanhaSelectPage.prototype.editarCampanha = function (id) {
        this.modal.create(__WEBPACK_IMPORTED_MODULE_4__campanha_edit_campanha_edit__["a" /* CampanhaEditPage */], { id: id }).present();
    };
    return CampanhaSelectPage;
}());
CampanhaSelectPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-campanha-select',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/campanha-select/campanha-select.html"*/'<!--\n  Generated template for the CampanhaSelectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>CampanhaSelect</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n <ion-list>\n    <ion-item *ngFor="let campanha of campanhaLista | async" (click)="editarCampanha(campanha.$key)">\n      <h2>{{campanha.nome}}</h2>\n      <h3>{{campanha.ano}}</h3>\n    </ion-item>\n </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/campanha-select/campanha-select.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], CampanhaSelectPage);

//# sourceMappingURL=campanha-select.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampanhaEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CampanhaEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CampanhaEditPage = (function () {
    function CampanhaEditPage(navCtrl, navParams, fireDB, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireDB = fireDB;
        this.viewCtrl = viewCtrl;
        this.campanha = {};
        this.id = this.navParams.get('id');
        this.campanhaRef = this.fireDB.object('/Campanha/' + this.id);
    }
    CampanhaEditPage.prototype.salvarCampanha = function () {
        var _this = this;
        this.campanhaRef.update(this.campanha).then(function () {
            _this.viewCtrl.dismiss();
        });
    };
    CampanhaEditPage.prototype.removerCampanha = function () {
        this.campanhaRef.remove();
        this.viewCtrl.dismiss();
    };
    CampanhaEditPage.prototype.fecharCampanhaEdit = function () {
        this.viewCtrl.dismiss();
    };
    return CampanhaEditPage;
}());
CampanhaEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-campanha-edit',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/campanha-edit/campanha-edit.html"*/'<!--\n  Generated template for the CampanhaEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Editar Campanha</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="fecharCampanhaEdit()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="campanha.nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Ano</ion-label>\n      <ion-input type="text" [(ngModel)]="campanha.ano"></ion-input>\n    </ion-item>\n    <ion-item>\n    <ion-label>Pais</ion-label>\n    <ion-select [(ngModel)]="campanha.pais" multiple="true">\n      <ion-option value="Brasil" >Brasil</ion-option>\n      <ion-option value="Outro">Outro</ion-option>\n    </ion-select>\n  </ion-item>\n\n    <ion-item>\n      <button ion-button (click)="salvarCampanha()">Salvar</button>\n    </ion-item>\n\n     <ion-item>\n      <button ion-button (click)="removerCampanha()">Deletar</button>\n    </ion-item>\n\n </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/campanha-edit/campanha-edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], CampanhaEditPage);

//# sourceMappingURL=campanha-edit.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(alertCtrl, fire, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statusVoluntario = false;
        this.statusOrganizador = false;
    }
    RegisterPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    RegisterPage.prototype.redirectToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.cadastraUsuario = function () {
        var _this = this;
        if (this.senha.value == this.confirmar_senha.value) {
            this.fire.auth.createUserWithEmailAndPassword(this.nome.value, this.senha.value)
                .then(function (data) {
                console.log('dados cadastrados', data);
                _this.alert('Cadastro Completado. Faça Login!');
                _this.navCtrl.pop();
            })
                .catch(function (error) {
                console.log('ocorreu um erro', error);
                _this.alert(error.message);
            });
            console.log("Dados de cadastro:", this.nome.value, this.senha.value);
        }
        else {
            this.alert('Senha e Confirmação de Senha não estão iguais. Verifique autenticação');
        }
    };
    return RegisterPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('username'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "nome", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "senha", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('confirm_password'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "confirmar_senha", void 0);
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n    <div class="cadastro-wrap">\n        <ion-img class="icone-outubrorosa" src="assets/img/logo2.png"></ion-img>\n        <h1>PetCan</h1>\n\n        <ion-list>\n            <ion-item class="user">\n                <ion-input type="email" #username placeholder="E-mail" ></ion-input>\n            </ion-item>\n\n            <ion-item class="password">\n                <ion-input type="password" #password placeholder="Senha" ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" #confirm_password placeholder="Confirme sua senha" ></ion-input>\n            </ion-item>\n            <p>Já possui conta? &ensp;<span (click)="redirectToLogin()">Clique Aqui</span></p>\n        </ion-list>\n\n        <div padding>\n              <button  block color="lassie_default" ion-button class="botao-cadastro"  (click)="cadastraUsuario()">Cadastrar</button>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoluntarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__voluntario_voluntario_entidade_class__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the VoluntarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VoluntarioPage = (function () {
    function VoluntarioPage(navCtrl, navParams, fire) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.voluntarioLista = this.fire.list('/Voluntario');
        this.voluntario = new __WEBPACK_IMPORTED_MODULE_3__voluntario_voluntario_entidade_class__["a" /* VoluntarioEntidade */]();
    }
    return VoluntarioPage;
}());
VoluntarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-voluntario',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/voluntario/voluntario.html"*/'<ion-header>\n  <ion-navbar color ="lassie_default">\n       <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>PetCan</ion-title>\n      <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>  \n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 align=center>Voluntários</h3>\n\n  	<ion-list>\n    <ion-item *ngFor="let voluntario of voluntarioLista | async" >\n      <img src="assets/img/doctor.png">\n      <h2>\n        NOME: {{voluntario.nome}} \n        {{voluntario.sobrenome}} \n      </h2>\n      <h3>\n        CPF: {{voluntario.cpf}}\n        <div>\n        	CRMV: {{voluntario.crmv}}\n    	</div>\n    	<div>\n        	Telefone: {{voluntario.telefone_1}}\n    	</div>\n    	<div>\n        	Telefone Alternativo: {{voluntario.telefone_2}}\n    	</div>\n      </h3>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/voluntario/voluntario.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], VoluntarioPage);

//# sourceMappingURL=voluntario.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizadorFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OrganizadorFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrganizadorFormPage = (function () {
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
    return OrganizadorFormPage;
}());
OrganizadorFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-organizador-form',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/organizador-form/organizador-form.html"*/'<!--\n  Generated template for the OrganizadorFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Organizador Formulário</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="organizador.nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <button ion-button (click)="adicionaOrganizador(organizador)">Cadastrar</button>\n    </ion-item>    \n </ion-list>\n\n  <ion-list>\n    ...\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/organizador-form/organizador-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], OrganizadorFormPage);

//# sourceMappingURL=organizador-form.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOrganizadorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EditOrganizadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditOrganizadorPage = (function () {
    function EditOrganizadorPage(navCtrl, navParams, fireDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fireDB = fireDB;
        this.organizador = {};
        //Captura o ID como um parametro
        this.id = this.navParams.get('id');
        this.organizadorRef$ = this.fireDB.object('/Organizador/' + this.id);
        this.organizadorRef$.subscribe(function (organizador) { return _this.organizador = organizador; });
    }
    EditOrganizadorPage.prototype.editarOrganizador = function (organizador) {
        this.organizadorRef$.update(organizador);
    };
    return EditOrganizadorPage;
}());
EditOrganizadorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-organizador',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/edit-organizador/edit-organizador.html"*/'<!--\n  Generated template for the EditOrganizadorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>EditOrganizador</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n	<ion-list>\n		<ion-item>\n    		<ion-input type="text" [(ngModel)]="organizador.ID"></ion-input>\n  		</ion-item>\n\n  		<ion-item>\n    		<ion-input type="text" [(ngModel)]="organizador.nome"></ion-input>\n  		</ion-item>\n\n  		<ion-item>\n    		<ion-input type="text" [(ngModel)]="organizador.sobrenome"></ion-input>\n  		</ion-item>\n\n	</ion-list>\n\n	<button ion-button color="light" round (click)="editarOrganizador(organizador)">Confirmar</button>\n	<button ion-button color="light" round>Cancelar</button>\n\n</ion-content>'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/edit-organizador/edit-organizador.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
], EditOrganizadorPage);

//# sourceMappingURL=edit-organizador.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(251);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_master_master__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_campanha_form_campanha_form__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_campanha_edit_campanha_edit__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_campanha_select_campanha_select__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_register__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_front_front__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_form_form__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cadastro_cadastro__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_organizador_principal_organizador_principal__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_organizador_form_organizador_form__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_edit_organizador_edit_organizador__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_voluntario_voluntario__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_animal_animal__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_edit_animal_edit_animal__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_proprietario_proprietario__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_edit_proprietario_edit_proprietario__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_tumor_tumor__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_edit_tumor_edit_tumor__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_evento_evento__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__app_firebase_config__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_master_master__["a" /* MasterPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_campanha_form_campanha_form__["a" /* CampanhaFormPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_campanha_edit_campanha_edit__["a" /* CampanhaEditPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_campanha_select_campanha_select__["a" /* CampanhaSelectPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_front_front__["a" /* FrontPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_form_form__["a" /* FormPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_evento_evento__["a" /* EventoPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_cadastro_cadastro__["a" /* CadastroPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_organizador_principal_organizador_principal__["a" /* OrganizadorPrincipalPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_organizador_form_organizador_form__["a" /* OrganizadorFormPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_edit_organizador_edit_organizador__["a" /* EditOrganizadorPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_voluntario_voluntario__["a" /* VoluntarioPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_animal_animal__["a" /* AnimalPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_proprietario_proprietario__["a" /* ProprietarioPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_tumor_tumor__["a" /* TumorPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_edit_animal_edit_animal__["a" /* EditAnimalPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_edit_proprietario_edit_proprietario__["a" /* EditProprietarioPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_edit_tumor_edit_tumor__["a" /* EditTumorPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_32__app_firebase_config__["a" /* fireBaseConfig */]),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_master_master__["a" /* MasterPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_campanha_form_campanha_form__["a" /* CampanhaFormPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_campanha_edit_campanha_edit__["a" /* CampanhaEditPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_campanha_select_campanha_select__["a" /* CampanhaSelectPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_front_front__["a" /* FrontPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_form_form__["a" /* FormPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_evento_evento__["a" /* EventoPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_cadastro_cadastro__["a" /* CadastroPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_organizador_principal_organizador_principal__["a" /* OrganizadorPrincipalPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_organizador_form_organizador_form__["a" /* OrganizadorFormPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_edit_organizador_edit_organizador__["a" /* EditOrganizadorPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_voluntario_voluntario__["a" /* VoluntarioPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_animal_animal__["a" /* AnimalPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_proprietario_proprietario__["a" /* ProprietarioPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_tumor_tumor__["a" /* TumorPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_edit_animal_edit_animal__["a" /* EditAnimalPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_edit_proprietario_edit_proprietario__["a" /* EditProprietarioPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_edit_tumor_edit_tumor__["a" /* EditTumorPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_voluntario_voluntario__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { nomePage: 'Home', estruturaPage: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { nomePage: 'Perfil', estruturaPage: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { nomePage: 'Eventos', estruturaPage: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { nomePage: 'Voluntários', estruturaPage: __WEBPACK_IMPORTED_MODULE_6__pages_voluntario_voluntario__["a" /* VoluntarioPage */] },
            { nomePage: 'Configurações', estruturaPage: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.goToPage = function (page) {
        this.nav.push(page.estruturaPage);
        this.nav.setRoot(page.estruturaPage);
    };
    MyApp.prototype.logOut = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/mulan/outubrorosa/src/app/app.html"*/'<ion-menu side = "left" [content]="content">\n	<ion-header>\n		<ion-toolbar color = "lassie_default">\n			<ion-title>\n				Menu\n			</ion-title>\n		</ion-toolbar>\n\n\n		<ion-list>\n	      <button menuClose ion-item *ngFor="let p of pages" (click)="goToPage(p)">\n	        {{p.nomePage}}\n	      </button>\n          <button menuClose ion-item (click)="logOut()">Sair</button>\n	    </ion-list>\n	</ion-header>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content ></ion-nav>'/*ion-inline-end:"/home/mulan/outubrorosa/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalEntidade; });
var AnimalEntidade = (function () {
    function AnimalEntidade() {
    }
    return AnimalEntidade;
}());

//# sourceMappingURL=animal-entidade.class.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProprietarioEntidade; });
var ProprietarioEntidade = (function () {
    function ProprietarioEntidade() {
    }
    return ProprietarioEntidade;
}());

//# sourceMappingURL=proprietario-entidade.class.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proprietario_proprietario__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FormPage = (function () {
    function FormPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FormPage.prototype.abrirProprietarioForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__proprietario_proprietario__["a" /* ProprietarioPage */]);
    };
    return FormPage;
}());
FormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-form',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/form/form.html"*/'<!--\n  Generated template for the FormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Formulário</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item>\n     <img src="assets/img/478.jpg">\n  </ion-item>\n\n  <ion-item>\n      <ion-label>Autoriza o Contato?</ion-label>\n      <ion-toggle color="danger"></ion-toggle>\n  </ion-item>\n\n  <button block ion-button color="lassie_default" \n  (click)="abrirProprietarioForm()"> Proxímo>> </button>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/form/form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], FormPage);

//# sourceMappingURL=form.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizadorPrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organizador_form_organizador_form__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_organizador_edit_organizador__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the OrganizadorPrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrganizadorPrincipalPage = (function () {
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
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_organizador_edit_organizador__["a" /* EditOrganizadorPage */], {
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__organizador_form_organizador_form__["a" /* OrganizadorFormPage */]);
        }
    };
    return OrganizadorPrincipalPage;
}());
OrganizadorPrincipalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-organizador-principal',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/organizador-principal/organizador-principal.html"*/'<!--\n  Generated template for the OrganizadorPrincipalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ORGANIZADOR PRINCIPAL</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-list>\n<button ion-button icon-left (click)="redirectTo(1)">\n  <ion-icon name="home" ></ion-icon>\n  Inserir Organizador\n</button>\n\n<ion-item *ngFor="let item of organizadorRef$ | async" (click)="menuOrganizador(item)">\n	<h2>nome: {{item.nome}}</h2>\n	<h3>sobrenome: {{item.sobrenome}}</h3>\n</ion-item>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/organizador-principal/organizador-principal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], OrganizadorPrincipalPage);

//# sourceMappingURL=organizador-principal.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTumorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tumor_tumor_entidade_class__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EditTumorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditTumorPage = (function () {
    function EditTumorPage(navCtrl, navParams, fire, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.viewCtrl = viewCtrl;
        this.tumor = {};
        this.id_animal = this.navParams.get('id');
        this.refList$ = this.fire.list('/Tumor', { preserveSnapshot: true });
        this.tumor_car = new __WEBPACK_IMPORTED_MODULE_3__tumor_tumor_entidade_class__["a" /* TumorEntidade */]();
        this.refList$.subscribe(function (snapshot) {
            snapshot.forEach(function (snapshot) {
                if (_this.id_animal == snapshot.id_animal) {
                    _this.ref = snapshot;
                    _this.ref.subscribe(function (data) {
                        console.log(data.id_animal);
                        var t = _this.tumor_car;
                        t.local = data.local;
                        t.tamanho = data.tamanho;
                    });
                }
            });
        });
        console.log(this.id_tumor);
    }
    EditTumorPage.prototype.salvarDados = function () {
        var _this = this;
        this.ref.update(this.tumor).then(function () {
            _this.viewCtrl.dismiss();
        });
    };
    EditTumorPage.prototype.fechar = function () {
        this.viewCtrl.dismiss();
    };
    return EditTumorPage;
}());
EditTumorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-tumor',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/edit-tumor/edit-tumor.html"*/'\n<ion-header>\n\n<ion-navbar color="lassie_default">\n    \n    <button ion-button color="lassie_default" icon-only (click)="fechar()">\n        <ion-icon name="close"></ion-icon>\n    </button>\n\n    <ion-title>Editar Dados Tumor</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="tumor_update" color="lassie_default">\n      <ion-segment-button value="display">\n        <ion-icon name="clipboard"></ion-icon>\n      </ion-segment-button>\n      <ion-segment-button value="update">\n        <ion-icon name="cloud-upload"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div [ngSwitch]="tumor_update">\n		<ion-list *ngSwitchCase="\'update\'">\n		      <ion-item>\n        		<ion-label fixed>Local:</ion-label>\n       			<ion-input type="text" [(ngModel)]="tumor.local"></ion-input>\n  			   </ion-item>\n\n			  <ion-item>\n			        <ion-label fixed>Tamanho:</ion-label>\n			        <ion-input type="number" [(ngModel)]="tumor.tamanho"></ion-input>\n			  </ion-item>\n\n			  <ion-item>\n			    <ion-label fixed>Lateralidade:</ion-label>\n			      <ion-select [(ngModel)]="tumor.lateralidade">\n			          <ion-option value="1">Direita</ion-option>\n			          <ion-option value="2">Esquerda</ion-option>\n			          <ion-option value="3">Bilateral</ion-option>\n			          <ion-option value="9">Sem Informação</ion-option>\n			      </ion-select>\n			  </ion-item>\n\n			  <ion-item>\n			        <ion-label fixed>Tempo de Evolução:</ion-label>\n			        <ion-input type="number" [(ngModel)]="tumor.tempo_evolucao"></ion-input>\n			  </ion-item>\n\n			  <ion-item>\n			    <ion-label fixed>Em Tratamento:</ion-label>\n			      <ion-select [(ngModel)]="tumor.em_tratamento">\n			          <ion-option value="1">Sim</ion-option>\n			          <ion-option value="2">Não</ion-option>\n			          <ion-option value="9">Sem Informação</ion-option>\n			      </ion-select>\n			  </ion-item>\n\n			  <ion-item>\n			    <ion-label fixed>Conhecimento Prévio:</ion-label>\n			      <ion-select [(ngModel)]="tumor.conhecimento_previo">\n			          <ion-option value="1">Sim</ion-option>\n			          <ion-option value="2">Não</ion-option>\n			          <ion-option value="9">Sem Informação</ion-option>\n			      </ion-select>\n			  </ion-item>\n\n			  <ion-item>\n			        <ion-label fixed>Observações:</ion-label>\n			        <ion-textarea type="text" [(ngModel)]="tumor.observacoes"></ion-textarea>>\n			  </ion-item>\n\n				<ion-item>\n      				<button ion-button color="lassie_default" (click)="salvarDados()">Atualizar</button>\n    			</ion-item>\n\n			</ion-list>\n\n			<ion-list *ngSwitchCase="\'display\'">\n			<ion-item *ngIf="tumor_car"  >\n				<img src="assets/img/dog.png">\n				<div>\n              		Local: {{tumor_car.local}}\n        		</div>\n			</ion-item>\n		</ion-list>\n\n		</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/edit-tumor/edit-tumor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], EditTumorPage);

//# sourceMappingURL=edit-tumor.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TumorEntidade; });
var TumorEntidade = (function () {
    function TumorEntidade() {
    }
    return TumorEntidade;
}());

//# sourceMappingURL=tumor-entidade.class.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventoPage = (function () {
    function EventoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return EventoPage;
}());
EventoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-evento',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/evento/evento.html"*/'<ion-header>\n\n  <ion-card>\n\n    <img src="assets/img/home-1.jpg">\n    <ion-fab right top>\n    </ion-fab>\n\n    <ion-item>\n      <ion-icon name="paw" item-start large></ion-icon>\n      <h2>Evento - Atual</h2>\n      <p>Avenida Ibirapuera, São Paulo, 5738</p>\n    </ion-item>\n\n  </ion-card>\n\n  <button block ion-button color="lassie_default" \n  (click)="listarEventos()">Participar de Evento</button>\n  \n</ion-header>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/evento/evento.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], EventoPage);

//# sourceMappingURL=evento.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fireBaseConfig; });
var fireBaseConfig = {
    apiKey: "AIzaSyCdbzjpS7W7WtrJdbDqSTZ96SYPkcZ7B1Y",
    authDomain: "outubro-rosa-lassie.firebaseapp.com",
    databaseURL: "https://outubro-rosa-lassie.firebaseio.com",
    projectId: "outubro-rosa-lassie",
    storageBucket: "outubro-rosa-lassie.appspot.com",
    messagingSenderId: "888605016311"
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__front_front__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__master_master__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(alertCtrl, fire, navCtrl, navParams, facebook, platform) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.facebook = facebook;
        this.platform = platform;
    }
    LoginPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Atenção',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.signIn = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.nome.value, this.senha.value)
            .then(function (data) {
            console.log('Dados do Usuário', _this.fire.auth.currentUser);
            if (_this.nome.value == "master@or.com.br" && _this.senha.value == "pepino") {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__master_master__["a" /* MasterPage */]);
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__front_front__["a" /* FrontPage */]);
            }
            _this.alert('Você está logado!');
        })
            .catch(function (error) {
            console.log('Ocorreu um erro', error);
            _this.alert(error.message);
        });
        console.log("Logar com:", this.nome.value, this.senha.value);
    };
    LoginPage.prototype.loginFacebook = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            return this.facebook.login(['email', 'public_profile']).then(function (res) {
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__front_front__["a" /* FrontPage */]);
                return __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"]().signInWithCredential(facebookCredential);
            }).catch(function (error) {
                console.log('Ocorreu um erro', error);
                _this.alert(error.message);
            });
        }
        else {
            return this.fire.auth
                .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"].FacebookAuthProvider())
                .then(function (res) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__front_front__["a" /* FrontPage */]);
                console.log(res);
            }).catch(function (error) {
                console.log('Ocorreu um erro', error);
                _this.alert(error.message);
            });
        }
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('username'),
    __metadata("design:type", Object)
], LoginPage.prototype, "nome", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], LoginPage.prototype, "senha", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/mulan/outubrorosa/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n    <div class="login-wrap">\n        <ion-img class="icone-outubrorosa" src="assets/img/logo2.png"></ion-img>\n        <h1>PetCan</h1>\n\n        <ion-list>\n            <ion-item class="user">\n                <ion-input type="text" #username placeholder="Login" ></ion-input>\n            </ion-item>\n\n            <ion-item class="password">\n                <ion-input type="password" #password placeholder="Senha" ></ion-input>\n            </ion-item>\n            <p>Ainda não possui conta?</p> <p><span (click)="goToRegister()">Clique Aqui</span></p>\n        </ion-list>\n\n        <div padding>\n            <button block color="lassie_default" class="entrar" ion-button round (click)="signIn()">Entrar</button>\n        </div>\n\n        <div padding>\n            <button block ion-button class="facebook-login" (click)="loginFacebook()"></button>\n            <button block ion-button class="google-login"></button>\n        </div>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/mulan/outubrorosa/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[234]);
//# sourceMappingURL=main.js.map