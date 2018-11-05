import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController, ModalController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { SurattembusandetailPage } from '../surattembusandetail/surattembusandetail';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FiltermodalPage } from '../filtermodal/filtermodal';

@IonicPage()
@Component({
  selector: 'page-surattembusan',
  templateUrl: 'surattembusan.html',
})
export class SurattembusanPage {
  
  isi: Array<{perihal: string, asalsurat: string, tglsurat:string, bg:string,id:string,tls:string,kode:string}>;
  tembusan: {};
  bground:string;
  loader: any;
  tulisan:string;
  kode_unor:any;
  zipped: boolean = true;
  iddata:any;
  kode:any;
  tes1:any;
  nCnt: number = 0;
  mata:any;
  tanggal:any;
  pagenumber:number = 0;
  teks:any;
  teks2:any;
  pagecount:any;
  datatglawal = '';
  datatglakhir = '';
  datakec = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http: HttpClient,public loadingCtrl: LoadingController,
    public alertCtrl: AlertController, public modalCtrl:ModalController) {

      if(this.datatglawal==undefined){
        this.datatglawal='';
      }
  
      if(this.datatglakhir==undefined){
        this.datatglakhir='';
      }
  
      if(this.datakec==undefined){
        this.datakec='';
      }

    this.tembusan = this.getsurattembusan(this.nCnt,window.localStorage.getItem('kode_unor'),this.datatglawal,this.datatglakhir,this.datakec);

      this.plhpilih().then(data => {
        this.tes1 = data;
      })

      if(this.nCnt == 0){
        this.teks2 = "hilang";
      }else{
        this.teks2 = "ada";
      }

    //=============================================================
    var date = new Date();
    this.tanggal = date.getFullYear()+ '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' +('0' + date.getDate()).slice(-2); 
    console.log(this.tanggal);
    //=============================================================d
    this.iddata = '';
    this.http.get('http://103.40.94.42/wssurat/Api/plh?id='+window.localStorage.getItem('id')+'&tgl='+this.tanggal)
    .subscribe((data:any=[]) => {
      console.log(data.KODE_UNOR);
      this.iddata = data.KODE_UNOR;
       if(data.length > 0){
          this.mata = 'mata1';
       }else {
          this.mata = 'mata2';
       }
       console.log(this.iddata);
    });
  }

  doRefresh(refresher,item) {
    console.log('Begin async operation', refresher);

    if(this.zipped==false){
      this.getsurattembusan(this.nCnt,item,this.datatglawal,this.datatglakhir,this.datakec);
    }else{
      this.getsurattembusan(this.nCnt,window.localStorage.getItem('kode_unor'),this.datatglawal,this.datatglakhir,this.datakec);
    }

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

  async plhpilih(){
    var date = new Date();
    this.tanggal = date.getFullYear()+ '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' +('0' + date.getDate()).slice(-2); 
  
    return new Promise(resolve => {
      this.http.get('http://103.40.94.42/wssurat/Api/plh?id='+window.localStorage.getItem('id')+'&tgl='+this.tanggal)
      .subscribe((data:any=[]) => {
          // this.itemspartners = JSON.parse(data['_body']).results;
          for (let i = 0; i < data.length; i++) {
            this.kode = data[0].KODE_UNOR_PEMBERI;
            resolve(this.kode);
          }
        });
    });
  }
    
  plh(item){
    this.zipped = !this.zipped;
    console.log(item);
    if(this.zipped==false){
      // this.plhpilih().then(data => {
      //   this.tes1 = data;
      //   this.getdatasurat(this.nCnt,this.tes1);
      // })
      this.getsurattembusan(this.nCnt,item,this.datatglawal,this.datatglakhir,this.datakec);
      // this.isisurat = this.getdatasurat(this.nCnt,item);
    }else{
      this.getsurattembusan(this.nCnt,window.localStorage.getItem('kode_unor'),this.datatglawal,this.datatglakhir,this.datakec);
      // this.isisurat = this.getdatasurat(this.nCnt,window.localStorage.getItem('kode_unor'));
    }
  }

  getsurattembusan(n,param,tglawal,tglakhir,kecsurat){
    this.showLoader();
    return this.http.get('http://103.40.94.42/wssurat/Api/suratmasuktembusan/page/'+n+'?kode_unor='+param+'&tgl_awal='+tglawal+'&tgl_akhir='+tglakhir+'&kecsurat='+kecsurat)
    .subscribe((data:any=[]) => {
      this.hideLoader();
      this.isi=[];
      for (let i = 0; i < data.items.length; i++) {

        this.bground='';
        this.tulisan='';
          if (data.items[i].TRKECEPATANSURAT_ID==3) {
            this.tulisan='1';
          }else if(data.items[i].TRKECEPATANSURAT_ID==2){
            this.tulisan='2';
          }else{
            this.tulisan='3';
          }

          if(param == data.items[i].KODE_UNOR){
            this.kode_unor = data.items[i].KODE_UNOR
          }else{
            this.kode_unor = param;
          }

        this.isi.push({
          perihal: data.items[i].PERIHAL,
          asalsurat: data.items[i].TEXT_ASAL_SURAT,
          tglsurat: data.items[i].TGL_AGENDA,
          bg:this.bground,
          id: data.items[i].ID,
          tls:this.tulisan,
          kode:this.kode_unor
        });
      }

      this.pagecount = data._meta.pageCount;
    });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SurattembusandetailPage, {
      item: item
    });
  }

  df(tes){
    window.open("http://103.40.94.42/wssurat/Api/downloadsuratmasuk?id="+tes,"_system","location=yes");
  }

  filter(item){
    let myModal = this.modalCtrl.create(FiltermodalPage);
    myModal.onDidDismiss((data:any=[]) => {
        console.log(data);
        
        for (var i = 0; i < data.length; i++) {
          this.datatglawal=data[0].a;
          this.datatglakhir=data[1].b;
          this.datakec=data[2].kec;
  
        }
        console.log(this.datakec);
  
        if(this.zipped==false){
          this.getsurattembusan(this.nCnt,item,this.datatglawal,this.datatglakhir, this.datakec);
        }else{
          this.getsurattembusan(this.nCnt,window.localStorage.getItem('kode_unor'),this.datatglawal,this.datatglakhir,this.datakec);
        }
    });
    myModal.present();
  }

  nextpage(item,item2) {

    this.nCnt = this.nCnt+10;
    console.log(this.pagenumber);
    console.log(item);
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

    if(this.zipped==false){
      this.getsurattembusan(this.nCnt,item2,this.datatglawal,this.datatglakhir,this.datakec);
    }else{
      this.getsurattembusan(this.nCnt,window.localStorage.getItem('kode_unor'),this.datatglawal,this.datatglakhir,this.datakec);
    }
    this.pagenumber = this.pagenumber+1;
    return this.nCnt; 
  }

  backpage(item,item2) {
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

    if(this.zipped==false){
      this.getsurattembusan(this.nCnt,item2,this.datatglawal,this.datatglakhir,this.datakec);
    }else{
      this.getsurattembusan(this.nCnt,window.localStorage.getItem('kode_unor'),this.datatglawal,this.datatglakhir,this.datakec);
    }
    this.pagenumber = this.pagenumber-1;
    return this.nCnt; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurattembusanPage');
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

}
