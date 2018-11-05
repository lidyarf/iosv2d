import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { ResourceTree } from '../components/ResourceTree/ResourceTree';
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { OneSignal } from '@ionic-native/onesignal';
import { SuperTabsModule } from 'ionic2-super-tabs';
// import { DocumentViewer } from '@ionic-native/document-viewer';
// import { File } from '@ionic-native/file';
// import { FileOpener } from '@ionic-native/file-opener';
// import { FileTransfer } from '@ionic-native/file-transfer';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SuratasliPage } from '../pages/suratasli/suratasli';
import { SurattembusanPage } from '../pages/surattembusan/surattembusan';
import { SuratdisposisiPage } from '../pages/suratdisposisi/suratdisposisi';
import { KonsepsuratPage } from '../pages/konsepsurat/konsepsurat';
import { SurataslidetailPage } from '../pages/surataslidetail/surataslidetail';
import { SurattembusandetailPage } from '../pages/surattembusandetail/surattembusandetail';
import { SuratdisposisidetailPage } from '../pages/suratdisposisidetail/suratdisposisidetail';
import { KonsepsuratdetailPage } from '../pages/konsepsuratdetail/konsepsuratdetail';
import { PengagendaaninfoPage } from '../pages/pengagendaaninfo/pengagendaaninfo';
import { PengagendaanPage } from '../pages/pengagendaan/pengagendaan';
import { PengagendaandetailPage } from '../pages/pengagendaandetail/pengagendaandetail';
// import { PengagendaanasalPage } from '../pages/pengagendaanasal/pengagendaanasal';
import { PengagendaanverifikasiPage } from '../pages/pengagendaanverifikasi/pengagendaanverifikasi';
import { FiltermodalPage } from '../pages/filtermodal/filtermodal';

import { DisposisiasliPage } from '../pages/disposisiasli/disposisiasli';
import { AsalasliPage } from '../pages/asalasli/asalasli';
import { TrackingasliPage } from '../pages/trackingasli/trackingasli';
import { StatusasliPage } from '../pages/statusasli/statusasli';

import { DisposisidispPage } from '../pages/disposisidisp/disposisidisp';
import { AsaldispPage } from '../pages/asaldisp/asaldisp';
import { TrackingdispPage } from '../pages/trackingdisp/trackingdisp';
import { StatusdispPage } from '../pages/statusdisp/statusdisp';

import { KonsepinfoPage } from '../pages/konsepinfo/konsepinfo';
import { KonsepcatatanPage } from '../pages/konsepcatatan/konsepcatatan';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SuratasliPage,
    SurattembusanPage,
    SuratdisposisiPage,
    KonsepsuratPage,
    SurataslidetailPage,
    DisposisiasliPage,
    AsalasliPage,
    TrackingasliPage,
    StatusasliPage,
    DisposisidispPage,
    AsaldispPage,
    TrackingdispPage,
    StatusdispPage,
    SurattembusandetailPage,
    SuratdisposisidetailPage,
    KonsepsuratdetailPage,
    KonsepinfoPage,
    KonsepcatatanPage,
    PengagendaanPage,
    PengagendaandetailPage,
    PengagendaaninfoPage,
    PengagendaanverifikasiPage,
    FiltermodalPage,
    ResourceTree
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ChartsModule,
    IonicStorageModule.forRoot(),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SuratasliPage,
    SuratdisposisiPage,
    SurattembusanPage,
    KonsepsuratPage,
    SurataslidetailPage,
    DisposisiasliPage,
    AsalasliPage,
    TrackingasliPage,
    StatusasliPage,
    DisposisidispPage,
    AsaldispPage,
    TrackingdispPage,
    StatusdispPage,
    SurattembusandetailPage,
    SuratdisposisidetailPage,
    KonsepsuratdetailPage,
    KonsepinfoPage,
    KonsepcatatanPage,
    PengagendaanPage,
    PengagendaandetailPage,
    PengagendaaninfoPage,
    PengagendaanverifikasiPage,
    FiltermodalPage,
    ResourceTree
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OneSignal,
    // DocumentViewer,
    InAppBrowser,
    // File,
    // FileOpener,
    // FileTransfer
  ]
})
export class AppModule {}
