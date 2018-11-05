webpackJsonp([25],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsalasliPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AsalasliPage = /** @class */ (function () {
    function AsalasliPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.idsurat = navParams.data;
        this.surat1 = this.getsuratasli(this.idsurat.id);
        console.log(this.idsurat.id);
        console.log(this.getsuratasli(this.idsurat.id));
    }
    AsalasliPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AsalasliPage');
    };
    AsalasliPage.prototype.getsuratasli = function (param) {
        var _this = this;
        return this.http.get('http://103.40.94.42/wssurat/Api/surat?id=' + param)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.surat = [];
            for (var i = 0; i < data.data.length; i++) {
                _this.surat.push(data.data[i]);
            }
        });
    };
    AsalasliPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asalasli',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/asalasli/asalasli.html"*/'<ion-content class="page">\n    <br><h4 text-center>INFO SURAT</h4>\n    <ion-card *ngFor = "let i of surat" class="padding-sm">\n        <ion-grid>\n        <ion-row><ion-col col-5 style="font-size: 15px"><b>Asal Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.TEXT_ASAL_SURAT}}</ion-col></ion-row>\n        <ion-row><ion-col col-5 style="font-size: 15px"><b>Perihal</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.PERIHAL}}</ion-col></ion-row>\n        <ion-row><ion-col col-5 style="font-size: 15px"><b>Tanggal Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.TGL_SURAT}}</ion-col></ion-row>\n        <ion-row><ion-col col-5 style="font-size: 15px"><b>Nomor Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.NO_SURAT}}</ion-col></ion-row>\n        <ion-row><ion-col col-5 style="font-size: 15px"><b>Nomor/Agenda</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.NO_AGENDA}}</ion-col></ion-row>\n        <ion-row><ion-col col-5 style="font-size: 15px"><b>Sifat Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.SIFAT_SURAT}}</ion-col></ion-row>\n        <ion-row><ion-col col-5 style="font-size: 15px"><b>Klasifikasi Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.KECEPATAN_SURAT}}</ion-col></ion-row>\n        <ion-row><ion-col col-5 style="font-size: 15px"><b>Deskripsi</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.DESKRIPSI_SINGKAT}}</ion-col></ion-row>\n    </ion-grid>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/asalasli/asalasli.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AsalasliPage);
    return AsalasliPage;
}());

//# sourceMappingURL=asalasli.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsaldispPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AsaldispPage = /** @class */ (function () {
    function AsaldispPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.iddisp = navParams.data;
        this.surat1 = this.getsuratasli(this.iddisp.id);
        console.log(this.iddisp);
        console.log(this.getsuratasli(this.iddisp.id));
    }
    AsaldispPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AsaldispPage');
    };
    AsaldispPage.prototype.getsuratasli = function (param) {
        var _this = this;
        return this.http.get('http://103.40.94.42/wssurat/Api/surat?id=' + param)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.suratd = [];
            for (var i = 0; i < data.data.length; i++) {
                _this.suratd.push(data.data[i]);
            }
        });
    };
    AsaldispPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-asaldisp',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/asaldisp/asaldisp.html"*/'<ion-content class="page">\n        <br><h4 text-center>INFO SURAT</h4>\n        <ion-card *ngFor = "let i of suratd" class="padding-sm">\n            <ion-grid>\n            <ion-row><ion-col col-5 style="font-size: 15px"><b>Asal Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.TEXT_ASAL_SURAT}}</ion-col></ion-row>\n            <ion-row><ion-col col-5 style="font-size: 15px"><b>Perihal</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.PERIHAL}}</ion-col></ion-row>\n            <ion-row><ion-col col-5 style="font-size: 15px"><b>Tanggal Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.TGL_SURAT}}</ion-col></ion-row>\n            <ion-row><ion-col col-5 style="font-size: 15px"><b>Nomor Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.NO_SURAT}}</ion-col></ion-row>\n            <ion-row><ion-col col-5 style="font-size: 15px"><b>Nomor/Agenda</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.NO_AGENDA}}</ion-col></ion-row>\n            <ion-row><ion-col col-5 style="font-size: 15px"><b>Sifat Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.SIFAT_SURAT}}</ion-col></ion-row>\n            <ion-row><ion-col col-5 style="font-size: 15px"><b>Klasifikasi Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.KECEPATAN_SURAT}}</ion-col></ion-row>\n            <ion-row><ion-col col-5 style="font-size: 15px"><b>Deskripsi</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.DESKRIPSI_SINGKAT}}</ion-col></ion-row>\n        </ion-grid>\n        </ion-card>\n    </ion-content>\n    '/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/asaldisp/asaldisp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AsaldispPage);
    return AsaldispPage;
}());

//# sourceMappingURL=asaldisp.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisposisiasliPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DisposisiasliPage = /** @class */ (function () {
    function DisposisiasliPage(navCtrl, navParams, http, alertctrl, app, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertctrl = alertctrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.idsurat = navParams.data;
        this.sifat = this.idsurat.sifat;
        this.kec = this.idsurat.kec;
        console.log('kodeunor ', this.idsurat.kode);
        // this.lajur1 = this.getlajursurat(this.idsurat.id,window.localStorage.getItem('kode_unor'));
        // this.tujuan1 = this.gettujuansurat(window.localStorage.getItem('kode_unor'),this.idsurat.id);
        this.catatan1 = this.getketerangan(this.idsurat.id, this.idsurat.kode);
        //tujuan surat
        this.tujuan = [];
        this.http.get('http://103.40.94.42/wssurat/Api/tujuan?kode_unor=' + this.idsurat.kode + '&id=' + this.idsurat.id)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            for (var i = 0; i < data.length; i++) {
                _this.tujuan.push(data[i]);
            }
        });
        //lajur disposisi
        this.lajur = [];
        this.http.get('http://103.40.94.42/wssurat/Api/lajurdisposisi?id=' + this.idsurat.id + '&kd_unor=' + this.idsurat.kode)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            for (var i = 0; i < data.length; i++) {
                _this.lajur.push(data[i]);
            }
        });
        console.log(this.lajur);
    }
    //save disposisi
    DisposisiasliPage.prototype.itemTapped = function (catatan) {
        var _this = this;
        console.log(this.idsurat.kode);
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loader.present();
        this.catatandisp = catatan;
        console.log(this.idsurat.id);
        //tujuan
        this.tujuandisposisi = [];
        for (var i = 0; i < this.tujuan.length; i++) {
            if (this.tujuan[i].unitkerjadisosisi) {
                var id = this.tujuan[i].ID_UNIT_KERJA;
                var nama = this.tujuan[i].unitkerjadisosisi;
                this.tujuandisposisi.push(id);
            }
        }
        //lajur
        this.lajurdisposisi = [];
        for (var i = 0; i < this.lajur.length; i++) {
            if (this.lajur[i].status) {
                var id = this.lajur[i].id;
                var nama = this.lajur[i].lajur_disposisi;
                this.lajurdisposisi.push('DBSURAT.TABEL_LAJUR_DISPOSISI(' + id + ",'" + nama + "')");
            }
        }
        var datadisp = {
            id: this.idsurat.id,
            kd_unor: this.idsurat.kode,
            KODE_UNOR: this.tujuandisposisi,
            THSURATMASUK_ID: this.idsurat.id,
            CREATED_DATE: '',
            UPDATED_DATE: '',
            TRKECEPATANSURAT_ID: '',
            TRSIFATSURAT_ID: '',
            CATATAN_DISPOSISI: catatan,
            DISPOSISI_LAJUR: 'DBSURAT.TYPE_LAJUR_DISPOSISI(' + this.lajurdisposisi + ')',
            JENIS_SURAT: '',
            THSURATMASUKDISTRIBUSI_ID: '',
            PARENT_ID: ''
        };
        this.http.post('http://103.40.94.42/wssurat/Api/disposisi', datadisp)
            .subscribe(function (data) {
            if (_this.loader)
                _this.loader.dismiss();
            console.log(data);
            var alert = _this.alertctrl.create({
                title: 'Berhasil',
                subTitle: 'Surat Berhasil di disposisikan',
                buttons: ['OK']
            });
            alert.present();
            // let nav = this.app.getRootNav();
            //   nav.push(SuratasliPage);
        }, function (error) {
            if (_this.loader)
                _this.loader.dismiss();
            var alert = _this.alertctrl.create({
                title: 'Ooooops !',
                subTitle: 'Surat Gagal di disposisikan',
                buttons: ['OK']
            });
            alert.present();
            console.log(error + "Oooops!");
        });
    };
    DisposisiasliPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DisposisiasliPage');
    };
    DisposisiasliPage.prototype.getketerangan = function (param, param2) {
        var _this = this;
        return this.http.get('http://103.40.94.42/wssurat/Api/disp?id=' + param + '&kode_unor=' + param2)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.catatan = data.CATATAN_DISPOSISI;
            console.log(_this.catatan);
        });
    };
    DisposisiasliPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-disposisiasli',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/disposisiasli/disposisiasli.html"*/'<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <h3><b>Sifat Surat</b></h3>\n      <h4><span *ngIf="sifat == 1">Biasa</span>\n      <span *ngIf="sifat == 2">Rahasia</span>\n      <span *ngIf="sifat == 3">Sangat Rahasia</span></h4>\n  </ion-card-header>\n  <ion-card-header class="displine">\n    <h3><b>Kecepatan Surat</b></h3>\n    <h4><span *ngIf="kec == 1">Biasa</span>\n    <span *ngIf="kec == 2">Segera</span>\n    <span *ngIf="kec == 3">Sangat Segera</span></h4>\n  </ion-card-header>\n\n    <h3 text-center><b>DITERUSKAN KEPADA</b></h3>\n    <br>\n    <div *ngFor="let tr of tujuan" class="row-surat">\n      <ion-checkbox  [(ngModel)]="tr.unitkerjadisosisi" class="cb-surat"></ion-checkbox>\n      <span *ngFor = "let tr2 of tr.nama_unit_kerja" class="cb-surat-label">{{tr2.jabatan_unor}}</span>\n    </div><br>\n\n    <h3 text-center><b>LAJUR DISPOSISI</b></h3><br>\n    <div *ngFor = "let lj of lajur" class="row-surat">\n      <ion-checkbox [(ngModel)]="lj.status" class="cb-surat"></ion-checkbox>\n      <span class="cb-surat-label">{{lj.lajur_disposisi}}</span>\n    </div>\n    <br>\n\n    <h3 text-center><b>ISI DISPOSISI</b></h3>\n    <ion-textarea [(ngModel)]="catatan" placeholder="Masukkan Keterangan/Catatan" class="textarea"></ion-textarea>\n\n    <button ion-button full color="primary" type="submit" (click)="itemTapped(catatan)">DISPOSISI</button>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/disposisiasli/disposisiasli.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */]])
    ], DisposisiasliPage);
    return DisposisiasliPage;
}());

//# sourceMappingURL=disposisiasli.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisposisidispPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DisposisidispPage = /** @class */ (function () {
    function DisposisidispPage(navCtrl, navParams, http, alertctrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertctrl = alertctrl;
        this.loadingCtrl = loadingCtrl;
        this.iddisp = navParams.data;
        this.sifat = this.iddisp.sifat;
        this.kec = this.iddisp.kec;
        console.log('IDdisp ', this.iddisp);
        console.log('kodeunor ', this.iddisp.kode);
        this.catatan1 = this.getketerangan(this.iddisp.id, this.iddisp.kode);
        //tujuan surat
        this.tujuan = [];
        this.http.get('http://103.40.94.42/wssurat/Api/tujuandisp?kode_unor=' + this.iddisp.kode + '&id=' + this.iddisp.id)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            for (var i = 0; i < data.length; i++) {
                _this.tujuan.push(data[i]);
            }
        });
        //lajur disposisi
        this.lajur = [];
        this.http.get('http://103.40.94.42/wssurat/Api/lajurdisposisi2?id=' + this.iddisp.id + '&kd_unor=' + this.iddisp.kode)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            for (var i = 0; i < data.length; i++) {
                _this.lajur.push(data[i]);
            }
        });
        console.log(this.lajur);
    }
    DisposisidispPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DisposisidispPage');
    };
    DisposisidispPage.prototype.itemTapped = function (catatan) {
        var _this = this;
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loader.present();
        this.catatandisp = catatan;
        console.log(this.iddisp.id);
        //tujuan
        this.tujuandisposisi = [];
        for (var i = 0; i < this.tujuan.length; i++) {
            if (this.tujuan[i].unitkerjadisosisi) {
                var id = this.tujuan[i].ID_UNIT_KERJA;
                var nama = this.tujuan[i].unitkerjadisosisi;
                this.tujuandisposisi.push(id);
            }
        }
        //lajur
        this.lajurdisposisi = [];
        for (var i = 0; i < this.lajur.length; i++) {
            if (this.lajur[i].status) {
                var id = this.lajur[i].id;
                var nama = this.lajur[i].lajur_disposisi;
                this.lajurdisposisi.push('DBSURAT.TABEL_LAJUR_DISPOSISI(' + id + ",'" + nama + "')");
            }
        }
        var datadisp = {
            id: this.iddisp.id,
            kd_unor: this.iddisp.kode,
            KODE_UNOR: this.tujuandisposisi,
            THSURATMASUK_ID: this.iddisp.id,
            CREATED_DATE: '',
            UPDATED_DATE: '',
            TRKECEPATANSURAT_ID: '',
            TRSIFATSURAT_ID: '',
            CATATAN_DISPOSISI: catatan,
            DISPOSISI_LAJUR: 'DBSURAT.TYPE_LAJUR_DISPOSISI(' + this.lajurdisposisi + ')',
            JENIS_SURAT: '',
            THSURATMASUKDISTRIBUSI_ID: '',
            PARENT_ID: ''
        };
        this.http.post('http://103.40.94.42/wssurat/Api/disposisi2', datadisp)
            .subscribe(function (data) {
            if (_this.loader)
                _this.loader.dismiss();
            console.log(data);
            var alert = _this.alertctrl.create({
                title: 'Berhasil',
                subTitle: 'Surat Berhasil di disposisikan',
                buttons: ['OK']
            });
            alert.present();
        }, function (error) {
            if (_this.loader)
                _this.loader.dismiss();
            var alert = _this.alertctrl.create({
                title: 'Ooooops !',
                subTitle: 'Surat Gagal di disposisikan',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    DisposisidispPage.prototype.getketerangan = function (param, param2) {
        var _this = this;
        return this.http.get('http://103.40.94.42/wssurat/Api/disp2?id=' + param + '&kode_unor=' + param2)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.catatan = data.CATATAN_DISPOSISI;
            console.log(_this.catatan);
        });
    };
    DisposisidispPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-disposisidisp',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/disposisidisp/disposisidisp.html"*/'<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n        <h3><b>Sifat Surat</b></h3>\n        <h4><span *ngIf="sifat == 1">Biasa</span>\n        <span *ngIf="sifat == 2">Rahasia</span>\n        <span *ngIf="sifat == 3">Sangat Rahasia</span></h4>\n    </ion-card-header>\n    <ion-card-header class="displine">\n      <h3><b>Kecepatan Surat</b></h3>\n      <h4><span *ngIf="kec == 1">Biasa</span>\n      <span *ngIf="kec == 2">Segera</span>\n      <span *ngIf="kec == 3">Sangat Segera</span></h4>\n    </ion-card-header>\n  \n    <h3 text-center><b>DITERUSKAN KEPADA</b></h3>\n    <br>\n    <div *ngFor="let tr of tujuan" class="row-surat">\n      <ion-checkbox  [(ngModel)]="tr.unitkerjadisosisi" class="cb-surat"></ion-checkbox>\n      <span *ngFor = "let tr2 of tr.nama_unit_kerja" class="cb-surat-label">{{tr2.jabatan_unor}}</span>\n    </div><br>\n\n    <h3 text-center><b>LAJUR DISPOSISI</b></h3><br>\n    <div *ngFor = "let lj of lajur" class="row-surat">\n      <ion-checkbox [(ngModel)]="lj.status" class="cb-surat"></ion-checkbox>\n      <span class="cb-surat-label">{{lj.lajur_disposisi}}</span>\n    </div>\n    <br>\n\n    <h3 text-center><b>ISI DISPOSISI</b></h3>\n    <ion-textarea [(ngModel)]="catatan" placeholder="Masukkan Keterangan/Catatan" class="textarea"></ion-textarea>\n\n    <button ion-button full color="primary" type="submit" (click)="itemTapped(catatan)">DISPOSISI</button>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/disposisidisp/disposisidisp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */]])
    ], DisposisidispPage);
    return DisposisidispPage;
}());

//# sourceMappingURL=disposisidisp.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KonsepcatatanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KonsepcatatanPage = /** @class */ (function () {
    function KonsepcatatanPage(navCtrl, navParams, http, alertctrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertctrl = alertctrl;
        this.loadingCtrl = loadingCtrl;
        this.idsurat = navParams.data;
        this.statusdata = [
            { id: 1, name: 'Setuju' },
            { id: 2, name: 'Tolak' }
        ];
    }
    KonsepcatatanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KonsepcatatanPage');
    };
    KonsepcatatanPage.prototype.itemTapped = function (a, b) {
        var _this = this;
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loader.present();
        var datastatus = {
            id: this.idsurat.id,
            kode_unor: window.localStorage.getItem('kode_unor'),
            unitkerja: window.localStorage.getItem('kode_unker'),
            status: a,
            catatan: b
        };
        console.log(datastatus);
        // var headers = new Headers();
        // headers.append('Access-Control-Allow-Origin' , '*');
        // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        // headers.append('Accept','application/json');
        // headers.append('content-type','application/json');
        // let options = new RequestOptions({ headers:headers});
        this.http.post('http://103.40.94.42/wssurat/Api/statussuratkeluar', datastatus)
            .subscribe(function (data) {
            if (_this.loader)
                _this.loader.dismiss();
            console.log(data);
            var alert = _this.alertctrl.create({
                title: 'Berhasil',
                subTitle: 'Verifikasi Berhasil',
                buttons: ['OK']
            });
            alert.present();
        }, function (error) {
            if (_this.loader)
                _this.loader.dismiss();
            var alert = _this.alertctrl.create({
                title: 'Ooooops !',
                subTitle: 'Verifikasi Gagal',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    KonsepcatatanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-konsepcatatan',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/konsepcatatan/konsepcatatan.html"*/'<ion-content padding>\n    <ion-card>\n        <ion-grid>\n          <ion-row>\n              <ion-col col-4><ion-label>Status Surat</ion-label></ion-col>\n              <ion-col col-6>\n                <ion-select  [(ngModel)]="status" class="myCustomSelect">\n                  <ion-option *ngFor="let i of statusdata" [value]="i.id">{{i.name}}</ion-option>\n                </ion-select>\n              </ion-col>\n          </ion-row>\n    \n          <ion-label class="ket">Keterangan</ion-label>\n            <ion-textarea [(ngModel)]="ket" placeholder="Masukkan Keterangan"></ion-textarea>\n        </ion-grid>\n      <button ion-button full color="primary" type="submit" (click)="itemTapped(status,ket)">VERIFIKASI</button>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/konsepcatatan/konsepcatatan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */]])
    ], KonsepcatatanPage);
    return KonsepcatatanPage;
}());

