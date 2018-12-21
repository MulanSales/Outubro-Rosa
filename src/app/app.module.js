var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Camera } from '@ionic-native/camera';
import { Facebook } from '@ionic-native/facebook';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MasterPage } from '../pages/master/master';
import { CampanhaFormPage } from '../pages/campanha-form/campanha-form';
import { CampanhaEditPage } from '../pages/campanha-edit/campanha-edit';
import { CampanhaSelectPage } from '../pages/campanha-select/campanha-select';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { FrontPage } from '../pages/front/front';
import { FormPage } from '../pages/form/form';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { OrganizadorPrincipalPage } from '../pages/organizador-principal/organizador-principal';
import { OrganizadorFormPage } from '../pages/organizador-form/organizador-form';
import { EditOrganizadorPage } from '../pages/edit-organizador/edit-organizador';
import { VoluntarioPage } from '../pages/voluntario/voluntario';
import { AnimalPage } from '../pages/animal/animal';
import { EditAnimalPage } from '../pages/edit-animal/edit-animal';
import { ProprietarioPage } from '../pages/proprietario/proprietario';
import { TumorPage } from '../pages/tumor/tumor';
import { EventoPage } from '../pages/evento/evento';
import { fireBaseConfig } from '../app/firebase.config';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                MasterPage,
                CampanhaFormPage,
                CampanhaEditPage,
                CampanhaSelectPage,
                LoginPage,
                RegisterPage,
                FrontPage,
                FormPage,
                EventoPage,
                CadastroPage,
                OrganizadorPrincipalPage,
                OrganizadorFormPage,
                EditOrganizadorPage,
                VoluntarioPage,
                AnimalPage,
                ProprietarioPage,
                TumorPage,
                EditAnimalPage
            ],
            imports: [
                BrowserModule,
                IonicModule.forRoot(MyApp),
                AngularFireModule.initializeApp(fireBaseConfig),
                AngularFireDatabaseModule,
                AngularFireAuthModule
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                MasterPage,
                CampanhaFormPage,
                CampanhaEditPage,
                CampanhaSelectPage,
                LoginPage,
                RegisterPage,
                FrontPage,
                FormPage,
                EventoPage,
                CadastroPage,
                OrganizadorPrincipalPage,
                OrganizadorFormPage,
                EditOrganizadorPage,
                AnimalPage,
                ProprietarioPage,
                TumorPage,
                EditAnimalPage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                Camera,
                Facebook,
                { provide: ErrorHandler, useClass: IonicErrorHandler }
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map