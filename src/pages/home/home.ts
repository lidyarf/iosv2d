import { Component,ViewChild, Injectable } from '@angular/core';
import { NavController, Button } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Slides } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Injectable()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  // @ViewChild('barCanvas') barCanvas;
  barChart: any;
  public barChartData:any[];
  suratasli:any;
  masuk1:any;
  masuk2:any;
  test:any;
  aktif1:any;
  aktif2:any;
  aktif3:any;
  aktif4:any;
  loader:any;
  result:any[];
  public barChartLabels:string[];

  //barchart
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartOptions2:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartOptions3:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // public barChartLabels2:string[] = ['April', 'Mei', 'Juni'];
  // public barChartLabels3:string[] = ['Juli', 'Agustus', 'September'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  constructor(public navCtrl: NavController, public alertCtrl:AlertController, 
    public http:HttpClient,public loadingCtrl: LoadingController) {
    
    // this.data3();
    this.getchart1();
    this.barChartLabels = ['Januari', 'Februari', 'Maret'];
    

    this.http.get('http://103.40.94.42/wssurat/Api/getDashboard?kode_unor='+window.localStorage.getItem('kode_unor'))
    .subscribe((datachart:any=[]) =>{

      this.barChartData =[
        {data: [datachart.suratmasuk[0].JUMLAH,datachart.suratmasuk[1].JUMLAH,datachart.suratmasuk[2].JUMLAH],label: 'Surat Asli'},
        {data: [datachart.surattembusan[0].JUMLAH, datachart.surattembusan[1].JUMLAH, datachart.surattembusan[2].JUMLAH], label: 'Surat Tembusan'},
        {data: [datachart.suratdisposisi[0].JUMLAH, datachart.suratdisposisi[1].JUMLAH, datachart.suratdisposisi[2].JUMLAH], label: 'Surat Disposisi'}
      ] ;

    });

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

  button1(){
    this.slides.slideTo(0, 500);
    let currentIndex = this.slides.getActiveIndex();

    if(currentIndex == 0){
      this.aktif1='aktif1';
      this.aktif2='';
      this.aktif3='';
      this.aktif4=''; 
    }
    console.log('Current index is', currentIndex);
  }

  button2(){
    this.slides.slideTo(1, 500);
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  button3(){
    this.slides.slideTo(2, 500);
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  button4(){
    this.slides.slideTo(3, 500);
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  slideChanged() {
    this.showLoader();
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    if (currentIndex == 0){
      this.aktif1='aktif1';
      this.aktif2='';
      this.aktif3='';
      this.aktif4='';
      this.barChartLabels = ['Januari', 'Februari', 'Maret'];
      this.http.get('http://103.40.94.42/wssurat/Api/getDashboard?kode_unor='+window.localStorage.getItem('kode_unor'))
      .subscribe((datachart:any=[]) =>{
        this.hideLoader();
        this.barChartData =[
          {data: [datachart.suratmasuk[0].JUMLAH,datachart.suratmasuk[1].JUMLAH,datachart.suratmasuk[2].JUMLAH],label: 'Surat Asli'},
          {data: [datachart.surattembusan[0].JUMLAH, datachart.surattembusan[1].JUMLAH, datachart.surattembusan[2].JUMLAH], label: 'Surat Tembusan'},
          {data: [datachart.suratdisposisi[0].JUMLAH, datachart.suratdisposisi[1].JUMLAH, datachart.suratdisposisi[2].JUMLAH], label: 'Surat Disposisi'}
        ] ;
      });
    }else if (currentIndex == 1){
      this.aktif1='';
      this.aktif2='aktif1';
      this.aktif3='';
      this.aktif4='';
      this.barChartLabels = ['April', 'Mei', 'Juni'];
      this.http.get('http://103.40.94.42/wssurat/Api/getDashboard?kode_unor='+window.localStorage.getItem('kode_unor'))
      .subscribe((datachart:any=[]) =>{
        this.hideLoader();
        this.barChartData =[
          {data: [datachart.suratmasuk[3].JUMLAH,datachart.suratmasuk[4].JUMLAH,datachart.suratmasuk[5].JUMLAH],label: 'Surat Asli'},
          {data: [datachart.surattembusan[3].JUMLAH, datachart.surattembusan[4].JUMLAH, datachart.surattembusan[5].JUMLAH], label: 'Surat Tembusan'},
          {data: [datachart.suratdisposisi[3].JUMLAH, datachart.suratdisposisi[4].JUMLAH, datachart.suratdisposisi[5].JUMLAH], label: 'Surat Disposisi'}
        ] ;
      });
    }else if (currentIndex == 2){
      this.aktif1='';
      this.aktif2='';
      this.aktif3='aktif1';
      this.aktif4='';
      this.barChartLabels = ['Juli', 'Agustus', 'September'];
      this.http.get('http://103.40.94.42/wssurat/Api/getDashboard?kode_unor='+window.localStorage.getItem('kode_unor'))
      .subscribe((datachart:any=[]) =>{
        this.hideLoader();
        this.barChartData =[
          {data: [datachart.suratmasuk[6].JUMLAH,datachart.suratmasuk[7].JUMLAH,datachart.suratmasuk[8].JUMLAH],label: 'Surat Asli'},
          {data: [datachart.surattembusan[6].JUMLAH, datachart.surattembusan[7].JUMLAH, datachart.surattembusan[8].JUMLAH], label: 'Surat Tembusan'},
          {data: [datachart.suratdisposisi[6].JUMLAH, datachart.suratdisposisi[7].JUMLAH, datachart.suratdisposisi[8].JUMLAH], label: 'Surat Disposisi'}
        ] ;
      });
    }else if (currentIndex == 3){
      this.aktif1='';
      this.aktif2='';
      this.aktif3='';
      this.aktif4='aktif1';
      this.barChartLabels = ['Oktober', 'November', 'Desember'];
      this.http.get('http://103.40.94.42/wssurat/Api/getDashboard?kode_unor='+window.localStorage.getItem('kode_unor'))
      .subscribe((datachart:any=[]) =>{
        this.hideLoader();
        this.barChartData =[
          {data: [datachart.suratmasuk[9].JUMLAH,datachart.suratmasuk[10].JUMLAH,datachart.suratmasuk[11].JUMLAH],label: 'Surat Asli'},
          {data: [datachart.surattembusan[9].JUMLAH, datachart.surattembusan[10].JUMLAH, datachart.surattembusan[11].JUMLAH], label: 'Surat Tembusan'},
          {data: [datachart.suratdisposisi[9].JUMLAH, datachart.suratdisposisi[10].JUMLAH, datachart.suratdisposisi[11].JUMLAH], label: 'Surat Disposisi'}
        ] ;
      });
    }
  }

  goToLogout(){
    let alert = this.alertCtrl.create({
      title: 'Confirm Exit',
      message: 'Are you want to exit,'+ window.localStorage.getItem('nama'),
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
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



  getchart1(){
    return this.barChartData = [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Surat Asli'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Surat Tembusan'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Surat Disposisi'}];
  }
  
  ionViewDidLoad() {
   
      
      
    }

  // this.http.get('http://103.40.94.42/wssurat/Api/getDashboard?kode_unor='+window.localStorage.getItem('kode_unor'))
  //   .subscribe((datachart:any=[]) =>{
  //     this.suratasli=[];
  //       this.barChartData= [
  //       {data: [datachart.suratmasuk[0].JUMLAH, 
  //               datachart.suratmasuk[1].JUMLAH, 
  //               datachart.suratmasuk[2].JUMLAH, 
  //               datachart.suratmasuk[3].JUMLAH], 
  //               label: 'Surat Asli'},
  //       {data: [datachart.surattembusan[0].JUMLAH, 
  //               datachart.surattembusan[1].JUMLAH, 
  //               datachart.surattembusan[2].JUMLAH, 
  //               datachart.surattembusan[3].JUMLAH], 
  //               label: 'Surat Tembusan'},
  //       {data: [28, 48, 40, 19], label: 'Surat Disposisi'}
  //     ];
      
  //   })
  
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }
  
  // public randomize():void {
  //   // Only Change 3 values
  //   let data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     (Math.random() * 100),
  //     56,
  //     (Math.random() * 100),
  //     40];
  //   let clone = JSON.parse(JSON.stringify(this.barChartData));
  //   clone[0].data = data;
  //   this.barChartData = clone;

  // }

  

}
