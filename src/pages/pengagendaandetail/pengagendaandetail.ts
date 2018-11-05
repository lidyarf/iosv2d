import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PengagendaaninfoPage } from '../pengagendaaninfo/pengagendaaninfo';
import { PengagendaanverifikasiPage } from '../pengagendaanverifikasi/pengagendaanverifikasi';

@IonicPage()
@Component({
  selector: 'page-pengagendaandetail',
  templateUrl: 'pengagendaandetail.html',
})
export class PengagendaandetailPage {
  tab1=PengagendaaninfoPage;
  tab2=PengagendaanverifikasiPage;

  idagenda:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idagenda = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PengagendaandetailPage');
  }

}
