import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { UserPage } from '../pages/user/user';
import { NativeStorage } from 'ionic-native';
import { Nav } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  @ViewChild(Nav) nav:Nav;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
     let env = this;
     NativeStorage.getItem('user')
    .then( function (data) {
        // user is previously logged and we have his data
        // we will let him access the app
        env.nav.setRoot(UserPage);
       
      }, function (error) {
        //we don't have the user data so we will ask him to log in
        env.nav.setRoot(HomePage);
      
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
