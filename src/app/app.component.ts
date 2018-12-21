import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { VoluntarioPage } from '../pages/voluntario/voluntario';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = LoginPage;

  @ViewChild(Nav) nav: Nav;
  pages: Array<{nomePage: string, estruturaPage: any}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { nomePage: 'Home', estruturaPage: HomePage },
      { nomePage: 'Perfil', estruturaPage: HomePage},
      { nomePage: 'Eventos', estruturaPage: HomePage},
      { nomePage: 'Voluntários', estruturaPage: VoluntarioPage},
      { nomePage: 'Configurações', estruturaPage: HomePage}
    ];

  }

  goToPage(page){
    this.nav.push(page.estruturaPage);
    this.nav.setRoot(page.estruturaPage);
  }

  logOut(){
    this.nav.setRoot(LoginPage);
  }

}

