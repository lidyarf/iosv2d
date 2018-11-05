import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { LoginPage } from '../login/login';
import { FiltermodalPage } from '../filtermodal/filtermodal';
import { LoadingController,ModalController, ViewController } from 'ionic-angular';
import { SurataslidetailPage } from '../surataslidetail/surataslidetail';
import { AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
// import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
// import { FileOpener } from '@ionic-native/file-opener';
// import { FileTransfer } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';
// import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-suratasli',
  templateUrl: 'suratasli.html',
})
export class SuratasliPage {

  asli: {};
  bground:string;
  tulisan:string;
  loader: any;
  nCnt: number = 0;
  pagenumber: number = 0;
  datatglawal = '';
  datatglakhir = '';
  datakec = '';
  mata:any;
  tanggal:any;
  toggle:any;
  iddata:any;
  kode:any;
  tes1:any;
  zipped: boolean = true;
  click: boolean = true;
  pagecount:any;
  teks :any;
  teks2 :any;
  isisurat:any;
  kode_unor:any;
  toast: any;
  // asli_item: string[];

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  isi: Array<{
    perihal: string, 
    asalsurat: string, 
    tglsurat:string, 
    icon: string,
    bg:string,
    tls:string,
    id:string,
    kec:string,
    sifat:string,
    disp:string,
    kode:string
  }>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient,public loadingCtrl: LoadingController,
    public alertCtrl:AlertController, 
    private iab: InAppBrowser, public modalCtrl:ModalController,public toastCtrl:ToastController) {

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

    this.getdatasurat(this.nCnt,window.localStorage.getItem('kode_unor'),this.datatglawal,this.datatglakhir,this.datakec);
    this.plhpilih();

    if(this.nCnt == 0){
      this.teks2 = "hilang";
    }else{
      this.teks2 = "ada";
    }

      this.plhpilih().then(data => {
        this.tes1 = data;
      })

    //=============================================================
    var date = new Date();
    this.tanggal = date.getFullYear()+ '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' +('0' + date.getDate()).slice(-2); 
  
    //=============================================================d
    this.iddata = '';
    this.http.get('http://103.40.94.42/wssurat/Api/plh?id='+window.localStorage.getItem('id')+'&tgl='+this.tanggal)
    .subscribe((data:any=[]) => {
      this.iddata = data.KODE_UNOR;
       if(data.length > 0){
          this.mata = 'mata1';
       }else {
          this.mata = 'mata2';
       }
    });

  }

  doRefresh(refresher,item) {

    if(this.zipped==false){
      this.getdatasurat(this.nCnt,item,this.datatglawal,this.datatglakhir, this.datakec);
    }else{
      this.getdatasurat(this.nCnt,window.localStorage.getItem('kode_unor'),this.datatglawal,this.datatglakhir,this.datakec);
    }

    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

TES(text){
  return text;
}

async plhpilih(){
  var date = new Date();
  this.tanggal = date.getFullYear()+ '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' +('0' + date.getDate()).slice(-2); 

  return new Promise(resolve => {
    this.http.get('http://103.40.94.42/wssurat/Api/plh?id='+window.localStorage.getItem('id')+'&tgl='+this.tanggal)
    // .map(res => res)  
    .subscribe((data:any=[]) => {
        // this.itemspartners = JSON.parse(data['_body']).results;
        for (let i = 0; i < data.length; i++) {
          this.kode = data[0].KODE_UNOR_PEMBERI;
          resolve(this.kode);
        }
      });
  });
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
        this.getdatasurat(this.nCnt,item,this.datatglawal,this.datatglakhir, this.datakec);
      }else{
        this.getdatasurat(this.nCnt,window.localStorage.getItem('kode_unor'),this.datatglawal,this.datatglakhir,this.datakec);
      }
  });
  myModal.present();
}


  
plh(item){
  this.zipped = !this.zipped;
  if(this.zipped==false){
    this.getdatasurat(this.nCnt,item,this.datatglawal,this.datatglakhir,this.datakec);
  }else{
    this.getdatasurat(this.nCnt,window.localStorage.getItem('kode_unor'),this.datatglawal,this.datatglakhir,this.datakec);
  }
}


getdatasurat(no,param, tglawal, tglakhir,kecsurat){
    this.showLoader();
  
    this.http.get('http://103.40.94.42/wssurat/Api/suratmasukasli/page/'+no+'?kode_unor='+param+'&tgl_awal='+tglawal+'&tgl_akhir='+tglakhir+'&kecsurat='+kecsurat)
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
            this.bground = '';
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
          icon: this.icons[Math.floor(Math.random() * this.icons.length)],
          bg:this.bground,
          tls:this.tulisan,
          id:data.items[i].ID,
          kec:data.items[i].TRKECEPATANSURAT_ID,
          sifat:data.items[i].TRSIFATSURAT_ID,
          disp:data.items[i].disp,
          kode:this.kode_unor
        });
        
      }
      this.pagecount = data._meta.pageCount;
    });
  }

  showToast(){
    let toast = this.toastCtrl.create({
      message: 'File Surat tidak ada',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  hideToast() {
    if(this.toast)
      this.toast.dismiss();
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

  itemTapped(event, item) {
    this.navCtrl.push(SurataslidetailPage, {
      item: item
    });
  }

  

  df(tes){
    if(tes!=0){
      window.open("http://103.40.94.42/wssurat/Api/downloadsuratmasuk?id="+tes,"_system","location=yes");

    }else {
      this.showToast();
    }
    console.log(tes);
    
    // let path = null;
 
    // if (this.platform.is('ios')) {
    //   path = this.file.documentsDirectory;
    // } else if (this.platform.is('android')) {
    //   path = this.file.dataDirectory;
    // }
 
    // const transfer = this.transfer.create();
    // transfer.download('https://devdactic.com/html/5-simple-hacks-LBT.pdf', path + 'myfile.pdf').then(entry => {
    //   let url = entry.toURL();
    //   this.document.viewDocument(url, 'application/pdf', {});
    // });
  }

  nextpage(item,item2) {
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

    if(this.zipped==false){
      this.getdatasurat(this.nCnt,item2, this.datatglawal,this.datatglakhir,this.datakec);
    }else{
      this.getdatasurat(this.nCnt,window.localStorage.getItem('kode_unor'),this.datatglawal,this.datatglakhir,this.datakec);
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
      this.getdatasurat(this.nCnt,item2,this.datatglawal,this.datatglakhir,this.datakec);
    }else{
      this.getdatasurat(this.nCnt,window.localStorage.getItem('kode_unor'),this.datatglawal,this.datatglakhir,this.datakec);
    }
    this.pagenumber = this.pagenumber-1;
    return this.nCnt; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuratasliPage');

    if(this.datatglawal=='undefined'){
      this.datatglawal='';
    }

    if(this.datatglakhir=='undefined'){
      this.datatglakhir='';
    }

    if(this.datakec=='undefined'){
      this.datakec='';
    }
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

            // this.oneSignal.startInit('1c6a3f0c-2f46-4535-8cba-80304a0fb5bc', '753553995171');
            // this.oneSignal.sendTag('userlog','');
            // this.oneSignal.endInit();
            
            this.navCtrl.setRoot(LoginPage);
            this.navCtrl.popToRoot();
          }
        }
      ]
    });
    alert.present();
  }

}
