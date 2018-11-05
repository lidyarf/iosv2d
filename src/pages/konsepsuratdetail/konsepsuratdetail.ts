import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KonsepinfoPage } from '../konsepinfo/konsepinfo';
import { KonsepcatatanPage } from '../konsepcatatan/konsepcatatan';

@IonicPage()
@Component({
  selector: 'page-konsepsuratdetail',
  templateUrl: 'konsepsuratdetail.html',
})
export class KonsepsuratdetailPage {
  tab1=KonsepinfoPage;
  tab2=KonsepcatatanPage;

  idkonsep:any;
  ver:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idkonsep = this.navParams.get('item');
    console.log(this.idkonsep);
    this.ver = this.idkonsep.verifikasi;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KonsepsuratdetailPage');
  }

}
