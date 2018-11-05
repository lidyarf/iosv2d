import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { LoadingController,App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pengagendaanverifikasi',
  templateUrl: 'pengagendaanverifikasi.html'
})
export class PengagendaanverifikasiPage {
  idsurat:any;
  agenda:any;
  public surat:any;
  agendatembusan:any;
  public tembusan:any;
  public Family: any;
  tverifikasi1:any;
  tverifikasi2:any;
  tverifikasi3:any;
  tverifikasi4:any;
  tverifikasi5:any;
  tverifikasitemb1:any;
  tverifikasitemb2:any;
  tverifikasitemb3:any;
  tverifikasitemb4:any;
  tverifikasitemb5:any;
  loader:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http:HttpClient, public alertctrl:AlertController, public loadingCtrl:LoadingController) {
    this.idsurat = navParams.data;
    this.agenda= this.getagendasurat(this.idsurat.id,window.localStorage.getItem('kode_unker'));
    this.agendatembusan= this.getagendatembusan(this.idsurat.id,window.localStorage.getItem('kode_unker'));

}
  
savesurat() {

    this.loader = this.loadingCtrl.create({
        content: 'Please wait...',
      });
      this.loader.present();   

    // checked tujuan surat
    this.tverifikasi1 = [];
    this.tverifikasi2 = [];
    this.tverifikasi3 = [];
    this.tverifikasi4 = [];
    this.tverifikasi5 = [];

    for (var i = 0; i < this.surat.length; i++) {
        if (this.surat[i].status == true) {
            var id = this.surat[i].id;
            this.tverifikasi1.push(id);
            }else if(this.surat[i].status == false){

            }

            for (var j = 0; j < this.surat[i].children.length; j++) {
                if (this.surat[i].children[j].status == true) {
                var id2 = this.surat[i].children[j].id;
                    this.tverifikasi2.push(id2);
                    }else if(this.surat[i].children[j].status == false){

                }

                   for (var k = 0; k < this.surat[i].children[j].children.length; k++) {
                        if (this.surat[i].children[j].children[k].status == true) {
                        var id3 = this.surat[i].children[j].children[k].id;
                            this.tverifikasi3.push(id3);
                        }else if(this.surat[i].children[j].children[k].status == false){

                        }
                

                    for (var l = 0; l < this.surat[i].children[j].children[k].children.length; l++) {
                        if (this.surat[i].children[j].children[k].children[l].status == true) {
                        var id4 = this.surat[i].children[j].children[k].children[l].id;
                            this.tverifikasi4.push(id4);
                        }else if(this.surat[i].children[j].children[k].children[l].status == false){

                        }
                        

                        for (var m = 0; m < this.surat[i].children[j].children[k].children[l].children.length; m++) {
                            if (this.surat[i].children[j].children[k].children[l].children[m].status == true) {
                            var id5 = this.surat[i].children[j].children[k].children[l].children[m].id;
                                this.tverifikasi5.push(id5);
                            }else if(this.surat[i].children[j].children[k].children[l].children[m].status == false){

                            }
                        }
                    }
                }
            }
    }

    var isi1 =  this.tverifikasi1.concat(this.tverifikasi2);
			var isi2 =  isi1.concat(this.tverifikasi3);
			var isi3 =  isi2.concat(this.tverifikasi4);
			var tujuansurat =  isi3.concat(this.tverifikasi5);
    console.log(tujuansurat);
    
    //=================================================================================
    // checked tembusan surat
    this.tverifikasitemb1 = [];
    this.tverifikasitemb2 = [];
    this.tverifikasitemb3 = [];
    this.tverifikasitemb4 = [];
    this.tverifikasitemb5 = [];

    for (var i = 0; i < this.tembusan.length; i++) {
        if (this.tembusan[i].status == true) {
            var id = this.tembusan[i].id;
            this.tverifikasitemb1.push(id);
            }else if(this.tembusan[i].status == false){

            }

            for (var j = 0; j < this.tembusan[i].children.length; j++) {
                if (this.tembusan[i].children[j].status == true) {
                var id2 = this.tembusan[i].children[j].id;
                    this.tverifikasitemb2.push(id2);
                    }else if(this.tembusan[i].children[j].status == false){

                }

                   for (var k = 0; k < this.tembusan[i].children[j].children.length; k++) {
                        if (this.tembusan[i].children[j].children[k].status == true) {
                        var id3 = this.tembusan[i].children[j].children[k].id;
                            this.tverifikasitemb3.push(id3);
                        }else if(this.tembusan[i].children[j].children[k].status == false){

                        }
                

                    for (var l = 0; l < this.tembusan[i].children[j].children[k].children.length; l++) {
                        if (this.tembusan[i].children[j].children[k].children[l].status == true) {
                        var id4 = this.tembusan[i].children[j].children[k].children[l].id;
                            this.tverifikasitemb4.push(id4);
                        }else if(this.tembusan[i].children[j].children[k].children[l].status == false){

                        }
                        

                        for (var m = 0; m < this.tembusan[i].children[j].children[k].children[l].children.length; m++) {
                            if (this.tembusan[i].children[j].children[k].children[l].children[m].status == true) {
                            var id5 = this.tembusan[i].children[j].children[k].children[l].children[m].id;
                                this.tverifikasitemb5.push(id5);
                            }else if(this.tembusan[i].children[j].children[k].children[l].children[m].status == false){

                            }
                        }
                    }
                }
            }
    }

    var isi1 =  this.tverifikasitemb1.concat(this.tverifikasitemb2);
			var isi2 =  isi1.concat(this.tverifikasitemb3);
			var isi3 =  isi2.concat(this.tverifikasitemb4);
			var tembusansurat =  isi3.concat(this.tverifikasitemb5);
    console.log(tembusansurat);
    
    //post
    var dataver = {
        id: this.idsurat.id, 
        kode_unker: window.localStorage.getItem('kode_unker'), 
        kode_unor: tujuansurat,
        kode_unor_tembusan: tembusansurat,
        kd_unor:window.localStorage.getItem('kode_unor')
    }
    console.log(dataver);

    this.http.post('http://103.40.94.42/wssurat/Api/actionver',dataver)
              .subscribe(data => {
                if(this.loader)
                this.loader.dismiss();
                let alert = this.alertctrl.create({
                    title: 'Berhasil',
                    subTitle: 'Surat Berhasil di Agendakan',
                    buttons: ['OK']
                });
                alert.present();
              }, error => {
                if(this.loader)
                this.loader.dismiss();

                let alert = this.alertctrl.create({
                    title: 'Ooooops !',
                    subTitle: 'Surat Berhasil di Agendakan',
                    buttons: ['OK']
                });
                alert.present();
            })

}
  

  getagendasurat(param,param1){
    return this.http.get('http://103.40.94.42/wssurat/Api/verifikasiagenda?id='+param+'&kode_unker='+param1+'&jenissurat=1')
    .subscribe((data:any=[]) =>{
      this.surat=[];
      for (let i = 0; i < data.length; i++) {
        this.surat.push(data[i]);
      }
    })
  }

  getagendatembusan(param,param1){
    return this.http.get('http://103.40.94.42/wssurat/Api/verifikasiagenda?id='+param+'&kode_unker='+param1+'&jenissurat=2')
    .subscribe((data:any=[]) =>{
      this.tembusan=[];
      for (let i = 0; i < data.length; i++) {
        this.tembusan.push(data[i]);
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PengagendaanverifikasiPage');
  }

}
