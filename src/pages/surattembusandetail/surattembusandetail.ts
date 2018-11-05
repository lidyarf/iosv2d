import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-surattembusandetail',
  templateUrl: 'surattembusandetail.html',
})
export class SurattembusandetailPage {
  temb:string;
  tembusand:any;
  tracking:any;
  maxtracking:any;
  js:string;
  namaunker:string;
  maxtrack:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient,public loadingCtrl: LoadingController) {
    this.temb= this.navParams.get('item');
    console.log(this.temb);

      this.tembusand =this.getdetailtembusan(this.temb);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurattembusandetailPage');
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
