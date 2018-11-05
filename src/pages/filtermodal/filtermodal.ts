import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-filtermodal',
  templateUrl: 'filtermodal.html',
})
export class FiltermodalPage {

  tgl_awal:any;
  tgl_akhir:any;
  kecsurat:any;
  // a:'';
  // b:'';
  // kec:'';

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
  }

  closeModal() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltermodalPage');
  }

  itemSearch(awal,akhir,kecepatan){
    if(awal==undefined){
      awal='';
    }

    if(akhir==undefined){
      akhir='';
    }

    if(kecepatan==undefined){
      kecepatan='';
    }
    this.viewCtrl.dismiss([{"a" : awal},{"b": akhir},{"kec": kecepatan}]);
    console.log(kecepatan);
  }

  itemReset(){
    this.tgl_awal='';
    this.tgl_akhir='';
    this.kecsurat='';
    
  }

}
