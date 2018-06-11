webpackJsonp([1,4],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <h1>BidMotion Email Signature</h1>\n      <p>Please fill the form below to generate your signature...</p>\n      <hr />\n      <h2>Your Email Signature</h2>\n      <form *ngIf=\"active\" class=\"form-horizontal\" #signatureForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"firstName\" class=\"col-xs-2 control-label\">First Name</label>\n          <div class=\"col-xs-6 has-feedback\" [class.has-error]=\"!firstName.valid && !firstName.pristine\" [class.has-success]=\"firstName.valid && !firstName.pristine\">\n            <input type=\"text\" id=\"firstName\" name=\"firstName\" #firstName=\"ngModel\" [(ngModel)]=\"signature.firstName\" required class=\"form-control\" placeholder=\"First name...\" />\n            <span *ngIf=\"firstName.valid && !firstName.pristine\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"firstName.valid && !firstName.pristine\" id=\"firstName\" class=\"sr-only\">(success)</span>\n            <div [hidden]=\"firstName.valid || firstName.pristine\" class=\"alert alert-danger\" role=\"alert\">\n              First Name is invalid.\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\" class=\"col-xs-2 control-label\">Last Name</label>\n          <div class=\"col-xs-6 has-feedback\" [class.has-error]=\"!lastName.valid && !lastName.pristine\" [class.has-success]=\"lastName.valid && !lastName.pristine\">\n            <input type=\"text\" id=\"lastName\" name=\"lastName\" #lastName=\"ngModel\" [(ngModel)]=\"signature.lastName\" required class=\"form-control\" placeholder=\"Last name...\" />\n            <span *ngIf=\"lastName.valid && !lastName.pristine\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"lastName.valid && !lastName.pristine\" id=\"lastName\" class=\"sr-only\">(success)</span>\n            <div [hidden]=\"lastName.valid || lastName.pristine\" class=\"alert alert-danger\" role=\"alert\">\n              Last Name is invalid.\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"position\" class=\"col-xs-2 control-label\">Position</label>\n          <div class=\"col-xs-6 has-feedback\" [class.has-error]=\"!position.valid && !position.pristine\" [class.has-success]=\"position.valid && !position.pristine\">\n            <input type=\"text\" id=\"position\" name=\"position\" #position=\"ngModel\" [(ngModel)]=\"signature.position\" required class=\"form-control\" placeholder=\"Last name...\" />\n            <span *ngIf=\"position.valid && !position.pristine\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"position.valid && !position.pristine\" id=\"position\" class=\"sr-only\">(success)</span>\n            <div [hidden]=\"position.valid || position.pristine\" class=\"alert alert-danger\" role=\"alert\">\n              Position is invalid.\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\" class=\"col-xs-2 control-label\">Email</label>\n          <div class=\"col-xs-6 has-feedback\" [class.has-error]=\"!email.valid && !email.pristine\" [class.has-success]=\"email.valid && !email.pristine\">\n            <input type=\"text\" id=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"signature.email\" required pattern=\"[a-z0-9!#$%&'*+/=?^_\\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\\`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\" class=\"form-control\" placeholder=\"Email...\" />\n            <span *ngIf=\"email.valid && !email.pristine\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"email.valid && !email.pristine\" id=\"email\" class=\"sr-only\">(success)</span>\n            <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\" role=\"alert\">\n              Email is invalid.\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phone\" class=\"col-xs-2 control-label\">Phone</label>\n          <div class=\"col-xs-6 has-feedback\" [class.has-error]=\"!phone.valid && !phone.pristine\" [class.has-success]=\"phone.valid && !phone.pristine\">\n            <input type=\"text\" id=\"phone\" name=\"phone\" #phone=\"ngModel\" [(ngModel)]=\"signature.phone\" required pattern=\"\\+\\d{1,2}( ?\\d{1,20}){1,6}\" class=\"form-control\" placeholder=\"+33 1 23 45 67 89...\" />\n            <span *ngIf=\"phone.valid && !phone.pristine\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"phone.valid && !phone.pristine\" id=\"phone\" class=\"sr-only\">(success)</span>\n            <div [hidden]=\"phone.valid || phone.pristine\" class=\"alert alert-danger\" role=\"alert\">\n              Phone is invalid.<br />\n              Note that it needs to start with a + sign.\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"bannerEnabled\" class=\"col-xs-2 control-label\">Show Banner</label>\n          <div class=\"col-xs-6 has-feedback\" [class.has-error]=\"!bannerEnabled.valid && !bannerEnabled.pristine\" [class.has-success]=\"bannerEnabled.valid && !bannerEnabled.pristine\">\n            <input type=\"checkbox\" id=\"bannerEnabled\" name=\"bannerEnabled\" #bannerEnabled=\"ngModel\" [(ngModel)]=\"signature.bannerEnabled\" />\n          </div>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"signature.bannerEnabled\">\n          <label for=\"bannerURL\" class=\"col-xs-2 control-label\">Banner URL</label>\n          <div class=\"col-xs-6 has-feedback\" [class.has-error]=\"!bannerURL.valid && !bannerURL.pristine\" [class.has-success]=\"bannerURL.valid && !bannerURL.pristine\">\n            <input type=\"text\" id=\"bannerURL\" name=\"bannerURL\" #bannerURL=\"ngModel\" [(ngModel)]=\"signature.bannerURL\" required pattern=\"https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}.*\" class=\"form-control\" placeholder=\"Banner image URL...\" />\n            <span *ngIf=\"bannerURL.valid && !bannerURL.pristine\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"bannerURL.valid && !bannerURL.pristine\" id=\"bannerURL\" class=\"sr-only\">(success)</span>\n            <div [hidden]=\"bannerURL.valid || bannerURL.pristine\" class=\"alert alert-danger\" role=\"alert\">\n              Banner URL is invalid.\n            </div>\n            <span class=\"help-block\">\n                  Use Image of Width 400px, Height 100px\n                </span>\n          </div>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"signature.bannerEnabled\">\n          <label for=\"bannerLink\" class=\"col-xs-2 control-label\">Banner Link</label>\n          <div class=\"col-xs-6 has-feedback\" [class.has-error]=\"!bannerLink.valid && !bannerLink.pristine\" [class.has-success]=\"bannerLink.valid && !bannerLink.pristine\">\n            <input type=\"text\" id=\"bannerLink\" name=\"bannerLink\" #bannerLink=\"ngModel\" [(ngModel)]=\"signature.bannerLink\" required pattern=\"https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}.*\" class=\"form-control\" placeholder=\"Banner click Link...\" />\n            <span *ngIf=\"bannerLink.valid && !bannerLink.pristine\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"bannerLink.valid && !bannerLink.pristine\" id=\"bannerLink\" class=\"sr-only\">(success)</span>\n            <div [hidden]=\"bannerLink.valid || bannerLink.pristine\" class=\"alert alert-danger\" role=\"alert\">\n              Banner Link is invalid.\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"skype\" class=\"col-xs-2 control-label\">Skype Handle</label>\n          <div class=\"col-xs-6 has-feedback\" [class.has-error]=\"!skype.valid && !skype.pristine\" [class.has-success]=\"skype.valid && !skype.pristine\">\n            <input type=\"text\" id=\"skype\" name=\"skype\" #skype=\"ngModel\" [(ngModel)]=\"signature.skype\" required class=\"form-control\" placeholder=\"Skype Handle...\" />\n            <span *ngIf=\"skype.valid && !skype.pristine\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"skype.valid && !skype.pristine\" id=\"skype\" class=\"sr-only\">(success)</span>\n            <div [hidden]=\"skype.valid || skype.pristine\" class=\"alert alert-danger\" role=\"alert\">\n              Skype Handle is invalid.\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"skype.valid\">\n          <label for=\"skypeURL\" class=\"col-xs-2 control-label\">Skype URL</label>\n          <div class=\"col-xs-6 has-feedback\" [class.has-error]=\"!skypeURL.valid && !skypeURL.pristine\" [class.has-success]=\"skypeURL.valid && !skypeURL.pristine\">\n            <input type=\"text\" id=\"skypeURL\" name=\"skypeURL\" #skypeURL=\"ngModel\" [(ngModel)]=\"signature.skypeURL\" required pattern=\"https?:\\/\\/is\\.gd\\/.*\" class=\"form-control\" placeholder=\"Skype URL...\" />\n            <span *ngIf=\"skypeURL.valid && !skypeURL.pristine\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"skypeURL.valid && !skypeURL.pristine\" id=\"skypeURL\" class=\"sr-only\">(success)</span>\n            <div [hidden]=\"skypeURL.valid || skypeURL.pristine\" class=\"alert alert-danger\" role=\"alert\">\n              Skype URL is invalid.\n            </div>\n            <span id=\"helpBlock\" class=\"help-block\">\n                  Skype shorten URL, use <a href=\"http://is.gd/\" target=\"_blank\">http://is.gd/</a> and enter:<br />\n                  skype:{{signature.skype}}?chat\n                </span>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"bannerEnabled\" class=\"col-xs-2 control-label\">Homa Games</label>\n          <div class=\"col-xs-6 has-feedback\">\n            <input type=\"checkbox\" name=\"homegames\" [(ngModel)]=\"signature.isHomaGames\" />\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-xs-offset-2 col-xs-10\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"reset()\">Reset Signature</button>\n          </div>\n        </div>\n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"signatureForm.form.valid\">\n          The signature below is valid, you can select it and paste it inside your Gmail account.\n        </div>\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"!signatureForm.form.valid\">\n          Some fields are invalid, hence the signature below is not valid.\n        </div>\n        <hr />\n        <div style=\"position: relative;\">\n          <div *ngIf=\"!signatureForm.form.valid\" style=\"position: absolute; top: -5px; right: -5px; bottom: -5px; left: -5px; background-color: rgba(255, 0, 0, 0.42);\"></div>\n          <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: separate!important; table-layout: fixed;\" width=\"450\">\n            <tbody>\n            <tr>\n              <td align=\"left\" valign=\"top\" width=\"90\">\n                <p style=\"margin-bottom: 10px; margin-right: 10px; font-family: Helvetica, Arial, sans-serif; font-size: 10px; line-height: 12px;\">\n                  <a style=\"text-decoration:none\" href=\"{{ config.logoLink }}?signature={{ signature.email }}\" target=\"_blank\">\n                    <img [src]=\"config.logo\" alt=\"Bidmotion\" border=\"0\" style=\"border-radius: 50%;\" height=\"80\" width=\"80\">\n                  </a>\n                </p>\n                <p style=\"font-size: 0px; line-height: 0; font-family: Helvetica, Arial, sans-serif;\">\n                  <span style=\"white-space:nowrap;\"><img src=\"https://hd-misc.s3.amazonaws.com/assets/misc/spacer.gif\" width=\"13\"></span>\n                  <a style=\"text-decoration: none; display: inline;\" href=\"{{ config.twitter }}\" target=\"_blank\"><img width=\"16\" style=\"margin-bottom:2px; border:none; display:inline;\" height=\"16\" data-filename=\"twitter.png\" src=\"https://hd-misc.s3.amazonaws.com/assets/icons/twitter.png\" alt=\"Twitter\"></a><span style=\"white-space:nowrap;\"><img src=\"https://hd-misc.s3.amazonaws.com/assets/misc/spacer.gif\" width=\"2\"></span>\n                  <a style=\"text-decoration: none; display: inline;\" href=\"{{ config.linkedin }}\" target=\"_blank\"><img width=\"16\" style=\"margin-bottom:2px; border:none; display:inline;\" height=\"16\" data-filename=\"linkedin.png\" src=\"https://hd-misc.s3.amazonaws.com/assets/icons/linkedin.png\" alt=\"LinkedIn\"></a><span style=\"white-space:nowrap;\"><img src=\"https://hd-misc.s3.amazonaws.com/assets/misc/spacer.gif\" width=\"2\"></span>\n                  <a style=\"text-decoration: none; display: inline;\" href=\"{{ config.facebook }}\" target=\"_blank\"><img width=\"16\" style=\"margin-bottom:2px; border:none; display:inline;\" height=\"16\" data-filename=\"facebook.png\" src=\"https://hd-misc.s3.amazonaws.com/assets/icons/facebook.png\" alt=\"Facebook\"></a><span style=\"white-space:nowrap;\"><img src=\"https://hd-misc.s3.amazonaws.com/assets/misc/spacer.gif\" width=\"2\"></span>\n                </p>\n              </td>\n              <td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"16\" style=\"border-left-width: 2px; border-left-style: solid;\" [ngStyle]=\"{ 'border-left-color': config.color }\">\n                <img src=\"https://hd-misc.s3.amazonaws.com/assets/misc/spacer.gif\" width=\"10\">\n              </td>\n              <td align=\"left\" valign=\"top\" nowrap=\"nowrap\" width=\"354\" style=\"margin-bottom: 0;\">\n                <div style=\"\">\n                  <p style=\"font-family: Helvetica, Arial, sans-serif; font-size: 10px; line-height: 12px; color: rgb(33, 33, 33); margin-bottom: 10px;\">\n                    <span style=\"font-weight: bold; font-size: 12px; color: rgb(33, 33, 33); display: inline;\">{{signature.firstName}} {{signature.lastName}}</span>\n                    <span style=\"display: inline;\"><br></span>\n                    <span style=\"color: rgb(33, 33, 33); display: inline;\">{{signature.position}}</span>\n                    <span style=\"display: inline;\"><br></span>\n                    <span style=\"display: inline;\"><br></span>\n                    <span style=\"display: inline;\">Email: </span>\n                    <a href=\"mailto:{{signature.email}}\" style=\"text-decoration: none; display: inline;\" [ngStyle]=\"{ color: config.color }\">{{signature.email}}</a>\n                    <span style=\"display: inline;\"><br></span>\n                    <span style=\"display: inline;\">Skype: </span>\n                    <a href=\"{{signature.skypeURL}}\" target=\"_blank\" style=\"text-decoration: none; display: inline;\" [ngStyle]=\"{ color: config.color }\">{{signature.skype}}</a>\n                    <span style=\"display: inline;\"><br></span>\n                    <span style=\"display: inline;\">Phone: </span><span style=\"display: inline;\" [ngStyle]=\"{ color: config.color }\">{{signature.phone}}</span>\n                  </p>\n                  <p style=\"font-family: Helvetica, Arial, sans-serif; font-size: 10px; line-height: 12px; margin-bottom: 10px;\">\n                    <a href=\"{{ config.companyWebsite }}/?signature={{signature.email}}\" target=\"_blank\" style=\"font-weight: bold; font-size: 12px; color: rgb(33, 33, 33); text-decoration: none; display: inline;\">{{ config.companyName }}</a>\n                    <span style=\"display: inline;\"><br></span>\n                    <span></span> <span style=\"color: rgb(33, 33, 33); display: inline;\">{{ config.address }}</span>\n                    <span style=\"display: block;\"></span>\n                    <span style=\"color: rgb(33, 33, 33); display: inline;\">\n                                        <a style=\"text-decoration: none; display: inline;\" [ngStyle]=\"{ color: config.color }\" href=\"{{ config.companyWebsite }}?signature={{signature.email}}\" target=\"_blank\">\n                                          {{ config.companyWebsite }}\n                                        </a>\n                                      </span>\n                    <span style=\"display: inline;\"><br></span>\n                  </p>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td colspan=\"3\" height=\"5\"></td>\n            </tr>\n            <tr>\n              <td colspan=\"3\">\n                <a [href]=\"signature.bannerLink\" target=\"_blank\" [ngStyle]=\"{ color: config.color }\" style=\"text-decoration: none; display: inline;\"\n                   *ngIf=\"signature.bannerEnabled\">\n                  <img [src]=\"signature.bannerURL\" alt=\"Bidmotion at Mobile World Congress\" border=\"0\" height=\"100\" width=\"450\">\n                </a>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </form>\n      <hr />\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),

/***/ 70:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 70;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(80);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.active = false;
        this.signatureModel = {
            firstName: '',
            lastName: '',
            position: '',
            email: '',
            phone: '',
            skype: '',
            skypeURL: '',
            bannerEnabled: false,
            bannerURL: '',
            bannerLink: '',
            isHomaGames: false
        };
        this.bidmotionConfig = {
            linkedin: 'https://www.linkedin.com/company/bidmotion',
            twitter: 'https://twitter.com/bidmotion',
            facebook: 'https://www.facebook.com/bidmotion',
            color: 'rgb(88, 203, 181)',
            address: '76, rue Faubourg Saint-Denis 75010 Paris',
            companyName: 'BidMotion',
            companyWebsite: 'http://www.bidmotion.com',
            logo: 'https://hd-misc.s3.amazonaws.com/assets/misc/logo.png',
            logoLink: 'http://www.bidmotion.com'
        };
        this.homaGamesConfig = {
            linkedin: 'https://www.linkedin.com/company/bidmotion',
            twitter: 'https://www.instagram.com/homagames/',
            facebook: 'https://www.facebook.com/homagames/',
            color: '#249e7f',
            address: '76, rue Faubourg Saint-Denis 75010 Paris',
            companyName: 'Homa Games',
            companyWebsite: 'http://homagames.com',
            logo: 'http://homagames.com/wp-content/uploads/sites/8/2018/02/Redone-logo-1.png',
            logoLink: 'http://homagames.com/'
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.reset();
        var bannerLink = this.getParameterByName('bannerLink', '');
        var bannerURL = this.getParameterByName('bannerURL', '');
        if (bannerURL) {
            this.signature['bannerEnabled'] = true;
            this.signature['bannerLink'] = bannerLink;
            this.signature['bannerURL'] = bannerURL;
        }
    };
    Object.defineProperty(AppComponent.prototype, "config", {
        get: function () {
            return this.signature['isHomaGames'] ? this.homaGamesConfig : this.bidmotionConfig;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.reset = function () {
        var _this = this;
        this.signature = Object.assign({}, this.signatureModel);
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    AppComponent.prototype.getParameterByName = function (name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(135),
        styles: [__webpack_require__(134)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[160]);
//# sourceMappingURL=main.bundle.js.map