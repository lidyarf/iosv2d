import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { LoadingController,App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-disposisidisp',
  templateUrl: 'disposisidisp.html',
})
export class DisposisidispPage {
  iddisp:any;
  sifat:any;
  kec:any;
  lajur:any;
  lajur1:any;
  tujuan:any;
  tujuan1:any;
  catatan:any;
  catatan1:any;
  tujuandisposisi:any;
  lajurdisposisi:any;
  catatandisp:any;
  loader:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http:HttpClient, public alertctrl:AlertController, public loadingCtrl:LoadingController) {
    this.iddisp = navParams.data;
    this.sifat = this.iddisp.sifat;
    this.kec = this.iddisp.kec;
    console.log('IDdisp ',this.iddisp);
    console.log('kodeunor ',this.iddisp.kode);

    this.catatan1 = this.getketerangan(this.iddisp.id,this.iddisp.kode);

    //tujuan surat
    this.tujuan=[];
    this.http.get('http://103.40.94.42/wssurat/Api/tujuandisp?kode_unor='+this.iddisp.kode+'&id='+this.iddisp.id)
    .subscribe((data:any=[]) => {
      for (let i = 0; i < data.length; i++) {
       this.tujuan.push(data[i]);
      }
    })

    //lajur disposisi
    this.lajur=[];
    this.http.get('http://103.40.94.42/wssurat/Api/lajurdisposisi2?id='+this.iddisp.id+'&kd_unor='+this.iddisp.kode)
        .subscribe((data:any=[]) => {
          for (let i = 0; i < data.length; i++) {
            this.lajur.push(data[i]);
          }
        })
        console.log(this.lajur);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisposisidispPage');
  }

  itemTapped(catatan){
    
    this.loader = this.loadingCtrl.create({
      content: 'Please wait...',
    });
    this.loader.present();   

    this.catatandisp = catatan;
    console.log(this.iddisp.id);
  
    //tujuan
    this.tujuandisposisi = [];
          for (let i = 0; i < this.tujuan.length; i++) {
              if (this.tujuan[i].unitkerjadisosisi) {
                  var id = this.tujuan[i].ID_UNIT_KERJA;
                  var nama = this.tujuan[i].unitkerjadisosisi;
                  this.tujuandisposisi.push(id);
              }
          }
      
      //lajur
      this.lajurdisposisi = [];
          for (let i = 0; i < this.lajur.length; i++) {
              if (this.lajur[i].status) {
                  var id = this.lajur[i].id;
                  var nama = this.lajur[i].lajur_disposisi;
                  this.lajurdisposisi.push('DBSURAT.TABEL_LAJUR_DISPOSISI(' +id+ ",'"+nama+ "')");
              }
          }
  
          var datadisp= {
                      id : this.iddisp.id,
                      kd_unor : this.iddisp.kode,
                      KODE_UNOR : this.tujuandisposisi,
                      THSURATMASUK_ID: this.iddisp.id,
                      CREATED_DATE: '',
                      UPDATED_DATE: '',
                      TRKECEPATANSURAT_ID : '',
                      TRSIFATSURAT_ID : '',
                      CATATAN_DISPOSISI : catatan, 
                      DISPOSISI_LAJUR: 'DBSURAT.TYPE_LAJUR_DISPOSISI('+ this.lajurdisposisi +')',
                      JENIS_SURAT:'',
                      THSURATMASUKDISTRIBUSI_ID:'',
                      PARENT_ID:'' 
                    }
            this.http.post('http://103.40.94.42/wssurat/Api/disposisi2',datadisp)
              .subscribe(data => {
                if(this.loader)
                this.loader.dismiss();

                console.log(data);
                let alert = this.alertctrl.create({
                  title: 'Berhasil',
                  subTitle: 'Surat Berhasil di disposisikan',
                  buttons: ['OK']
                });
                alert.present();
              }, error => {
                if(this.loader)
                this.loader.dismiss();

              let alert = this.alertctrl.create({
                title: 'Ooooops !',
                subTitle: 'Surat Gagal di disposisikan',
                buttons: ['OK']
              });
              alert.present();
            })
  }

  getketerangan(param,param2){
    return this.http.get('http://103.40.94.42/wssurat/Api/disp2?id='+param+'&kode_unor='+param2)
        .subscribe((data:any=[]) => {
        this.catatan=data.CATATAN_DISPOSISI;
          console.log(this.catatan);
        })
  }

}
