(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-layout-module"],{

/***/ "./src/app/layouts/layout-one/layout-one.component.html":
/*!**************************************************************!*\
  !*** ./src/app/layouts/layout-one/layout-one.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\n<app-intro></app-intro>\n<!-- <app-portfolio></app-portfolio> -->\n<!-- <app-services></app-services>\n<app-testimonials-carousel></app-testimonials-carousel>\n<app-pricings></app-pricings>\n<app-contact></app-contact>\n<app-cta></app-cta>\n<app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/layouts/layout-one/layout-one.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/layouts/layout-one/layout-one.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/layout-one/layout-one.component.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/layout-one/layout-one.component.ts ***!
  \************************************************************/
/*! exports provided: LayoutOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutOneComponent", function() { return LayoutOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/landing-fix.service */ "./src/app/shared/services/landing-fix.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutOneComponent = /** @class */ (function () {
    function LayoutOneComponent(fix) {
        this.fix = fix;
    }
    LayoutOneComponent.prototype.ngOnInit = function () {
        this.fix.addFix();
    };
    LayoutOneComponent.prototype.ngOnDestroy = function () {
        this.fix.removeFix();
    };
    LayoutOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-one',
            template: __webpack_require__(/*! ./layout-one.component.html */ "./src/app/layouts/layout-one/layout-one.component.html"),
            styles: [__webpack_require__(/*! ./layout-one.component.scss */ "./src/app/layouts/layout-one/layout-one.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__["LandingFixService"]])
    ], LayoutOneComponent);
    return LayoutOneComponent;
}());



/***/ }),

/***/ "./src/app/layouts/layout-two/layout-two.component.html":
/*!**************************************************************!*\
  !*** ./src/app/layouts/layout-two/layout-two.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-intro-two></app-intro-two>\n<app-portfolio-carousel></app-portfolio-carousel>\n<app-services-carousel></app-services-carousel>   \n<app-testimonials></app-testimonials>\n<app-pricings></app-pricings>\n<app-contact></app-contact>\n<app-cta></app-cta>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/layouts/layout-two/layout-two.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/layouts/layout-two/layout-two.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/layout-two/layout-two.component.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/layout-two/layout-two.component.ts ***!
  \************************************************************/
/*! exports provided: LayoutTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutTwoComponent", function() { return LayoutTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/landing-fix.service */ "./src/app/shared/services/landing-fix.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutTwoComponent = /** @class */ (function () {
    function LayoutTwoComponent(fix) {
        this.fix = fix;
    }
    LayoutTwoComponent.prototype.ngOnInit = function () {
        this.fix.addFix();
    };
    LayoutTwoComponent.prototype.ngOnDestroy = function () {
        this.fix.removeFix();
    };
    LayoutTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-two',
            template: __webpack_require__(/*! ./layout-two.component.html */ "./src/app/layouts/layout-two/layout-two.component.html"),
            styles: [__webpack_require__(/*! ./layout-two.component.scss */ "./src/app/layouts/layout-two/layout-two.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__["LandingFixService"]])
    ], LayoutTwoComponent);
    return LayoutTwoComponent;
}());



/***/ }),

/***/ "./src/app/layouts/layout.module.ts":
/*!******************************************!*\
  !*** ./src/app/layouts/layout.module.ts ***!
  \******************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _layout_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout.routing */ "./src/app/layouts/layout.routing.ts");
/* harmony import */ var _layout_one_layout_one_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout-one/layout-one.component */ "./src/app/layouts/layout-one/layout-one.component.ts");
/* harmony import */ var _layout_two_layout_two_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout-two/layout-two.component */ "./src/app/layouts/layout-two/layout-two.component.ts");
/* harmony import */ var _shared_sections_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared-sections/header/header.component */ "./src/app/layouts/shared-sections/header/header.component.ts");
/* harmony import */ var _shared_sections_intro_one_intro_one_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared-sections/intro-one/intro-one.component */ "./src/app/layouts/shared-sections/intro-one/intro-one.component.ts");
/* harmony import */ var _shared_sections_intro_two_intro_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared-sections/intro-two/intro-two.component */ "./src/app/layouts/shared-sections/intro-two/intro-two.component.ts");
/* harmony import */ var _shared_sections_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared-sections/portfolio/portfolio.component */ "./src/app/layouts/shared-sections/portfolio/portfolio.component.ts");
/* harmony import */ var _shared_sections_services_services_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared-sections/services/services.component */ "./src/app/layouts/shared-sections/services/services.component.ts");
/* harmony import */ var _shared_sections_cta_cta_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared-sections/cta/cta.component */ "./src/app/layouts/shared-sections/cta/cta.component.ts");
/* harmony import */ var _shared_sections_pricings_pricings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared-sections/pricings/pricings.component */ "./src/app/layouts/shared-sections/pricings/pricings.component.ts");
/* harmony import */ var _shared_sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared-sections/contact/contact.component */ "./src/app/layouts/shared-sections/contact/contact.component.ts");
/* harmony import */ var _shared_sections_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared-sections/footer/footer.component */ "./src/app/layouts/shared-sections/footer/footer.component.ts");
/* harmony import */ var _shared_sections_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared-sections/testimonials/testimonials.component */ "./src/app/layouts/shared-sections/testimonials/testimonials.component.ts");
/* harmony import */ var _shared_sections_portfolio_carousel_portfolio_carousel_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared-sections/portfolio-carousel/portfolio-carousel.component */ "./src/app/layouts/shared-sections/portfolio-carousel/portfolio-carousel.component.ts");
/* harmony import */ var _shared_sections_testimonials_carousel_testimonials_carousel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared-sections/testimonials-carousel/testimonials-carousel.component */ "./src/app/layouts/shared-sections/testimonials-carousel/testimonials-carousel.component.ts");
/* harmony import */ var _shared_sections_services_carousel_services_carousel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared-sections/services-carousel/services-carousel.component */ "./src/app/layouts/shared-sections/services-carousel/services-carousel.component.ts");
/* harmony import */ var _shared_helpers_window_helper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shared/helpers/window.helper */ "./src/app/shared/helpers/window.helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
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
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_layout_routing__WEBPACK_IMPORTED_MODULE_8__["LayoutRoutes"])
            ],
            declarations: [
                _layout_one_layout_one_component__WEBPACK_IMPORTED_MODULE_9__["LayoutOneComponent"],
                _layout_two_layout_two_component__WEBPACK_IMPORTED_MODULE_10__["LayoutTwoComponent"],
                _shared_sections_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _shared_sections_intro_one_intro_one_component__WEBPACK_IMPORTED_MODULE_12__["IntroOneComponent"],
                _shared_sections_intro_two_intro_two_component__WEBPACK_IMPORTED_MODULE_13__["IntroTwoComponent"],
                _shared_sections_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_14__["PortfolioComponent"],
                _shared_sections_services_services_component__WEBPACK_IMPORTED_MODULE_15__["ServicesComponent"],
                _shared_sections_cta_cta_component__WEBPACK_IMPORTED_MODULE_16__["CtaComponent"],
                _shared_sections_pricings_pricings_component__WEBPACK_IMPORTED_MODULE_17__["PricingsComponent"],
                _shared_sections_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"],
                _shared_sections_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                _shared_sections_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_20__["TestimonialsComponent"],
                _shared_sections_portfolio_carousel_portfolio_carousel_component__WEBPACK_IMPORTED_MODULE_21__["PortfolioCarouselComponent"],
                _shared_sections_testimonials_carousel_testimonials_carousel_component__WEBPACK_IMPORTED_MODULE_22__["TestimonialsCarouselComponent"],
                _shared_sections_services_carousel_services_carousel_component__WEBPACK_IMPORTED_MODULE_23__["ServicesCarouselComponent"]
            ],
            providers: [_shared_helpers_window_helper__WEBPACK_IMPORTED_MODULE_24__["WINDOW_PROVIDERS"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/layout.routing.ts":
/*!*******************************************!*\
  !*** ./src/app/layouts/layout.routing.ts ***!
  \*******************************************/
/*! exports provided: LayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutes", function() { return LayoutRoutes; });
/* harmony import */ var _layout_one_layout_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-one/layout-one.component */ "./src/app/layouts/layout-one/layout-one.component.ts");
/* harmony import */ var _layout_two_layout_two_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-two/layout-two.component */ "./src/app/layouts/layout-two/layout-two.component.ts");


