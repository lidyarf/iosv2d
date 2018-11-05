webpackJsonp([0],{

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PengagendaanasalPageModule", function() { return PengagendaanasalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pengagendaanasal__ = __webpack_require__(536);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PengagendaanasalPageModule = /** @class */ (function () {
    function PengagendaanasalPageModule() {
    }
    PengagendaanasalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pengagendaanasal__["a" /* PengagendaanasalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pengagendaanasal__["a" /* PengagendaanasalPage */]),
            ],
        })
    ], PengagendaanasalPageModule);
    return PengagendaanasalPageModule;
}());

//# sourceMappingURL=pengagendaanasal.module.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PengagendaanasalPage; });
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



var PengagendaanasalPage = /** @class */ (function () {
    function PengagendaanasalPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.idsurat = navParams.data;
        this.surat1 = this.getagendasurat(this.idsurat.id);
        console.log(this.idsurat.id);
        console.log(this.getagendasurat(this.idsurat.id));
    }
    PengagendaanasalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PengagendaanasalPage');
    };
    PengagendaanasalPage.prototype.getagendasurat = function (param) {
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
    PengagendaanasalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pengagendaanasal',template:/*ion-inline-start:"/Library/WebServer/Documents/iosv2d/src/pages/pengagendaanasal/pengagendaanasal.html"*/'<ion-content padding class="page">\n    <br><h4 text-center>INFO SURAT</h4>\n    <ion-card *ngFor = "let i of surat" class="padding-sm">\n        <ion-grid>\n        <ion-row><ion-col col-5 style="font-size: 15px"><b>Asal Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.TEXT_ASAL_SURAT}}</ion-col></ion-row>\n        <ion-row><ion-col col-5 style="font-size: 15px"><b>Perihal</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.PERIHAL}}</ion-col></ion-row>\n        <ion-row><ion-col col-5 style="font-size: 15px"><b>Tanggal Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.TGL_SURAT}}</ion-col></ion-row>\n        <ion-row><ion-col col-5 style="font-size: 15px"><b>Nomor Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.NO_SURAT}}</ion-col></ion-row>\n        <ion-row><ion-col col-5 style="font-size: 15px"><b>Nomor/Agenda</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.NO_AGENDA}}</ion-col></ion-row>\n        <ion-row><ion-col col-5 style="font-size: 15px"><b>Sifat Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.SIFAT_SURAT}}</ion-col></ion-row>\n        <ion-row><ion-col col-5 style="font-size: 15px"><b>Klasifikasi Surat</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.KECEPATAN_SURAT}}</ion-col></ion-row>\n        <ion-row><ion-col col-5 style="font-size: 15px"><b>Deskripsi</b></ion-col><ion-col col-7 style="font-size: 15px">{{i.DESKRIPSI_SINGKAT}}</ion-col></ion-row>\n    </ion-grid>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/iosv2d/src/pages/pengagendaanasal/pengagendaanasal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], PengagendaanasalPage);
    return PengagendaanasalPage;
}());

//# sourceMappingURL=pengagendaanasal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map