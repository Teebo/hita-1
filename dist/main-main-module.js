(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section id=\"main-demo\" class=\"main-layout gap primary-bg\">\n    <div class=\"container\">\n        <div class=\"section-header text-center\">\n            <h1>hita! - Angular 6 Material Landing Page</h1>\n        </div>\n        <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutWrap=\"nowrap\" fxLayoutGap=\"30px\">\n            <div fxFlex=\"50\">\n                <mat-card matRipple [routerLink]=\"'/layout/one'\">\n                    <h4 class=\"m-0\">Demo1</h4>\n                    <img mat-card-image class=\"m-0\" src=\"assets/images/demo1.jpg\">\n                </mat-card>\n            </div>\n            <div fxFlex=\"50\">\n                <mat-card [routerLink]=\"'/layout/two'\">\n                    <h4 class=\"m-0\">Demo 2 </h4>\n                    <img mat-card-image class=\"m-0\" src=\"assets/images/demo2.jpg\">\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</section> -->\n\n<section id=\"intro-one-section\" class=\"home-intro-section primary-bg\">\n    <div class=\"container\" fxLayout=\"row wrap\">\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\n            <h1 class=\"home-intro-title\">Welcome to hita!</h1>\n            <div class=\"home-intro-desc\">\n                Delivering powerful and reliable Web App solutions\n            </div>\n            <!-- <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n                <button mat-raised-button mat-lg-button id=\"frontend-btn\" (click)=\"getNGLanding()\"><mat-icon>get_app</mat-icon> Buy Now</button>\n            </div> -->\n        </div>\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\n            <div class=\"intro-product\">\n                <img mat-card-image src=\"assets/images/main.png\" [style.margin]=\"'0 !important'\">\n            </div>\n        </div>\n    </div>\n</section>\n<section id=\"feature-section\"  class=\"gap\">\n    <div class=\"container\">\n        <div fxLayout='column' class=\"text-center mb-5\">\n            <div fxFlex.gt-md=\"60%\">\n                <h2 class=\"title-page\">Following Industry Standard </h2>\n                <p class=\"lead w-60\">Gain experience from serving International customer </p>\n            </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" class=\"text-center featured-section\">\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"feature-item\">\n                <i class=\"material-icons\">code</i>\n                <h4 class=\"mb-2\">Optimize Code</h4>\n                <!-- <p>Sed ut perspiciatis unde omnis iste natus error sit.</p> -->\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"feature-item\">\n                <i class=\"material-icons\">\nmobile_friendly\n</i>\n                <h4 class=\"mb-2\">Mobile Friendly</h4>\n                <!-- <p>At vero eos et accusamus et iusto odio dignissimos.</p> -->\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"feature-item\">\n                <i class=\"material-icons\">\nsystem_update\n</i>\n                <h4 class=\"mb-2\">Scalable</h4>\n                <!-- <p>Nam libero tempore, cum soluta nobis est.</p> -->\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"feature-item\">\n                <i class=\"material-icons\">\ncontact_support\n</i>\n                <h4 class=\"mb-2\">Support</h4>\n                <!-- <p> Temporibus autem quibusdam et aut officiis debitis aut rerum.</p> -->\n            </div>\n        </div>\n        <!-- <div class=\"row align-center\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 more_info_anim6 animated fadeInUp\">\n                <img src=\"assets/images/product.png\" alt=\"\">\n            </div>\n        </div> -->\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-intro-section {\n  padding: 180px 0;\n  color: #ffffff;\n  overflow: hidden; }\n\n.home-intro-title {\n  margin: 0 0 24px;\n  font-size: 48px;\n  font-weight: 900;\n  line-height: 52px;\n  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.22); }\n\n.home-intro-desc {\n  margin: 0 0 40px;\n  font-size: 22px;\n  font-weight: 400;\n  line-height: 32px; }\n\n.intro-list {\n  margin: 0 0 40px; }\n\n.intro-product {\n  position: relative;\n  top: 100px;\n  left: 20px; }\n\n.intro-product-link {\n  position: absolute;\n  top: -110px;\n  left: -45px;\n  text-align: center;\n  display: block;\n  width: 160px;\n  height: 160px;\n  border-radius: 50%;\n  background: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  padding: 37px 20px;\n  box-sizing: border-box;\n  overflow: hidden;\n  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.2);\n  transition: all .3s ease; }\n\n.intro-product-link:hover {\n  box-shadow: 0 19px 32px rgba(0, 0, 0, 0.4); }\n\n.intro-product-link .price {\n  font-size: 32px;\n  font-weight: 700; }\n\n.intro-product-link .price-text {\n  font-size: 14px; }\n\n@media (max-width: 767px) {\n  .intro-product {\n    top: 80px;\n    left: 20px;\n    margin-bottom: 4rem; }\n  .home-intro-section {\n    padding: 100px 0 60px; }\n  .home-intro-title {\n    margin: 0 0 30px;\n    font-size: 32px;\n    font-weight: 900;\n    line-height: 38px;\n    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.22); }\n  .home-intro-desc {\n    margin: 0 0 40px;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 27px; }\n  .intro-product-link {\n    top: -80px;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/landing-fix.service */ "./src/app/shared/services/landing-fix.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoComponent = /** @class */ (function () {
    function DemoComponent(fix) {
        this.fix = fix;
    }
    DemoComponent.prototype.ngOnInit = function () {
        this.fix.addFix();
    };
    DemoComponent.prototype.ngOnDestroy = function () {
        this.fix.removeFix();
    };
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__["LandingFixService"]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _main_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main.routing */ "./src/app/main/main.routing.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _shared_helpers_window_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/helpers/window.helper */ "./src/app/shared/helpers/window.helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _ngu_carousel__WEBPACK_IMPORTED_MODULE_6__["NguCarouselModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_main_routing__WEBPACK_IMPORTED_MODULE_8__["DemoRoutes"])
            ],
            declarations: [
                _main_component__WEBPACK_IMPORTED_MODULE_9__["DemoComponent"]
            ],
            providers: [_shared_helpers_window_helper__WEBPACK_IMPORTED_MODULE_10__["WINDOW_PROVIDERS"]]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/app/main/main.routing.ts":
/*!**************************************!*\
  !*** ./src/app/main/main.routing.ts ***!
  \**************************************/
/*! exports provided: DemoRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoRoutes", function() { return DemoRoutes; });
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");

var DemoRoutes = [
    { path: '', component: _main_component__WEBPACK_IMPORTED_MODULE_0__["DemoComponent"] }
];


/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map