//# sourceMappingURL=konsepcatatan.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KonsepinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KonsepinfoPage = /** @class */ (function () {
    function KonsepinfoPage(navCtrl, navParams, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.idsurat = navParams.data;
        this.surat1 = this.getsuratkeluar(this.idsurat.id);
    }
    KonsepinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KonsepinfoPage');
    };
    KonsepinfoPage.prototype.showLoader = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loader.present();
    };
    KonsepinfoPage.prototype.hideLoader = function () {
        if (this.loader)
            this.loader.dismiss();
    };
    KonsepinfoPage.prototype.getsuratkeluar = function (param) {
        var _this = this;
        this.showLoader();
        return this.http.get('http://103.40.94.42/wssurat/Api/detailsuratkeluar?id=' + param)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.hideLoader();
            _this.surat = [];
            for (var i = 0; i < data.data.length; i++) {
                _this.surat.push(data.data[i]);
            }
        });
    };
    KonsepinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-konsepinfo',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/konsepinfo/konsepinfo.html"*/'<ion-content class="page">\n<br><h4 text-center>INFO SURAT</h4>\n  <ion-card *ngFor = "let i of surat" class="padding-sm">\n    <ion-row><ion-col col-5 style="font-size:15px"><b>Penyusun Konsep</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.CREATED_ID}}/{{i.CREATED_UNITKERJA}}</ion-col></ion-row>\n    <ion-row><ion-col col-5 style="font-size:15px"><b>Pengirim/Penandatangan</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.UNITKERJAPENANDATANGAN_TEXT}}</ion-col></ion-row>\n    <ion-row><ion-col col-5 style="font-size:15px"><b>Tujuan</b></ion-col><ion-col col-7 style="font-size: 15px">Tujuan</ion-col></ion-row>\n    <ion-row><ion-col col-5 style="font-size:15px"><b>Klasifikasi Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.KLASIFIKASI_SURAT}}</ion-col></ion-row>\n    <ion-row><ion-col col-5 style="font-size:15px"><b>Sifat Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.SIFAT_SURAT}}</ion-col></ion-row>\n    <ion-row><ion-col col-5 style="font-size:15px"><b>Kecepatan Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.KECEPATAN_SURAT}}</ion-col></ion-row>\n    <ion-row><ion-col col-5 style="font-size:15px"><b>Nomor Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.NO_SURAT}}</ion-col></ion-row>\n    <ion-row><ion-col col-5 style="font-size:15px"><b>Tanggal Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.TGL_SURAT}}</ion-col></ion-row>\n    <ion-row><ion-col col-5 style="font-size:15px"><b>Perihal</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.PERIHAL}}</ion-col></ion-row>\n    <ion-row><ion-col col-5 style="font-size:15px"><b>Jumlah Lampiran</b></ion-col><ion-col col-7 style="font-size: 15px">0</ion-col></ion-row>\n    <ion-row><ion-col col-5 style="font-size:15px"><b>Petugas Pengirim</b></ion-col><ion-col col-7 style="font-size: 15px">Pengirim</ion-col></ion-row>\n    <ion-row><ion-col col-5 style="font-size:15px"><b>Pemeriksa</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.NAMA_UNOR}}</ion-col></ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/konsepinfo/konsepinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */]])
    ], KonsepinfoPage);
    return KonsepinfoPage;
}());

//# sourceMappingURL=konsepinfo.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KonsepsuratPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__konsepsuratdetail_konsepsuratdetail__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var KonsepsuratPage = /** @class */ (function () {
    function KonsepsuratPage(navCtrl, navParams, http, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.nCnt = 0;
        this.pagenumber = 0;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        if (this.nCnt == 0) {
            this.teks2 = "hilang";
        }
        else {
            this.teks2 = "ada";
        }
        this.konsep = this.getsuratkonsep(this.nCnt);
    }
    KonsepsuratPage.prototype.doRefresh = function (refresher, item) {
        console.log('Begin async operation', refresher);
        this.getsuratkonsep(this.nCnt);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    KonsepsuratPage.prototype.showLoader = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loader.present();
    };
    KonsepsuratPage.prototype.hideLoader = function () {
        if (this.loader)
            this.loader.dismiss();
    };
    KonsepsuratPage.prototype.getsuratkonsep = function (n) {
        var _this = this;
        this.showLoader();
        return this.http.get('http://103.40.94.42/wssurat/Api/suratkeluar/page/' + n + '?kode_unor=' + window.localStorage.getItem('kode_unor'))
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.hideLoader();
            _this.isi = [];
            for (var i = 0; i < data.items.length; i++) {
                if (data.items[i].TRKECEPATANSURAT_ID == 3) {
                    _this.bground = '#f44336';
                }
                else if (data.items[i].TRKECEPATANSURAT_ID == 2) {
                    _this.bground = '';
                }
                else {
                    _this.bground = '';
                }
                if (data.items[i].verifikasi == "Belum") {
                    _this.centang = "kuning";
                }
                else if (data.items[i].verifikasi == "Sudah") {
                    _this.centang = "hilang";
                }
                _this.isi.push({
                    perihal: data.items[i].PERIHAL,
                    klasifikasi: data.items[i].KLASIFIKASI_SURAT,
                    tglsurat: data.items[i].CREATED_DATE,
                    icon: _this.icons[Math.floor(Math.random() * _this.icons.length)],
                    bg: _this.bground,
                    id: data.items[i].ID,
                    verifikasi: data.items[i].verifikasi,
                    tujuan: data.items[i].TEXT_TUJUAN_SURAT,
                    ver: _this.centang
                });
            }
            _this.pagecount = data._meta.pageCount;
            if (_this.pagecount == 0) {
                _this.teks = "hilang";
            }
            else {
                _this.teks = "ada";
            }
        });
    };
    KonsepsuratPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__konsepsuratdetail_konsepsuratdetail__["a" /* KonsepsuratdetailPage */], {
            item: item
        });
    };
    KonsepsuratPage.prototype.df = function (tes) {
        window.open("http://103.40.94.42/wssurat/Api/downloadsuratkeluar?id=" + tes, "_system", "location=yes");
    };
    KonsepsuratPage.prototype.nextpage = function (item) {
        console.log(item - 2);
        console.log(this.pagenumber);
        this.nCnt = this.nCnt + 10;
        if (this.pagenumber >= item - 2) {
            this.teks = "hilang";
        }
        else {
            this.teks = "ada";
        }
        if (this.nCnt == 0) {
            this.teks2 = "hilang";
        }
        else {
            this.teks2 = "ada";
        }
        this.getsuratkonsep(this.nCnt);
        this.pagenumber = this.pagenumber + 1;
        return this.nCnt;
    };
    KonsepsuratPage.prototype.backpage = function (item) {
        this.nCnt = this.nCnt - 10;
        if (this.pagenumber <= 0) {
            this.teks = "hilang";
        }
        else {
            this.teks = "ada";
        }
        if (this.nCnt == 0) {
            this.teks2 = "hilang";
        }
        else {
            this.teks2 = "ada";
        }
        this.getsuratkonsep(this.nCnt);
        this.pagenumber = this.pagenumber - 1;
        return this.nCnt;
    };
    KonsepsuratPage.prototype.Logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Exit',
            message: 'Are you want to exit,' + window.localStorage.getItem('nama'),
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        window.localStorage.removeItem('username');
                        window.localStorage.removeItem('password');
                        window.localStorage.removeItem('nama');
                        window.localStorage.removeItem('kode_unor');
                        window.localStorage.removeItem('kode_unker');
                        window.localStorage.removeItem('id');
                        window.localStorage.removeItem('verifikator');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                        _this.navCtrl.popToRoot();
                        console.log('OK');
                    }
                }
            ]
        });
        alert.present();
    };
    KonsepsuratPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KonsepsuratPage');
    };
    KonsepsuratPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-konsepsurat',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/konsepsurat/konsepsurat.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Konsep Surat</ion-title>\n    <ion-buttons end="" class="bar-buttons bar-buttons-md">\n      <button icon-only="" ion-button="" class="bar-button bar-button-md bar-button-default bar-button-default-md" (click)="Logout()"><span class="button-inner">\n        <ion-icon ios="ios-log-in" md="md-log-in" role="img" class="icon icon-md ion-md-log-in" aria-label="options"></ion-icon>\n      </span><div class="button-effect" style="transform: translate3d(-20px, -14px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="doRefresh($event,tes1)">\n        <ion-refresher-content\n          pullingIcon="arrow-dropdown"\n          pullingText="Pull to refresh"\n          refreshingSpinner="circles"\n          refreshingText="Refreshing...">\n        </ion-refresher-content>\n      </ion-refresher>\n      \n    <ion-card *ngFor="let tes of isi" (click)="itemTapped($event, tes)">\n          <ion-grid>\n              <ion-row>\n                <ion-col col-10 style="font-size:14px"><b>{{tes.klasifikasi}}</b></ion-col>\n                  <ion-col>\n                      <ion-icon ios="ios-cloud-download-outline" md="md-cloud-download" role="img" class="icon icon-md ion-md-cloud-download-outline" style="font-size: 3.2em !important;" (click)="df(tes.id)"></ion-icon>\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-8 style="font-size:13px">Perihal Surat :<br>{{tes.perihal}}</ion-col>\n                <ion-col col-3 style="font-size:13px">{{tes.tglsurat}}</ion-col>\n                <ion-col col-1 class="{{tes.ver}}"><ion-icon  name="checkmark-circle" style="font-size: 1.2em !important;" ></ion-icon></ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col style="font-size:13px">Tujuan Surat :<br>{{tes.tujuan}}</ion-col>\n              </ion-row>\n          </ion-grid>\n      </ion-card>  \n    </ion-content>\n    <ion-footer>\n        <ion-toolbar>\n            <ion-buttons left>\n            <button (click)="backpage(pagecount)" class="{{teks2}} button-clear" text-left left><span style="font-size:12pt">\n                <ion-icon name="arrow-back" role="img" class="icon icon-ios ion-ios-arrow-back" aria-label="arrow back"></ion-icon>\n                Sebelumnya\n              </span><div class="button-effect"></div></button>\n            </ion-buttons>\n            <ion-label style="color:white">Page {{pagenumber+1}} / {{pagecount}}</ion-label>\n              <ion-buttons end *ngIf="pagecount != 0">\n              <button (click)="nextpage(pagecount)" class="{{teks}} button-clear2" text-right><span style="font-size:12pt">\n                  Selanjutnya\n                  <ion-icon name="arrow-forward" role="img" class="icon icon-ios ion-ios-arrow-forward" aria-label="arrow forward"></ion-icon>\n                </span><div class="button-effect"></div></button>\n              </ion-buttons>\n        </ion-toolbar>\n    </ion-footer>'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/konsepsurat/konsepsurat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], KonsepsuratPage);
    return KonsepsuratPage;
}());

//# sourceMappingURL=konsepsurat.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KonsepsuratdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__konsepinfo_konsepinfo__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__konsepcatatan_konsepcatatan__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KonsepsuratdetailPage = /** @class */ (function () {
    function KonsepsuratdetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__konsepinfo_konsepinfo__["a" /* KonsepinfoPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_3__konsepcatatan_konsepcatatan__["a" /* KonsepcatatanPage */];
        this.idkonsep = this.navParams.get('item');
        console.log(this.idkonsep);
        this.ver = this.idkonsep.verifikasi;
    }
    KonsepsuratdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KonsepsuratdetailPage');
    };
    KonsepsuratdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-konsepsuratdetail',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/konsepsuratdetail/konsepsuratdetail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Konsep Surat</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-tabs *ngIf="ver == \'Belum\'" tabsPlacement="top" color=\'primary\'>\n    <ion-tab [root]="tab1" tabTitle="Info Surat" [rootParams]="idkonsep"></ion-tab>\n    <ion-tab [root]="tab2" tabTitle="Isi & Catatan Surat" [rootParams]="idkonsep"></ion-tab>\n  </ion-tabs>\n\n  <ion-tabs *ngIf="ver == \'Sudah\'" tabsPlacement="top" color=\'primary\'>\n    <ion-tab [root]="tab1" tabTitle="Info Surat" [rootParams]="idkonsep" ></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/konsepsuratdetail/konsepsuratdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], KonsepsuratdetailPage);
    return KonsepsuratdetailPage;
}());

//# sourceMappingURL=konsepsuratdetail.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PengagendaanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pengagendaandetail_pengagendaandetail__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filtermodal_filtermodal__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PengagendaanPage = /** @class */ (function () {
    function PengagendaanPage(navCtrl, navParams, http, loadingCtrl, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.nCnt = 0;
        this.pagenumber = 0;
        this.datatglawal = '';
        this.datatglakhir = '';
        this.datakec = '';
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        if (this.datatglawal == undefined) {
            this.datatglawal = '';
        }
        if (this.datatglakhir == undefined) {
            this.datatglakhir = '';
        }
        if (this.datakec == undefined) {
            this.datakec = '';
        }
        this.asli = this.getagendasurat(this.nCnt, this.datatglawal, this.datatglakhir, this.datakec);
        if (this.nCnt == 0) {
            this.teks2 = "hilang";
        }
        else {
            this.teks2 = "ada";
        }
    }
    PengagendaanPage.prototype.showLoader = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loader.present();
    };
    PengagendaanPage.prototype.hideLoader = function () {
        if (this.loader)
            this.loader.dismiss();
    };
    PengagendaanPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.getagendasurat(this.nCnt, this.datatglawal, this.datatglakhir, this.datakec);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    PengagendaanPage.prototype.getagendasurat = function (no, tglawal, tglakhir, kecsurat) {
        var _this = this;
        this.showLoader();
        return this.http.get('http://103.40.94.42/wssurat/Api/suratasli/page/' + no + '?tgl_awal=' + tglawal + '&tgl_akhir=' + tglakhir + '&kecsurat=' + kecsurat)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.hideLoader();
            _this.isi = [];
            for (var i = 0; i < data.items.length; i++) {
                if (data.items[i].TRKECEPATANSURAT_ID == 3) {
                    _this.tulisan = '1';
                }
                else if (data.items[i].TRKECEPATANSURAT_ID == 2) {
                    _this.tulisan = '2';
                }
                else {
                    _this.bground = '';
                    _this.tulisan = '3';
                }
                _this.isi.push({
                    perihal: data.items[i].PERIHAL,
                    asalsurat: data.items[i].TEXT_ASAL_SURAT,
                    tglsurat: data.items[i].TGL_AGENDA,
                    icon: _this.icons[Math.floor(Math.random() * _this.icons.length)],
                    id: data.items[i].ID,
                    disp: data.items[i].disp,
                    tls: _this.tulisan
                });
            }
            _this.pagecount = data._meta.pageCount;
        });
    };
    PengagendaanPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pengagendaandetail_pengagendaandetail__["a" /* PengagendaandetailPage */], {
            item: item
        });
    };
    PengagendaanPage.prototype.filter = function (item) {
        var _this = this;
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__filtermodal_filtermodal__["a" /* FiltermodalPage */]);
        myModal.onDidDismiss(function (data) {
            if (data === void 0) { data = []; }
            for (var i = 0; i < data.length; i++) {
                _this.datatglawal = data[0].a;
                _this.datatglakhir = data[1].b;
                _this.datakec = data[2].kec;
            }
            _this.getagendasurat(_this.nCnt, _this.datatglawal, _this.datatglakhir, _this.datakec);
        });
        myModal.present();
    };
    PengagendaanPage.prototype.nextpage = function (item) {
        this.nCnt = this.nCnt + 10;
        if (this.pagenumber >= item - 2) {
            this.teks = "hilang";
        }
        else {
            this.teks = "ada";
        }
        if (this.nCnt == 0) {
            this.teks2 = "hilang";
        }
        else {
            this.teks2 = "ada";
        }
        this.getagendasurat(this.nCnt, this.datatglawal, this.datatglakhir, this.datakec);
        this.pagenumber = this.pagenumber + 1;
        return this.nCnt;
    };
    PengagendaanPage.prototype.backpage = function (item) {
        this.nCnt = this.nCnt - 10;
        if (this.pagenumber <= 0) {
            this.teks = "hilang";
        }
        else {
            this.teks = "ada";
        }
        if (this.nCnt == 0) {
            this.teks2 = "hilang";
        }
        else {
            this.teks2 = "ada";
        }
        this.getagendasurat(this.nCnt, this.datatglawal, this.datatglakhir, this.datakec);
        this.pagenumber = this.pagenumber - 1;
        return this.nCnt;
    };
    PengagendaanPage.prototype.df = function (tes) {
        window.open("http://103.40.94.42/wssurat/Api/downloadsuratmasuk?id=" + tes, "_system", "location=yes");
    };
    PengagendaanPage.prototype.Logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Exit',
            message: 'Are you want to exit,' + window.localStorage.getItem('nama'),
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        window.localStorage.removeItem('username');
                        window.localStorage.removeItem('password');
                        window.localStorage.removeItem('nama');
                        window.localStorage.removeItem('kode_unor');
                        window.localStorage.removeItem('kode_unker');
                        window.localStorage.removeItem('id');
                        window.localStorage.removeItem('verifikator');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                        _this.navCtrl.popToRoot();
                        console.log('OK');
                    }
                }
            ]
        });
        alert.present();
    };
    PengagendaanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PengagendaanPage');
    };
    PengagendaanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pengagendaan',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/pengagendaan/pengagendaan.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pengagendaan Surat</ion-title>\n    <ion-buttons end="" class="bar-buttons bar-buttons-md">\n      <button icon-only="" ion-button="" class="bar-button bar-button-md bar-button-default bar-button-default-md" (click)="Logout()"><span class="button-inner">\n        <ion-icon ios="ios-log-in" md="md-log-in" role="img" class="icon icon-md ion-md-log-in" aria-label="options"></ion-icon>\n      </span><div class="button-effect" style="transform: translate3d(-20px, -14px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n      <ion-refresher-content\n        pullingIcon="arrow-dropdown"\n        pullingText="Pull to refresh"\n        refreshingSpinner="circles"\n        refreshingText="Refreshing...">\n      </ion-refresher-content>\n    </ion-refresher>\n\n    <button full color="primary" icon-only="" ion-button="" class="bar-button bar-button-md button-block" (click)="filter(tes1)">\n        Filter <ion-icon ios="ios-add" md="md-add" role="img" class="icon icon-md ion-md-add" aria-label="options" item-right style="text-align: right;"></ion-icon>\n        <div class="button-effect" style="transform: translate3d(-20px, -14px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div>\n    </button>\n    \n    <ion-label *ngIf="datatglawal != \'\' || datatglakhir != \'\' || datakec != \'\'">Filter by:\n        <span *ngIf="datatglawal != \'\'"><i>{{datatglawal}} s/d {{datatglakhir}}</i></span>\n    </ion-label>\n    \n    <ion-label *ngIf="datakec != \'\'">Kecepatan surat :\n      <i *ngIf="datakec == 1">Biasa</i>\n      <i *ngIf="datakec == 2">Segera</i>\n      <i *ngIf="datakec == 3">Sangat Segera</i>\n    </ion-label>\n\n  <ion-card *ngFor="let tes of isi" (click)="itemTapped($event, tes)">\n    <ion-grid  class="{{tes.bg}}">\n    <ion-row>\n      <ion-col col-10 style="font-size:14px"><b>{{tes.perihal}}</b></ion-col>\n        <!-- <div class="text-right"><h3>\n        </h3>\n      </div> -->\n      <ion-col>\n        <ion-badge item-right>{{tes.tls}}</ion-badge>\n        <br>\n        <ion-icon ios="ios-cloud-download-outline" md="md-cloud-download" role="img" class="icon icon-md ion-md-cloud-download-outline" style="font-size: 3.2em !important;" (click)="df(tes.id)"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-8 style="font-size:13px">Unit Asal Surat :</ion-col>\n      <ion-col col-3 italic style="font-size:13px">{{tes.tglsurat}}</ion-col>\n      <ion-col col-1 class="{{tes.disp}}"><ion-icon name="arrow-dropdown-circle" style="font-size: 1.2em !important;"></ion-icon></ion-col>\n    </ion-row>\n    <ion-row>{{tes.asalsurat}}</ion-row>\n  </ion-grid>\n    <!-- <ion-icon ios="ios-arrow-dropdown-circle" md="arrow-dropdown-circle"></ion-icon> -->\n</ion-card>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-buttons left>\n        <button (click)="backpage(pagecount)" class="{{teks2}} button-clear" text-left left><span style="font-size:12pt; vertical-align: middle">\n          <ion-icon name="arrow-back" role="img" class="icon icon-ios ion-ios-arrow-back" aria-label="arrow back"></ion-icon>\n          Sebelumnya\n        </span><div class="button-effect"></div></button>\n      </ion-buttons>\n      <ion-label style="color:white">Page {{pagenumber+1}} / {{pagecount}}</ion-label>\n      <ion-buttons end *ngIf="pagecount != 0">\n        <button (click)="nextpage(pagecount)" class="{{teks}} button-clear2" text-right><span style="font-size:12pt">\n            Selanjutnya\n            <ion-icon name="arrow-forward" role="img" class="icon icon-ios ion-ios-arrow-forward" aria-label="arrow forward"></ion-icon>\n          </span><div class="button-effect"></div></button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/pengagendaan/pengagendaan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */]])
    ], PengagendaanPage);
    return PengagendaanPage;
}());

