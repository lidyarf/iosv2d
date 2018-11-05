import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { LoadingController,App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-statusasli',
  templateUrl: 'statusasli.html',
})
export class StatusasliPage {
  statusdata:any;
  idsurat:any;
  keterangan:any;
  ket:string;
  status:string;
  loader:any;
  idpemilih:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http:HttpClient, public alertctrl:AlertController, public loadingCtrl:LoadingController) {
    this.idsurat = navParams.data;

    this.statusdata = [
	    {id: 1, name: 'Dalam Proses'},
      {id: 2, name: 'Telah Selesai'}];

      this.keterangan = this.getketerangan(this.idsurat.id,this.idsurat.kode);

      this.http.get('http://103.40.94.42/wssurat/Api/user')
        .subscribe((data:any=[]) => {
          for (let i = 0; i < data.length; i++) {
            if(data[i].KODE_UNOR==this.idsurat.kode && data[i].TRGROUP_ID==3){
              this.idpemilih = data[i].ID;
              console.log(this.idpemilih);
            }
          }
        })
  }

  itemTapped(a,b,c){
    this.loader = this.loadingCtrl.create({
      content: 'Please wait...',
    });
    this.loader.present();   

      var datastatus= {
                id : this.idsurat.id, 
                id_user : c, 
                kode_unor : this.idsurat.kode, 
                status_penyelesaian : a, 
                catatan: b
                }
        this.http.post('http://103.40.94.42/wssurat/Api/statussuratmasuk',datastatus)
          .subscribe(data => {

            if(this.loader)
            this.loader.dismiss();
          let alert = this.alertctrl.create({
            title: 'Berhasil',
            subTitle: 'Status Surat Berhasil di Simpan',
            buttons: ['OK']
          });
          alert.present();
          }, error => {
            if(this.loader)
                this.loader.dismiss();

              let alert = this.alertctrl.create({
                title: 'Ooooops !',
                subTitle: 'Status Surat Gagal di Simpan',
                buttons: ['OK']
              });
              alert.present();
        })

      
    }

  getketerangan(param,param2){
    return this.http.get('http://103.40.94.42/wssurat/Api/disp?id='+param+'&kode_unor='+param2)
        .subscribe((data:any=[]) => {
        this.ket =data.CATATAN;
        this.status = data.STATUS_PENYELESAIAN;
          console.log(this.ket);
        })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusasliPage');
  }

}