var LayoutRoutes = [
    { path: 'one', component: _layout_one_layout_one_component__WEBPACK_IMPORTED_MODULE_0__["LayoutOneComponent"] },
    { path: 'two', component: _layout_two_layout_two_component__WEBPACK_IMPORTED_MODULE_1__["LayoutTwoComponent"] }
];


/***/ }),

/***/ "./src/app/layouts/shared-sections/contact/contact.component.html":
/*!************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/contact/contact.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact-section\" class=\"gap bg-grey\">\n    <div class=\"container\">\n        <div fxLayout='column' class=\"text-center mb-5\">\n            <div fxFlex.gt-md=\"60%\">\n                <h2 class=\"title-page\">Write Us A Line</h2>\n                <p class=\"lead w-60\"> Consectetur adipisicing elit. Velit id error rem qui. Neque aperiam saepe placeat vero reprehenderit. </p>\n            </div>\n        </div>\n        <form [formGroup]=\"contactForm\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutWrap=\"wrap\">\n                <div fxFlex=\"100\">\n                    <div class=\"pb-1\">\n                        <mat-form-field class=\"full-width\">\n                            <input matInput name=\"name\" [formControl]=\"contactForm.controls['name']\" placeholder=\"Your Name\">\n                        </mat-form-field>\n                        <small *ngIf=\"contactForm.controls.name.touched && contactForm.controls.name.errors?.required\" class=\"form-error-msg\">*Required</small>\n                    </div>\n                    <div class=\"pb-1\">\n                        <mat-form-field class=\"full-width\">\n                            <input matInput name=\"email\" [formControl]=\"contactForm.controls['email']\" placeholder=\"Your Email\">\n                        </mat-form-field>\n                        <small *ngIf=\"contactForm.controls.email.touched && contactForm.controls.email.errors?.email\" class=\"form-error-msg\">*Invalid Address</small>\n                    </div>\n\n                </div>\n                <div fxFlex=\"100\">\n                    <div class=\"pb-1\">\n                        <mat-form-field class=\"full-width\">\n                            <input matInput name=\"subject\" [formControl]=\"contactForm.controls['subject']\" placeholder=\"Subject\">\n                        </mat-form-field>\n                        <small *ngIf=\"contactForm.controls.subject.touched && contactForm.controls.subject.errors?.required\" class=\"form-error-msg\">*Required</small>\n                    </div>\n                    <div class=\"pb-1\">\n                        <mat-form-field class=\"full-width\">\n                            <textarea matInput row=\"8\" name=\"message\" [formControl]=\"contactForm.controls['message']\" placeholder=\"Message\"></textarea>\n                        </mat-form-field>\n                        <small *ngIf=\"contactForm.controls.message.touched && contactForm.controls.message.errors?.required\" class=\"form-error-msg\">*Required</small>\n                    </div>\n                </div>\n\n                <div fxFlex=\"100\"> <button mat-raised-button mat-lg-button color=\"accent\">Send Us</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/layouts/shared-sections/contact/contact.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/contact/contact.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/shared-sections/contact/contact.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/shared-sections/contact/contact.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb) {
        this.fb = fb;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contactForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/layouts/shared-sections/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/layouts/shared-sections/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/layouts/shared-sections/cta/cta.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layouts/shared-sections/cta/cta.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"call-to-action gap primary-bg\">\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutWrap=\"nowrap\" fxLayoutGap=\"20px\">\n      <div fxFlex=\"66.666\">\n        <h2>Illum et quis officiis beatae</h2>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam, illum et quis officiis beatae.</p>\n      </div>\n      <div fxFlex=\"33.333\" fxLayoutAlign=\"center center\">\n        <button mat-raised-button mat-lg-button color=\"accent\">BUY NOW</button>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/layouts/shared-sections/cta/cta.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/shared-sections/cta/cta.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".call-to-action {\n  color: #ffffff; }\n\n@media (max-width: 960px) {\n  .call-to-action {\n    text-align: center; } }\n"

/***/ }),

/***/ "./src/app/layouts/shared-sections/cta/cta.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/shared-sections/cta/cta.component.ts ***!
  \**************************************************************/
/*! exports provided: CtaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtaComponent", function() { return CtaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CtaComponent = /** @class */ (function () {
    function CtaComponent() {
    }
    CtaComponent.prototype.ngOnInit = function () {
    };
    CtaComponent.prototype.buyAngland = function () {
        window.open('');
    };
    CtaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cta',
            template: __webpack_require__(/*! ./cta.component.html */ "./src/app/layouts/shared-sections/cta/cta.component.html"),
            styles: [__webpack_require__(/*! ./cta.component.scss */ "./src/app/layouts/shared-sections/cta/cta.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CtaComponent);
    return CtaComponent;
}());



/***/ }),

/***/ "./src/app/layouts/shared-sections/footer/footer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/shared-sections/footer/footer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-wrapper\">\n\n    <div class=\"container\">\n        <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutWrap=\"nowrap\">\n            <div fxFlex=\"33.33\" class=\"footer-item\">\n                <div class=\"footer-logo\">\n                    <h2>AngLand</h2>\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, natus.</p>\n                <button mat-raised-button color=\"accent\">Contact Us</button>\n            </div>\n            <div fxFlex=\"33.33\" class=\"footer-item\">\n\n                <mat-list>\n                    <mat-list-item>\n                        <mat-icon mat-list-icon color=\"accent\">email</mat-icon>\n                        <p class=\"text-footer\"> johndoe@loremipsum.com </p>\n                    </mat-list-item>\n                    <mat-list-item>\n                        <mat-icon mat-list-icon color=\"accent\">location_on</mat-icon>\n                        <p class=\"text-footer\">New Trent Bridge, 101 Path, Germany</p>\n                    </mat-list-item>\n                </mat-list>\n            </div>\n            <div fxFlex=\"33.33\" class=\"footer-item\">\n                <div class=\"mb-1\">\n                    <button mat-raised-button mat-lg-button color=\"accent\">Need Help?</button>\n                </div>\n                <div>\n                    <button mat-raised-button mat-lg-button color=\"accent\">BUY NOW</button>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n</footer>"

/***/ }),

/***/ "./src/app/layouts/shared-sections/footer/footer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/shared-sections/footer/footer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-wrapper {\n  background-color: #ffffff; }\n\n.mat-list-item {\n  color: #ffffff !important; }\n\n.footer-item {\n  padding: 30px;\n  box-shadow: 3px 0px 4px rgba(0, 0, 0, 0.2); }\n\n.footer-box:first-child {\n  padding-left: 0; }\n\n.footer-box-title {\n  position: relative;\n  margin: 0 0 24px;\n  padding-bottom: 12px; }\n\n.footer-box-title::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 2px;\n  width: 64px;\n  background-color: #ffc107; }\n\n.footer-item .mat-list {\n  padding: 0 !important; }\n\n.footer-item .mat-list-item-content {\n  padding-left: 0 !important; }\n\n.footer-item .mat-list-text {\n  color: #ffffff; }\n\n.text-footer {\n  color: #000;\n  margin: 0; }\n\n@media (max-width: 959px) {\n  .footer-box:first-child {\n    padding-left: 30px; }\n  .footer-box {\n    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2); }\n  .footer-item {\n    padding: 30px 15px; } }\n"

/***/ }),