//# sourceMappingURL=pengagendaan.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PengagendaandetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pengagendaaninfo_pengagendaaninfo__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pengagendaanverifikasi_pengagendaanverifikasi__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PengagendaandetailPage = /** @class */ (function () {
    function PengagendaandetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__pengagendaaninfo_pengagendaaninfo__["a" /* PengagendaaninfoPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_3__pengagendaanverifikasi_pengagendaanverifikasi__["a" /* PengagendaanverifikasiPage */];
        this.idagenda = this.navParams.get('item');
    }
    PengagendaandetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PengagendaandetailPage');
    };
    PengagendaandetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pengagendaandetail',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/pengagendaandetail/pengagendaandetail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pengagendaan</ion-title>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-tabs tabsPlacement="top" color=\'primary\'>\n        <ion-tab [root]="tab1" tabTitle="Asal Surat" [rootParams]="idagenda"></ion-tab>\n        <ion-tab [root]="tab2" tabTitle="Verifikasi Surat" [rootParams]="idagenda"></ion-tab>\n      </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/pengagendaandetail/pengagendaandetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], PengagendaandetailPage);
    return PengagendaandetailPage;
}());

//# sourceMappingURL=pengagendaandetail.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PengagendaaninfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PengagendaaninfoPage = /** @class */ (function () {
    function PengagendaaninfoPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.idsurat = navParams.data;
        this.surat1 = this.getagendasurat(this.idsurat.id);
        console.log(this.idsurat.id);
        console.log(this.getagendasurat(this.idsurat.id));
    }
    PengagendaaninfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PengagendaaninfoPage');
    };
    PengagendaaninfoPage.prototype.getagendasurat = function (param) {
        var _this = this;
        return this.http.get('http://103.40.94.42/wssurat/Api/suratdetail?id=' + param)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.surat = [];
            for (var i = 0; i < data.data.length; i++) {
                _this.surat.push(data.data[i]);
            }
        });
    };
    PengagendaaninfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pengagendaaninfo',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/pengagendaaninfo/pengagendaaninfo.html"*/'<ion-content padding class="page">\n  <br><h4 text-center>INFO SURAT</h4>\n  <ion-card *ngFor = "let i of surat" class="padding-sm">\n      <ion-grid>\n      <ion-row><ion-col col-5 style="font-size: 15px"><b>Asal Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.TEXT_ASAL_SURAT}}</ion-col></ion-row>\n      <ion-row><ion-col col-5 style="font-size: 15px"><b>Perihal</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.PERIHAL}}</ion-col></ion-row>\n      <ion-row><ion-col col-5 style="font-size: 15px"><b>Tanggal Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.TGL_SURAT}}</ion-col></ion-row>\n      <ion-row><ion-col col-5 style="font-size: 15px"><b>Nomor Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.NO_SURAT}}</ion-col></ion-row>\n      <ion-row><ion-col col-5 style="font-size: 15px"><b>Nomor/Agenda</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.NO_AGENDA}}</ion-col></ion-row>\n      <ion-row><ion-col col-5 style="font-size: 15px"><b>Sifat Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.SIFAT_SURAT}}</ion-col></ion-row>\n      <ion-row><ion-col col-5 style="font-size: 15px"><b>Klasifikasi Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.KECEPATAN_SURAT}}</ion-col></ion-row>\n      <ion-row><ion-col col-5 style="font-size: 15px"><b>Deskripsi</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.DESKRIPSI_SINGKAT}}</ion-col></ion-row>\n  </ion-grid>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/pengagendaaninfo/pengagendaaninfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], PengagendaaninfoPage);
    return PengagendaaninfoPage;
}());

//# sourceMappingURL=pengagendaaninfo.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PengagendaanverifikasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PengagendaanverifikasiPage = /** @class */ (function () {
    function PengagendaanverifikasiPage(navCtrl, navParams, http, alertctrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertctrl = alertctrl;
        this.loadingCtrl = loadingCtrl;
        this.idsurat = navParams.data;
        this.agenda = this.getagendasurat(this.idsurat.id, window.localStorage.getItem('kode_unker'));
        this.agendatembusan = this.getagendatembusan(this.idsurat.id, window.localStorage.getItem('kode_unker'));
    }
    PengagendaanverifikasiPage.prototype.savesurat = function () {
        var _this = this;
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
            }
            else if (this.surat[i].status == false) {
            }
            for (var j = 0; j < this.surat[i].children.length; j++) {
                if (this.surat[i].children[j].status == true) {
                    var id2 = this.surat[i].children[j].id;
                    this.tverifikasi2.push(id2);
                }
                else if (this.surat[i].children[j].status == false) {
                }
                for (var k = 0; k < this.surat[i].children[j].children.length; k++) {
                    if (this.surat[i].children[j].children[k].status == true) {
                        var id3 = this.surat[i].children[j].children[k].id;
                        this.tverifikasi3.push(id3);
                    }
                    else if (this.surat[i].children[j].children[k].status == false) {
                    }
                    for (var l = 0; l < this.surat[i].children[j].children[k].children.length; l++) {
                        if (this.surat[i].children[j].children[k].children[l].status == true) {
                            var id4 = this.surat[i].children[j].children[k].children[l].id;
                            this.tverifikasi4.push(id4);
                        }
                        else if (this.surat[i].children[j].children[k].children[l].status == false) {
                        }
                        for (var m = 0; m < this.surat[i].children[j].children[k].children[l].children.length; m++) {
                            if (this.surat[i].children[j].children[k].children[l].children[m].status == true) {
                                var id5 = this.surat[i].children[j].children[k].children[l].children[m].id;
                                this.tverifikasi5.push(id5);
                            }
                            else if (this.surat[i].children[j].children[k].children[l].children[m].status == false) {
                            }
                        }
                    }
                }
            }
        }
        var isi1 = this.tverifikasi1.concat(this.tverifikasi2);
        var isi2 = isi1.concat(this.tverifikasi3);
        var isi3 = isi2.concat(this.tverifikasi4);
        var tujuansurat = isi3.concat(this.tverifikasi5);
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
            }
            else if (this.tembusan[i].status == false) {
            }
            for (var j = 0; j < this.tembusan[i].children.length; j++) {
                if (this.tembusan[i].children[j].status == true) {
                    var id2 = this.tembusan[i].children[j].id;
                    this.tverifikasitemb2.push(id2);
                }
                else if (this.tembusan[i].children[j].status == false) {
                }
                for (var k = 0; k < this.tembusan[i].children[j].children.length; k++) {
                    if (this.tembusan[i].children[j].children[k].status == true) {
                        var id3 = this.tembusan[i].children[j].children[k].id;
                        this.tverifikasitemb3.push(id3);
                    }
                    else if (this.tembusan[i].children[j].children[k].status == false) {
                    }
                    for (var l = 0; l < this.tembusan[i].children[j].children[k].children.length; l++) {
                        if (this.tembusan[i].children[j].children[k].children[l].status == true) {
                            var id4 = this.tembusan[i].children[j].children[k].children[l].id;
                            this.tverifikasitemb4.push(id4);
                        }
                        else if (this.tembusan[i].children[j].children[k].children[l].status == false) {
                        }
                        for (var m = 0; m < this.tembusan[i].children[j].children[k].children[l].children.length; m++) {
                            if (this.tembusan[i].children[j].children[k].children[l].children[m].status == true) {
                                var id5 = this.tembusan[i].children[j].children[k].children[l].children[m].id;
                                this.tverifikasitemb5.push(id5);
                            }
                            else if (this.tembusan[i].children[j].children[k].children[l].children[m].status == false) {
                            }
                        }
                    }
                }
            }
        }
        var isi1 = this.tverifikasitemb1.concat(this.tverifikasitemb2);
        var isi2 = isi1.concat(this.tverifikasitemb3);
        var isi3 = isi2.concat(this.tverifikasitemb4);
        var tembusansurat = isi3.concat(this.tverifikasitemb5);
        console.log(tembusansurat);
        //post
        var dataver = {
            id: this.idsurat.id,
            kode_unker: window.localStorage.getItem('kode_unker'),
            kode_unor: tujuansurat,
            kode_unor_tembusan: tembusansurat,
            kd_unor: window.localStorage.getItem('kode_unor')
        };
        console.log(dataver);
        this.http.post('http://103.40.94.42/wssurat/Api/actionver', dataver)
            .subscribe(function (data) {
            if (_this.loader)
                _this.loader.dismiss();
            var alert = _this.alertctrl.create({
                title: 'Berhasil',
                subTitle: 'Surat Berhasil di Agendakan',
                buttons: ['OK']
            });
            alert.present();
        }, function (error) {
            if (_this.loader)
                _this.loader.dismiss();
            var alert = _this.alertctrl.create({
                title: 'Ooooops !',
                subTitle: 'Surat Berhasil di Agendakan',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    PengagendaanverifikasiPage.prototype.getagendasurat = function (param, param1) {
        var _this = this;
        return this.http.get('http://103.40.94.42/wssurat/Api/verifikasiagenda?id=' + param + '&kode_unker=' + param1 + '&jenissurat=1')
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.surat = [];
            for (var i = 0; i < data.length; i++) {
                _this.surat.push(data[i]);
            }
        });
    };
    PengagendaanverifikasiPage.prototype.getagendatembusan = function (param, param1) {
        var _this = this;
        return this.http.get('http://103.40.94.42/wssurat/Api/verifikasiagenda?id=' + param + '&kode_unker=' + param1 + '&jenissurat=2')
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.tembusan = [];
            for (var i = 0; i < data.length; i++) {
                _this.tembusan.push(data[i]);
            }
        });
    };
    PengagendaanverifikasiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PengagendaanverifikasiPage');
    };
    PengagendaanverifikasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pengagendaanverifikasi',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/pengagendaanverifikasi/pengagendaanverifikasi.html"*/'<ion-content padding>\n    <ion-card>\n        <ion-item><h3 text-center style="padding-top:5px !important"><b>VERIFIKASI SURAT MASUK</b></h3></ion-item>\n            <ion-label class="tes4"><h3 text-center><b>Tujuan Surat</b></h3></ion-label>\n            <resource-tree-view [TreeData]="surat" [hasCheckbox]="true"></resource-tree-view>\n        \n            <ion-label class="tes4"><h3 text-center><b>Tembusan Surat</b></h3></ion-label>\n            <resource-tree-view [TreeData]="tembusan" [hasCheckbox]="true"></resource-tree-view>\n        \n            <button ion-button full (click)="savesurat()">VERIFIKASI</button>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/pengagendaanverifikasi/pengagendaanverifikasi.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */]])
    ], PengagendaanverifikasiPage);
    return PengagendaanverifikasiPage;
}());

//# sourceMappingURL=pengagendaanverifikasi.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusasliPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StatusasliPage = /** @class */ (function () {
    function StatusasliPage(navCtrl, navParams, http, alertctrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertctrl = alertctrl;
        this.loadingCtrl = loadingCtrl;
        this.idsurat = navParams.data;
        this.statusdata = [
            { id: 1, name: 'Dalam Proses' },
            { id: 2, name: 'Telah Selesai' }
        ];
        this.keterangan = this.getketerangan(this.idsurat.id, this.idsurat.kode);
        this.http.get('http://103.40.94.42/wssurat/Api/user')
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            for (var i = 0; i < data.length; i++) {
                if (data[i].KODE_UNOR == _this.idsurat.kode && data[i].TRGROUP_ID == 3) {
                    _this.idpemilih = data[i].ID;
                    console.log(_this.idpemilih);
                }
            }
        });
    }
    StatusasliPage.prototype.itemTapped = function (a, b, c) {
        var _this = this;
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loader.present();
        var datastatus = {
            id: this.idsurat.id,
            id_user: c,
            kode_unor: this.idsurat.kode,
            status_penyelesaian: a,
            catatan: b
        };
        this.http.post('http://103.40.94.42/wssurat/Api/statussuratmasuk', datastatus)
            .subscribe(function (data) {
            if (_this.loader)
                _this.loader.dismiss();
            var alert = _this.alertctrl.create({
                title: 'Berhasil',
                subTitle: 'Status Surat Berhasil di Simpan',
                buttons: ['OK']
            });
            alert.present();
        }, function (error) {
            if (_this.loader)
                _this.loader.dismiss();
            var alert = _this.alertctrl.create({
                title: 'Ooooops !',
                subTitle: 'Status Surat Gagal di Simpan',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    StatusasliPage.prototype.getketerangan = function (param, param2) {
        var _this = this;
        return this.http.get('http://103.40.94.42/wssurat/Api/disp?id=' + param + '&kode_unor=' + param2)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.ket = data.CATATAN;
            _this.status = data.STATUS_PENYELESAIAN;
            console.log(_this.ket);
        });
    };
    StatusasliPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatusasliPage');
    };
    StatusasliPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-statusasli',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/statusasli/statusasli.html"*/'<ion-content padding>\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-input [(ngModel)]="idpemilih" hidden></ion-input>\n          <ion-col col-4><ion-label>Status Surat</ion-label></ion-col>\n      <ion-col col-6>\n        <ion-select  [(ngModel)]="status" class="myCustomSelect">\n          <ion-option *ngFor="let i of statusdata" [value]="i.id">{{i.name}}</ion-option>\n        </ion-select>\n      </ion-col>\n\n    </ion-row>\n    \n    <ion-label class="ket">Keterangan</ion-label>\n    <ion-textarea [(ngModel)]="ket" placeholder="Masukkan Keterangan"></ion-textarea>\n  </ion-grid>\n    \n    <button ion-button full color="primary" type="submit" (click)="itemTapped(status,ket,idpemilih)">SIMPAN</button>\n  </ion-card>\n  </ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/statusasli/statusasli.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */]])
    ], StatusasliPage);
    return StatusasliPage;
}());

//# sourceMappingURL=statusasli.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusdispPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StatusdispPage = /** @class */ (function () {
    function StatusdispPage(navCtrl, navParams, http, alertctrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertctrl = alertctrl;
        this.loadingCtrl = loadingCtrl;
        this.idsurat = navParams.data;
        this.statusdata = [
            { id: 1, name: 'Dalam Proses' },
            { id: 2, name: 'Telah Selesai' }
        ];
        this.keterangan = this.getketerangan(this.idsurat.id, window.localStorage.getItem('kode_unor'));
        this.http.get('http://103.40.94.42/wssurat/Api/user')
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            for (var i = 0; i < data.length; i++) {
                if (data[i].KODE_UNOR == _this.idsurat.kode && data[i].TRGROUP_ID == 3) {
                    _this.idpemilih = data[i].ID;
                    console.log(_this.idpemilih);
                }
            }
        });
    }
    StatusdispPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatusdispPage');
    };
    StatusdispPage.prototype.itemTapped = function (a, b, c) {
        var _this = this;
        console.log(c);
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loader.present();
        console.log(this.idsurat.id);
        var datastatus = {
            id: this.idsurat.id,
            id_user: c,
            kode_unor: this.idsurat.kode,
            status_penyelesaian: a,
            catatan: b
        };
        // var headers = new Headers();
        // headers.append('Access-Control-Allow-Origin' , '*');
        // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        // headers.append('Accept','application/json');
        // headers.append('content-type','application/json');
        // let options = new RequestOptions({ headers:headers});
        this.http.post('http://103.40.94.42/wssurat/Api/statussuratmasuk', datastatus)
            .subscribe(function (data) {
            if (_this.loader)
                _this.loader.dismiss();
            var alert = _this.alertctrl.create({
                title: 'Berhasil',
                subTitle: 'Status Surat Berhasil di Simpan',
                buttons: ['OK']
            });
            alert.present();
        }, function (error) {
            if (_this.loader)
                _this.loader.dismiss();
            var alert = _this.alertctrl.create({
                title: 'Ooooops !',
                subTitle: 'Status Surat Gagal di Simpan',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    StatusdispPage.prototype.getketerangan = function (param, param2) {
        var _this = this;
        return this.http.get('http://103.40.94.42/wssurat/Api/disp2?id=' + param + '&kode_unor=' + param2)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.ket = data.CATATAN;
            _this.status = data.STATUS_PENYELESAIAN;
            console.log(_this.ket);
        });
    };
    StatusdispPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-statusdisp',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/statusdisp/statusdisp.html"*/'<ion-content padding>\n    <ion-card>\n      <ion-grid>\n        <ion-row>\n            <ion-col col-4><ion-label>Status Surat</ion-label></ion-col>\n        <ion-col col-6>\n            <ion-input [(ngModel)]="idpemilih" hidden></ion-input>\n          <ion-select  [(ngModel)]="status" class="myCustomSelect">\n            <ion-option *ngFor="let i of statusdata" [value]="i.id">{{i.name}}</ion-option>\n          </ion-select>\n        </ion-col>\n  \n      </ion-row>\n      \n      <ion-label class="ket">Keterangan</ion-label>\n      <ion-textarea [(ngModel)]="ket" placeholder="Masukkan Keterangan"></ion-textarea>\n    </ion-grid>\n      \n      <button ion-button full color="primary" type="submit" (click)="itemTapped(status,ket,idpemilih)">SIMPAN</button>\n    </ion-card>\n    </ion-content>\n  '/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/statusdisp/statusdisp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */]])
    ], StatusdispPage);
    return StatusdispPage;
}());

//# sourceMappingURL=statusdisp.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurataslidetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__disposisiasli_disposisiasli__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asalasli_asalasli__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trackingasli_trackingasli__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__statusasli_statusasli__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SurataslidetailPage = /** @class */ (function () {
    function SurataslidetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__disposisiasli_disposisiasli__["a" /* DisposisiasliPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_3__asalasli_asalasli__["a" /* AsalasliPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_4__trackingasli_trackingasli__["a" /* TrackingasliPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_5__statusasli_statusasli__["a" /* StatusasliPage */];
        this.idsurat = this.navParams.get('item');
        console.log(this.idsurat);
    }
    SurataslidetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurataslidetailPage');
    };
    SurataslidetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-surataslidetail',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/surataslidetail/surataslidetail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Surat Asli</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-tabs tabsPlacement="top" color=\'primary\'>\n        <ion-tab [root]="tab1" tabTitle="Disposisi" [rootParams]="idsurat"></ion-tab>\n        <ion-tab [root]="tab2" tabTitle="Asal Surat" [rootParams]="idsurat"></ion-tab>\n        <ion-tab [root]="tab3" tabTitle="Tracking Surat" [rootParams]="idsurat"></ion-tab>\n        <ion-tab [root]="tab4" tabTitle="Status Surat" [rootParams]="idsurat"></ion-tab>\n      </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/surataslidetail/surataslidetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], SurataslidetailPage);
    return SurataslidetailPage;
}());

