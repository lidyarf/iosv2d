import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisposisiasliPage } from '../disposisiasli/disposisiasli';
import { AsalasliPage } from '../asalasli/asalasli';
import { TrackingasliPage } from '../trackingasli/trackingasli';
import { StatusasliPage } from '../statusasli/statusasli';

@IonicPage()
@Component({
  selector: 'page-surataslidetail',
  templateUrl: 'surataslidetail.html',
})
export class SurataslidetailPage {

  tab1=DisposisiasliPage;
  tab2=AsalasliPage;
  tab3=TrackingasliPage;
  tab4=StatusasliPage;

  idsurat:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idsurat = this.navParams.get('item');
    console.log(this.idsurat);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurataslidetailPage');
  }

}
