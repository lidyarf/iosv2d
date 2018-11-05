import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder,FormGroup,Validator,AbstractControl, Validators} from '@angular/forms';
import { HomePage } from '../home/home';
import { HttpClient} from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { IonicStorageModule, Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  authForm: FormGroup;
  public loader: any;
  toast: any;

  constructor(public navCtrl: NavController, public http: HttpClient,
    public navParams: NavParams,public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,public toastCtrl:ToastController, 
    public events:Events,public storage:Storage) {
      
      this.authForm = formBuilder.group({
        username: ['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(30)])],
        password: ['',Validators.compose([Validators.required,Validators.minLength(6)])]
      });
      
      
  }
    
  
    
  // createUser(user) {
  //   console.log('User created!')
  //   this.events.publish('user:created', user, Date.now());
  // }
  

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
    
  showToast(){
    let toast = this.toastCtrl.create({
      message: 'Username atau Password salah',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  hideToast() {
    if(this.toast)
      this.toast.dismiss();
    }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  
  
  
  onSubmit(value:any): void{
    // loading.present();
    this.showLoader();
    // this.events.publish('userloggedin',value.username);                                                                                                                                                     );
    
    //  this.http.get('http://localhost/persuratan/ws/Api/user2?userid='+value.username)
    //     .subscribe((data:any={}) => {
    //       this.storage.set('verifikasi', data.IS_VERIFIKATOR);
    //     })
      
      if(this.authForm.valid){
        this.http.get('http://portalsso.basarnas.go.id/api/login?username='+value.username+'&password='+value.password)
        .subscribe((data:any={}) => {
        if (value.username == data.USERID) {
          window.localStorage.setItem('nama',data.NAMA_LENGKAP);
          
          this.http.get('http://103.40.94.42/wssurat/Api/usersimpeg?userid='+ data.USERID)
          .subscribe((simpeg:any={}) => {
            console.log(simpeg[0].USERID);
            if (data.USERID == simpeg[0].USERID) {
              console.log(simpeg[0].photo);
              window.localStorage.setItem('photo',simpeg[0].photo);
            }
          })
          
          this.http.get('http://103.40.94.42/wssurat/Api/user')
            .subscribe((data1:any={}) => {
                for (var i = 0; i < data1.length; i++) {
									if(data1[i].USERID ==  value.username && data1[i].TRGROUP_ID == 3) {
                    this.hideLoader();
                    // loading.dismiss();
                    window.localStorage.setItem('username',value.username);
                    window.localStorage.setItem('password',value.password);
                    window.localStorage.setItem('kode_unor',data1[i].KODE_UNOR);
                    window.localStorage.setItem('id',data1[i].ID);
                    window.localStorage.setItem('verifikator',data1[i].IS_VERIFIKATOR);
                    window.localStorage.setItem('kode_unker',data1[i].KODE_UNKER);
                    this.navCtrl.setRoot(HomePage);
                  }
                }
            },err => {
              // loading.dismiss();   
              this.hideLoader();
          })

        }
      },err => {
        // loading.dismiss();
        this.hideLoader();
        this.showToast();
    });

      
    }
  }

}
