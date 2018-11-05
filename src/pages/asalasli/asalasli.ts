import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-asalasli',
  templateUrl: 'asalasli.html',
})
export class AsalasliPage {
  idsurat:any;
  surat:any;
  surat1:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.idsurat = navParams.data;
    this.surat1 = this.getsuratasli(this.idsurat.id);

    console.log(this.idsurat.id);
    console.log(this.getsuratasli(this.idsurat.id));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsalasliPage');
  }

  getsuratasli(param){
    return this.http.get('http://103.40.94.42/wssurat/Api/surat?id='+param)
    .subscribe((data:any=[]) =>{
      this.surat=[];
      for (let i = 0; i < data.data.length; i++) {
        this.surat.push(data.data[i]);
      }
    })
  }

}