/***/ "./src/app/layouts/shared-sections/footer/footer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layouts/shared-sections/footer/footer.component.ts ***!
  \********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layouts/shared-sections/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layouts/shared-sections/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layouts/shared-sections/header/header.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/shared-sections/header/header.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"main-header\" [ngClass]=\"{'header-fixed': isFixed}\">\n    <div class=\"container\" fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"start center\">\n        <div class=\"header-mobile-top\" fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"start center\">\n            <div class=\"home-logo mr-1\">\n                <a href=\"/\">\n                    <h2>AngLand</h2>\n                </a>\n            </div>\n            <button mat-icon-button id=\"menu-toggle\" (click)=\"toggleMenu()\"><mat-icon>menu</mat-icon></button>\n        </div>\n\n        <div fxFlex fxLayoutAlign=\"end\" class=\"top-menu\">\n\n            <button mat-button id=\"dashboard-topbtn\" class=\"hometop-btn\" scrollTo=\"intro-one-section\"><strong>Home</strong></button>\n            <button mat-button id=\"dashboard-topbtn\" class=\"hometop-btn\" scrollTo=\"feature-section\"><strong>Feature</strong></button>\n            <button mat-button id=\"dashboard-topbtn\" class=\"hometop-btn\" scrollTo=\"portfolio-section\"><strong>Works</strong></button>\n            <button mat-button id=\"dashboard-topbtn\" class=\"hometop-btn\" scrollTo=\"service-section\"><strong>Services</strong></button>\n            <button mat-button id=\"dashboard-topbtn\" class=\"hometop-btn\" scrollTo=\"testimonial-slider\"><strong>Testimonials</strong></button>\n            <button mat-button id=\"dashboard-topbtn\" class=\"hometop-btn\" scrollTo=\"pricings-section\"><strong>Pricings</strong></button>\n            <button mat-button id=\"dashboard-topbtn\" class=\"hometop-btn\" scrollTo=\"contact-section\"><strong>Contact</strong></button>\n        </div>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/layouts/shared-sections/header/header.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/shared-sections/header/header.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-header {\n  position: absolute;\n  width: 100%;\n  background: transparent;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 22px 0;\n  transition: padding 0.3s linear;\n  -webkit-transition: padding 0.3s linear;\n  z-index: 999; }\n  #main-header .mat-button {\n    color: #fff; }\n  #main-header > .container {\n  height: auto; }\n  .hometop-btn:hover ::ng-deep .mat-button-focus-overlay {\n  display: none; }\n  #main-header:not(.header-fixed) .hometop-btn ::ng-deep .mat-button-ripple {\n  top: -22px;\n  bottom: -22px; }\n  #main-header.header-fixed {\n  position: fixed !important;\n  left: 0;\n  right: 0;\n  top: 0;\n  background: #fff !important;\n  padding: 0 !important;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n  -webkit-animation: .6s slideDown forwards;\n          animation: .6s slideDown forwards; }\n  #main-header.header-fixed .mat-button {\n    color: #000000; }\n  #main-header.header-fixed .home-logo h2 {\n    color: #000;\n    margin: 0; }\n  .header-fixed .container {\n  height: 60px !important; }\n  .header-fixed .hometop-btn {\n  line-height: 60px !important; }\n  #main-header .home-logo {\n  display: flex;\n  align-items: center; }\n  #main-header .home-logo a {\n    display: inherit; }\n  #main-header .home-logo h2 {\n    color: #fff; }\n  #menu-toggle {\n  display: none;\n  position: absolute;\n  right: 5px;\n  top: 10px; }\n  .icon-button .mat-icon {\n  font-size: 20px; }\n  @media (max-width: 991px) {\n  #main-header {\n    padding: 0; }\n    #main-header .mat-button {\n      color: #000; }\n    #main-header #menu-toggle {\n      color: #ffffff; }\n  #main-header.header-fixed #menu-toggle {\n    color: #000; }\n  #main-header > .container {\n    height: 60px;\n    padding: 0; }\n  .menu-opened:host .header-mobile-top {\n    padding: 13px 0; }\n  #menu-toggle {\n    display: block; }\n  .menu-opened:host .container {\n    height: auto !important; }\n  .home-logo {\n    margin-left: 15px; }\n  .top-menu {\n    display: none !important; }\n  .menu-opened:host .top-menu {\n    display: block !important;\n    width: 100% !important;\n    flex: none !important;\n    background: #f3f3f3; }\n  .menu-opened:host .top-menu button {\n    display: block;\n    width: 100%;\n    line-height: 56px !important; } }\n"

/***/ }),

