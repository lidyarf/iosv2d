import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { HttpClient} from '@angular/common/http';
import { OneSignal,OSNotificationPayload  } from '@ionic-native/onesignal';

import { Events } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SuratasliPage } from '../pages/suratasli/suratasli';
import { SurattembusanPage } from '../pages/surattembusan/surattembusan';
import { SuratdisposisiPage } from '../pages/suratdisposisi/suratdisposisi';
import { KonsepsuratPage } from '../pages/konsepsurat/konsepsurat';
import { PengagendaanPage } from '../pages/pengagendaan/pengagendaan';
import { TitleCasePipe } from '@angular/common';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  uname:any;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string, jenis:number}>;
  blmterbacamasuk:any;
  blmterbacatembusan:any;
  blmterbacadispo:any;
  surat:any;
  tes1:any;
  numbersurat: number = 0
  numbersurat2: number = 0
  numbersurat3: number = 0
  isinotif:any;
  onseSignalAppId:any;
  googleProjectId:any;
  isi:any;
  photo:any;

  constructor(public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen,public events: Events, 
    public storage:Storage, public http:HttpClient,public oneSignal: OneSignal) {
    this.initializeApp();


    this.checkPreviousAuthorization();
   

    // this.events.subscribe('userloggedin', statsData => {
    //   console.log(statsData);
    // });
    
    setInterval(() => {
      this.http.get('http://103.40.94.42/wssurat/Api/jumlahsurat?kode_unor='+window.localStorage.getItem('kode_unor'))
        .subscribe((data:any='') => {
          this.blmterbacamasuk=data.suratmasuk;
          this.blmterbacatembusan=data.surattembusan;
          this.blmterbacadispo=data.suratdisposisi;
        });

        this.uname= window.localStorage.getItem('username');
        this.photo= window.localStorage.getItem('photo');
        console.log(this.photo);
      // this.verifikasilogin();
        if(parseInt(window.localStorage.getItem('verifikator'))==1){
          this.pages = [
            { title: 'Dashboard', component: HomePage, icon:'home', jenis:0},
            { title: 'Pengagendaan', component: PengagendaanPage, icon:'book', jenis:0},
            { title: 'Surat Asli', component: SuratasliPage, icon:'mail' , jenis:1},
            { title: 'Surat Tembusan', component: SurattembusanPage, icon:'copy' , jenis:2},
            { title: 'Surat Disposisi', component: SuratdisposisiPage, icon:'archive' , jenis:3},
            { title: 'Pemeriksaan Surat', component: KonsepsuratPage, icon:'create', jenis:0},
          ];
        }else {
          this.pages = [
            { title: 'Dashboard', component: HomePage, icon:'home', jenis:0},
            { title: 'Surat Asli', component: SuratasliPage, icon:'mail' , jenis:1},
            { title: 'Surat Tembusan', component: SurattembusanPage, icon:'copy' , jenis:2},
            { title: 'Surat Disposisi', component: SuratdisposisiPage, icon:'archive' , jenis:3},
            { title: 'Pemeriksaan Surat', component: KonsepsuratPage, icon:'create', jenis:0},
          ];
        }
    }, 3000);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#3f51b5');
      this.splashScreen.hide();

      this.onseSignalAppId = '1c6a3f0c-2f46-4535-8cba-80304a0fb5bc';
      this.googleProjectId= '972874828724';

      if (this.platform.is('android')) {
        this.oneSignal.startInit(this.onseSignalAppId, this.googleProjectId);
      }
      else if (this.platform.is('ios')) {
            this.oneSignal.startInit(this.onseSignalAppId);
      }
      setInterval(() => {
      // this.oneSignal.startInit('1c6a3f0c-2f46-4535-8cba-80304a0fb5bc', '972874828724');
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

      this.oneSignal.sendTag('userlog',"'"+window.localStorage.getItem('kode_unor')+"'");
      this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
      this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
      this.oneSignal.endInit();

      this.getjumlah(window.localStorage.getItem('kode_unor')).then((data:any='') => {
        var asli=data.asli;
        var tembusan=data.tembusan;
        var disposisi=data.disposisi;

        var send_alsi=false;
        var send_temb=false;
        var send_disp=false;

          if(this.numbersurat!=asli){
            send_alsi=true;
            this.numbersurat=asli;
          }
          if(this.numbersurat2!=tembusan){
            send_temb=true;
            this.numbersurat2=tembusan;
          }
          if(this.numbersurat3!=disposisi){
            send_disp=true;
            this.numbersurat3=disposisi;
          }

          if(send_alsi){
            this.sendnotif1(window.localStorage.getItem('kode_unor'));
          }

          if(send_temb){
            this.sendnotif2(window.localStorage.getItem('kode_unor'));
          }

          if(send_disp){
            this.sendnotif3(window.localStorage.getItem('kode_unor'));
          }

        });
      }, 3000);

      // this.notif().then(data => {
      //   this.isinotif = data;
      // })
  
    });
  }


  // async notif(){
  //   return new Promise(resolve => {
  //     setInterval(() => {

  //       this.getjumlah(window.localStorage.getItem('kode_unor')).then(data => {
  //         this.tes1 = data;
  //         if(this.numbersurat!=this.tes1){

  //           this.http.get('http://103.40.94.42/wssurat/Api/sendmessage3?kode_unor='+window.localStorage.getItem('kode_unor'))
  //           .subscribe((data:any=[]) =>{
  //             resolve(data);
  //           })
  //         }
  //         })
        
  //     },3000);
  //   });
  // }

  sendnotif1(param){
    this.http.get('http://103.40.94.42/wssurat/Api/sendmessage1?kode_unor='+param)
    .subscribe((data:any=[]) => {
      this.isi.push(data);
    })
  }

  sendnotif2(param){
    this.http.get('http://103.40.94.42/wssurat/Api/sendmessage2?kode_unor='+param)
    .subscribe((data:any=[]) => {
      this.isi.push(data);
    })
  }

  sendnotif3(param){
    this.http.get('http://103.40.94.42/wssurat/Api/sendmessage3?kode_unor='+param)
    .subscribe((data:any=[]) => {
      this.isi.push(data);
    })
  }

  getjumlah(param){
    return new Promise(resolve => {
      this.http.get('http://103.40.94.42/wssurat/Api/jmlsuratnotif?kode_unor='+param)
      .subscribe((data:any='') =>{
        resolve(data);
      })
    })
  }

  public onPushReceived(payload: OSNotificationPayload) {
    // alert('Push recevied:' + payload.body);
  }
  
  public onPushOpened(payload: OSNotificationPayload) {
    // alert('Push opened: ' + payload.body);
  }

  verifikasilogin(){
    return this.storage.get('verifikasi').then((val) => {
      console.log('Your age is', val);
    });
  }
  

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  checkPreviousAuthorization():void{
    if ((window.localStorage.getItem('username')==="undefined"||window.localStorage.getItem('username')===null)&&
        (window.localStorage.getItem('password')==="undefined"||window.localStorage.getItem('password')===null))
         {
           this.rootPage = LoginPage;
    }else{
      this.rootPage=HomePage;
    }
  }
}