//# sourceMappingURL=surataslidetail.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingasliPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrackingasliPage = /** @class */ (function () {
    function TrackingasliPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.temb = navParams.data;
        console.log(this.temb.id);
        this.tembusand = this.getdetailtembusan(this.temb.id);
    }
    TrackingasliPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackingasliPage');
    };
    TrackingasliPage.prototype.getdetailtembusan = function (param) {
        var _this = this;
        return this.http.get('http://103.40.94.42/wssurat/Api/trackingsurat?id=' + param)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.tracking = [];
            _this.maxtracking = [];
            _this.js = '';
            _this.namaunker = '';
            for (var i = 0; i < data.length; i++) {
                _this.tracking.push(data[i]);
                _this.maxtracking.push(Math.max(data[i]['ID']));
                _this.maxtrack = Math.max.apply(Math, _this.maxtracking);
                if (data[i].ID == _this.maxtrack) {
                    _this.js = data[i].JENIS_SURAT;
                    _this.namaunker = data[i].NAMA_UNIT_KERJA;
                }
            }
            console.log(_this.maxtrack);
        });
    };
    TrackingasliPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-trackingasli',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/trackingasli/trackingasli.html"*/'<ion-content>\n    <div class="bar bar-header bar-dark tembusan">\n        <div class=\'tembusan1\'>Status Terakhir : \n          <span *ngIf="js == 1" class="temb2">Surat Asli</span>\n          <span *ngIf="js == 2" class="temb2">Surat Tembusan</span>\n          <span *ngIf="js == 3" class="temb2">Surat Disposisi</span>\n          <br> \n            <div style="display: flex;"><div class="tes">=><span class="ion-chevron-right" style="margin-right: 7px"></span></div><div style=" line-height: 17px;" class="tes2">{{namaunker}}</div></div></div>\n      </div>\n      <!-- surat asli -->\n      <ion-grid>\n        <ion-row responsive-sm *ngFor = "let trasli of tracking">\n          <ion-col col-5 style="font-size: 13px">\n            {{trasli.CREATED_DATE}}	\n          </ion-col>\n          <ion-col col-1 style="border-left: 1px solid rgba(0,0,0,0.2);">\n            <span *ngIf="trasli.JENIS_SURAT == 1"><div class="tembf"><ion-icon name="ios-flower" class="js1"></ion-icon></div></span>\n            <span *ngIf="trasli.JENIS_SURAT == 2"><div class="tembf"><ion-icon name="ios-flower" class="js2"></ion-icon></div></span>\n            <span *ngIf="trasli.JENIS_SURAT == 3"><div class="tembf"><ion-icon name="ios-flower" class="js3"></ion-icon></div></span>\n          </ion-col>\n          <ion-col>\n            <span *ngIf="trasli.JENIS_SURAT == 1" style="color: #387ef5;font-size: 13px">Surat Asli</span>\n            <span *ngIf="trasli.JENIS_SURAT == 2" style="color: purple;font-size: 13px">Surat Tembusan</span>\n            <span *ngIf="trasli.JENIS_SURAT == 3" style="color: #ef473a;font-size: 13px">Surat Disposisi</span>\n           <br><i style="font-size: 13px">{{trasli.NAMA_UNIT_KERJA}}</i></ion-col>\n        </ion-row>\n      </ion-grid>\n      \n      <div class="item no-border">\n        <br><br><br><br>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/trackingasli/trackingasli.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], TrackingasliPage);
    return TrackingasliPage;
}());

//# sourceMappingURL=trackingasli.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuratdisposisidetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__disposisidisp_disposisidisp__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asaldisp_asaldisp__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trackingdisp_trackingdisp__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__statusdisp_statusdisp__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SuratdisposisidetailPage = /** @class */ (function () {
    function SuratdisposisidetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__disposisidisp_disposisidisp__["a" /* DisposisidispPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_3__asaldisp_asaldisp__["a" /* AsaldispPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_4__trackingdisp_trackingdisp__["a" /* TrackingdispPage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_5__statusdisp_statusdisp__["a" /* StatusdispPage */];
        this.iddisp = this.navParams.get('item');
        console.log(this.iddisp);
    }
    SuratdisposisidetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuratdisposisidetailPage');
    };
    SuratdisposisidetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-suratdisposisidetail',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/suratdisposisidetail/suratdisposisidetail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Surat Disposisi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-tabs tabsPlacement="top" color=\'primary\'>\n        <ion-tab [root]="tab1" tabTitle="Disposisi" [rootParams]="iddisp"></ion-tab>\n        <ion-tab [root]="tab2" tabTitle="Asal Surat" [rootParams]="iddisp"></ion-tab>\n        <ion-tab [root]="tab3" tabTitle="Tracking Surat" [rootParams]="iddisp"></ion-tab>\n        <ion-tab [root]="tab4" tabTitle="Status Surat" [rootParams]="iddisp"></ion-tab>\n      </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/suratdisposisidetail/suratdisposisidetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */]])
    ], SuratdisposisidetailPage);
    return SuratdisposisidetailPage;
}());

//# sourceMappingURL=suratdisposisidetail.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingdispPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrackingdispPage = /** @class */ (function () {
    function TrackingdispPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.temb = navParams.data;
        this.tembusand = this.getdetailtembusan(this.temb.id);
    }
    TrackingdispPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackingdispPage');
    };
    TrackingdispPage.prototype.getdetailtembusan = function (param) {
        var _this = this;
        return this.http.get('http://103.40.94.42/wssurat/Api/trackingsurat?id=' + param)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.tracking = [];
            _this.maxtracking = [];
            _this.js = '';
            _this.namaunker = '';
            for (var i = 0; i < data.length; i++) {
                _this.tracking.push(data[i]);
                _this.maxtracking.push(Math.max(data[i]['ID']));
                _this.maxtrack = Math.max.apply(Math, _this.maxtracking);
                if (data[i].ID == _this.maxtrack) {
                    _this.js = data[i].JENIS_SURAT;
                    _this.namaunker = data[i].NAMA_UNIT_KERJA;
                }
            }
            console.log(_this.maxtrack);
        });
    };
    TrackingdispPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-trackingdisp',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/trackingdisp/trackingdisp.html"*/'<ion-content padding>\n    <div class="bar bar-header bar-dark tembusan">\n        <div class=\'tembusan1\'>Status Terakhir : \n          <span *ngIf="js == 1" class="temb2">Surat Asli</span>\n          <span *ngIf="js == 2" class="temb2">Surat Tembusan</span>\n          <span *ngIf="js == 3" class="temb2">Surat Disposisi</span>\n          <br> \n            <div style="display: flex;"><div class="tes">=><span class="ion-chevron-right" style="margin-right: 7px"></span></div><div style=" line-height: 15px;" class="tes2">{{namaunker}}</div></div></div>\n      </div>\n      <!-- surat asli -->\n      <ion-grid>\n        <ion-row responsive-sm *ngFor = "let trasli of tracking">\n          <ion-col col-5 style="font-size: 13px">\n            {{trasli.CREATED_DATE}}	\n          </ion-col>\n          <ion-col col-1 style="border-left: 1px solid rgba(0,0,0,0.2);">\n            <span *ngIf="trasli.JENIS_SURAT == 1"><div class="tembf"><ion-icon name="ios-flower" class="js1"></ion-icon></div></span>\n            <span *ngIf="trasli.JENIS_SURAT == 2"><div class="tembf"><ion-icon name="ios-flower" class="js2"></ion-icon></div></span>\n            <span *ngIf="trasli.JENIS_SURAT == 3"><div class="tembf"><ion-icon name="ios-flower" class="js3"></ion-icon></div></span>\n          </ion-col>\n          <ion-col>\n            <span *ngIf="trasli.JENIS_SURAT == 1" style="color: #387ef5;font-size: 13px">Surat Asli</span>\n            <span *ngIf="trasli.JENIS_SURAT == 2" style="color: purple;font-size: 13px">Surat Tembusan</span>\n            <span *ngIf="trasli.JENIS_SURAT == 3" style="color: #ef473a;font-size: 13px">Surat Disposisi</span>\n           <br><i style="font-size: 13px"> {{trasli.NAMA_UNIT_KERJA}}</i></ion-col>\n        </ion-row>\n      </ion-grid>\n      \n      <div class="item no-border">\n        <br><br><br><br>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/trackingdisp/trackingdisp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], TrackingdispPage);
    return TrackingdispPage;
}());

//# sourceMappingURL=trackingdisp.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurattembusandetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SurattembusandetailPage = /** @class */ (function () {
    function SurattembusandetailPage(navCtrl, navParams, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.temb = this.navParams.get('item');
        console.log(this.temb);
        this.tembusand = this.getdetailtembusan(this.temb);
    }
    SurattembusandetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurattembusandetailPage');
    };
    SurattembusandetailPage.prototype.getdetailtembusan = function (param) {
        var _this = this;
        return this.http.get('http://103.40.94.42/wssurat/Api/trackingsurat?id=' + param)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.tracking = [];
            _this.maxtracking = [];
            _this.js = '';
            _this.namaunker = '';
            for (var i = 0; i < data.length; i++) {
                _this.tracking.push(data[i]);
                _this.maxtracking.push(Math.max(data[i]['ID']));
                _this.maxtrack = Math.max.apply(Math, _this.maxtracking);
                if (data[i].ID == _this.maxtrack) {
                    _this.js = data[i].JENIS_SURAT;
                    _this.namaunker = data[i].NAMA_UNIT_KERJA;
                }
            }
            console.log(_this.maxtrack);
        });
    };
    SurattembusandetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-surattembusandetail',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/surattembusandetail/surattembusandetail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Surat Tembusan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n        <div class="bar bar-header bar-dark tembusan">\n          <div class=\'tembusan1\'>Status Terakhir : \n            <span *ngIf="js == 1" class="temb2">Surat Asli</span>\n            <span *ngIf="js == 2" class="temb2">Surat Tembusan</span>\n            <span *ngIf="js == 3" class="temb2">Surat Disposisi</span>\n            <br> \n              <div style="display: flex;"><div style="padding-left:32%; width: 46%" class="tes">=><span class="ion-chevron-right" style="margin-right: 7px" ></span></div><div style=" line-height: 15px;" class="tes2">{{namaunker}}</div></div></div>\n        </div>\n        <!-- surat asli -->\n        <ion-grid>\n          <ion-row responsive-sm *ngFor = "let trasli of tracking">\n            <ion-col col-5 style="font-size: 13px">\n              {{trasli.CREATED_DATE}}	\n            </ion-col>\n            <ion-col col-1 style="border-left: 1px solid rgba(0,0,0,0.2);">\n              <span *ngIf="trasli.JENIS_SURAT == 1"><div class="tembf"><ion-icon name="ios-flower" class="js1"></ion-icon></div></span>\n              <span *ngIf="trasli.JENIS_SURAT == 2"><div class="tembf"><ion-icon name="ios-flower" class="js2"></ion-icon></div></span>\n              <span *ngIf="trasli.JENIS_SURAT == 3"><div class="tembf"><ion-icon name="ios-flower" class="js3"></ion-icon></div></span>\n            </ion-col>\n            <ion-col >\n              <span *ngIf="trasli.JENIS_SURAT == 1" style="color: #387ef5;font-size: 13px">Surat Asli</span>\n              <span *ngIf="trasli.JENIS_SURAT == 2" style="color: purple;font-size: 13px">Surat Tembusan</span>\n              <span *ngIf="trasli.JENIS_SURAT == 3" style="color: #ef473a;font-size: 13px">Surat Disposisi</span>\n             <br> <i style="font-size: 13px">{{trasli.NAMA_UNIT_KERJA}}</i></ion-col>\n          </ion-row>\n        </ion-grid>\n        \n        <div class="item no-border">\n          <br><br><br><br>\n        </div>\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/surattembusandetail/surattembusandetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */]])
    ], SurattembusandetailPage);
    return SurattembusandetailPage;
}());

//# sourceMappingURL=surattembusandetail.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuratasliPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filtermodal_filtermodal__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__surataslidetail_surataslidetail__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









// import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
// import { FileOpener } from '@ionic-native/file-opener';
// import { FileTransfer } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';
// import 'rxjs/add/operator/map';
var SuratasliPage = /** @class */ (function () {
    function SuratasliPage(navCtrl, navParams, http, loadingCtrl, alertCtrl, iab, modalCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.nCnt = 0;
        this.pagenumber = 0;
        this.datatglawal = '';
        this.datatglakhir = '';
        this.datakec = '';
        this.zipped = true;
        this.click = true;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        if (this.datatglawal == undefined) {
            this.datatglawal = '';
        }
        if (this.datatglakhir == undefined) {
            this.datatglakhir = '';
        }
        if (this.datakec == undefined) {
            this.datakec = '';
        }
        this.getdatasurat(this.nCnt, window.localStorage.getItem('kode_unor'), this.datatglawal, this.datatglakhir, this.datakec);
        this.plhpilih();
        if (this.nCnt == 0) {
            this.teks2 = "hilang";
        }
        else {
            this.teks2 = "ada";
        }
        this.plhpilih().then(function (data) {
            _this.tes1 = data;
        });
        //=============================================================
        var date = new Date();
        this.tanggal = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
        //=============================================================d
        this.iddata = '';
        this.http.get('http://103.40.94.42/wssurat/Api/plh?id=' + window.localStorage.getItem('id') + '&tgl=' + this.tanggal)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.iddata = data.KODE_UNOR;
            if (data.length > 0) {
                _this.mata = 'mata1';
            }
            else {
                _this.mata = 'mata2';
            }
        });
    }
    SuratasliPage.prototype.doRefresh = function (refresher, item) {
        if (this.zipped == false) {
            this.getdatasurat(this.nCnt, item, this.datatglawal, this.datatglakhir, this.datakec);
        }
        else {
            this.getdatasurat(this.nCnt, window.localStorage.getItem('kode_unor'), this.datatglawal, this.datatglakhir, this.datakec);
        }
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    SuratasliPage.prototype.TES = function (text) {
        return text;
    };
    SuratasliPage.prototype.plhpilih = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var date;
            return __generator(this, function (_a) {
                date = new Date();
                this.tanggal = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.http.get('http://103.40.94.42/wssurat/Api/plh?id=' + window.localStorage.getItem('id') + '&tgl=' + _this.tanggal)
                            .subscribe(function (data) {
                            if (data === void 0) { data = []; }
                            // this.itemspartners = JSON.parse(data['_body']).results;
                            for (var i = 0; i < data.length; i++) {
                                _this.kode = data[0].KODE_UNOR_PEMBERI;
                                resolve(_this.kode);
                            }
                        });
                    })];
            });
        });
    };
    SuratasliPage.prototype.filter = function (item) {
        var _this = this;
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__filtermodal_filtermodal__["a" /* FiltermodalPage */]);
        myModal.onDidDismiss(function (data) {
            if (data === void 0) { data = []; }
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                _this.datatglawal = data[0].a;
                _this.datatglakhir = data[1].b;
                _this.datakec = data[2].kec;
            }
            console.log(_this.datakec);
            if (_this.zipped == false) {
                _this.getdatasurat(_this.nCnt, item, _this.datatglawal, _this.datatglakhir, _this.datakec);
            }
            else {
                _this.getdatasurat(_this.nCnt, window.localStorage.getItem('kode_unor'), _this.datatglawal, _this.datatglakhir, _this.datakec);
            }
        });
        myModal.present();
    };
    SuratasliPage.prototype.plh = function (item) {
        this.zipped = !this.zipped;
        if (this.zipped == false) {
            this.getdatasurat(this.nCnt, item, this.datatglawal, this.datatglakhir, this.datakec);
        }
        else {
            this.getdatasurat(this.nCnt, window.localStorage.getItem('kode_unor'), this.datatglawal, this.datatglakhir, this.datakec);
        }
    };
    SuratasliPage.prototype.getdatasurat = function (no, param, tglawal, tglakhir, kecsurat) {
        var _this = this;
        this.showLoader();
        this.http.get('http://103.40.94.42/wssurat/Api/suratmasukasli/page/' + no + '?kode_unor=' + param + '&tgl_awal=' + tglawal + '&tgl_akhir=' + tglakhir + '&kecsurat=' + kecsurat)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.hideLoader();
            _this.isi = [];
            for (var i = 0; i < data.items.length; i++) {
                _this.bground = '';
                _this.tulisan = '';
                if (data.items[i].TRKECEPATANSURAT_ID == 3) {
                    _this.tulisan = '1';
                }
                else if (data.items[i].TRKECEPATANSURAT_ID == 2) {
                    _this.tulisan = '2';
                }
                else {
                    _this.bground = '';
                    _this.tulisan = '3';
                }
                if (param == data.items[i].KODE_UNOR) {
                    _this.kode_unor = data.items[i].KODE_UNOR;
                }
                else {
                    _this.kode_unor = param;
                }
                _this.isi.push({
                    perihal: data.items[i].PERIHAL,
                    asalsurat: data.items[i].TEXT_ASAL_SURAT,
                    tglsurat: data.items[i].TGL_AGENDA,
                    icon: _this.icons[Math.floor(Math.random() * _this.icons.length)],
                    bg: _this.bground,
                    tls: _this.tulisan,
                    id: data.items[i].ID,
                    kec: data.items[i].TRKECEPATANSURAT_ID,
                    sifat: data.items[i].TRSIFATSURAT_ID,
                    disp: data.items[i].disp,
                    kode: _this.kode_unor
                });
            }
            _this.pagecount = data._meta.pageCount;
        });
    };
    SuratasliPage.prototype.showToast = function () {
        var toast = this.toastCtrl.create({
            message: 'File Surat tidak ada',
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    SuratasliPage.prototype.hideToast = function () {
        if (this.toast)
            this.toast.dismiss();
    };
    SuratasliPage.prototype.showLoader = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loader.present();
    };
    SuratasliPage.prototype.hideLoader = function () {
        if (this.loader)
            this.loader.dismiss();
    };
    SuratasliPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__surataslidetail_surataslidetail__["a" /* SurataslidetailPage */], {
            item: item
        });
    };
    SuratasliPage.prototype.df = function (tes) {
        if (tes != 0) {
            window.open("http://103.40.94.42/wssurat/Api/downloadsuratmasuk?id=" + tes, "_system", "location=yes");
        }
        else {
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
    };
    SuratasliPage.prototype.nextpage = function (item, item2) {
        this.nCnt = this.nCnt + 10;
        if (this.pagenumber >= item - 2) {
            this.teks = "hilang";
        }
        else {
            this.teks = "ada";
        }
        if (this.nCnt == 0) {
            this.teks2 = "hilang";
        }
        else {
            this.teks2 = "ada";
        }
        if (this.zipped == false) {
            this.getdatasurat(this.nCnt, item2, this.datatglawal, this.datatglakhir, this.datakec);
        }
        else {
            this.getdatasurat(this.nCnt, window.localStorage.getItem('kode_unor'), this.datatglawal, this.datatglakhir, this.datakec);
        }
        this.pagenumber = this.pagenumber + 1;
        return this.nCnt;
    };
    SuratasliPage.prototype.backpage = function (item, item2) {
        this.nCnt = this.nCnt - 10;
        if (this.pagenumber <= 0) {
            this.teks = "hilang";
        }
        else {
            this.teks = "ada";
        }
        if (this.nCnt == 0) {
            this.teks2 = "hilang";
        }
        else {
            this.teks2 = "ada";
        }
        if (this.zipped == false) {
            this.getdatasurat(this.nCnt, item2, this.datatglawal, this.datatglakhir, this.datakec);
        }
        else {
            this.getdatasurat(this.nCnt, window.localStorage.getItem('kode_unor'), this.datatglawal, this.datatglakhir, this.datakec);
        }
        this.pagenumber = this.pagenumber - 1;
        return this.nCnt;
    };
    SuratasliPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuratasliPage');
        if (this.datatglawal == 'undefined') {
            this.datatglawal = '';
        }
        if (this.datatglakhir == 'undefined') {
            this.datatglakhir = '';
        }
        if (this.datakec == 'undefined') {
            this.datakec = '';
        }
    };
    SuratasliPage.prototype.Logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Exit',
            message: 'Are you want to exit,' + window.localStorage.getItem('nama'),
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
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
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                        _this.navCtrl.popToRoot();
                    }
                }
            ]
        });
        alert.present();
    };
    SuratasliPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-suratasli',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/suratasli/suratasli.html"*/'\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Surat Asli</ion-title>\n\n   \n\n    <ion-buttons end="" class="bar-buttons bar-buttons-md {{mata}}">\n      <button icon-only="" ion-button="" class="bar-button bar-button-md bar-button-default bar-button-default-md" (click)="plh(tes1)"><span class="button-inner">\n        <ion-icon [name]="zipped ? \'ios-eye-off\' : \'ios-eye\'" aria-label="options"></ion-icon>\n        <!-- <span [hidden]="!toggle" ngHide="toggle"><ion-icon ios="ios-eye" md="md-eye" role="img" class="icon icon-md ion-md-eye" aria-label="options"></ion-icon></span> -->\n      </span><div class="button-effect" style="transform: translate3d(-20px, -14px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n    </ion-buttons>\n\n     <ion-buttons end="" class="bar-buttons bar-buttons-md">\n        <button icon-only="" ion-button="" class="bar-button bar-button-md bar-button-default bar-button-default-md" (click)="Logout()"><span class="button-inner">\n          <ion-icon ios="ios-log-in" md="md-log-in" role="img" class="icon icon-md ion-md-log-in" aria-label="options"></ion-icon>\n        </span><div class="button-effect" style="transform: translate3d(-20px, -14px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n      </ion-buttons>\n      \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="doRefresh($event,tes1)">\n        <ion-refresher-content\n          pullingIcon="arrow-dropdown"\n          pullingText="Pull to refresh"\n          refreshingSpinner="circles"\n          refreshingText="Refreshing...">\n        </ion-refresher-content>\n      </ion-refresher>\n\n      <button full color="primary" icon-only="" ion-button="" class="bar-button bar-button-md button-block" (click)="filter(tes1)">\n          Filter <ion-icon ios="ios-add" md="md-add" role="img" class="icon icon-md ion-md-add" aria-label="options" item-right style="text-align: right;"></ion-icon>\n          <div class="button-effect" style="transform: translate3d(-20px, -14px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div>\n      </button>\n      \n      <ion-label *ngIf="datatglawal != \'\' || datatglakhir != \'\' || datakec != \'\'">Filter by:\n          <span *ngIf="datatglawal != \'\'"><i>{{datatglawal}} s/d {{datatglakhir}}</i></span>\n      </ion-label>\n      \n      <ion-label *ngIf="datakec != \'\'">Kecepatan surat :\n        <i *ngIf="datakec == 1">Biasa</i>\n        <i *ngIf="datakec == 2">Segera</i>\n        <i *ngIf="datakec == 3">Sangat Segera</i>\n      </ion-label>\n  \n      <ion-card *ngFor="let tes of isi" (click)="itemTapped($event, tes)">\n          <ion-grid>\n          <ion-row>\n            <ion-col col-10 style="font-size:14px"><b>{{tes.perihal}}</b></ion-col>\n              <!-- <div class="text-right"><h3>\n              </h3>\n            </div> -->\n            <ion-col>\n              <ion-badge item-right>{{tes.tls}}</ion-badge>\n              <br>\n              <ion-icon ios="ios-cloud-download-outline" md="md-cloud-download" role="img" class="icon icon-md ion-md-cloud-download-outline" style="font-size: 3.2em !important;" (click)="df(tes.id)"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-8 style="font-size:13px">Unit Asal Surat :</ion-col>\n            <ion-col col-3 italic style="font-size:13px">{{tes.tglsurat}}</ion-col>\n            <ion-col col-1 class="{{tes.disp}}"><ion-icon name="arrow-dropdown-circle" style="font-size: 1.2em !important;"></ion-icon></ion-col>\n          </ion-row>\n          <ion-row>{{tes.asalsurat}}</ion-row>\n        </ion-grid>\n          <!-- <ion-icon ios="ios-arrow-dropdown-circle" md="arrow-dropdown-circle"></ion-icon> -->\n      </ion-card>\n    <!-- </button>\n  </ion-list>   -->\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n        <ion-buttons left>\n        <button (click)="backpage(pagecount,tes1)" class="{{teks2}} button-clear" text-left left><span style="font-size:12pt">\n            <ion-icon name="arrow-back" role="img" class="icon icon-ios ion-ios-arrow-back" aria-label="arrow back"></ion-icon>\n            Sebelumnya\n          </span><div class="button-effect"></div></button>\n        </ion-buttons>\n        <ion-label style="color:white">Page {{pagenumber+1}} / {{pagecount}}</ion-label>\n          <ion-buttons end *ngIf="pagecount != 0">\n          <button (click)="nextpage(pagecount,tes1)" class="{{teks}} button-clear2" text-right><span style="font-size:12pt">\n              Selanjutnya\n              <ion-icon name="arrow-forward" role="img" class="icon icon-ios ion-ios-arrow-forward" aria-label="arrow forward"></ion-icon>\n            </span><div class="button-effect"></div></button>\n          </ion-buttons>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/suratasli/suratasli.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
    ], SuratasliPage);
    return SuratasliPage;
}());

