import { MainPage } from './../pages/main/main';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TasksPage } from '../pages/tasks/tasks';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  sideMenu: string = 'Menu';
  
  pages: Array<{title: string, component: any}>

  constructor(private platform: Platform,private statusBar: StatusBar,private splashScreen: SplashScreen, public menu: MenuController) {
    this.initializeApp();

    this.pages = [
      {title: "Events", component: MainPage},
      {title: "Tasks", component: TasksPage}
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.push(page.component);
  }

}

