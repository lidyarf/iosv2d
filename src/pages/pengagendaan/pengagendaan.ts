import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import { PengagendaandetailPage } from '../pengagendaandetail/pengagendaandetail';
import { AlertController, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FiltermodalPage } from '../filtermodal/filtermodal';

@IonicPage()
@Component({
  selector: 'page-pengagendaan',
  templateUrl: 'pengagendaan.html',
})
export class PengagendaanPage {

  asli: {};
  bground:string;
  loader: any;
  nCnt: number = 0;
  teks: any;
  teks2: any;
  pagenumber: number = 0;
  pagecount:any;
  tulisan:any;
  datatglawal = '';
  datatglakhir = '';
  datakec = '';

  icons: string[];
  isi: Array<{
    perihal: string, 
    asalsurat: string, 
    tglsurat:string, 
    icon: string,
    id:string,
    disp:string,
    tls:string
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient,
  public loadingCtrl:LoadingController, public alertCtrl:AlertController,public modalCtrl:ModalController) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    if(this.datatglawal==undefined){
      this.datatglawal='';
    }

    if(this.datatglakhir==undefined){
      this.datatglakhir='';
    }

    if(this.datakec==undefined){
      this.datakec='';
    }

    this.asli = this.getagendasurat(this.nCnt,this.datatglawal,this.datatglakhir,this.datakec);

    if(this.nCnt == 0){
      this.teks2 = "hilang";
    }else{
      this.teks2 = "ada";
    }
    
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

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.getagendasurat(this.nCnt,this.datatglawal,this.datatglakhir,this.datakec);
    

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  getagendasurat(no,tglawal,tglakhir,kecsurat){
    this.showLoader();
    return this.http.get('http://103.40.94.42/wssurat/Api/suratasli/page/'+no+'?tgl_awal='+tglawal+'&tgl_akhir='+tglakhir+'&kecsurat='+kecsurat)
    .subscribe((data:any=[]) => {
      this.hideLoader();
      
      this.isi=[];
      for (let i = 0; i < data.items.length; i++) {

        if (data.items[i].TRKECEPATANSURAT_ID==3) {
          this.tulisan='1';
        }else if(data.items[i].TRKECEPATANSURAT_ID==2){
          this.tulisan='2';
        }else{
          this.bground = '';
          this.tulisan='3';
        }

        this.isi.push({
          perihal: data.items[i].PERIHAL,
          asalsurat: data.items[i].TEXT_ASAL_SURAT,
          tglsurat: data.items[i].TGL_AGENDA,
          icon: this.icons[Math.floor(Math.random() * this.icons.length)],
          id:data.items[i].ID,
          disp:data.items[i].disp,
          tls:this.tulisan
        });
      }
      this.pagecount = data._meta.pageCount;
    });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PengagendaandetailPage, {
      item: item
    });
  }

  filter(item){
    let myModal = this.modalCtrl.create(FiltermodalPage);
    myModal.onDidDismiss((data:any=[]) => {
        
        for (var i = 0; i < data.length; i++) {
          this.datatglawal=data[0].a;
          this.datatglakhir=data[1].b;
          this.datakec=data[2].kec;
  
        }
  
        this.getagendasurat(this.nCnt,this.datatglawal,this.datatglakhir, this.datakec);
        
    });
    myModal.present();
  }

  nextpage(item) {

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

    this.getagendasurat(this.nCnt,this.datatglawal,this.datatglakhir,this.datakec);

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

    this.getagendasurat(this.nCnt,this.datatglawal,this.datatglakhir,this.datakec);

    this.pagenumber = this.pagenumber-1;
    return this.nCnt; 
  }

  df(tes){
    window.open("http://103.40.94.42/wssurat/Api/downloadsuratmasuk?id="+tes,"_system","location=yes");
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
    console.log('ionViewDidLoad PengagendaanPage');
  }

}