//# sourceMappingURL=suratasli.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuratdisposisiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__suratdisposisidetail_suratdisposisidetail__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filtermodal_filtermodal__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var SuratdisposisiPage = /** @class */ (function () {
    function SuratdisposisiPage(navCtrl, navParams, http, loadingCtrl, alertCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.nCnt = 0;
        this.zipped = true;
        this.pagenumber = 0;
        this.datatglawal = '';
        this.datatglakhir = '';
        this.datakec = '';
        if (this.datatglawal == undefined) {
            this.datatglawal = '';
        }
        if (this.datatglakhir == undefined) {
            this.datatglakhir = '';
        }
        if (this.datakec == undefined) {
            this.datakec = '';
        }
        this.disposisi = this.getsuratdisposisi(this.nCnt, window.localStorage.getItem('kode_unor'), this.datatglawal, this.datatglakhir, this.datakec);
        this.plhpilih().then(function (data) {
            _this.tes1 = data;
        });
        if (this.nCnt == 0) {
            this.teks2 = "hilang";
        }
        else {
            this.teks2 = "ada";
        }
        //=============================================================
        var date = new Date();
        this.tanggal = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
        console.log(this.tanggal);
        //=============================================================d
        this.iddata = '';
        this.http.get('http://103.40.94.42/wssurat/Api/plh?id=' + window.localStorage.getItem('id') + '&tgl=' + this.tanggal)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            console.log(data.KODE_UNOR);
            _this.iddata = data.KODE_UNOR;
            if (data.length > 0) {
                _this.mata = 'mata1';
            }
            else {
                _this.mata = 'mata2';
            }
            console.log(_this.iddata);
        });
    }
    SuratdisposisiPage.prototype.doRefresh = function (refresher, item) {
        console.log('Begin async operation', refresher);
        if (this.zipped == false) {
            this.getsuratdisposisi(this.nCnt, item, this.datatglawal, this.datatglakhir, this.datakec);
        }
        else {
            this.getsuratdisposisi(this.nCnt, window.localStorage.getItem('kode_unor'), this.datatglawal, this.datatglakhir, this.datakec);
        }
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    SuratdisposisiPage.prototype.showLoader = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loader.present();
    };
    SuratdisposisiPage.prototype.hideLoader = function () {
        if (this.loader)
            this.loader.dismiss();
    };
    SuratdisposisiPage.prototype.filter = function (item) {
        var _this = this;
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__filtermodal_filtermodal__["a" /* FiltermodalPage */]);
        myModal.onDidDismiss(function (data) {
            if (data === void 0) { data = []; }
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                _this.datatglawal = data[0].a;
                _this.datatglakhir = data[1].b;
                _this.datakec = data[2].kec;
            }
            console.log(_this.datakec);
            if (_this.zipped == false) {
                _this.getsuratdisposisi(_this.nCnt, item, _this.datatglawal, _this.datatglakhir, _this.datakec);
            }
            else {
                _this.getsuratdisposisi(_this.nCnt, window.localStorage.getItem('kode_unor'), _this.datatglawal, _this.datatglakhir, _this.datakec);
            }
        });
        myModal.present();
    };
    SuratdisposisiPage.prototype.getsuratdisposisi = function (n, param, tglawal, tglakhir, kecsurat) {
        var _this = this;
        this.showLoader();
        return this.http.get('http://103.40.94.42/wssurat/Api/suratmasukdisposisi/page/' + n + '?kode_unor=' + param + '&tgl_awal=' + tglawal + '&tgl_akhir=' + tglakhir + '&kecsurat=' + kecsurat)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.hideLoader();
            _this.isi = [];
            for (var i = 0; i < data.items.length; i++) {
                _this.bground = '';
                _this.tulisan = '';
                if (data.items[i].TRKECEPATANSURAT_ID == 3) {
                    _this.tulisan = '1';
                }
                else if (data.items[i].TRKECEPATANSURAT_ID == 2) {
                    _this.tulisan = '2';
                }
                else {
                    _this.tulisan = '3';
                }
                if (param == data.items[i].KODE_UNOR) {
                    _this.kode_unor = data.items[i].KODE_UNOR;
                }
                else {
                    _this.kode_unor = param;
                }
                _this.isi.push({
                    perihal: data.items[i].PERIHAL,
                    asalsurat: data.items[i].TEXT_ASAL_SURAT,
                    tglsurat: data.items[i].TGL_AGENDA,
                    bg: _this.bground,
                    id: data.items[i].ID,
                    kec: data.items[i].TRKECEPATANSURAT_ID,
                    sifat: data.items[i].TRSIFATSURAT_ID,
                    tls: _this.tulisan,
                    disp: data.items[i].disp,
                    kode: _this.kode_unor
                });
            }
            _this.pagecount = data._meta.pageCount;
        });
    };
    SuratdisposisiPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__suratdisposisidetail_suratdisposisidetail__["a" /* SuratdisposisidetailPage */], {
            item: item
        });
    };
    SuratdisposisiPage.prototype.plhpilih = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var date;
            return __generator(this, function (_a) {
                date = new Date();
                this.tanggal = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.http.get('http://103.40.94.42/wssurat/Api/plh?id=' + window.localStorage.getItem('id') + '&tgl=' + _this.tanggal)
                            .map(function (res) { return res; })
                            .subscribe(function (data) {
                            if (data === void 0) { data = []; }
                            // this.itemspartners = JSON.parse(data['_body']).results;
                            for (var i = 0; i < data.length; i++) {
                                _this.kode = data[0].KODE_UNOR_PEMBERI;
                                resolve(_this.kode);
                            }
                        });
                    })];
            });
        });
    };
    SuratdisposisiPage.prototype.plh = function (item) {
        this.zipped = !this.zipped;
        console.log(item);
        if (this.zipped == false) {
            // this.plhpilih().then(data => {
            //   this.tes1 = data;
            //   this.getdatasurat(this.nCnt,this.tes1);
            // })
            this.getsuratdisposisi(this.nCnt, item, this.datatglawal, this.datatglakhir, this.datakec);
            // this.isisurat = this.getdatasurat(this.nCnt,item);
        }
        else {
            this.getsuratdisposisi(this.nCnt, window.localStorage.getItem('kode_unor'), this.datatglawal, this.datatglakhir, this.datakec);
            // this.isisurat = this.getdatasurat(this.nCnt,window.localStorage.getItem('kode_unor'));
        }
    };
    SuratdisposisiPage.prototype.df = function (tes) {
        window.open("http://103.40.94.42/wssurat/Api/downloadsuratmasuk?id=" + tes, "_system", "location=yes");
    };
    SuratdisposisiPage.prototype.nextpage = function (item, item2) {
        this.nCnt = this.nCnt + 10;
        console.log(this.pagenumber);
        console.log(item);
        if (this.pagenumber >= item - 2) {
            this.teks = "hilang";
        }
        else {
            this.teks = "ada";
        }
        if (this.nCnt == 0) {
            this.teks2 = "hilang";
        }
        else {
            this.teks2 = "ada";
        }
        if (this.zipped == false) {
            this.getsuratdisposisi(this.nCnt, item2, this.datatglawal, this.datatglakhir, this.datakec);
        }
        else {
            this.getsuratdisposisi(this.nCnt, window.localStorage.getItem('kode_unor'), this.datatglawal, this.datatglakhir, this.datakec);
        }
        this.pagenumber = this.pagenumber + 1;
        return this.nCnt;
    };
    SuratdisposisiPage.prototype.backpage = function (item, item2) {
        this.nCnt = this.nCnt - 10;
        if (this.pagenumber <= 0) {
            this.teks = "hilang";
        }
        else {
            this.teks = "ada";
        }
        if (this.nCnt == 0) {
            this.teks2 = "hilang";
        }
        else {
            this.teks2 = "ada";
        }
        if (this.zipped == false) {
            this.getsuratdisposisi(this.nCnt, item2, this.datatglawal, this.datatglakhir, this.datakec);
        }
        else {
            this.getsuratdisposisi(this.nCnt, window.localStorage.getItem('kode_unor'), this.datatglawal, this.datatglakhir, this.datakec);
        }
        this.pagenumber = this.pagenumber - 1;
        return this.nCnt;
    };
    SuratdisposisiPage.prototype.Logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Exit',
            message: 'Are you want to exit,' + window.localStorage.getItem('nama'),
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        window.localStorage.removeItem('username');
                        window.localStorage.removeItem('password');
                        window.localStorage.removeItem('nama');
                        window.localStorage.removeItem('kode_unor');
                        window.localStorage.removeItem('kode_unker');
                        window.localStorage.removeItem('id');
                        window.localStorage.removeItem('verifikator');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                        _this.navCtrl.popToRoot();
                        console.log('OK');
                    }
                }
            ]
        });
        alert.present();
    };
    SuratdisposisiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuratdisposisiPage');
    };
    SuratdisposisiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-suratdisposisi',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/suratdisposisi/suratdisposisi.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Surat Disposisi</ion-title>\n    \n    <ion-buttons end="" class="bar-buttons bar-buttons-md {{mata}}">\n        <button icon-only="" ion-button="" class="bar-button bar-button-md bar-button-default bar-button-default-md" (click)="plh(tes1)"><span class="button-inner">\n          <ion-icon [name]="zipped ? \'ios-eye-off\' : \'ios-eye\'" aria-label="options"></ion-icon>\n          <!-- <span [hidden]="!toggle" ngHide="toggle"><ion-icon ios="ios-eye" md="md-eye" role="img" class="icon icon-md ion-md-eye" aria-label="options"></ion-icon></span> -->\n        </span><div class="button-effect" style="transform: translate3d(-20px, -14px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n      </ion-buttons>\n\n    <ion-buttons end="" class="bar-buttons bar-buttons-md">\n        <button icon-only="" ion-button="" class="bar-button bar-button-md bar-button-default bar-button-default-md" (click)="Logout()"><span class="button-inner">\n          <ion-icon ios="ios-log-in" md="md-log-in" role="img" class="icon icon-md ion-md-log-in" aria-label="options"></ion-icon>\n        </span><div class="button-effect" style="transform: translate3d(-20px, -14px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="doRefresh($event,tes1)">\n      <ion-refresher-content\n        pullingIcon="arrow-dropdown"\n        pullingText="Pull to refresh"\n        refreshingSpinner="circles"\n        refreshingText="Refreshing...">\n      </ion-refresher-content>\n    </ion-refresher>\n\n    <button full color="primary" icon-only="" ion-button="" class="bar-button bar-button-md button-block" (click)="filter(tes1)">\n        Filter <ion-icon ios="ios-add" md="md-add" role="img" class="icon icon-md ion-md-add" aria-label="options" item-right style="text-align: right;"></ion-icon>\n        <div class="button-effect" style="transform: translate3d(-20px, -14px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div>\n    </button>\n    \n    <ion-label *ngIf="datatglawal != \'\' || datatglakhir != \'\' || datakec != \'\'">Filter by:\n        <span *ngIf="datatglawal != \'\'"><i>{{datatglawal}} s/d {{datatglakhir}}</i></span>\n    </ion-label>\n    \n    <ion-label *ngIf="datakec != \'\'">Kecepatan surat :\n      <i *ngIf="datakec == 1">Biasa</i>\n      <i *ngIf="datakec == 2">Segera</i>\n      <i *ngIf="datakec == 3">Sangat Segera</i>\n    </ion-label>\n\n    <ion-card *ngFor="let tes of isi" (click)="itemTapped($event, tes)">\n        <ion-grid  class="{{tes.bg}}">\n        <ion-row>\n          <ion-col col-10 style="font-size:14px"><b>{{tes.perihal}}</b></ion-col>\n            <!-- <div class="text-right"><h3>\n            </h3>\n          </div> -->\n          <ion-col>\n              <ion-badge item-right>{{tes.tls}}</ion-badge>\n            <br>\n            <ion-icon ios="ios-cloud-download-outline" md="md-cloud-download" role="img" class="icon icon-md ion-md-cloud-download-outline" style="font-size: 3.2em !important;" (click)="df(tes.id)"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-8 style="font-size:13px">Unit Asal Surat :</ion-col>\n          <ion-col col-3 italic style="font-size:13px">{{tes.tglsurat}}</ion-col>\n          <ion-col col-1 class="{{tes.disp}}"><ion-icon name="arrow-dropdown-circle" style="font-size: 1.2em !important;"></ion-icon></ion-col>\n        </ion-row>\n        <ion-row>{{tes.asalsurat}}</ion-row>\n      </ion-grid>\n        <!-- <ion-icon ios="ios-arrow-dropdown-circle" md="arrow-dropdown-circle"></ion-icon> -->\n    </ion-card>\n    </ion-content>\n    <ion-footer>\n        <ion-toolbar>\n            <ion-buttons left>\n            <button (click)="backpage(pagecount,tes1)" class="{{teks2}} button-clear" text-left left><span style="font-size:12pt">\n                <ion-icon name="arrow-back" role="img" class="icon icon-ios ion-ios-arrow-back" aria-label="arrow back"></ion-icon>\n                Sebelumnya\n              </span><div class="button-effect"></div></button>\n            </ion-buttons>\n            <ion-label style="color:white">Page {{pagenumber+1}} / {{pagecount}}</ion-label>\n              <ion-buttons end *ngIf="pagecount != 0">\n              <button (click)="nextpage(pagecount,tes1)" class="{{teks}} button-clear2" text-right><span style="font-size:12pt">\n                  Selanjutnya\n                  <ion-icon name="arrow-forward" role="img" class="icon icon-ios ion-ios-arrow-forward" aria-label="arrow forward"></ion-icon>\n                </span><div class="button-effect"></div></button>\n              </ion-buttons>\n        </ion-toolbar>\n    </ion-footer>'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/suratdisposisi/suratdisposisi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */]])
    ], SuratdisposisiPage);
    return SuratdisposisiPage;
}());