/***/ "./src/app/layouts/shared-sections/header/header.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layouts/shared-sections/header/header.component.ts ***!
  \********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_helpers_window_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/helpers/window.helper */ "./src/app/shared/helpers/window.helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(document, window) {
        this.document = document;
        this.window = window;
        this.menuOpened = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onWindowScroll = function () {
        var offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (offset > 10) {
            this.isFixed = true;
        }
        else {
            this.isFixed = false;
        }
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.menuOpened = !this.menuOpened;
    };
    HeaderComponent.prototype.buyAngland = function () {
        this.window.open('');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowScroll", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.menu-opened"),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "menuOpened", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layouts/shared-sections/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layouts/shared-sections/header/header.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_shared_helpers_window_helper__WEBPACK_IMPORTED_MODULE_2__["WINDOW"])),
        __metadata("design:paramtypes", [Document,
            Window])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layouts/shared-sections/intro-one/intro-one.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/intro-one/intro-one.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"intro-one-section\" class=\"home-intro-section primary-bg\">\n    <div class=\"container\" fxLayout=\"row wrap\">\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\n            <h1 class=\"home-intro-title\">Best Material Design App Landing Page</h1>\n            <div class=\"home-intro-desc\">\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque totam sint suscipit accusamus fugit quibusdam similique maxime distinctio reiciendis at.\n            </div>\n            <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n                <button mat-raised-button mat-lg-button id=\"frontend-btn\" (click)=\"getNGLanding()\"><mat-icon>get_app</mat-icon> Buy Now</button>\n            </div>\n        </div>\n        <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\n            <div class=\"intro-product\">\n                <img mat-card-image src=\"assets/images/main.png\" [style.margin]=\"'0 !important'\">\n            </div>\n        </div>\n    </div>\n</section>\n<section id=\"feature-section\"  class=\"gap\">\n    <div class=\"container\">\n        <div fxLayout='column' class=\"text-center mb-5\">\n            <div fxFlex.gt-md=\"60%\">\n                <h2 class=\"title-page\">Features that you can trust upon</h2>\n                <p class=\"lead w-60\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit id error rem qui. Neque aperiam saepe placeat vero reprehenderit. </p>\n            </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" class=\"text-center featured-section\">\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"feature-item\">\n                <i class=\"material-icons\">code</i>\n                <h4 class=\"mb-2\">Optimize Code</h4>\n                <p>Sed ut perspiciatis unde omnis iste natus error sit.</p>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"feature-item\">\n                <i class=\"material-icons\">\nmobile_friendly\n</i>\n                <h4 class=\"mb-2\">Mobile Friendly</h4>\n                <p>At vero eos et accusamus et iusto odio dignissimos.</p>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"feature-item\">\n                <i class=\"material-icons\">\nsystem_update\n</i>\n                <h4 class=\"mb-2\">Free Updates</h4>\n                <p>Nam libero tempore, cum soluta nobis est.</p>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\" class=\"feature-item\">\n                <i class=\"material-icons\">\ncontact_support\n</i>\n                <h4 class=\"mb-2\">Support</h4>\n                <p> Temporibus autem quibusdam et aut officiis debitis aut rerum.</p>\n            </div>\n        </div>\n        <div class=\"row align-center\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 more_info_anim6 animated fadeInUp\">\n                <img src=\"assets/images/product.png\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</section>\n<section class=\"gap bg-grey tab-group\">\n    <div class=\"container\">\n         <div fxLayout='column' class=\"text-center mb-5\">\n            <div fxFlex.gt-md=\"60%\">\n                <h2 class=\"title-page\">Ready to Use Code</h2>\n                <p class=\"lead w-60\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit id error rem qui. Neque aperiam saepe placeat vero reprehenderit. </p>\n            </div>\n        </div>\n        <mat-tab-group>\n            <mat-tab label=\"Customization\">\n                <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"60\" fxFlex.sm=\"60\">\n                        <h3>Easy to Customize</h3>\n                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>\n                        <ul class=\"icons-list\">\n                            <li><i class=\"material-icons mdl-color-text--accent\"></i><span>Quia consuuntur</span></li>\n                            <li><i class=\"material-icons mdl-color-text--accent\"></i><span>Atione volupt</span></li>\n                            <li><i class=\"material-icons mdl-color-text--accent\"></i><span>Neque porro</span></li>\n                            <li><i class=\"material-icons mdl-color-text--accent\"></i><span>Lqui dolorem </span></li>\n                        </ul>\n                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>\n                    </div>\n\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"40\" fxFlex.sm=\"40\">\n\n                        <div class=\"img-cap\">\n                            <div class=\"tab-icon\">\n                                <i class=\"material-icons\">\nadd_comment\n</i>\n                            </div>\n                            <img src=\"assets/images/iphone.png\" alt=\"\">\n                        </div>\n                    </div>\n                </div>\n            </mat-tab>\n            <mat-tab label=\"Documentation\">\n                <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"60\" fxFlex.sm=\"60\">\n                        <h3>Doc Ready</h3>\n                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>\n                        <ul class=\"icons-list\">\n                            <li><i class=\"material-icons mdl-color-text--accent\"></i><span>Quia consequuntur magni dolores</span></li>\n                            <li><i class=\"material-icons mdl-color-text--accent\"></i><span>Atione voluptatem sequi nesciunt</span></li>\n                            <li><i class=\"material-icons mdl-color-text--accent\"></i><span>Neque porro quisquam est</span></li>\n                            <li><i class=\"material-icons mdl-color-text--accent\"></i><span>Lqui dolorem ipsum quia dolor</span></li>\n                        </ul>\n                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>\n                    </div>\n                    <div class=\"img-cap\">\n                        <div class=\"tab-icon\">\n                            <i class=\"material-icons\">\nlive_help\n</i>\n                        </div>\n                        <img src=\"assets/images/iphone.png\" alt=\"\">\n                    </div>\n\n\n                </div>\n            </mat-tab>\n            <mat-tab label=\"Responsive\">\n                <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"60\" fxFlex.sm=\"60\">\n                        <h3>Smartphone Version</h3>\n                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>\n                        <ul class=\"icons-list\">\n                            <li><i class=\"material-icons mdl-color-text--accent\"></i><span>Quia consequuntur magni dolores</span></li>\n                            <li><i class=\"material-icons mdl-color-text--accent\"></i><span>Atione voluptatem sequi nesciunt</span></li>\n                            <li><i class=\"material-icons mdl-color-text--accent\"></i><span>Neque porro quisquam est</span></li>\n                            <li><i class=\"material-icons mdl-color-text--accent\"></i><span>Lqui dolorem ipsum quia dolor</span></li>\n                        </ul>\n                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>\n                    </div>\n\n                                  <div class=\"img-cap\">\n                        <div class=\"tab-icon\">\n                            <i class=\"material-icons\">\nmobile_friendly\n</i>\n                        </div>\n                        <img src=\"assets/images/iphone.png\" alt=\"\">\n                    </div>\n                </div>\n            </mat-tab>\n        </mat-tab-group>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/layouts/shared-sections/intro-one/intro-one.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/intro-one/intro-one.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-intro-section {\n  padding: 180px 0;\n  color: #ffffff;\n  overflow: hidden; }\n\n.home-intro-title {\n  margin: 0 0 24px;\n  font-size: 48px;\n  font-weight: 900;\n  line-height: 52px;\n  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.22); }\n\n.home-intro-desc {\n  margin: 0 0 40px;\n  font-size: 22px;\n  font-weight: 400;\n  line-height: 32px; }\n\n.intro-list {\n  margin: 0 0 40px; }\n\n.intro-product {\n  position: relative;\n  top: 100px;\n  left: 20px; }\n\n.intro-product-link {\n  position: absolute;\n  top: -110px;\n  left: -45px;\n  text-align: center;\n  display: block;\n  width: 160px;\n  height: 160px;\n  border-radius: 50%;\n  background: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  padding: 37px 20px;\n  box-sizing: border-box;\n  overflow: hidden;\n  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.2);\n  transition: all .3s ease; }\n\n.intro-product-link:hover {\n  box-shadow: 0 19px 32px rgba(0, 0, 0, 0.4); }\n\n.intro-product-link .price {\n  font-size: 32px;\n  font-weight: 700; }\n\n.intro-product-link .price-text {\n  font-size: 14px; }\n\n@media (max-width: 767px) {\n  .intro-product {\n    top: 80px;\n    left: 20px;\n    margin-bottom: 4rem; }\n  .home-intro-section {\n    padding: 100px 0 60px; }\n  .home-intro-title {\n    margin: 0 0 30px;\n    font-size: 32px;\n    font-weight: 900;\n    line-height: 38px;\n    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.22); }\n  .home-intro-desc {\n    margin: 0 0 40px;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 27px; }\n  .intro-product-link {\n    top: -80px;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n"

/***/ }),

/***/ "./src/app/layouts/shared-sections/intro-one/intro-one.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/intro-one/intro-one.component.ts ***!
  \**************************************************************************/
/*! exports provided: IntroOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroOneComponent", function() { return IntroOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroOneComponent = /** @class */ (function () {
    function IntroOneComponent() {
    }
    IntroOneComponent.prototype.ngOnInit = function () {
    };
    IntroOneComponent.prototype.buyAngland = function () {
        window.open('');
    };
    IntroOneComponent.prototype.getNGLanding = function () {
        window.open('');
    };
    IntroOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro-one.component.html */ "./src/app/layouts/shared-sections/intro-one/intro-one.component.html"),
            styles: [__webpack_require__(/*! ./intro-one.component.scss */ "./src/app/layouts/shared-sections/intro-one/intro-one.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroOneComponent);
    return IntroOneComponent;
}());



/***/ }),

/***/ "./src/app/layouts/shared-sections/intro-two/intro-two.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/intro-two/intro-two.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"intro-one-section\" class=\"home-intro-section text-center primary-bg\">\n    <div class=\"container\" fxLayout=\"column\" fxLayoutWrap=\"nowrap\">\n        <div class=\"home-intro-subtitle\">\n            Best offer for you\n        </div>\n        <h1 class=\"home-intro-title\">Best Material Design App Landing Page</h1>\n        <p class=\"home-intro-text\"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque totam sint suscipit accusamus fugit quibusdam similique maxime distinctio reiciendis at.</p>\n        <button mat-raised-button mat-lg-button class=\"intro-cta\"> Buy Now</button>\n        <div class=\"intro-product\">\n            <img src=\"assets/images/main.png\" alt=\"\">\n        </div>\n    </div>\n</section>\n<div id=\"feature-section\" class=\"featured-two gap bg-grey\">\n    <div class=\"container\">\n        <div fxLayout='column' class=\"text-center mb-5\">\n            <div fxFlex.gt-md=\"60%\">\n                <h2 class=\"title-page\">Features that you can trust upon</h2>\n                <p class=\"lead w-60\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit id error rem qui. Neque aperiam saepe placeat vero reprehenderit. </p>\n            </div>\n        </div>\n        <div fxLayout=\"row wrap\">\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\">\n                <div class=\"feature-two\">\n                    <span class=\"feature-count accent-color\">01.</span>\n                    <div class=\"feature-content\">\n                        <h3>Fully Resposive</h3>\n                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\">\n                <div class=\"feature-two\">\n                    <span class=\"feature-count accent-color\">02</span>\n                    <div class=\"feature-content\">\n                        <h3>Unde Omnis Iste</h3>\n                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\">\n                <div class=\"feature-two\">\n                    <span class=\"feature-count accent-color\">03.</span>\n                    <div class=\"feature-content\">\n                        <h3>Natus Error Sit</h3>\n                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\">\n                <div class=\"feature-two\">\n                    <span class=\"feature-count accent-color\">04.</span>\n                    <div class=\"feature-content\">\n                        <h3>Voluptatem Quia</h3>\n                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\">\n                <div class=\"feature-two\">\n                    <span class=\"feature-count accent-color\">05.</span>\n                    <div class=\"feature-content\">\n                        <h3>Nemo Enim Ipsam</h3>\n                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"50\" fxFlex.lg=\"33.33\" fxFlex.xl=\"33.33\">\n                <div class=\"feature-two\">\n                    <span class=\"feature-count accent-color\">06.</span>\n                    <div class=\"feature-content\">\n                        <h3>Eaque Ipsa Quae</h3>\n                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layouts/shared-sections/intro-two/intro-two.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/intro-two/intro-two.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-intro-section {\n  background-size: cover;\n  padding: 180px 0 0;\n  color: #ffffff;\n  overflow: visible; }\n\n.home-intro-title {\n  margin: 0 0 24px;\n  font-size: 48px;\n  font-weight: 900;\n  line-height: 54px;\n  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.22); }\n\n.home-intro-subtitle {\n  margin: 0 0 22px;\n  font-size: 22px;\n  font-weight: 400;\n  line-height: 32px; }\n\n.home-intro-text {\n  max-width: 570px;\n  margin: 0 auto 24px; }\n\n.intro-cta {\n  max-width: 180px;\n  margin: 0 auto; }\n\n.intro-product {\n  position: relative;\n  top: auto;\n  left: auto;\n  bottom: 0;\n  width: 60%;\n  margin: 2rem auto 3rem  auto; }\n\n@media (max-width: 767px) {\n  .home-intro-section {\n    padding: 100px 0 0; }\n  .home-intro-title {\n    margin: 0 0 24px;\n    font-size: 36px;\n    font-weight: 900;\n    line-height: 38px;\n    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.22); }\n  .home-intro-subtitle {\n    margin: 0 0 22px;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 27px; }\n  .intro-product {\n    bottom: 0px;\n    width: 100%; }\n    .intro-product img {\n      width: 480px; } }\n\n@media (max-width: 580px) {\n  .intro-product {\n    bottom: 0px; }\n    .intro-product img {\n      width: 280px; } }\n\n.feature-count {\n  display: block;\n  font-size: 4rem;\n  line-height: 1;\n  margin-bottom: 2.4rem; }\n\n.feature-content h3 {\n  margin-bottom: 2rem;\n  font-weight: bold; }\n\n.feature-two {\n  padding: 0 2rem;\n  margin: 2rem 0; }\n"

