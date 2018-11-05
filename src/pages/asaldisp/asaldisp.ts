import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-asaldisp',
  templateUrl: 'asaldisp.html',
})
export class AsaldispPage {
  iddisp:any;
  suratd:any;
  surat1:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient) {
    this.iddisp = navParams.data;
    this.surat1 = this.getsuratasli(this.iddisp.id);
    
    console.log(this.iddisp);
    console.log(this.getsuratasli(this.iddisp.id));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsaldispPage');
  }

  getsuratasli(param){
    return this.http.get('http://103.40.94.42/wssurat/Api/surat?id='+param)
    .subscribe((data:any=[]) =>{
      this.suratd=[];
      for (let i = 0; i < data.data.length; i++) {
        this.suratd.push(data.data[i]);
      }
    })
  }

}