//# sourceMappingURL=suratdisposisi.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurattembusanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__surattembusandetail_surattembusandetail__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filtermodal_filtermodal__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var SurattembusanPage = /** @class */ (function () {
    function SurattembusanPage(navCtrl, navParams, http, loadingCtrl, alertCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.zipped = true;
        this.nCnt = 0;
        this.pagenumber = 0;
        this.datatglawal = '';
        this.datatglakhir = '';
        this.datakec = '';
        if (this.datatglawal == undefined) {
            this.datatglawal = '';
        }
        if (this.datatglakhir == undefined) {
            this.datatglakhir = '';
        }
        if (this.datakec == undefined) {
            this.datakec = '';
        }
        this.tembusan = this.getsurattembusan(this.nCnt, window.localStorage.getItem('kode_unor'), this.datatglawal, this.datatglakhir, this.datakec);
        this.plhpilih().then(function (data) {
            _this.tes1 = data;
        });
        if (this.nCnt == 0) {
            this.teks2 = "hilang";
        }
        else {
            this.teks2 = "ada";
        }
        //=============================================================
        var date = new Date();
        this.tanggal = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
        console.log(this.tanggal);
        //=============================================================d
        this.iddata = '';
        this.http.get('http://103.40.94.42/wssurat/Api/plh?id=' + window.localStorage.getItem('id') + '&tgl=' + this.tanggal)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            console.log(data.KODE_UNOR);
            _this.iddata = data.KODE_UNOR;
            if (data.length > 0) {
                _this.mata = 'mata1';
            }
            else {
                _this.mata = 'mata2';
            }
            console.log(_this.iddata);
        });
    }
    SurattembusanPage.prototype.doRefresh = function (refresher, item) {
        console.log('Begin async operation', refresher);
        if (this.zipped == false) {
            this.getsurattembusan(this.nCnt, item, this.datatglawal, this.datatglakhir, this.datakec);
        }
        else {
            this.getsurattembusan(this.nCnt, window.localStorage.getItem('kode_unor'), this.datatglawal, this.datatglakhir, this.datakec);
        }
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    SurattembusanPage.prototype.showLoader = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loader.present();
    };
    SurattembusanPage.prototype.hideLoader = function () {
        if (this.loader)
            this.loader.dismiss();
    };
    SurattembusanPage.prototype.plhpilih = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var date;
            return __generator(this, function (_a) {
                date = new Date();
                this.tanggal = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.http.get('http://103.40.94.42/wssurat/Api/plh?id=' + window.localStorage.getItem('id') + '&tgl=' + _this.tanggal)
                            .subscribe(function (data) {
                            if (data === void 0) { data = []; }
                            // this.itemspartners = JSON.parse(data['_body']).results;
                            for (var i = 0; i < data.length; i++) {
                                _this.kode = data[0].KODE_UNOR_PEMBERI;
                                resolve(_this.kode);
                            }
                        });
                    })];
            });
        });
    };
    SurattembusanPage.prototype.plh = function (item) {
        this.zipped = !this.zipped;
        console.log(item);
        if (this.zipped == false) {
            // this.plhpilih().then(data => {
            //   this.tes1 = data;
            //   this.getdatasurat(this.nCnt,this.tes1);
            // })
            this.getsurattembusan(this.nCnt, item, this.datatglawal, this.datatglakhir, this.datakec);
            // this.isisurat = this.getdatasurat(this.nCnt,item);
        }
        else {
            this.getsurattembusan(this.nCnt, window.localStorage.getItem('kode_unor'), this.datatglawal, this.datatglakhir, this.datakec);
            // this.isisurat = this.getdatasurat(this.nCnt,window.localStorage.getItem('kode_unor'));
        }
    };
    SurattembusanPage.prototype.getsurattembusan = function (n, param, tglawal, tglakhir, kecsurat) {
        var _this = this;
        this.showLoader();
        return this.http.get('http://103.40.94.42/wssurat/Api/suratmasuktembusan/page/' + n + '?kode_unor=' + param + '&tgl_awal=' + tglawal + '&tgl_akhir=' + tglakhir + '&kecsurat=' + kecsurat)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.hideLoader();
            _this.isi = [];
            for (var i = 0; i < data.items.length; i++) {
                _this.bground = '';
                _this.tulisan = '';
                if (data.items[i].TRKECEPATANSURAT_ID == 3) {
                    _this.tulisan = '1';
                }
                else if (data.items[i].TRKECEPATANSURAT_ID == 2) {
                    _this.tulisan = '2';
                }
                else {
                    _this.tulisan = '3';
                }
                if (param == data.items[i].KODE_UNOR) {
                    _this.kode_unor = data.items[i].KODE_UNOR;
                }
                else {
                    _this.kode_unor = param;
                }
                _this.isi.push({
                    perihal: data.items[i].PERIHAL,
                    asalsurat: data.items[i].TEXT_ASAL_SURAT,
                    tglsurat: data.items[i].TGL_AGENDA,
                    bg: _this.bground,
                    id: data.items[i].ID,
                    tls: _this.tulisan,
                    kode: _this.kode_unor
                });
            }
            _this.pagecount = data._meta.pageCount;
        });
    };
    SurattembusanPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__surattembusandetail_surattembusandetail__["a" /* SurattembusandetailPage */], {
            item: item
        });
    };
    SurattembusanPage.prototype.df = function (tes) {
        window.open("http://103.40.94.42/wssurat/Api/downloadsuratmasuk?id=" + tes, "_system", "location=yes");
    };
    SurattembusanPage.prototype.filter = function (item) {
        var _this = this;
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__filtermodal_filtermodal__["a" /* FiltermodalPage */]);
        myModal.onDidDismiss(function (data) {
            if (data === void 0) { data = []; }
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                _this.datatglawal = data[0].a;
                _this.datatglakhir = data[1].b;
                _this.datakec = data[2].kec;
            }
            console.log(_this.datakec);
            if (_this.zipped == false) {
                _this.getsurattembusan(_this.nCnt, item, _this.datatglawal, _this.datatglakhir, _this.datakec);
            }
            else {
                _this.getsurattembusan(_this.nCnt, window.localStorage.getItem('kode_unor'), _this.datatglawal, _this.datatglakhir, _this.datakec);
            }
        });
        myModal.present();
    };
    SurattembusanPage.prototype.nextpage = function (item, item2) {
        this.nCnt = this.nCnt + 10;
        console.log(this.pagenumber);
        console.log(item);
        if (this.pagenumber >= item - 2) {
            this.teks = "hilang";
        }
        else {
            this.teks = "ada";
        }
        if (this.nCnt == 0) {
            this.teks2 = "hilang";
        }
        else {
            this.teks2 = "ada";
        }
        if (this.zipped == false) {
            this.getsurattembusan(this.nCnt, item2, this.datatglawal, this.datatglakhir, this.datakec);
        }
        else {
            this.getsurattembusan(this.nCnt, window.localStorage.getItem('kode_unor'), this.datatglawal, this.datatglakhir, this.datakec);
        }
        this.pagenumber = this.pagenumber + 1;
        return this.nCnt;
    };
    SurattembusanPage.prototype.backpage = function (item, item2) {
        this.nCnt = this.nCnt - 10;
        if (this.pagenumber <= 0) {
            this.teks = "hilang";
        }
        else {
            this.teks = "ada";
        }
        if (this.nCnt == 0) {
            this.teks2 = "hilang";
        }
        else {
            this.teks2 = "ada";
        }
        if (this.zipped == false) {
            this.getsurattembusan(this.nCnt, item2, this.datatglawal, this.datatglakhir, this.datakec);
        }
        else {
            this.getsurattembusan(this.nCnt, window.localStorage.getItem('kode_unor'), this.datatglawal, this.datatglakhir, this.datakec);
        }
        this.pagenumber = this.pagenumber - 1;
        return this.nCnt;
    };
    SurattembusanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurattembusanPage');
    };
    SurattembusanPage.prototype.Logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Exit',
            message: 'Are you want to exit,' + window.localStorage.getItem('nama'),
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        window.localStorage.removeItem('username');
                        window.localStorage.removeItem('password');
                        window.localStorage.removeItem('nama');
                        window.localStorage.removeItem('kode_unor');
                        window.localStorage.removeItem('kode_unker');
                        window.localStorage.removeItem('id');
                        window.localStorage.removeItem('verifikator');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                        _this.navCtrl.popToRoot();
                        console.log('OK');
                    }
                }
            ]
        });
        alert.present();
    };
    SurattembusanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-surattembusan',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/surattembusan/surattembusan.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Surat Tembusan</ion-title>\n\n    <ion-buttons end="" class="bar-buttons bar-buttons-md {{mata}}">\n        <button icon-only="" ion-button="" class="bar-button bar-button-md bar-button-default bar-button-default-md" (click)="plh(tes1)"><span class="button-inner">\n          <ion-icon [name]="zipped ? \'ios-eye-off\' : \'ios-eye\'" aria-label="options"></ion-icon>\n          <!-- <span [hidden]="!toggle" ngHide="toggle"><ion-icon ios="ios-eye" md="md-eye" role="img" class="icon icon-md ion-md-eye" aria-label="options"></ion-icon></span> -->\n        </span><div class="button-effect" style="transform: translate3d(-20px, -14px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n      </ion-buttons>\n      \n    <ion-buttons end="" class="bar-buttons bar-buttons-md">\n      <button icon-only="" ion-button="" class="bar-button bar-button-md bar-button-default bar-button-default-md" (click)="Logout()"><span class="button-inner">\n        <ion-icon ios="ios-log-in" md="md-log-in" role="img" class="icon icon-md ion-md-log-in" aria-label="options"></ion-icon>\n      </span><div class="button-effect" style="transform: translate3d(-20px, -14px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="doRefresh($event,tes1)">\n        <ion-refresher-content\n          pullingIcon="arrow-dropdown"\n          pullingText="Pull to refresh"\n          refreshingSpinner="circles"\n          refreshingText="Refreshing...">\n        </ion-refresher-content>\n      </ion-refresher>\n\n      <button full color="primary" icon-only="" ion-button="" class="bar-button bar-button-md button-block" (click)="filter(tes1)">\n          Filter <ion-icon ios="ios-add" md="md-add" role="img" class="icon icon-md ion-md-add" aria-label="options" item-right style="text-align: right;"></ion-icon>\n          <div class="button-effect" style="transform: translate3d(-20px, -14px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div>\n      </button>\n      \n      <ion-label *ngIf="datatglawal != \'\' || datatglakhir != \'\' || datakec != \'\'">Filter by:\n          <span *ngIf="datatglawal != \'\'"><i>{{datatglawal}} s/d {{datatglakhir}}</i></span>\n      </ion-label>\n      \n      <ion-label *ngIf="datakec != \'\'">Kecepatan surat :\n        <i *ngIf="datakec == 1">Biasa</i>\n        <i *ngIf="datakec == 2">Segera</i>\n        <i *ngIf="datakec == 3">Sangat Segera</i>\n      </ion-label>\n\n    <ion-list>\n        <ion-card *ngFor="let tes of isi" (click)="itemTapped($event, tes.id)">\n            <ion-grid>\n              <ion-row>\n                <ion-col col-10 style="font-size:14px"><b>{{tes.perihal}}</b></ion-col>\n                  <ion-col>\n                      <ion-badge item-right>{{tes.tls}}</ion-badge>\n                    <br>\n                    <ion-icon ios="ios-cloud-download-outline" md="md-cloud-download" role="img" class="icon icon-md ion-md-cloud-download-outline" style="font-size: 3.2em !important;" (click)="df(tes.id)"></ion-icon>\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-8 style="font-size:13px">Unit Asal Surat :</ion-col>\n                <ion-col col-3 italic style="font-size:13px" >{{tes.tglsurat}}</ion-col>\n              </ion-row>\n              <ion-row>{{tes.asalsurat}}</ion-row>\n            </ion-grid>\n        </ion-card>\n      </ion-list>  \n    </ion-content>\n    <ion-footer>\n        <ion-toolbar>\n            <ion-buttons left>\n            <button (click)="backpage(pagecount,tes1)" class="{{teks2}} button-clear" text-left left><span style="font-size:12pt">\n                <ion-icon name="arrow-back" role="img" class="icon icon-ios ion-ios-arrow-back" aria-label="arrow back"></ion-icon>\n                Sebelumnya\n              </span><div class="button-effect"></div></button>\n            </ion-buttons>\n            <ion-label style="color:white">Page {{pagenumber+1}} / {{pagecount}}</ion-label>\n              <ion-buttons end *ngIf="pagecount != 0">\n              <button (click)="nextpage(pagecount,tes1)" class="{{teks}} button-clear2" text-right><span style="font-size:12pt">\n                  Selanjutnya\n                  <ion-icon name="arrow-forward" role="img" class="icon icon-ios ion-ios-arrow-forward" aria-label="arrow forward"></ion-icon>\n                </span><div class="button-effect"></div></button>\n              </ion-buttons>\n        </ion-toolbar>\n    </ion-footer>\n    '/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/surattembusan/surattembusan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */]])
    ], SurattembusanPage);
    return SurattembusanPage;
}());