/***/ }),

/***/ "./src/app/layouts/shared-sections/intro-two/intro-two.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/intro-two/intro-two.component.ts ***!
  \**************************************************************************/
/*! exports provided: IntroTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroTwoComponent", function() { return IntroTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroTwoComponent = /** @class */ (function () {
    function IntroTwoComponent() {
    }
    IntroTwoComponent.prototype.ngOnInit = function () {
    };
    IntroTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro-two',
            template: __webpack_require__(/*! ./intro-two.component.html */ "./src/app/layouts/shared-sections/intro-two/intro-two.component.html"),
            styles: [__webpack_require__(/*! ./intro-two.component.scss */ "./src/app/layouts/shared-sections/intro-two/intro-two.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroTwoComponent);
    return IntroTwoComponent;
}());



/***/ }),

/***/ "./src/app/layouts/shared-sections/portfolio-carousel/portfolio-carousel.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/portfolio-carousel/portfolio-carousel.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"portfolio-section\" class=\"portfolio-section gap\">\n    <div class=\"container\">\n  <div fxLayout='column' class=\"text-center mb-5\">\n            <div fxFlex.gt-md=\"60%\">\n                <h2 class=\"title-page\">Our Recent Work</h2>\n                <p class=\"lead w-60\"> Consectetur adipisicing elit. Velit id error rem qui. Neque aperiam saepe placeat vero reprehenderit. </p>\n            </div>\n        </div>\n    <ngu-carousel\n    [inputs]=\"carouselOptions\">\n      <ngu-item NguCarouselItem *ngFor=\"let p of portfolios\">\n          <mat-card class=\"p-0\">\n              <img mat-card-image [src]=\"p.photo\">\n              <mat-card-content>\n                <h5><strong><a href=\"\">{{p.title}}</a></strong></h5>\n                <p>\n                  {{p.text}}\n                </p>\n                <mat-divider class=\"mb-1\"></mat-divider>   <div>\n                    <button mat-icon-button><mat-icon class=\"text-muted\">favorite</mat-icon></button>\n                    <span fxFlex></span>\n                    <button mat-icon-button><mat-icon class=\"text-muted\">share</mat-icon></button>\n                </div>\n              </mat-card-content>\n            </mat-card>\n\n      </ngu-item>\n      \n      <button mat-fab NguCarouselPrev class='carousel-left'><mat-icon>keyboard_arrow_left</mat-icon></button>\n      <button mat-fab NguCarouselNext class='carousel-right'><mat-icon>keyboard_arrow_right</mat-icon></button>\n  </ngu-carousel>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/layouts/shared-sections/portfolio-carousel/portfolio-carousel.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/portfolio-carousel/portfolio-carousel.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item .mat-card {\n  margin: 0 16px; }\n"

/***/ }),

/***/ "./src/app/layouts/shared-sections/portfolio-carousel/portfolio-carousel.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/portfolio-carousel/portfolio-carousel.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PortfolioCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioCarouselComponent", function() { return PortfolioCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioCarouselComponent = /** @class */ (function () {
    function PortfolioCarouselComponent() {
        this.portfolios = [{
                photo: 'assets/images/2.jpg',
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus \n    vitae dignissimos, sapiente est atque tenetur",
                title: 'Est atque tenetur',
            }, {
                photo: 'assets/images/3.jpg',
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus \n    vitae dignissimos, sapiente est atque tenetur",
                title: 'Sapiente est atque tenetur',
            }, {
                photo: 'assets/images/1.jpg',
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus \n    vitae dignissimos, sapiente est atque tenetur",
                title: 'Quasi quaerat aut',
            }, {
                photo: 'assets/images/3.jpg',
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus \n    vitae dignissimos, sapiente est atque tenetur",
                title: 'Quasi quaerat aut nam',
            }, {
                photo: 'assets/images/1.jpg',
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus \n    vitae dignissimos, sapiente est atque tenetur",
                title: 'Quasi quaerat aut',
            }, {
                photo: 'assets/images/2.jpg',
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus \n    vitae dignissimos, sapiente est atque tenetur",
                title: 'Adipisci quas repellat sed',
            }];
    }
    PortfolioCarouselComponent.prototype.ngOnInit = function () {
        this.carouselOptions = {
            grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
            slide: 2,
            speed: 400,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true
        };
    };
    PortfolioCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio-carousel',
            template: __webpack_require__(/*! ./portfolio-carousel.component.html */ "./src/app/layouts/shared-sections/portfolio-carousel/portfolio-carousel.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-carousel.component.scss */ "./src/app/layouts/shared-sections/portfolio-carousel/portfolio-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioCarouselComponent);
    return PortfolioCarouselComponent;
}());



/***/ }),

