import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import { KonsepsuratdetailPage } from '../konsepsuratdetail/konsepsuratdetail';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-konsepsurat',
  templateUrl: 'konsepsurat.html',
})
export class KonsepsuratPage {

  konsep: {};
  bground:string;
  loader: any;
  icons: string[];
  centang:any;
  nCnt: number = 0;
  pagenumber: number = 0;
  pagecount:any;
  teks :any;
  teks2 :any;

  isi: Array<{
    perihal: string, 
    klasifikasi: string, 
    tglsurat:string, 
    icon: string,
    bg:string,
    id:string,
    verifikasi:string,
    tujuan:string,
    ver:string
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http:HttpClient, public loadingCtrl:LoadingController, public alertCtrl:AlertController) {
    
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    if(this.nCnt == 0){
      this.teks2 = "hilang";
    }else{
      this.teks2 = "ada";
    }

    this.konsep = this.getsuratkonsep(this.nCnt);
  }

  doRefresh(refresher,item) {
    console.log('Begin async operation', refresher);

      this.getsuratkonsep(this.nCnt);


    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
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

  getsuratkonsep(n){
    this.showLoader();
    return this.http.get('http://103.40.94.42/wssurat/Api/suratkeluar/page/'+n+'?kode_unor='+window.localStorage.getItem('kode_unor'))
    .subscribe((data:any=[]) => {
      this.hideLoader();
      
      this.isi=[];
      for (let i = 0; i < data.items.length; i++) {
          if (data.items[i].TRKECEPATANSURAT_ID==3) {
            this.bground='#f44336';
          }else if(data.items[i].TRKECEPATANSURAT_ID==2){
            this.bground = '';
          }else{
            this.bground = '';
          }

          if(data.items[i].verifikasi == "Belum"){
            this.centang = "kuning";
          }else if(data.items[i].verifikasi == "Sudah"){
            this.centang = "hilang";
          }

        this.isi.push({
          perihal: data.items[i].PERIHAL,
          klasifikasi: data.items[i].KLASIFIKASI_SURAT,
          tglsurat: data.items[i].CREATED_DATE,
          icon: this.icons[Math.floor(Math.random() * this.icons.length)],
          bg:this.bground,
          id:data.items[i].ID,
          verifikasi:data.items[i].verifikasi,
          tujuan:data.items[i].TEXT_TUJUAN_SURAT,
          ver: this.centang
        });
      }

      this.pagecount = data._meta.pageCount;
      if(this.pagecount == 0){
        this.teks = "hilang";
      }else{
        this.teks = "ada";
      }
    });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(KonsepsuratdetailPage, {
      item: item
    });
  }

  df(tes){
    window.open("http://103.40.94.42/wssurat/Api/downloadsuratkeluar?id="+tes,"_system","location=yes");
  }

  nextpage(item) {
    console.log(item-2);
    console.log(this.pagenumber);
    

    this.nCnt = this.nCnt+10;

    if(this.pagenumber >= item-2){
      this.teks = "hilang";
    }else{
      this.teks = "ada";
    }

    if(this.nCnt == 0){
      this.teks2 = "hilang";
    }else{
      this.teks2 = "ada";
    }

      this.getsuratkonsep(this.nCnt);
    
    this.pagenumber = this.pagenumber+1;
    return this.nCnt; 
  }

  backpage(item) {
    this.nCnt = this.nCnt-10;

    if(this.pagenumber <= 0){
      this.teks = "hilang";
    }else{
      this.teks = "ada";
    }

    if(this.nCnt==0){
      this.teks2 = "hilang";
    }else{
      this.teks2 = "ada";
    }

      this.getsuratkonsep(this.nCnt);
    
    this.pagenumber = this.pagenumber-1;
    return this.nCnt; 
  }

  Logout(){
    let alert = this.alertCtrl.create({
      title: 'Confirm Exit',
      message: 'Are you want to exit,'+ window.localStorage.getItem('nama'),
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'OK',
          handler: () => {
            window.localStorage.removeItem('username');
            window.localStorage.removeItem('password');
            window.localStorage.removeItem('nama');
            window.localStorage.removeItem('kode_unor');
            window.localStorage.removeItem('kode_unker');
            window.localStorage.removeItem('id');
            window.localStorage.removeItem('verifikator');
            this.navCtrl.setRoot(LoginPage);
            this.navCtrl.popToRoot();
            console.log('OK');
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KonsepsuratPage');
  }

}