//# sourceMappingURL=surattembusan.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/asalasli/asalasli.module": [
		511,
		24
	],
	"../pages/asaldisp/asaldisp.module": [
		512,
		23
	],
	"../pages/disposisiasli/disposisiasli.module": [
		513,
		22
	],
	"../pages/disposisidisp/disposisidisp.module": [
		514,
		21
	],
	"../pages/filtermodal/filtermodal.module": [
		515,
		20
	],
	"../pages/konsepcatatan/konsepcatatan.module": [
		516,
		19
	],
	"../pages/konsepinfo/konsepinfo.module": [
		517,
		18
	],
	"../pages/konsepsurat/konsepsurat.module": [
		518,
		17
	],
	"../pages/konsepsuratdetail/konsepsuratdetail.module": [
		519,
		16
	],
	"../pages/login/login.module": [
		520,
		15
	],
	"../pages/pengagendaan/pengagendaan.module": [
		521,
		14
	],
	"../pages/pengagendaanasal/pengagendaanasal.module": [
		522,
		0
	],
	"../pages/pengagendaandetail/pengagendaandetail.module": [
		523,
		13
	],
	"../pages/pengagendaaninfo/pengagendaaninfo.module": [
		524,
		12
	],
	"../pages/pengagendaanverifikasi/pengagendaanverifikasi.module": [
		532,
		11
	],
	"../pages/statusasli/statusasli.module": [
		525,
		10
	],
	"../pages/statusdisp/statusdisp.module": [
		526,
		9
	],
	"../pages/suratasli/suratasli.module": [
		533,
		8
	],
	"../pages/surataslidetail/surataslidetail.module": [
		527,
		7
	],
	"../pages/suratdisposisi/suratdisposisi.module": [
		534,
		6
	],
	"../pages/suratdisposisidetail/suratdisposisidetail.module": [
		528,
		5
	],
	"../pages/surattembusan/surattembusan.module": [
		535,
		4
	],
	"../pages/surattembusandetail/surattembusandetail.module": [
		529,
		3
	],
	"../pages/trackingasli/trackingasli.module": [
		530,
		2
	],
	"../pages/trackingdisp/trackingdisp.module": [
		531,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, http, navParams, formBuilder, loadingCtrl, toastCtrl, events, storage) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.storage = storage;
        this.authForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])]
        });
    }
    // createUser(user) {
    //   console.log('User created!')
    //   this.events.publish('user:created', user, Date.now());
    // }
    LoginPage.prototype.showLoader = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loader.present();
    };
    LoginPage.prototype.hideLoader = function () {
        if (this.loader)
            this.loader.dismiss();
    };
    LoginPage.prototype.showToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Username atau Password salah',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    LoginPage.prototype.hideToast = function () {
        if (this.toast)
            this.toast.dismiss();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.onSubmit = function (value) {
        var _this = this;
        // loading.present();
        this.showLoader();
        // this.events.publish('userloggedin',value.username);                                                                                                                                                     );
        //  this.http.get('http://localhost/persuratan/ws/Api/user2?userid='+value.username)
        //     .subscribe((data:any={}) => {
        //       this.storage.set('verifikasi', data.IS_VERIFIKATOR);
        //     })
        if (this.authForm.valid) {
            this.http.get('http://portalsso.basarnas.go.id/api/login?username=' + value.username + '&password=' + value.password)
                .subscribe(function (data) {
                if (data === void 0) { data = {}; }
                if (value.username == data.USERID) {
                    window.localStorage.setItem('nama', data.NAMA_LENGKAP);
                    _this.http.get('http://103.40.94.42/wssurat/Api/usersimpeg?userid=' + data.USERID)
                        .subscribe(function (simpeg) {
                        if (simpeg === void 0) { simpeg = {}; }
                        console.log(simpeg[0].USERID);
                        if (data.USERID == simpeg[0].USERID) {
                            console.log(simpeg[0].photo);
                            window.localStorage.setItem('photo', simpeg[0].photo);
                        }
                    });
                    _this.http.get('http://103.40.94.42/wssurat/Api/user')
                        .subscribe(function (data1) {
                        if (data1 === void 0) { data1 = {}; }
                        for (var i = 0; i < data1.length; i++) {
                            if (data1[i].USERID == value.username && data1[i].TRGROUP_ID == 3) {
                                _this.hideLoader();
                                // loading.dismiss();
                                window.localStorage.setItem('username', value.username);
                                window.localStorage.setItem('password', value.password);
                                window.localStorage.setItem('kode_unor', data1[i].KODE_UNOR);
                                window.localStorage.setItem('id', data1[i].ID);
                                window.localStorage.setItem('verifikator', data1[i].IS_VERIFIKATOR);
                                window.localStorage.setItem('kode_unker', data1[i].KODE_UNKER);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                            }
                        }
                    }, function (err) {
                        // loading.dismiss();   
                        _this.hideLoader();
                    });
                }
            }, function (err) {
                // loading.dismiss();
                _this.hideLoader();
                _this.showToast();
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/login/login.html"*/'<ion-content class="background">\n	<h2 class="login-title">Persuratan</h2>\n	<img src="../assets/imgs/logo.png" alt="" width="110" height="110" style="margin-top:3%">\n	<!-- <ion-img width="110" height="110" src="../assets/imgs/logo.png"></ion-img> -->\n	<form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n		<ion-card>\n			<ion-card-header>\n				LOGIN\n			</ion-card-header>\n			<ion-card-content>					\n				<ion-list no-lines>				\n					<ion-item>\n						<ion-label floating>Username</ion-label>\n						<ion-input formControlName="username" type="text"></ion-input>\n					</ion-item>\n						\n					<ion-item *ngIf="authForm.controls.username.hasError(\'required\') && authForm.controls.username.touched">\n						<p>Username harus diisi</p>\n					</ion-item>\n					<ion-item *ngIf="authForm.controls.username.hasError(\'pattern\') && authForm.controls.username.touched">\n						<p>Hanya huruf besar dan kecil yang diperbolehkan</p>\n					</ion-item>        \n					<ion-item *ngIf="authForm.controls.username.hasError(\'minlength\') && authForm.controls.username.touched">\n						<p>Minimum username 6 karakter</p>\n					</ion-item>\n					<ion-item *ngIf="authForm.controls.username.hasError(\'maxlength\') && authForm.controls.username.touched">\n						<p>Maximum username 30 karakter</p>\n					</ion-item>\n					\n					<ion-item style="border-bottom:unset;">\n						<ion-label floating>Password</ion-label>\n						<ion-input formControlName="password" type="password"></ion-input>\n					</ion-item>\n					\n					<ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n						<p>Password harus diisi</p>\n					</ion-item>\n					<ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n						<p>Minimum password 6 karakter</p>\n					</ion-item>  							\n				</ion-list>\n			</ion-card-content>			\n			<button ion-button full [disabled]="!authForm.valid" type="submit">M A S U K</button>\n		</ion-card>\n	</form>\n</ion-content>'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(396);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ResourceTree_ResourceTree__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic2_super_tabs__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_suratasli_suratasli__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_surattembusan_surattembusan__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_suratdisposisi_suratdisposisi__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_konsepsurat_konsepsurat__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_surataslidetail_surataslidetail__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_surattembusandetail_surattembusandetail__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_suratdisposisidetail_suratdisposisidetail__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_konsepsuratdetail_konsepsuratdetail__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_pengagendaaninfo_pengagendaaninfo__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_pengagendaan_pengagendaan__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_pengagendaandetail_pengagendaandetail__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_pengagendaanverifikasi_pengagendaanverifikasi__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_filtermodal_filtermodal__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_disposisiasli_disposisiasli__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_asalasli_asalasli__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_trackingasli_trackingasli__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_statusasli_statusasli__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_disposisidisp_disposisidisp__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_asaldisp_asaldisp__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_trackingdisp_trackingdisp__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_statusdisp_statusdisp__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_konsepinfo_konsepinfo__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_konsepcatatan_konsepcatatan__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_status_bar__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_login_login__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { DocumentViewer } from '@ionic-native/document-viewer';
// import { File } from '@ionic-native/file';
// import { FileOpener } from '@ionic-native/file-opener';
// import { FileTransfer } from '@ionic-native/file-transfer';













// import { PengagendaanasalPage } from '../pages/pengagendaanasal/pengagendaanasal';















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_suratasli_suratasli__["a" /* SuratasliPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_surattembusan_surattembusan__["a" /* SurattembusanPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_suratdisposisi_suratdisposisi__["a" /* SuratdisposisiPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_konsepsurat_konsepsurat__["a" /* KonsepsuratPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_surataslidetail_surataslidetail__["a" /* SurataslidetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_disposisiasli_disposisiasli__["a" /* DisposisiasliPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_asalasli_asalasli__["a" /* AsalasliPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_trackingasli_trackingasli__["a" /* TrackingasliPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_statusasli_statusasli__["a" /* StatusasliPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_disposisidisp_disposisidisp__["a" /* DisposisidispPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_asaldisp_asaldisp__["a" /* AsaldispPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_trackingdisp_trackingdisp__["a" /* TrackingdispPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_statusdisp_statusdisp__["a" /* StatusdispPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_surattembusandetail_surattembusandetail__["a" /* SurattembusandetailPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_suratdisposisidetail_suratdisposisidetail__["a" /* SuratdisposisidetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_konsepsuratdetail_konsepsuratdetail__["a" /* KonsepsuratdetailPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_konsepinfo_konsepinfo__["a" /* KonsepinfoPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_konsepcatatan_konsepcatatan__["a" /* KonsepcatatanPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pengagendaan_pengagendaan__["a" /* PengagendaanPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_pengagendaandetail_pengagendaandetail__["a" /* PengagendaandetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_pengagendaaninfo_pengagendaaninfo__["a" /* PengagendaaninfoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pengagendaanverifikasi_pengagendaanverifikasi__["a" /* PengagendaanverifikasiPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_filtermodal_filtermodal__["a" /* FiltermodalPage */],
                __WEBPACK_IMPORTED_MODULE_5__components_ResourceTree_ResourceTree__["a" /* ResourceTree */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/asalasli/asalasli.module#AsalasliPageModule', name: 'AsalasliPage', segment: 'asalasli', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/asaldisp/asaldisp.module#AsaldispPageModule', name: 'AsaldispPage', segment: 'asaldisp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/disposisiasli/disposisiasli.module#DisposisiasliPageModule', name: 'DisposisiasliPage', segment: 'disposisiasli', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/disposisidisp/disposisidisp.module#DisposisidispPageModule', name: 'DisposisidispPage', segment: 'disposisidisp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filtermodal/filtermodal.module#FiltermodalPageModule', name: 'FiltermodalPage', segment: 'filtermodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/konsepcatatan/konsepcatatan.module#KonsepcatatanPageModule', name: 'KonsepcatatanPage', segment: 'konsepcatatan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/konsepinfo/konsepinfo.module#KonsepinfoPageModule', name: 'KonsepinfoPage', segment: 'konsepinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/konsepsurat/konsepsurat.module#KonsepsuratPageModule', name: 'KonsepsuratPage', segment: 'konsepsurat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/konsepsuratdetail/konsepsuratdetail.module#KonsepsuratdetailPageModule', name: 'KonsepsuratdetailPage', segment: 'konsepsuratdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pengagendaan/pengagendaan.module#PengagendaanPageModule', name: 'PengagendaanPage', segment: 'pengagendaan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pengagendaanasal/pengagendaanasal.module#PengagendaanasalPageModule', name: 'PengagendaanasalPage', segment: 'pengagendaanasal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pengagendaandetail/pengagendaandetail.module#PengagendaandetailPageModule', name: 'PengagendaandetailPage', segment: 'pengagendaandetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pengagendaaninfo/pengagendaaninfo.module#PengagendaaninfoPageModule', name: 'PengagendaaninfoPage', segment: 'pengagendaaninfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/statusasli/statusasli.module#StatusasliPageModule', name: 'StatusasliPage', segment: 'statusasli', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/statusdisp/statusdisp.module#StatusdispPageModule', name: 'StatusdispPage', segment: 'statusdisp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/surataslidetail/surataslidetail.module#SurataslidetailPageModule', name: 'SurataslidetailPage', segment: 'surataslidetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/suratdisposisidetail/suratdisposisidetail.module#SuratdisposisidetailPageModule', name: 'SuratdisposisidetailPage', segment: 'suratdisposisidetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/surattembusandetail/surattembusandetail.module#SurattembusandetailPageModule', name: 'SurattembusandetailPage', segment: 'surattembusandetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trackingasli/trackingasli.module#TrackingasliPageModule', name: 'TrackingasliPage', segment: 'trackingasli', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/trackingdisp/trackingdisp.module#TrackingdispPageModule', name: 'TrackingdispPage', segment: 'trackingdisp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pengagendaanverifikasi/pengagendaanverifikasi.module#PengagendaanverifikasiPageModule', name: 'PengagendaanverifikasiPage', segment: 'pengagendaanverifikasi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/suratasli/suratasli.module#SuratasliPageModule', name: 'SuratasliPage', segment: 'suratasli', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/suratdisposisi/suratdisposisi.module#SuratdisposisiPageModule', name: 'SuratdisposisiPage', segment: 'suratdisposisi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/surattembusan/surattembusan.module#SurattembusanPageModule', name: 'SurattembusanPage', segment: 'surattembusan', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_suratasli_suratasli__["a" /* SuratasliPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_suratdisposisi_suratdisposisi__["a" /* SuratdisposisiPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_surattembusan_surattembusan__["a" /* SurattembusanPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_konsepsurat_konsepsurat__["a" /* KonsepsuratPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_surataslidetail_surataslidetail__["a" /* SurataslidetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_disposisiasli_disposisiasli__["a" /* DisposisiasliPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_asalasli_asalasli__["a" /* AsalasliPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_trackingasli_trackingasli__["a" /* TrackingasliPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_statusasli_statusasli__["a" /* StatusasliPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_disposisidisp_disposisidisp__["a" /* DisposisidispPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_asaldisp_asaldisp__["a" /* AsaldispPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_trackingdisp_trackingdisp__["a" /* TrackingdispPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_statusdisp_statusdisp__["a" /* StatusdispPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_surattembusandetail_surattembusandetail__["a" /* SurattembusandetailPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_suratdisposisidetail_suratdisposisidetail__["a" /* SuratdisposisidetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_konsepsuratdetail_konsepsuratdetail__["a" /* KonsepsuratdetailPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_konsepinfo_konsepinfo__["a" /* KonsepinfoPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_konsepcatatan_konsepcatatan__["a" /* KonsepcatatanPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pengagendaan_pengagendaan__["a" /* PengagendaanPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_pengagendaandetail_pengagendaandetail__["a" /* PengagendaandetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_pengagendaaninfo_pengagendaaninfo__["a" /* PengagendaaninfoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pengagendaanverifikasi_pengagendaanverifikasi__["a" /* PengagendaanverifikasiPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_filtermodal_filtermodal__["a" /* FiltermodalPage */],
                __WEBPACK_IMPORTED_MODULE_5__components_ResourceTree_ResourceTree__["a" /* ResourceTree */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */],
                // DocumentViewer,
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltermodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FiltermodalPage = /** @class */ (function () {
    // a:'';
    // b:'';
    // kec:'';
    function FiltermodalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    FiltermodalPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    FiltermodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FiltermodalPage');
    };
    FiltermodalPage.prototype.itemSearch = function (awal, akhir, kecepatan) {
        if (awal == undefined) {
            awal = '';
        }
        if (akhir == undefined) {
            akhir = '';
        }
        if (kecepatan == undefined) {
            kecepatan = '';
        }
        this.viewCtrl.dismiss([{ "a": awal }, { "b": akhir }, { "kec": kecepatan }]);
        console.log(kecepatan);
    };
    FiltermodalPage.prototype.itemReset = function () {
        this.tgl_awal = '';
        this.tgl_akhir = '';
        this.kecsurat = '';
    };
    FiltermodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-filtermodal',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/filtermodal/filtermodal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <!-- <button item-left ion-button (click)="closeModal()"><ion-icon name="ios-close"></ion-icon></button> -->\n\n    <ion-buttons start>\n      <button icon-only="" ion-button="" class="bar-button bar-button-md bar-button-default bar-button-default-md" (click)="closeModal()"><span class="button-inner">\n        <ion-icon ios="ios-close" md="md-close" role="img" class="icon icon-md ion-md-close" aria-label="options"></ion-icon>\n       </span><div class="button-effect" style="transform: translate3d(-20px, -14px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n    </ion-buttons>\n    <ion-title>Filter Surat</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n          <ion-label>Tanggal Awal</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="tgl_awal"></ion-datetime>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>Tanggal Akhir</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="tgl_akhir"></ion-datetime>\n        </ion-item>\n    </ion-list>\n    <ion-label><b>Kecepatan Surat</b></ion-label>\n    <ion-list radio-group [(ngModel)]="kecsurat">\n        <ion-item>\n          <ion-label>Sangat Segera</ion-label>\n          <ion-radio value="3"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Segera</ion-label>\n          <ion-radio value="2"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Biasa</ion-label>\n          <ion-radio value="1"></ion-radio>\n        </ion-item>\n    </ion-list>\n\n    <div text-center>\n      <button ion-button color="primary" type="submit" (click)="itemSearch(tgl_awal, tgl_akhir, kecsurat)" >Cari</button>\n      <button ion-button color="primary" type="submit" (click)="itemReset()" >Reset</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/filtermodal/filtermodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ViewController */]])
    ], FiltermodalPage);
    return FiltermodalPage;
}());

//# sourceMappingURL=filtermodal.js.map

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 244,
	"./af.js": 244,
	"./ar": 245,
	"./ar-dz": 246,
	"./ar-dz.js": 246,
	"./ar-kw": 247,
	"./ar-kw.js": 247,
	"./ar-ly": 248,
	"./ar-ly.js": 248,
	"./ar-ma": 249,
	"./ar-ma.js": 249,
	"./ar-sa": 250,
	"./ar-sa.js": 250,
	"./ar-tn": 251,
	"./ar-tn.js": 251,
	"./ar.js": 245,
	"./az": 252,
	"./az.js": 252,
	"./be": 253,
	"./be.js": 253,
	"./bg": 254,
	"./bg.js": 254,
	"./bm": 255,
	"./bm.js": 255,
	"./bn": 256,
	"./bn.js": 256,
	"./bo": 257,
	"./bo.js": 257,
	"./br": 258,
	"./br.js": 258,
	"./bs": 259,
	"./bs.js": 259,
	"./ca": 260,
	"./ca.js": 260,
	"./cs": 261,
	"./cs.js": 261,
	"./cv": 262,
	"./cv.js": 262,
	"./cy": 263,
	"./cy.js": 263,
	"./da": 264,
	"./da.js": 264,
	"./de": 265,
	"./de-at": 266,
	"./de-at.js": 266,
	"./de-ch": 267,
	"./de-ch.js": 267,
	"./de.js": 265,
	"./dv": 268,
	"./dv.js": 268,
	"./el": 269,
	"./el.js": 269,
	"./en-au": 270,
	"./en-au.js": 270,
	"./en-ca": 271,
	"./en-ca.js": 271,
	"./en-gb": 272,
	"./en-gb.js": 272,
	"./en-ie": 273,
	"./en-ie.js": 273,
	"./en-il": 274,
	"./en-il.js": 274,
	"./en-nz": 275,
	"./en-nz.js": 275,
	"./eo": 276,
	"./eo.js": 276,
	"./es": 277,
	"./es-do": 278,
	"./es-do.js": 278,
	"./es-us": 279,
	"./es-us.js": 279,
	"./es.js": 277,
	"./et": 280,
	"./et.js": 280,
	"./eu": 281,
	"./eu.js": 281,
	"./fa": 282,
	"./fa.js": 282,
	"./fi": 283,
	"./fi.js": 283,
	"./fo": 284,
	"./fo.js": 284,
	"./fr": 285,
	"./fr-ca": 286,
	"./fr-ca.js": 286,
	"./fr-ch": 287,
	"./fr-ch.js": 287,
	"./fr.js": 285,
	"./fy": 288,
	"./fy.js": 288,
	"./gd": 289,
	"./gd.js": 289,
	"./gl": 290,
	"./gl.js": 290,
	"./gom-latn": 291,
	"./gom-latn.js": 291,
	"./gu": 292,
	"./gu.js": 292,
	"./he": 293,
	"./he.js": 293,
	"./hi": 294,
	"./hi.js": 294,
	"./hr": 295,
	"./hr.js": 295,
	"./hu": 296,
	"./hu.js": 296,
	"./hy-am": 297,
	"./hy-am.js": 297,
	"./id": 298,
	"./id.js": 298,
	"./is": 299,
	"./is.js": 299,
	"./it": 300,
	"./it.js": 300,
	"./ja": 301,
	"./ja.js": 301,
	"./jv": 302,
	"./jv.js": 302,
	"./ka": 303,
	"./ka.js": 303,
	"./kk": 304,
	"./kk.js": 304,
	"./km": 305,
	"./km.js": 305,
	"./kn": 306,
	"./kn.js": 306,
	"./ko": 307,
	"./ko.js": 307,
	"./ky": 308,
	"./ky.js": 308,
	"./lb": 309,
	"./lb.js": 309,
	"./lo": 310,
	"./lo.js": 310,
	"./lt": 311,
	"./lt.js": 311,
	"./lv": 312,
	"./lv.js": 312,
	"./me": 313,
	"./me.js": 313,
	"./mi": 314,
	"./mi.js": 314,
	"./mk": 315,
	"./mk.js": 315,
	"./ml": 316,
	"./ml.js": 316,
	"./mn": 317,
	"./mn.js": 317,
	"./mr": 318,
	"./mr.js": 318,
	"./ms": 319,
	"./ms-my": 320,
	"./ms-my.js": 320,
	"./ms.js": 319,
	"./mt": 321,
	"./mt.js": 321,
	"./my": 322,
	"./my.js": 322,
	"./nb": 323,
	"./nb.js": 323,
	"./ne": 324,
	"./ne.js": 324,
	"./nl": 325,
	"./nl-be": 326,
	"./nl-be.js": 326,
	"./nl.js": 325,
	"./nn": 327,
	"./nn.js": 327,
	"./pa-in": 328,
	"./pa-in.js": 328,
	"./pl": 329,
	"./pl.js": 329,
	"./pt": 330,
	"./pt-br": 331,
	"./pt-br.js": 331,
	"./pt.js": 330,
	"./ro": 332,
	"./ro.js": 332,
	"./ru": 333,
	"./ru.js": 333,
	"./sd": 334,
	"./sd.js": 334,
	"./se": 335,
	"./se.js": 335,
	"./si": 336,
	"./si.js": 336,
	"./sk": 337,
	"./sk.js": 337,
	"./sl": 338,
	"./sl.js": 338,
	"./sq": 339,
	"./sq.js": 339,
	"./sr": 340,
	"./sr-cyrl": 341,
	"./sr-cyrl.js": 341,
	"./sr.js": 340,
	"./ss": 342,
	"./ss.js": 342,
	"./sv": 343,
	"./sv.js": 343,
	"./sw": 344,
	"./sw.js": 344,
	"./ta": 345,
	"./ta.js": 345,
	"./te": 346,
	"./te.js": 346,
	"./tet": 347,
	"./tet.js": 347,
	"./tg": 348,
	"./tg.js": 348,
	"./th": 349,
	"./th.js": 349,
	"./tl-ph": 350,
	"./tl-ph.js": 350,
	"./tlh": 351,
	"./tlh.js": 351,
	"./tr": 352,
	"./tr.js": 352,
	"./tzl": 353,
	"./tzl.js": 353,
	"./tzm": 354,
	"./tzm-latn": 355,
	"./tzm-latn.js": 355,
	"./tzm.js": 354,
	"./ug-cn": 356,
	"./ug-cn.js": 356,
	"./uk": 357,
	"./uk.js": 357,
	"./ur": 358,
	"./ur.js": 358,
	"./uz": 359,
	"./uz-latn": 360,
	"./uz-latn.js": 360,
	"./uz.js": 359,
	"./vi": 361,
	"./vi.js": 361,
	"./x-pseudo": 362,
	"./x-pseudo.js": 362,
	"./yo": 363,
	"./yo.js": 363,
	"./zh-cn": 364,
	"./zh-cn.js": 364,
	"./zh-hk": 365,
	"./zh-hk.js": 365,
	"./zh-tw": 366,
	"./zh-tw.js": 366
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 479;

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceTree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResourceTree = /** @class */ (function () {
    function ResourceTree() {
        this.hasCheckbox = true;
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ResourceTree.prototype.toggleChildren = function (node) {
        node.visible = !node.visible;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ResourceTree.prototype, "TreeData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ResourceTree.prototype, "hasCheckbox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ResourceTree.prototype, "selected", void 0);
    ResourceTree = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'resource-tree-view',
            template: "\n    \n    <div *ngFor=\"let item of TreeData\" style=\"padding-left:10px\">\n         \n        <ion-grid no-padding>\n            <ion-row>\n                <ion-col col-1 class=\"right\" style=\"margin:auto;text-align:center\">\n                         <ion-icon item-start *ngIf=\"item.children?.length\" (click)=\"toggleChildren(item)\" name=\"add-circle\" tappable></ion-icon> \n                 </ion-col>\n        \n                 <ion-col class=\"left\" col-10>\n                    <ion-item style=\"padding:0\">\n                        <ion-label style=\"font-size: 13px;font-weight: 500\"> {{item.text}}</ion-label>\n                            <ion-checkbox style=\"margin-right: 15px\" [(ngModel)]=\"item.status\" color=\"randem\">\n                            </ion-checkbox>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    <resource-tree-view [TreeData]=\"item.children\" *ngIf=\"item.visible\" [hasCheckbox]=\"hasCheckbox\">\n    </resource-tree-view>\n    \n    </div>\n   \n    "
        }),
        __metadata("design:paramtypes", [])
    ], ResourceTree);
    return ResourceTree;
}());