/***/ "./src/app/layouts/shared-sections/portfolio/portfolio.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/portfolio/portfolio.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"portfolio-section\" class=\"portfolio home-section gap\">\n    <div class=\"container\">\n        <div fxLayout='column' class=\"text-center mb-5\">\n            <div fxFlex.gt-md=\"60%\">\n                <h2 class=\"title-page\">Our Recent Work</h2>\n                <p class=\"lead w-60\"> Consectetur adipisicing elit. Velit id error rem qui. Neque aperiam saepe placeat vero reprehenderit. </p>\n            </div>\n        </div>\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"nowrap\" fxLayoutGap=\"30px\">\n            <div fxFlex=\"33.33\">\n                <mat-card class=\"p-0 m-0\">\n                    <img mat-card-image src=\"assets/images/1.jpg\">\n                    <mat-card-content>\n                        <div class=\"title-head\">\n                            <h4><strong><a href=\"\">Quasi reiciendis itaque veritatis</a></strong></h4>\n                        </div>\n                        <p>\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi reiciendis itaque veritatis nisi atque voluptatem, blanditiis ex illo voluptatibus consequatur at aut molestias. Alias nostrum, aut deleniti quos qui iste.\n                        </p>\n                        <mat-divider class=\"mb-1\"></mat-divider>\n                        <div>\n                            <button mat-icon-button><mat-icon class=\"text-muted\">favorite</mat-icon></button>\n                            <span fxFlex></span>\n                            <button mat-icon-button><mat-icon class=\"text-muted\">share</mat-icon></button>\n                        </div>\n                    </mat-card-content>\n                </mat-card>\n            </div>\n            <div fxFlex=\"33.33\">\n                <mat-card class=\"p-0 m-0\">\n                    <img mat-card-image src=\"assets/images/2.jpg\">\n                    <mat-card-content>\n                        <div class=\"title-head\">\n                            <h4><strong><a href=\"\">Consectetur adipisicing elit</a></strong></h4>\n                        </div>\n                        <p>\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi reiciendis itaque veritatis nisi atque voluptatem, blanditiis ex illo voluptatibus consequatur at aut molestias. Alias nostrum, aut deleniti quos qui iste.\n                        </p>\n                        <mat-divider class=\"mb-1\"></mat-divider>\n                        <div>\n                            <button mat-icon-button><mat-icon class=\"text-muted\">favorite</mat-icon></button>\n                            <span fxFlex></span>\n                            <button mat-icon-button><mat-icon class=\"text-muted\">share</mat-icon></button>\n                        </div>\n                    </mat-card-content>\n                </mat-card>\n            </div>\n            <div fxFlex=\"33.33\">\n                <mat-card class=\"p-0 m-0\">\n                    <img mat-card-image src=\"assets/images/3.jpg\">\n                    <mat-card-content>\n                        <div class=\"title-head\">\n                            <h4><strong><a href=\"\">Aut deleniti quos qui iste.</a></strong></h4>\n                        </div>\n                        <p>\n                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi reiciendis itaque veritatis nisi atque voluptatem, blanditiis ex illo voluptatibus consequatur at aut molestias. Alias nostrum, aut deleniti quos qui iste.\n                        </p>\n                        <mat-divider class=\"mb-1\"></mat-divider>\n                        <div>\n                            <button mat-icon-button><mat-icon class=\"text-muted\">favorite</mat-icon></button>\n                            <span fxFlex></span>\n                            <button mat-icon-button><mat-icon class=\"text-muted\">share</mat-icon></button>\n                        </div>\n                    </mat-card-content>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/layouts/shared-sections/portfolio/portfolio.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/portfolio/portfolio.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/shared-sections/portfolio/portfolio.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/portfolio/portfolio.component.ts ***!
  \**************************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/layouts/shared-sections/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/layouts/shared-sections/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/layouts/shared-sections/pricings/pricings.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/pricings/pricings.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pricings-section\" class=\"gap\">\n    <div class=\"container\">\n        <div fxLayout='column' class=\"text-center mb-5 white-color\">\n            <div fxFlex.gt-md=\"60%\">\n                <h2 class=\"title-page\">Affordable Prices</h2>\n                <p class=\"lead w-60\"> Consectetur adipisicing elit. Velit id error rem qui. Neque aperiam saepe placeat vero reprehenderit. </p>\n            </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n            <!-- Pricing box -->\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.33\" fxFlex.sm=\"33.33\">\n                <mat-card class=\"plan-pricing text-center p-0\">\n                    <mat-card-title class=\"accent-bg\">\n                        <div class=\"card-title-text\">\n                            <h1><strong>Basic</strong></h1>\n                            <div class=\"text-sm text-muted\">\n                                <p>$ 9.99 / year</p>\n                            </div>\n                        </div>\n                        <mat-divider></mat-divider>\n                    </mat-card-title>\n                    <mat-card-content>\n                        <mat-list class=\"mb-1\">\n                            <mat-list-item>\n                                <p> 10GB Storage </p>\n                            </mat-list-item>\n                            <mat-list-item>\n                                <p> 10 Emails </p>\n                            </mat-list-item>\n                            <mat-list-item>\n                                <p> 10 Domains </p>\n                            </mat-list-item>\n                            <mat-list-item>\n                                <p> 1GB Bandwidth </p>\n                            </mat-list-item>\n                        </mat-list>\n                        <button mat-raised-button class=\"mat-accent\">Buy</button>\n                    </mat-card-content>\n                </mat-card>\n            </div>\n            <!-- Pricing box -->\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.33\" fxFlex.sm=\"33.33\">\n                <mat-card class=\"plan-pricing text-center p-0\">\n                    <mat-card-title class=\"accent-bg\">\n                        <div class=\"card-title-text\">\n                            <h1><strong>Pro</strong></h1>\n                            <div class=\"text-sm text-muted\">\n                                <p> 24.99 / year</p>\n                            </div>\n                        </div>\n                        <mat-divider></mat-divider>\n                    </mat-card-title>\n                    <mat-card-content>\n                        <mat-list class=\"mb-1\">\n                            <mat-list-item>\n                                <p> 25GB Storage </p>\n                            </mat-list-item>\n                            <mat-list-item>\n                                <p> 25 Emails </p>\n                            </mat-list-item>\n                            <mat-list-item>\n                                <p> 25 Domains </p>\n                            </mat-list-item>\n                            <mat-list-item>\n                                <p> 2GB Bandwidth </p>\n                            </mat-list-item>\n                        </mat-list>\n                        <button mat-raised-button class=\"mat-accent\">Buy</button>\n                    </mat-card-content>\n                </mat-card>\n            </div>\n            <!-- Pricing box -->\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.33\" fxFlex.sm=\"33.33\">\n                <mat-card class=\"plan-pricing text-center p-0\">\n                    <mat-card-title class=\"accent-bg\">\n                        <div class=\"card-title-text\">\n                            <h1><strong>Premium</strong></h1>\n                            <div class=\"text-sm text-muted\">\n                                <p> $ 49.99 / year</p>\n                            </div>\n                        </div>\n                        <mat-divider></mat-divider>\n                    </mat-card-title>\n                    <mat-card-content>\n                        <mat-list class=\"mb-1\">\n                            <mat-list-item>\n                                <p> 50GB Storage </p>\n                            </mat-list-item>\n                            <mat-list-item>\n                                <p> 50 Emails </p>\n                            </mat-list-item>\n                            <mat-list-item>\n                                <p> 50 Domains </p>\n                            </mat-list-item>\n                            <mat-list-item>\n                                <p> 5GB Bandwidth </p>\n                            </mat-list-item>\n                        </mat-list>\n                        <button mat-raised-button class=\"mat-accent\">Buy</button>\n                    </mat-card-content>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/layouts/shared-sections/pricings/pricings.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/pricings/pricings.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".plan-pricing .mat-list-item ::ng-deep .mat-list-item-content {\n  display: inline-flex !important;\n  text-align: center;\n  font-size: .875rem !important; }\n\n.plan-pricing {\n  background: #3f51b5;\n  color: #fff; }\n\n.plan-pricing p {\n    color: #fff; }\n"

/***/ }),

/***/ "./src/app/layouts/shared-sections/pricings/pricings.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/pricings/pricings.component.ts ***!
  \************************************************************************/
/*! exports provided: PricingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingsComponent", function() { return PricingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingsComponent = /** @class */ (function () {
    function PricingsComponent() {
        this.isAnnualSelected = false;
    }
    PricingsComponent.prototype.ngOnInit = function () {
    };
    PricingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricings',
            template: __webpack_require__(/*! ./pricings.component.html */ "./src/app/layouts/shared-sections/pricings/pricings.component.html"),
            styles: [__webpack_require__(/*! ./pricings.component.scss */ "./src/app/layouts/shared-sections/pricings/pricings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PricingsComponent);
    return PricingsComponent;
}());



/***/ }),

