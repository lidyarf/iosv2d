import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisposisidispPage } from '../disposisidisp/disposisidisp';
import { AsaldispPage } from '../asaldisp/asaldisp';
import { TrackingdispPage } from '../trackingdisp/trackingdisp';
import { StatusdispPage } from '../statusdisp/statusdisp';

@IonicPage()
@Component({
  selector: 'page-suratdisposisidetail',
  templateUrl: 'suratdisposisidetail.html',
})
export class SuratdisposisidetailPage {

  tab1=DisposisidispPage;
  tab2=AsaldispPage;
  tab3=TrackingdispPage;
  tab4=StatusdispPage;

  iddisp:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.iddisp = this.navParams.get('item');
    console.log(this.iddisp);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuratdisposisidetailPage');
  }

}
