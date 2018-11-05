import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-trackingasli',
  templateUrl: 'trackingasli.html',
})
export class TrackingasliPage {
  temb:any;
  tembusand:any;
  tracking:any;
  maxtracking:any;
  js:any;
  namaunker:any;
  maxtrack:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient) {
    this.temb = navParams.data;

    console.log(this.temb.id);

    this.tembusand =this.getdetailtembusan(this.temb.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackingasliPage');
  }

  getdetailtembusan(param){
    return this.http.get('http://103.40.94.42/wssurat/Api/trackingsurat?id='+param)
        .subscribe((data:any=[]) => {
          this.tracking=[];
          this.maxtracking=[];
          this.js='';
          this.namaunker='';
          for (let i = 0; i < data.length; i++) {
            this.tracking.push(data[i]);
            this.maxtracking.push(Math.max(data[i]['ID']));


            this.maxtrack=Math.max.apply(Math, this.maxtracking);
              if(data[i].ID ==  this.maxtrack) {
                this.js = data[i].JENIS_SURAT;
                this.namaunker = data[i].NAMA_UNIT_KERJA;
              }
          }
              console.log(this.maxtrack);
        })
  }

}