/***/ "./src/app/layouts/shared-sections/services-carousel/services-carousel.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/services-carousel/services-carousel.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"service-section\" class=\"section-two gap bg-grey\">\n    <div class=\"container\">\n        <div fxLayout='column' class=\"text-center mb-5\">\n            <div fxFlex.gt-md=\"60%\">\n                <h2 class=\"title-page\">Services</h2>\n                <p class=\"lead w-60\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit id error rem qui. Neque aperiam saepe placeat vero reprehenderit. </p>\n            </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"center center\">\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"40\" fxFlex.xl=\"40\">\n                <div class=\"service-card-two\">\n                    <div class=\"service-title mb-2\">\n                        <h6>LOREM IPSUM QYUERTY GHJSI</h6>\n                        <h2>Adipisicing Esse Exerc</h2>\n                    </div>\n                    <div class=\"content-cap\">\n                        <p>Lorem ipsum Sunt adipisicing adipisicing esse exercitation consequat sed irure commodo cupidatat aute ea adipisicing consectetur nulla consequat irure consectetur veniam sit sit qui reprehenderit officia sunt nulla elit nisi proident. </p>\n                    </div>\n                </div>\n            </div>\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"40\" fxFlex.xl=\"40\">\n                <img class=\"card-shadow\" src=\"assets/images/service-1.jpg\" alt=\"\">\n            </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"center center\">\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"40\" fxFlex.xl=\"40\">\n                <img class=\"card-shadow\" src=\"assets/images/service-2.jpg\" alt=\"\">\n            </div>\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"40\" fxFlex.xl=\"40\">\n                <div class=\"service-card-two\">\n                    <div class=\"service-title mb-2\">\n                        <h6>NULLA CONQSETY IRUTE</h6>\n                        <h2>Veniam Sit Riuy Qui</h2>\n                    </div>\n                    <div class=\"content-cap\">\n                        <p>Lorem ipsum Sunt adipisicing adipisicing esse exercitation consequat sed irure commodo cupidatat aute ea adipisicing consectetur nulla consequat irure consectetur veniam sit sit qui reprehenderit officia sunt nulla elit nisi proident. </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"center center\">\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"40\" fxFlex.xl=\"40\">\n                <div class=\"service-card-two\">\n                    <div class=\"service-title mb-2\">\n                        <h6>ELIKU YUYUWD UIWRTD</h6>\n                        <h2>Elit Nisi Proident</h2>\n                    </div>\n                    <div class=\"content-cap\">\n                        <p>Lorem ipsum Sunt adipisicing adipisicing esse exercitation consequat sed irure commodo cupidatat aute ea adipisicing consectetur nulla consequat irure consectetur veniam sit sit qui reprehenderit officia sunt nulla elit nisi proident. </p>\n                    </div>\n                </div>\n            </div>\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"50\" fxFlex.lg=\"40\" fxFlex.xl=\"40\">\n                <img class=\"card-shadow\" src=\"assets/images/service-3.jpg\" alt=\"\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layouts/shared-sections/services-carousel/services-carousel.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/services-carousel/services-carousel.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".service-card-two {\n  padding-top: 2rem;\n  padding-bottom: 2rem; }\n\n@media (min-width: 600px) {\n  .service-card-two {\n    padding: 2rem; } }\n"

/***/ }),

/***/ "./src/app/layouts/shared-sections/services-carousel/services-carousel.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/services-carousel/services-carousel.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ServicesCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesCarouselComponent", function() { return ServicesCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesCarouselComponent = /** @class */ (function () {
    function ServicesCarouselComponent() {
    }
    ServicesCarouselComponent.prototype.ngOnInit = function () {
        this.carouselOptions = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 2,
            speed: 400,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true
        };
    };
    ServicesCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services-carousel',
            template: __webpack_require__(/*! ./services-carousel.component.html */ "./src/app/layouts/shared-sections/services-carousel/services-carousel.component.html"),
            styles: [__webpack_require__(/*! ./services-carousel.component.scss */ "./src/app/layouts/shared-sections/services-carousel/services-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesCarouselComponent);
    return ServicesCarouselComponent;
}());



/***/ }),

/***/ "./src/app/layouts/shared-sections/services/services.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/services/services.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"service-section\" class=\"services-wrappper gap bg-grey\">\n    <div class=\"container\">\n        <div fxLayout='column' class=\"text-center mb-5\">\n            <div fxFlex.gt-md=\"60%\">\n                <h2 class=\"title-page\">Our Services</h2>\n                <p class=\"lead w-60\"> Consectetur adipisicing elit. Velit id error rem qui. Neque aperiam saepe placeat vero reprehenderit. </p>\n            </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.33\" fxFlex.sm=\"100\">\n                <mat-card>\n                    <div class=\"service-card\">\n                        <div class=\"text-center icon-cap\">\n                            <i class=\"material-icons\">\nsettings_phone\n</i>\n                        </div>\n                        <div class=\"service-title mb-2\">\n                            <h4>Quasi reiciendis</h4>\n                        </div>\n                        <div class=\"content-cap\">\n                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at. </p>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.33\" fxFlex.sm=\"100\">\n                <mat-card>\n                    <div class=\"service-card\">\n                        <div class=\"text-center icon-cap\"><i class=\"material-icons\">\nfavorite\n</i>\n                        </div>\n                        <div class=\"service-title mb-2\">\n                            <h4>Quasi reiciendis</h4>\n                        </div>\n                        <div class=\"content-cap\">\n                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at. </p>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.33\" fxFlex.sm=\"100\">\n                <mat-card>\n                    <div class=\"service-card\">\n                        <div class=\"text-center icon-cap\"><i class=\"material-icons\">\nperm_identity\n</i>\n                        </div>\n                        <div class=\"service-title mb-2\">\n                            <h4>Quasi reiciendis</h4>\n                        </div>\n                        <div class=\"content-cap\">\n                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at. </p>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.33\" fxFlex.sm=\"100\">\n                <mat-card>\n                    <div class=\"service-card\">\n                        <div class=\"text-center icon-cap\"><i class=\"material-icons\">\nsearch\n</i>\n                        </div>\n                        <div class=\"service-title mb-2\">\n                            <h4>Quasi reiciendis</h4>\n                        </div>\n                        <div class=\"content-cap\">\n                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at. </p>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.33\" fxFlex.sm=\"100\">\n                <mat-card>\n                    <div class=\"service-card\">\n                        <div class=\"text-center icon-cap\"><i class=\"material-icons\">\nthumb_up\n</i>\n                        </div>\n                        <div class=\"service-title mb-2\">\n                            <h4>Quasi reiciendis</h4>\n                        </div>\n                        <div class=\"content-cap\">\n                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at. </p>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.33\" fxFlex.sm=\"100\">\n                <mat-card>\n                    <div class=\"service-card\">\n                        <div class=\"text-center icon-cap\"><i class=\"material-icons\">\nvisibility_off\n</i>\n                        </div>\n                        <div class=\"service-title mb-2\">\n                            <h4>Quasi reiciendis</h4>\n                        </div>\n                        <div class=\"content-cap\">\n                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at. </p>\n                        </div>\n                    </div>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/layouts/shared-sections/services/services.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/services/services.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".services-wrappper .service-card {\n  text-align: center;\n  padding: 2rem; }\n  .services-wrappper .service-card .icon-cap {\n    display: inline-block;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    padding: 1rem;\n    margin-bottom: 1rem; }\n  .services-wrappper .service-card .icon-cap i {\n      font-size: 3rem; }\n  .services-wrappper mat-card {\n  margin: 1rem; }\n  @media (max-width: 767px) {\n  .services-wrappper .service-card {\n    padding: 1rem; } }\n"

/***/ }),

