import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { LoadingController,App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-disposisiasli',
  templateUrl: 'disposisiasli.html',
})
export class DisposisiasliPage {
  idsurat:any;
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
  catatandisp:string;
  loader:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public http:HttpClient, public alertctrl:AlertController, public app: App, public loadingCtrl:LoadingController) {
    this.idsurat = navParams.data;
    this.sifat = this.idsurat.sifat;
    this.kec = this.idsurat.kec;
    console.log('kodeunor ',this.idsurat.kode);

    // this.lajur1 = this.getlajursurat(this.idsurat.id,window.localStorage.getItem('kode_unor'));
    // this.tujuan1 = this.gettujuansurat(window.localStorage.getItem('kode_unor'),this.idsurat.id);
    this.catatan1 = this.getketerangan(this.idsurat.id,this.idsurat.kode);

    //tujuan surat
    this.tujuan=[];
    this.http.get('http://103.40.94.42/wssurat/Api/tujuan?kode_unor='+this.idsurat.kode+'&id='+this.idsurat.id)
    .subscribe((data:any=[]) => {
      for (let i = 0; i < data.length; i++) {
       this.tujuan.push(data[i]);
      }
    })

    //lajur disposisi
    this.lajur=[];
    this.http.get('http://103.40.94.42/wssurat/Api/lajurdisposisi?id='+this.idsurat.id+'&kd_unor='+this.idsurat.kode)
        .subscribe((data:any=[]) => {
          for (let i = 0; i < data.length; i++) {
            this.lajur.push(data[i]);
          }
        })
        console.log(this.lajur);
  }
    
    
  //save disposisi
itemTapped(catatan){

  console.log(this.idsurat.kode);
  this.loader = this.loadingCtrl.create({
    content: 'Please wait...',
  });
  this.loader.present();    


  this.catatandisp = catatan;
  console.log(this.idsurat.id);

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
                    id : this.idsurat.id,
                    kd_unor : this.idsurat.kode,
                    KODE_UNOR : this.tujuandisposisi,
                    THSURATMASUK_ID: this.idsurat.id,
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
          this.http.post('http://103.40.94.42/wssurat/Api/disposisi',datadisp)
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
              // let nav = this.app.getRootNav();
              //   nav.push(SuratasliPage);
            }, error => {
              if(this.loader)
                this.loader.dismiss();

              let alert = this.alertctrl.create({
                title: 'Ooooops !',
                subTitle: 'Surat Gagal di disposisikan',
                buttons: ['OK']
              });
              alert.present();
              console.log(error + "Oooops!");
          })

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisposisiasliPage');
  }

  getketerangan(param,param2){
    return this.http.get('http://103.40.94.42/wssurat/Api/disp?id='+param+'&kode_unor='+param2)
        .subscribe((data:any=[]) => {
        this.catatan=data.CATATAN_DISPOSISI;
          console.log(this.catatan);
        })
  }


}