//# sourceMappingURL=ResourceTree.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_suratasli_suratasli__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_surattembusan_surattembusan__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_suratdisposisi_suratdisposisi__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_konsepsurat_konsepsurat__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pengagendaan_pengagendaan__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { ListPage } from '../pages/list/list';






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, events, storage, http, oneSignal) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.events = events;
        this.storage = storage;
        this.http = http;
        this.oneSignal = oneSignal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
        this.numbersurat = 0;
        this.numbersurat2 = 0;
        this.numbersurat3 = 0;
        this.initializeApp();
        this.checkPreviousAuthorization();
        // this.events.subscribe('userloggedin', statsData => {
        //   console.log(statsData);
        // });
        setInterval(function () {
            _this.http.get('http://103.40.94.42/wssurat/Api/jumlahsurat?kode_unor=' + window.localStorage.getItem('kode_unor'))
                .subscribe(function (data) {
                if (data === void 0) { data = ''; }
                _this.blmterbacamasuk = data.suratmasuk;
                _this.blmterbacatembusan = data.surattembusan;
                _this.blmterbacadispo = data.suratdisposisi;
            });
            _this.uname = window.localStorage.getItem('username');
            _this.photo = window.localStorage.getItem('photo');
            console.log(_this.photo);
            // this.verifikasilogin();
            if (parseInt(window.localStorage.getItem('verifikator')) == 1) {
                _this.pages = [
                    { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], icon: 'home', jenis: 0 },
                    { title: 'Pengagendaan', component: __WEBPACK_IMPORTED_MODULE_13__pages_pengagendaan_pengagendaan__["a" /* PengagendaanPage */], icon: 'book', jenis: 0 },
                    { title: 'Surat Asli', component: __WEBPACK_IMPORTED_MODULE_9__pages_suratasli_suratasli__["a" /* SuratasliPage */], icon: 'mail', jenis: 1 },
                    { title: 'Surat Tembusan', component: __WEBPACK_IMPORTED_MODULE_10__pages_surattembusan_surattembusan__["a" /* SurattembusanPage */], icon: 'copy', jenis: 2 },
                    { title: 'Surat Disposisi', component: __WEBPACK_IMPORTED_MODULE_11__pages_suratdisposisi_suratdisposisi__["a" /* SuratdisposisiPage */], icon: 'archive', jenis: 3 },
                    { title: 'Pemeriksaan Surat', component: __WEBPACK_IMPORTED_MODULE_12__pages_konsepsurat_konsepsurat__["a" /* KonsepsuratPage */], icon: 'create', jenis: 0 },
                ];
            }
            else {
                _this.pages = [
                    { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], icon: 'home', jenis: 0 },
                    { title: 'Surat Asli', component: __WEBPACK_IMPORTED_MODULE_9__pages_suratasli_suratasli__["a" /* SuratasliPage */], icon: 'mail', jenis: 1 },
                    { title: 'Surat Tembusan', component: __WEBPACK_IMPORTED_MODULE_10__pages_surattembusan_surattembusan__["a" /* SurattembusanPage */], icon: 'copy', jenis: 2 },
                    { title: 'Surat Disposisi', component: __WEBPACK_IMPORTED_MODULE_11__pages_suratdisposisi_suratdisposisi__["a" /* SuratdisposisiPage */], icon: 'archive', jenis: 3 },
                    { title: 'Pemeriksaan Surat', component: __WEBPACK_IMPORTED_MODULE_12__pages_konsepsurat_konsepsurat__["a" /* KonsepsuratPage */], icon: 'create', jenis: 0 },
                ];
            }
        }, 3000);
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.overlaysWebView(false);
            _this.statusBar.backgroundColorByHexString('#3f51b5');
            _this.splashScreen.hide();
            _this.onseSignalAppId = '1c6a3f0c-2f46-4535-8cba-80304a0fb5bc';
            _this.googleProjectId = '972874828724';
            if (_this.platform.is('android')) {
                _this.oneSignal.startInit(_this.onseSignalAppId, _this.googleProjectId);
            }
            else if (_this.platform.is('ios')) {
                _this.oneSignal.startInit(_this.onseSignalAppId);
            }
            setInterval(function () {
                // this.oneSignal.startInit('1c6a3f0c-2f46-4535-8cba-80304a0fb5bc', '972874828724');
                _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.Notification);
                _this.oneSignal.sendTag('userlog', "'" + window.localStorage.getItem('kode_unor') + "'");
                _this.oneSignal.handleNotificationReceived().subscribe(function (data) { return _this.onPushReceived(data.payload); });
                _this.oneSignal.handleNotificationOpened().subscribe(function (data) { return _this.onPushOpened(data.notification.payload); });
                _this.oneSignal.endInit();
                _this.getjumlah(window.localStorage.getItem('kode_unor')).then(function (data) {
                    if (data === void 0) { data = ''; }
                    var asli = data.asli;
                    var tembusan = data.tembusan;
                    var disposisi = data.disposisi;
                    var send_alsi = false;
                    var send_temb = false;
                    var send_disp = false;
                    if (_this.numbersurat != asli) {
                        send_alsi = true;
                        _this.numbersurat = asli;
                    }
                    if (_this.numbersurat2 != tembusan) {
                        send_temb = true;
                        _this.numbersurat2 = tembusan;
                    }
                    if (_this.numbersurat3 != disposisi) {
                        send_disp = true;
                        _this.numbersurat3 = disposisi;
                    }
                    if (send_alsi) {
                        _this.sendnotif1(window.localStorage.getItem('kode_unor'));
                    }
                    if (send_temb) {
                        _this.sendnotif2(window.localStorage.getItem('kode_unor'));
                    }
                    if (send_disp) {
                        _this.sendnotif3(window.localStorage.getItem('kode_unor'));
                    }
                });
            }, 3000);
            // this.notif().then(data => {
            //   this.isinotif = data;
            // })
        });
    };
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
    MyApp.prototype.sendnotif1 = function (param) {
        var _this = this;
        this.http.get('http://103.40.94.42/wssurat/Api/sendmessage1?kode_unor=' + param)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.isi.push(data);
        });
    };
    MyApp.prototype.sendnotif2 = function (param) {
        var _this = this;
        this.http.get('http://103.40.94.42/wssurat/Api/sendmessage2?kode_unor=' + param)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.isi.push(data);
        });
    };
    MyApp.prototype.sendnotif3 = function (param) {
        var _this = this;
        this.http.get('http://103.40.94.42/wssurat/Api/sendmessage3?kode_unor=' + param)
            .subscribe(function (data) {
            if (data === void 0) { data = []; }
            _this.isi.push(data);
        });
    };
    MyApp.prototype.getjumlah = function (param) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('http://103.40.94.42/wssurat/Api/jmlsuratnotif?kode_unor=' + param)
                .subscribe(function (data) {
                if (data === void 0) { data = ''; }
                resolve(data);
            });
        });
    };
    MyApp.prototype.onPushReceived = function (payload) {
        // alert('Push recevied:' + payload.body);
    };
    MyApp.prototype.onPushOpened = function (payload) {
        // alert('Push opened: ' + payload.body);
    };
    MyApp.prototype.verifikasilogin = function () {
        return this.storage.get('verifikasi').then(function (val) {
            console.log('Your age is', val);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.checkPreviousAuthorization = function () {
        if ((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) &&
            (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar class="tool" >\n      <ion-title>\n          <i *ngIf="photo != \'\'"><img src="{{photo}}" class="avatar motion spin fade toolimg"></i>\n          <i *ngIf="photo == \'\'"><img src="../assets/imgs/logo.png" class="avatar motion spin fade toolimg"></i>\n          <!-- <ion-img width="80" height="80" src="../assets/imgs/logo.png"></ion-img>\n          <ion-title> -->\n            <h4 style="font-style: italic;">{{uname}} </h4>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <ion-content style="background-color:#2731ae;">\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" style="\n      background-color: #2731ae;">\n        <ion-icon name="{{p.icon}}" item-left style="color:white"></ion-icon>\n        <span style="color: white"> {{p.title}} \n            <span *ngIf="p.jenis == 1" class="jumlah">{{blmterbacamasuk}}</span>\n            <span *ngIf="p.jenis == 2" class="jumlah">{{blmterbacatembusan}}</span>\n            <span *ngIf="p.jenis == 3" class="jumlah">{{blmterbacadispo}}</span>\n          </span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, http, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        //barchart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartOptions2 = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartOptions3 = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        // public barChartLabels2:string[] = ['April', 'Mei', 'Juni'];
        // public barChartLabels3:string[] = ['Juli', 'Agustus', 'September'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        // this.data3();
        this.getchart1();
        this.barChartLabels = ['Januari', 'Februari', 'Maret'];
        this.http.get('http://103.40.94.42/wssurat/Api/getDashboard?kode_unor=' + window.localStorage.getItem('kode_unor'))
            .subscribe(function (datachart) {
            if (datachart === void 0) { datachart = []; }
            _this.barChartData = [
                { data: [datachart.suratmasuk[0].JUMLAH, datachart.suratmasuk[1].JUMLAH, datachart.suratmasuk[2].JUMLAH], label: 'Surat Asli' },
                { data: [datachart.surattembusan[0].JUMLAH, datachart.surattembusan[1].JUMLAH, datachart.surattembusan[2].JUMLAH], label: 'Surat Tembusan' },
                { data: [datachart.suratdisposisi[0].JUMLAH, datachart.suratdisposisi[1].JUMLAH, datachart.suratdisposisi[2].JUMLAH], label: 'Surat Disposisi' }
            ];
        });
    }
    HomePage.prototype.showLoader = function () {
        this.loader = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loader.present();
    };
    HomePage.prototype.hideLoader = function () {
        if (this.loader)
            this.loader.dismiss();
    };
    HomePage.prototype.button1 = function () {
        this.slides.slideTo(0, 500);
        var currentIndex = this.slides.getActiveIndex();
        if (currentIndex == 0) {
            this.aktif1 = 'aktif1';
            this.aktif2 = '';
            this.aktif3 = '';
            this.aktif4 = '';
        }
        console.log('Current index is', currentIndex);
    };
    HomePage.prototype.button2 = function () {
        this.slides.slideTo(1, 500);
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
    };
    HomePage.prototype.button3 = function () {
        this.slides.slideTo(2, 500);
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
    };
    HomePage.prototype.button4 = function () {
        this.slides.slideTo(3, 500);
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
    };
    HomePage.prototype.slideChanged = function () {
        var _this = this;
        this.showLoader();
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
        if (currentIndex == 0) {
            this.aktif1 = 'aktif1';
            this.aktif2 = '';
            this.aktif3 = '';
            this.aktif4 = '';
            this.barChartLabels = ['Januari', 'Februari', 'Maret'];
            this.http.get('http://103.40.94.42/wssurat/Api/getDashboard?kode_unor=' + window.localStorage.getItem('kode_unor'))
                .subscribe(function (datachart) {
                if (datachart === void 0) { datachart = []; }
                _this.hideLoader();
                _this.barChartData = [
                    { data: [datachart.suratmasuk[0].JUMLAH, datachart.suratmasuk[1].JUMLAH, datachart.suratmasuk[2].JUMLAH], label: 'Surat Asli' },
                    { data: [datachart.surattembusan[0].JUMLAH, datachart.surattembusan[1].JUMLAH, datachart.surattembusan[2].JUMLAH], label: 'Surat Tembusan' },
                    { data: [datachart.suratdisposisi[0].JUMLAH, datachart.suratdisposisi[1].JUMLAH, datachart.suratdisposisi[2].JUMLAH], label: 'Surat Disposisi' }
                ];
            });
        }
        else if (currentIndex == 1) {
            this.aktif1 = '';
            this.aktif2 = 'aktif1';
            this.aktif3 = '';
            this.aktif4 = '';
            this.barChartLabels = ['April', 'Mei', 'Juni'];
            this.http.get('http://103.40.94.42/wssurat/Api/getDashboard?kode_unor=' + window.localStorage.getItem('kode_unor'))
                .subscribe(function (datachart) {
                if (datachart === void 0) { datachart = []; }
                _this.hideLoader();
                _this.barChartData = [
                    { data: [datachart.suratmasuk[3].JUMLAH, datachart.suratmasuk[4].JUMLAH, datachart.suratmasuk[5].JUMLAH], label: 'Surat Asli' },
                    { data: [datachart.surattembusan[3].JUMLAH, datachart.surattembusan[4].JUMLAH, datachart.surattembusan[5].JUMLAH], label: 'Surat Tembusan' },
                    { data: [datachart.suratdisposisi[3].JUMLAH, datachart.suratdisposisi[4].JUMLAH, datachart.suratdisposisi[5].JUMLAH], label: 'Surat Disposisi' }
                ];
            });
        }
        else if (currentIndex == 2) {
            this.aktif1 = '';
            this.aktif2 = '';
            this.aktif3 = 'aktif1';
            this.aktif4 = '';
            this.barChartLabels = ['Juli', 'Agustus', 'September'];
            this.http.get('http://103.40.94.42/wssurat/Api/getDashboard?kode_unor=' + window.localStorage.getItem('kode_unor'))
                .subscribe(function (datachart) {
                if (datachart === void 0) { datachart = []; }
                _this.hideLoader();
                _this.barChartData = [
                    { data: [datachart.suratmasuk[6].JUMLAH, datachart.suratmasuk[7].JUMLAH, datachart.suratmasuk[8].JUMLAH], label: 'Surat Asli' },
                    { data: [datachart.surattembusan[6].JUMLAH, datachart.surattembusan[7].JUMLAH, datachart.surattembusan[8].JUMLAH], label: 'Surat Tembusan' },
                    { data: [datachart.suratdisposisi[6].JUMLAH, datachart.suratdisposisi[7].JUMLAH, datachart.suratdisposisi[8].JUMLAH], label: 'Surat Disposisi' }
                ];
            });
        }
        else if (currentIndex == 3) {
            this.aktif1 = '';
            this.aktif2 = '';
            this.aktif3 = '';
            this.aktif4 = 'aktif1';
            this.barChartLabels = ['Oktober', 'November', 'Desember'];
            this.http.get('http://103.40.94.42/wssurat/Api/getDashboard?kode_unor=' + window.localStorage.getItem('kode_unor'))
                .subscribe(function (datachart) {
                if (datachart === void 0) { datachart = []; }
                _this.hideLoader();
                _this.barChartData = [
                    { data: [datachart.suratmasuk[9].JUMLAH, datachart.suratmasuk[10].JUMLAH, datachart.suratmasuk[11].JUMLAH], label: 'Surat Asli' },
                    { data: [datachart.surattembusan[9].JUMLAH, datachart.surattembusan[10].JUMLAH, datachart.surattembusan[11].JUMLAH], label: 'Surat Tembusan' },
                    { data: [datachart.suratdisposisi[9].JUMLAH, datachart.suratdisposisi[10].JUMLAH, datachart.suratdisposisi[11].JUMLAH], label: 'Surat Disposisi' }
                ];
            });
        }
    };
    HomePage.prototype.goToLogout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Exit',
            message: 'Are you want to exit,' + window.localStorage.getItem('nama'),
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel');
                    }
                },
                {
                    text: 'OK',
                    handler: function () {
                        window.localStorage.removeItem('username');
                        window.localStorage.removeItem('password');
                        window.localStorage.removeItem('nama');
                        window.localStorage.removeItem('kode_unor');
                        window.localStorage.removeItem('kode_unker');
                        window.localStorage.removeItem('id');
                        window.localStorage.removeItem('verifikator');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                        _this.navCtrl.popToRoot();
                        console.log('OK');
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.getchart1 = function () {
        return this.barChartData = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Surat Asli' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Surat Tembusan' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Surat Disposisi' }];
    };
    HomePage.prototype.ionViewDidLoad = function () {
    };
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
    HomePage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    HomePage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n\n    <ion-buttons end="" class="bar-buttons bar-buttons-md">\n      <button icon-only="" ion-button="" class="bar-button bar-button-md bar-button-default bar-button-default-md" (click)="goToLogout()"><span class="button-inner">\n        <ion-icon ios="ios-log-in" md="md-log-in" role="img" class="icon icon-md ion-md-log-in" aria-label="options"></ion-icon>\n      </span><div class="button-effect" style="transform: translate3d(-20px, -14px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-tabs tabsPlacement="top" color=\'primary\'>\n    <ion-tab (ionSelect)="grafik1()" tabTitle="Home"></ion-tab>\n    <ion-tab (ionSelect)="grafik2()" tabTitle="About"></ion-tab>\n    <ion-tab (ionSelect)="grafik3()" tabTitle="Contact"></ion-tab>\n  </ion-tabs> -->\n  \n  <ion-buttons end>\n    <button ion-button icon-only color="royal" (click)="button1()" class="bunder {{aktif1}}">\n      <ion-label>JAN-<br>MAR</ion-label>\n    </button>\n    <button ion-button icon-only color="royal" (click)="button2()" class="bunder {{aktif2}}">\n      <ion-label>APR-<br>JUN</ion-label>\n    </button>\n    <button ion-button icon-only color="royal" (click)="button3()" class="bunder {{aktif3}}">\n      <ion-label>JUL-<br>SEPT</ion-label>\n    </button>\n    <button ion-button icon-only color="royal" (click)="button4()" class="bunder {{aktif4}}">\n      <ion-label>OKT-<br>DES</ion-label>\n    </button>\n  </ion-buttons>\n\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n      <ion-slide>\n         <!-- <ion-label> Grafik Persuratan Bulan Januari - Maret </ion-label> -->\n        <ion-card class="text1">\n        <canvas baseChart\n              [datasets]="barChartData"\n              [labels]="barChartLabels"\n              [options]="barChartOptions"\n              [legend]="barChartLegend"\n              [chartType]="barChartType"\n              (chartHover)="chartHovered($event)"\n              (chartClick)="chartClicked($event)"\n              height="375%"></canvas>\n            </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card>\n          <canvas baseChart\n          [datasets]="barChartData"\n          [labels]="barChartLabels"\n          [options]="barChartOptions"\n          [legend]="barChartLegend"\n          [chartType]="barChartType"\n          (chartHover)="chartHovered($event)"\n          (chartClick)="chartClicked($event)"\n          height="375%"></canvas>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card>\n          <canvas baseChart\n          [datasets]="barChartData"\n          [labels]="barChartLabels"\n          [options]="barChartOptions"\n          [legend]="barChartLegend"\n          [chartType]="barChartType"\n          (chartHover)="chartHovered($event)"\n          (chartClick)="chartClicked($event)"\n          height="375%"></canvas>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card>\n          <canvas baseChart\n          [datasets]="barChartData"\n          [labels]="barChartLabels"\n          [options]="barChartOptions"\n          [legend]="barChartLegend"\n          [chartType]="barChartType"\n          (chartHover)="chartHovered($event)"\n          (chartClick)="chartClicked($event)"\n          height="375%"></canvas>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n\n\n\n      <!-- <canvas baseChart\n              [datasets]="barChartData"\n              [labels]="barChartLabels"\n              [options]="barChartOptions"\n              [legend]="barChartLegend"\n              [chartType]="barChartType"\n              (chartHover)="chartHovered($event)"\n              (chartClick)="chartClicked($event)"\n              height="375%"></canvas> -->\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[376]);
//# sourceMappingURL=main.js.map