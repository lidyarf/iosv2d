import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { LoadingController,App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-konsepcatatan',
  templateUrl: 'konsepcatatan.html',
})
export class KonsepcatatanPage {
  statusdata:any;
  idsurat:any;
  status:string;
  loader:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http:HttpClient,public alertctrl:AlertController, public loadingCtrl:LoadingController) {
    this.idsurat = navParams.data;

    this.statusdata = [
	    {id: 1, name: 'Setuju'},
      {id: 2, name: 'Tolak'}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KonsepcatatanPage');
  }

  itemTapped(a,b){
    this.loader = this.loadingCtrl.create({
      content: 'Please wait...',
    });
    this.loader.present();   
    
    var datastatus= {
      id : this.idsurat.id, 
      kode_unor : window.localStorage.getItem('kode_unor'), 
      unitkerja :  window.localStorage.getItem('kode_unker'), 
      status : a, 
      catatan: b
    }
    console.log(datastatus);

          // var headers = new Headers();
          // headers.append('Access-Control-Allow-Origin' , '*');
          // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
          // headers.append('Accept','application/json');
          // headers.append('content-type','application/json');
          // let options = new RequestOptions({ headers:headers});

        this.http.post('http://103.40.94.42/wssurat/Api/statussuratkeluar',datastatus)
          .subscribe(data => {
            if(this.loader)
                this.loader.dismiss();

                console.log(data);
                let alert = this.alertctrl.create({
                  title: 'Berhasil',
                  subTitle: 'Verifikasi Berhasil',
                  buttons: ['OK']
                });
                alert.present();
          }, error => {
            if(this.loader)
                this.loader.dismiss();

              let alert = this.alertctrl.create({
                title: 'Ooooops !',
                subTitle: 'Verifikasi Gagal',
                buttons: ['OK']
              });
              alert.present();
        })

      
    }

}