/***/ "./src/app/layouts/shared-sections/services/services.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/services/services.component.ts ***!
  \************************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/layouts/shared-sections/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/layouts/shared-sections/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/layouts/shared-sections/testimonials-carousel/testimonials-carousel.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/testimonials-carousel/testimonials-carousel.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"testimonial-slider\" class=\"testimonials-section gap primary-bg\">\n    <div class=\"container\">\n        <div fxLayout='column' class=\"text-center mb-5 white-color\">\n            <div fxFlex.gt-md=\"60%\">\n                <h2 class=\"title-page\">What our customers says</h2>\n                <p class=\"lead w-60\"> Consectetur adipisicing elit. Velit id error rem qui. Neque aperiam saepe placeat vero reprehenderit. </p>\n            </div>\n        </div>\n        <div fxLayout=\"row\" fxLayoutWrap=\"wrap row\" fxLayoutAlign=\"center center\">\n            <div fxFlex.xs=\"90\" fxFlex.sm=\"80\" fxFlex.md=\"70\" fxFlex.lg=\"50\" fxFlex.xl=\"50\">\n                <ngu-carousel [inputs]=\"carouselOptions\">\n                    <ngu-item NguCarouselItem *ngFor=\"let tm of testimonials\">\n                        <mat-card class=\"p-0\">\n                            <mat-card-content class=\"text-center\">\n                                <div class=\"user-content\">\n                                    <div class=\"testimonial-img\"><img [src]=\"tm.photo\" alt=\"\"></div>\n                                    <p class=\"text\">{{tm.text}}</p>\n                                    <div class=\"user-title\">{{tm.title}}</div>\n                                    <div class=\"user-subtitle text-muted\">{{tm.subtitle}}</div>\n                                </div>\n                            </mat-card-content>\n                        </mat-card>\n                    </ngu-item>\n                    <button mat-fab NguCarouselPrev class='carousel-left'><mat-icon>keyboard_arrow_left</mat-icon></button>\n                    <button mat-fab NguCarouselNext class='carousel-right'><mat-icon>keyboard_arrow_right</mat-icon></button>\n                </ngu-carousel>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/layouts/shared-sections/testimonials-carousel/testimonials-carousel.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/testimonials-carousel/testimonials-carousel.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".testimonials-section .user-content p {\n  font-size: 1.4rem !important;\n  line-height: 1.3;\n  font-weight: lighter; }\n\n.testimonial-img img {\n  width: 80px !important;\n  height: 80px;\n  margin-bottom: 1rem;\n  border-radius: 100%; }\n\n.white-color p,\n.white-color h2 {\n  color: #fff; }\n\n.ngucarouselPoint li {\n  color: #fff; }\n\n.item .mat-card {\n  margin: 0 16px; }\n\n.item .mat-card .mat-card-content {\n    position: relative;\n    padding: 2rem; }\n\n.item .mat-card .company-logo {\n    padding-bottom: 24px; }\n\n.item .mat-card .text {\n    position: relative;\n    font-size: 1rem;\n    color: rgba(0, 0, 0, 0.64);\n    padding-bottom: 25px;\n    margin: 0; }\n\n.item .mat-card .user-detail {\n    position: absolute;\n    bottom: 25px;\n    left: 32px;\n    right: 0;\n    margin: auto; }\n\n.item .mat-card .user-detail .user-photo {\n      float: left;\n      margin-right: 8px; }\n\n.item .mat-card .user-detail .user-title {\n      font-size: 1rem;\n      float: left;\n      width: calc(100% - 56px); }\n\n.item .mat-card .user-detail .user-subtitle {\n      float: left; }\n\n@media (max-width: 767px) {\n  .testimonials-section .user-content p {\n    font-size: 1rem !important; } }\n"

/***/ }),

/***/ "./src/app/layouts/shared-sections/testimonials-carousel/testimonials-carousel.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/testimonials-carousel/testimonials-carousel.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: TestimonialsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsCarouselComponent", function() { return TestimonialsCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialsCarouselComponent = /** @class */ (function () {
    function TestimonialsCarouselComponent() {
        this.testimonials = [{
                photo: 'assets/images/user-thumb-1.jpg',
                text: "\u201CLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius, atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora. \u201D",
                title: 'Jenaa Meg',
                subtitle: 'Manager'
            }, {
                photo: 'assets/images/user-thumb-2.jpg',
                text: "\"Amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,\n    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora Lorem ipsum dolor sit.\"",
                title: 'Tim Creed',
                subtitle: 'Sr. Dev'
            }, {
                photo: 'assets/images/user-thumb-3.jpg',
                text: "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,\n    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora.\"",
                title: 'Miley Cyprus',
                subtitle: 'Dev Head'
            }, {
                photo: 'assets/images/user-thumb-4.jpg',
                text: "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,\n    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora.\"",
                title: 'Jimmy Clay',
                subtitle: 'CEO'
            }];
    }
    TestimonialsCarouselComponent.prototype.ngOnInit = function () {
        this.carouselOptions = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 2,
            speed: 400,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true
        };
    };
    TestimonialsCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimonials-carousel',
            template: __webpack_require__(/*! ./testimonials-carousel.component.html */ "./src/app/layouts/shared-sections/testimonials-carousel/testimonials-carousel.component.html"),
            styles: [__webpack_require__(/*! ./testimonials-carousel.component.scss */ "./src/app/layouts/shared-sections/testimonials-carousel/testimonials-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialsCarouselComponent);
    return TestimonialsCarouselComponent;
}());



/***/ }),

/***/ "./src/app/layouts/shared-sections/testimonials/testimonials.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/testimonials/testimonials.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"testimonial-slider\" class=\"testimonials-section gap primary-bg\">\n  <div class=\"container\">\n      <div fxLayout='column' class=\"text-center mb-5 white-color\">\n          <div fxFlex.gt-md=\"60%\">\n              <h2 class=\"title-page\">What our customers says</h2>\n              <p class=\"lead w-60\"> Consectetur adipisicing elit. Velit id error rem qui. Neque aperiam saepe placeat vero reprehenderit. </p>\n          </div>\n      </div>\n      <div fxLayout=\"row\" fxLayoutWrap=\"wrap row\" fxLayoutAlign=\"center center\">\n          <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"70\" fxFlex.lg=\"60\" fxFlex.xl=\"100\">\n      <div fxFlex=\"100\" *ngFor=\"let tm of testimonials\">\n          <mat-card class=\"p-0\">\n              <mat-card-content class=\"text-center\">\n                  <div class=\"user-content\">\n                      <div class=\"testimonial-img\"><img [src]=\"tm.photo\" alt=\"\"></div>\n                      <p class=\"text\">{{tm.text}}</p>\n                      <div class=\"user-title\">{{tm.title}}</div>\n                      <div class=\"user-subtitle text-muted\">{{tm.subtitle}}</div>\n                  </div>\n              </mat-card-content>\n          </mat-card>\n      </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/layouts/shared-sections/testimonials/testimonials.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/testimonials/testimonials.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".testimonials-section .user-content p {\n  font-size: 1.4rem !important;\n  line-height: 1.3;\n  font-weight: lighter; }\n\n.testimonial-img {\n  padding-top: 2rem; }\n\n.testimonial-img img {\n    width: 80px !important;\n    height: 80px;\n    margin-bottom: 1rem;\n    border-radius: 100%; }\n\n.white-color p,\n.white-color h2 {\n  color: #fff; }\n\n.ngucarouselPoint li {\n  color: #fff; }\n\n.item .mat-card {\n  margin: 0 16px; }\n\n.item .mat-card .mat-card-content {\n    position: relative;\n    padding: 2rem; }\n\n.item .mat-card .company-logo {\n    padding-bottom: 24px; }\n\n.item .mat-card .text {\n    position: relative;\n    font-size: 1rem;\n    color: rgba(0, 0, 0, 0.64);\n    padding-bottom: 25px;\n    margin: 0; }\n\n.item .mat-card .user-detail {\n    position: absolute;\n    bottom: 25px;\n    left: 32px;\n    right: 0;\n    margin: auto; }\n\n.item .mat-card .user-detail .user-photo {\n      float: left;\n      margin-right: 8px; }\n\n.item .mat-card .user-detail .user-title {\n      font-size: 1rem;\n      float: left;\n      width: calc(100% - 56px); }\n\n.item .mat-card .user-detail .user-subtitle {\n      float: left; }\n\n@media (max-width: 767px) {\n  .testimonials-section .user-content p {\n    font-size: 1rem !important; } }\n"

/***/ }),

/***/ "./src/app/layouts/shared-sections/testimonials/testimonials.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layouts/shared-sections/testimonials/testimonials.component.ts ***!
  \********************************************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent() {
        this.testimonials = [{
                photo: 'assets/images/user-thumb-1.jpg',
                text: "\u201CLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,\n    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora.. \u201D",
                title: 'Jhone Doe',
                subtitle: 'Product Manager'
            }];
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
        this.carouselOptions = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 2,
            speed: 400,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true
        };
    };
    TestimonialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimonials',
            template: __webpack_require__(/*! ./testimonials.component.html */ "./src/app/layouts/shared-sections/testimonials/testimonials.component.html"),
            styles: [__webpack_require__(/*! ./testimonials.component.scss */ "./src/app/layouts/shared-sections/testimonials/testimonials.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-layout-module.js.map