import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { LoadingController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-konsepinfo',
  templateUrl: 'konsepinfo.html',
})
export class KonsepinfoPage {
  idsurat:any;
  surat:any;
  surat1:any;
  loader:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient,public loadingCtrl: LoadingController) {
    this.idsurat = navParams.data;
    this.surat1 = this.getsuratkeluar(this.idsurat.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KonsepinfoPage');
  }

  showLoader() { //call this fn to show loader
    this.loader = this.loadingCtrl.create({
        content: 'Please wait...',
    });
    this.loader.present();    
  }

  hideLoader() {
    if(this.loader)
      this.loader.dismiss();
  }


  getsuratkeluar(param){
    this.showLoader();
    return this.http.get('http://103.40.94.42/wssurat/Api/detailsuratkeluar?id='+param)
    .subscribe((data:any=[]) =>{
      this.hideLoader();
      this.surat=[];
      for (let i = 0; i < data.data.length; i++) {
        this.surat.push(data.data[i]);
      }
    })
  }

}
