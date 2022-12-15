(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+GGL":
/*!*****************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.ts ***!
  \*****************************************************************/
/*! exports provided: NucleoiconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function() { return NucleoiconsComponent; });
/* harmony import */ var _raw_loader_nucleoicons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./nucleoicons.component.html */ "vG3S");
/* harmony import */ var _nucleoicons_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nucleoicons.component.scss */ "IBmT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('app-nucleoicons')[0];
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.add('navbar-hidden');
        body.classList.add('demo-icons');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-hidden');
    };
    NucleoiconsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    NucleoiconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-nucleoicons',
            template: _raw_loader_nucleoicons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_nucleoicons_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\YG\Others\BAPS\paper-kit-2-angular-master\psm-booth-dev\src\main.ts */"zUnb");


/***/ }),

/***/ "0Inq":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "1E4i":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\">\n        <div class=\"container\">\n            <ng-container *ngIf=\"alert.icon\">\n                <i class=\"nc-icon {{alert.icon}}\"></i>\n            </ng-container>\n\n            {{ alert.message }}\n            <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\n                <i class=\"nc-icon nc-simple-remove\"></i>\n            </button>\n        </div>\n    </ngb-alert>\n</p>\n");

/***/ }),

/***/ "1RpN":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-buttons\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h2>Basic Components</h2>\n        </div>\n        <div id=\"buttons\">\n            <div class=\"tim-title\">\n                <h3>Buttons\n                    <br/>\n                    <small>Pick your style</small>\n                </h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-danger\">Default</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Round</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\"><i class=\"fa fa-heart\"></i> With Icon</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-just-icon\"><i class=\"fa fa-heart\"></i></button>\n                    <button type=\"button\" class=\"btn btn-danger btn-link\">Simple</button>\n                </div>\n            </div>\n            <div class=\"tim-title\">\n                <h3><small>Pick your size</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-sm\">Small</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger\">Regular</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-lg\">Large</button>\n                </div>\n            </div>\n            <div class=\"tim-title\">\n                <h3><small>Pick your color</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-outline-default btn-round\">Default</button><button type=\"button\" class=\"btn btn-outline-primary btn-round\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-outline-info btn-round\">Info</button>\n                    <button type=\"button\" class=\"btn btn-outline-success btn-round\">Success</button>\n                    <button type=\"button\" class=\"btn btn-outline-warning btn-round\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-round\">Danger</button>\n                </div>\n            </div>\n            <br/>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-default btn-round\">Default</button>\n                    <button type=\"button\" class=\"btn btn-primary btn-round\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-info btn-round\">Info</button>\n                    <button type=\"button\" class=\"btn btn-success btn-round\">Success</button>\n                    <button type=\"button\" class=\"btn btn-warning btn-round\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Danger</button>\n                </div>\n            </div>\n        </div>\n            <br/>\n        <div class=\"tim-title\">\n            <h3>Links</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <a href=\"#0\" class=\"btn btn-link btn-default\">Default</a>\n                <a href=\"#0\" class=\"btn btn-link btn-primary\">Primary</a>\n                <a href=\"#0\" class=\"btn btn-link btn-success\">Success</a>\n                <a href=\"#0\" class=\"btn btn-link btn-info\">Info</a>\n                <a href=\"#0\" class=\"btn btn-link btn-warning\">Warning</a>\n                <a href=\"#0\" class=\"btn btn-link btn-danger\">Danger</a>\n                <a href=\"#0\" class=\"btn btn-link btn-neutral\">Neutral</a>\n            </div>\n        </div>\n        <br/>\n        <div class=\"tim-title\">\n            <h3>Inputs</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Default\">\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-group has-success\">\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\" value=\"Success\">\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-group has-danger\">\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\" value=\"Error\">\n                    <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"basic-addon1\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                    <div class=\"input-group-append\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-group\" aria-hidden=\"true\"></i></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Checkboxes</h3>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                    Unchecked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                    Checked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled=\"\">\n                    Disabled unchecked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\" disabled=\"\">\n                    Disabled checked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Radio Buttons</h3>\n                </div>\n                <div class=\"form-check-radio\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" >\n                    Radio is off\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\" checked=\"\">\n                    Radio is on\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios3\" value=\"option3\" disabled=\"\">\n                    Disabled Radio is off\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios4\" value=\"option3\" checked disabled=\"\">\n                    Disabled Radio is on\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Toggle Buttons</h3>\n                </div>\n                <bSwitch\n                    [switch-on-color]=\"'primary'\">\n                </bSwitch>\n                <bSwitch\n                    [switch-on-color]=\"'primary'\"\n                    [(ngModel)]=\"state_default\"> Toggle is off\n                </bSwitch>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Sliders</h3>\n                </div>\n                <nouislider [connect]=\"false\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"false\" class=\"slider\"></nouislider>\n                <br>\n                <nouislider class=\"slider slider-info\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"false\"></nouislider>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "29h6":
/*!********************************************************************!*\
  !*** ./src/app/layouts/preview-image/preview-image.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".preview-img-container {\n  position: relative;\n  height: 100vh;\n  overflow: auto;\n  background-position: center;\n  background-size: cover;\n}\n\n.overlay {\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.72);\n}\n\n.preview-img {\n  height: 90vh;\n  width: auto;\n  text-align: center;\n  padding-top: 5vh;\n}\n\n.preview-img img {\n  border: 5px solid #28757d;\n  height: auto;\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.action-btn {\n  background: rgba(0, 0, 0, 0.184);\n  color: black;\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcmV2aWV3LWltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQU9JLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7QUFMSjs7QUFRQTtFQUVJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5KOztBQU9JO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBTFI7O0FBU0E7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBTkoiLCJmaWxlIjoicHJldmlldy1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmV2aWV3LWltZy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gdG9wOiAwO1xyXG4gICAgLy8gbGVmdDogMDtcclxuICAgIC8vIHJpZ2h0OiAwO1xyXG4gICAgLy8gYm90dG9tOiAwO1xyXG4gICAgLy8gei1pbmRleDogMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSAyNTUgMjU1IC8gNzIlKTtcclxufVxyXG5cclxuLnByZXZpZXctaW1nIHtcclxuICAgIC8vIGJvcmRlcjogNXB4IHNvbGlkICMyODc1N2Q7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA1dmg7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICMyODc1N2Q7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvOyBcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGlvbi1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE4NCk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "3xpf":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/animation-camera/animation-camera.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"webcam-container\" [ngClass]=\"{'blur-content' : currentCapture}\" id=\"webcam-container\">\n    <!-- <div style=\"position: absolute; z-index: 101; top: 0; transform: scaleX(-1); text-align: center; width: 100%;\">\n        <img class=\"mt-3\" style=\"width: 30rem; max-width: 50vw; border-radius: 0.3rem;\" src=\"./../../../assets/img/temp_logo.png\" />\n    </div> -->\n    <ng-container *ngIf=\"currentScreen?.lottie1\">\n        <lottie-player style=\"position: absolute; z-index: 100; transform: scaleX(-1);\" [src]=\"currentScreen?.lottie1\" background=\"transparent\"  speed=\"2\" loop autoplay >\n        </lottie-player>\n    </ng-container>\n    <ng-container *ngIf=\"currentScreen?.lottie2\">\n        <lottie-player *ngIf=\"capturing\" style=\"position: absolute; z-index: 99; transform: scaleX(-1);\" [src]=\"currentScreen?.lottie2\" background=\"transparent\"  speed=\"2\" [loop]=\"false\" autoplay >\n        </lottie-player>\n    </ng-container>\n    <ng-container *ngIf=\"currentScreen?.image1\">\n        <img [src]=\"currentScreen?.image1\" style=\"z-index: 100; transform: scaleX(-1);\" id=\"camera-overlay\" class=\"camera-overlay\" />\n    </ng-container>\n    <ng-container *ngIf=\"currentScreen?.image2\">\n        <img [src]=\"currentScreen?.image2\" style=\"z-index: 99; transform: scaleX(-1);\" class=\"camera-overlay\" />\n    </ng-container>\n    <ng-container *ngIf=\"currentScreen?.video1\">\n        <video style=\"z-index: 100; transform: scaleX(-1);\" class=\"camera-overlay-for-video\" autoplay loop muted>\n            <source [src]=\"currentScreen?.video1\">\n        </video>\n    </ng-container>\n    <ng-container *ngIf=\"currentScreen?.video2\">\n        <video style=\"z-index: 99; transform: scaleX(-1);\" class=\"camera-overlay-for-video\" autoplay loop muted>\n            <source [src]=\"currentScreen?.video2\">\n        </video>\n    </ng-container>\n    <!-- <lottie-player style=\"position: absolute; z-index: 100\" src=\"./../../../assets/overlays/overlay1.json\" background=\"transparent\"  speed=\"2\" loop autoplay >\n    </lottie-player> -->\n    <!-- <lottie-player *ngIf=\"capturing\" style=\"position: absolute; z-index: 99; transform: scaleX(-1);\" src=\"./../../../assets/overlays/character1.json\" background=\"transparent\"  speed=\"2\" [loop]=\"false\" autoplay >\n    </lottie-player> -->\n    <!-- <img src=\"./../../../assets/overlays/demo.webp\" id=\"camera-overlay\" class=\"camera-overlay\" /> -->\n</div>\n\n<div class=\"capture-loader\">\n    <div class=\"capture-loader-count app-fade\" *ngIf=\"timeLeft == 3\">\n        <img src=\"./../../../assets/img/counter/3.png\" />\n    </div>\n    <div class=\"capture-loader-count app-fade\" *ngIf=\"timeLeft == 2\">\n        <img src=\"./../../../assets/img/counter/2.png\" />\n    </div>\n    <div class=\"capture-loader-count app-fade\" *ngIf=\"timeLeft == 1\">\n        <img src=\"./../../../assets/img/counter/1.png\" />\n    </div>\n</div>\n\n<div class=\"preview-container\" *ngIf=\"currentCapture\">\n    <img class=\"preview-img app-fade\" src=\"{{ currentCapture }}\" />\n    <div class=\"qrcode-section\">\n        <div class=\"qrcode-container app-fade\" *ngIf=\"!preview_url\">\n            <div class=\"d-inline-block\" style=\"width: 340px;\">\n                <circle-progress\n                    [percent]=\"loading\" [titleColor]=\"'#ffffff'\" [unitsColor]=\"'#ffffff'\" [outerStrokeColor]=\"'#2a6469'\"\n                    [radius]=\"100\" [outerStrokeWidth]=\"18\" [innerStrokeWidth]=\"18\" [space]=\"-18\"\n                    [outerStrokeColor]=\"'#0071c5'\" [innerStrokeColor]=\"'#e7e8ea'\" [titleFontSize]=\"54\" [unitsFontSize]=\"24\"\n                    [showSubtitle]=\"false\" [animation]=\"true\" [animationDuration]=\"300\" [startFromZero]=\"false\"\n                    [responsive]=\"true\" [showZeroOuterStroke]=\"false\">\n                </circle-progress>\n            </div>\n        </div>\n        <div class=\"qrcode-container app-fade\" id=\"qrcode-container\" *ngIf=\"preview_url\">\n            <div class=\"text-center\" style=\"display: inline-block; width: 370px; vertical-align: top; margin-right: 123px;\">\n                <img src=\"./../../../assets/overlays/wifiQr.jpeg\" style=\"width: 340px; margin-bottom: 27.5px;\" />\n                <br /> \n                <h2 style=\"text-shadow: rgb(0, 0, 0) 1px 0 10px; font-size: 108px; font-weight: 900;\" class=\"mb-0\">Step 1</h2>\n            </div>\n            <div class=\"text-center\" style=\"display: inline-block; width: 370px;\">\n                <qrcode style=\"display: inline-block;\" [qrdata]=\"preview_url\" [width]=\"340\" [errorCorrectionLevel]=\"'M'\"></qrcode>\n                <br /> \n                <h2 style=\"text-shadow: rgb(0, 0, 0) 1px 0 10px; font-size: 108px; font-weight: 900;\" class=\"mb-0\">Step 2</h2>\n            </div>\n            <!-- <img src=\"./../../../assets/overlays/wifiQr.jpeg\" style=\"width: 340px; vertical-align: top; margin-right: 123px;\" />\n            <qrcode style=\"display: inline-block;\" [qrdata]=\"preview_url\" [width]=\"340\" [errorCorrectionLevel]=\"'M'\"></qrcode> -->\n        </div>\n    </div>\n</div>\n\n<div class=\"capturing-effect\" *ngIf=\"capturingEffect\">\n</div>\n");

/***/ }),

/***/ "4R/m":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\n    <div class=\"container tim-container\">\n        <div class=\"tim-title\">\n            <h3>Typography</h3>\n            <br/>\n        </div>\n        <div id=\"typography\">\n            <div class=\"row\">\n                <div class=\"typography-line\">\n                    <h1>\n                        <span class=\"note\">Header 1</span> Thinking in textures\n                    </h1>\n                </div>\n                <div class=\"typography-line\">\n                    <h2>\n                        <span class=\"note\">Header 2</span> Thinking in textures\n                    </h2>\n                </div>\n                <div class=\"typography-line\">\n                    <h3>\n                        <span class=\"note\">Header 3</span> Thinking in textures\n                    </h3>\n                </div>\n                <div class=\"typography-line\">\n                    <h4>\n                        <span class=\"note\">Header 4</span> Thinking in textures\n                    </h4>\n                </div>\n                <div class=\"typography-line\">\n                    <h5>\n                        <span class=\"note\">Header 5</span> Thinking in textures\n                    </h5>\n                </div>\n                <div class=\"typography-line\">\n                    <h6>\n                        <span class=\"note\">Header 6</span> Thinking in textures\n                    </h6>\n                </div>\n                <div class=\"typography-line\">\n                    <p>\n                        <span class=\"note\">Paragraph</span> Thinking in textures\n                    </p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Quote</span>\n                    <blockquote class=\"blockquote\">\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                        <footer class=\"blockquote-footer\">Someone famous in <cite title=\"source Title\">Source Title</cite></footer>\n                    </blockquote>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Muted text</span>\n                    <p class=\"text-muted\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Primary text</span>\n                    <p class=\"text-primary\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Success text</span>\n                    <p class=\"text-success\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Info text</span>\n                    <p class=\"text-info\">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Warning text</span>\n                    <p class=\"text-warning\">Etiam porta sem malesuada magna mollis euismod.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Danger text</span>\n                    <p class=\"text-danger\">Donec ullamcorper nulla non metus auctor fringilla.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <h2><span class=\"note\">Small tag</span>Header with small subtitle\n                        <br/>\n                        <small>\".small\" is a tag for the headers</small>\n                    </h2>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div id=\"images\">\n            <div class=\"container\">\n                <div class=\"tim-title\">\n                    <h3>Images</h3>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-8 col-sm-6 col-md-3\">\n                        <h4 class=\"images-title\">Rounded Image</h4>\n                        <img src=\"assets/img/uriel-soberanes.jpg\" class=\"img-rounded img-responsive\" alt=\"Rounded Image\">\n                        <div class=\"img-details\">\n                            <div class=\"author\">\n                                <img src=\"assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                            </div>\n                            <p>Chet Faker</p>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\n                        <h4 class=\"images-title\">Circle Image</h4>\n                        <img src=\"assets/img/faces/joe-gardner-2.jpg\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Joe Gardner</p>\n                    </div>\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\n                        <h4 class=\"images-title\">Thumbnail</h4>\n                        <img src=\"assets/img/faces/clem-onojeghuo-3.jpg\" class=\"img-thumbnail img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Erik Faker</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "4Wxn":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpY2VsZW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "7aL3":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./modal.component.html */ "P6R5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    NgbdModalContent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    NgbdModalContent.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-component',
            template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "7pPp":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-navbars\">\n    <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"tim-title\">\n            <h3>Menu</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <div ngbDropdown class=\"d-inline-block dropdown\">\n                                        <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</a>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\n                                            <a class=\"dropdown-item\">Action - 1</a>\n                                            <a class=\"dropdown-item\">Another Action</a>\n                                            <a class=\"dropdown-item\">Something else is here</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n            <div class=\"col-md-6\">\n                <nav class=\"navbar navbar-expand-lg bg-danger\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu-icon\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbar-menu-icon\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-email-85\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item \">\n                                    <div ngbDropdown class=\"dropdown\" placement=\"bottom-left\">\n                                    <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-danger dropdown-menu-right\">\n                                            <a class=\"dropdown-item\">Action - 1</a>\n                                            <a class=\"dropdown-item\">Another Action</a>\n                                            <a class=\"dropdown-item\">Something else is here</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Separated link</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n    </div>\n    <div id=\"navbar\">\n        <div class=\"container\">\n            <div class=\"tim-title\">\n                <h3>Navigation</h3>\n                <br/>\n            </div>\n        </div>\n        <div class=\"navigation-example\">\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Primary Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right burger-menu\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i>&nbsp;Discover</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i>&nbsp;Profile</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i>&nbsp;Settings</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Info Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Discover</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Profile</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Settings</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-success\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Success Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i> </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Warning Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Danger Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Share</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Tweet</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i> Pin</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Transparent</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-transparent\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-transparent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Facebook</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Twitter</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i> Instagram</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "93si":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./components.component.html */ "NPo9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer) {
        this.renderer = renderer;
        this.page = 4;
        this.page1 = 5;
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var input_group_focus = document.getElementsByClassName('form-control');
        var input_group = document.getElementsByClassName('input-group');
        var _loop_1 = function (i) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        };
        for (var i = 0; i < input_group.length; i++) {
            _loop_1(i);
        }
    };
    ComponentsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-components',
            template: _raw_loader_components_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "9GRG":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/landing/landing.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('./assets/img/daniel-olahh.jpg');\">\n    <div class=\"filter\"></div>\n    <div class=\"container\">\n        <div class=\"motto text-center\">\n            <h1>Example page</h1>\n            <h3>Start designing your landing page here.</h3>\n            <br />\n            <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" class=\"btn btn-outline-neutral btn-round\"><i class=\"fa fa-play\"></i>Watch video</a>\n            <button type=\"button\" class=\"btn btn-outline-neutral btn-round\">Download</button>\n        </div>\n    </div>\n</div>\n<div class=\"main\">\n    <div class=\"section text-center\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 mr-auto ml-auto\">\n                <h2 class=\"title\">Let's talk product</h2>\n                <h5 class=\"description\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>\n                <br>\n                <a href=\"#paper-kit\" class=\"btn btn-danger btn-round\">See Details</a>\n            </div>\n        </div>\n        <br/><br/>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-album-2\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Beautiful Gallery</h4>\n                        <p class=\"description\">Spend your time generating new ideas. You don't have to think of implementing.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-bulb-63\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">New Ideas</h4>\n                        <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-chart-bar-32\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Statistics</h4>\n                        <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-sun-fog-29\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Delightful design</h4>\n                        <p>Find unique and handmade delightful designs related items directly from our sellers.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div class=\"section section-dark text-center\">\n    <div class=\"container\">\n        <h2 class=\"title\">Let's talk about us</h2>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/clem-onojeghuo-3.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Henry Ford</h4>\n                                <h6 class=\"card-category\">Product Manager</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Sophie West</h4>\n                                <h6 class=\"card-category\">Designer</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Robert Orben</h4>\n                                <h6 class=\"card-category\">Developer</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n    <div class=\"section landing-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"text-center\">Keep in touch?</h2>\n                    <form class=\"contact-form\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Name</label>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\"><i class=\"nc-icon nc-single-02\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label>Email</label>\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\">  <i class=\"nc-icon nc-email-85\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\n                                </div>\n                            </div>\n                        </div>\n                        <label>Message</label>\n                        <textarea class=\"form-control\" rows=\"4\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 mr-auto ml-auto\">\n                                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "9ldr":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./notification.component.html */ "1E4i");
/* harmony import */ var _notification_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component.scss */ "oy3u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
            icon: 'nc-bell-55'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
            icon: 'nc-bell-55'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    NotificationComponent.ctorParameters = function () { return []; };
    NotificationComponent.propDecorators = {
        alerts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-notification',
            template: _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_notification_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "ARBA":
/*!*********************************************************!*\
  !*** ./src/app/examples/landing/landing.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "AXTl":
/*!*******************************************************!*\
  !*** ./src/app/examples/landing/landing.component.ts ***!
  \*******************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./landing.component.html */ "9GRG");
/* harmony import */ var _landing_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component.scss */ "ARBA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () { };
    LandingComponent.ctorParameters = function () { return []; };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-landing',
            template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_landing_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyATpq-MugUMPzeAYqlI5OUNwmkVeAAqTSE",
        authDomain: "psm-booth.firebaseapp.com",
        projectId: "psm-booth",
        storageBucket: "psm-booth.appspot.com",
        messagingSenderId: "293394116874",
        appId: "1:293394116874:web:b2f8e5d33247e8fb944af3",
        measurementId: "G-2XG6VV0ZDJ"
    }
};


/***/ }),

/***/ "BN3N":
/*!******************************************************!*\
  !*** ./src/app/shared/constants/common.constants.ts ***!
  \******************************************************/
/*! exports provided: SCREENS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREENS", function() { return SCREENS; });
var SCREENS = [
    {
        name: 'booth1',
        label: 'Booth 1',
        lottie1: '',
        lottie2: '',
        image1: '',
        image2: '',
        video1: 'assets/overlays/booth1.webm',
        video2: '',
    },
    {
        name: 'booth2',
        label: 'Booth 2',
        lottie1: '',
        lottie2: '',
        image1: '',
        image2: '',
        video1: 'assets/overlays/booth2.webm',
        video2: '',
    },
    {
        name: 'booth3',
        label: 'Booth 3',
        lottie1: '',
        lottie2: '',
        image1: '',
        image2: '',
        video1: 'assets/overlays/booth3.webm',
        video2: '',
    },
    {
        name: 'booth4',
        label: 'Booth 4',
        lottie1: '',
        lottie2: '',
        image1: '',
        image2: '',
        video1: 'assets/overlays/booth4.webm',
        video2: '',
    }
];


/***/ }),

/***/ "DIZ6":
/*!********************************************************************!*\
  !*** ./src/app/layouts/templates-list/templates-list.component.ts ***!
  \********************************************************************/
/*! exports provided: TemplatesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesListComponent", function() { return TemplatesListComponent; });
/* harmony import */ var _raw_loader_templates_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./templates-list.component.html */ "xPXG");
/* harmony import */ var _templates_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates-list.component.scss */ "iLkG");
/* harmony import */ var app_shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/constants/common.constants */ "BN3N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TemplatesListComponent = /** @class */ (function () {
    function TemplatesListComponent() {
        this.screens = app_shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_2__["SCREENS"];
    }
    TemplatesListComponent.prototype.ngOnInit = function () {
    };
    TemplatesListComponent.ctorParameters = function () { return []; };
    TemplatesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-templates-list',
            template: _raw_loader_templates_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_templates_list_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TemplatesListComponent);
    return TemplatesListComponent;
}());



/***/ }),

/***/ "DLDM":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/niyams-preview/niyams-preview.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".niyam-selection-container {\n  min-height: 100vh;\n  background-position: center;\n  background-size: cover;\n}\n\n.niyam-card-container {\n  position: relative;\n  z-index: 0;\n}\n\n.niyam-card-bg {\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.niyam-card {\n  z-index: 1;\n  font-size: 2.1vw;\n  color: black;\n  font-weight: 900;\n  padding: 3rem 6rem 3rem 5rem;\n}\n\n.niyam-new-card-container {\n  width: 85%;\n  z-index: 1;\n  font-size: 200%;\n  margin-left: -7.5%;\n  font-family: cursive;\n  align-self: center;\n}\n\n.niyam-new-card {\n  border: 3px solid #8092ff;\n  background: #2a38bf;\n  padding: 1% 3% 1% 10%;\n  border-top-right-radius: 5rem;\n  border-bottom-right-radius: 5rem;\n  color: white;\n  text-align: center;\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.niyam-card-new {\n  border: 1px solid greenyellow;\n  background: green;\n}\n\n.niyam-card-img {\n  height: 16vh;\n  width: 16vh;\n  z-index: 2;\n  border-radius: 100%;\n  background: wheat;\n}\n\n.niyam-preview-card {\n  border: 3px solid #8092ff;\n  background: #2a38bf;\n}\n\n.niyam-card-img-container {\n  margin-top: -8vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuaXlhbXMtcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFVBQUE7RUFFQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLDRCQUFBO0FBRko7O0FBS0E7RUFDSSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUdJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUVBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFTQTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7QUFOSjs7QUFlQTtFQUVJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFiSjs7QUFnQkE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FBYko7O0FBZ0JBO0VBQ0ksZ0JBQUE7QUFiSiIsImZpbGUiOiJuaXlhbXMtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uaXlhbS1zZWxlY3Rpb24tY29udGFpbmVyIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IHVybCguLy4uLy4uLy4uL2Fzc2V0cy9wc20vbml5YW0tc2VsZWN0aW9uLXBhZ2UtYmcuYm1wKTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLm5peWFtLWNhcmQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5uaXlhbS1jYXJkLWJnIHtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5uaXlhbS1jYXJkIHtcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgZm9udC1zaXplOiAyLjF2dztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcblxyXG4gICAgcGFkZGluZzogM3JlbSA2cmVtIDNyZW0gNXJlbTtcclxufVxyXG5cclxuLm5peWFtLW5ldy1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGZvbnQtc2l6ZTogMjAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNy41JTtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4ubml5YW0tbmV3LWNhcmQge1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JlZW55ZWxsb3c7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM4MDkyZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmEzOGJmO1xyXG4gICAgcGFkZGluZzogMSUgMyUgMSUgMTAlO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5peWFtLWNhcmQtbmV3IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93O1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICAvLyB3aWR0aDogODUlO1xyXG4gICAgLy8gcGFkZGluZzogMSUgMSUgMSUgNiU7XHJcbiAgICAvLyB6LWluZGV4OiAxO1xyXG4gICAgLy8gZm9udC1zaXplOiAyMDAlO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IC01JTtcclxuICAgIC8vIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG59XHJcblxyXG4ubml5YW0tY2FyZC1pbWcge1xyXG4gICAgLy8gd2lkdGg6IDE1JTtcclxuICAgIGhlaWdodDogMTZ2aDtcclxuICAgIHdpZHRoOiAxNnZoO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGVhdDtcclxufVxyXG5cclxuLm5peWFtLXByZXZpZXctY2FyZCB7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjODA5MmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzJhMzhiZjtcclxufVxyXG5cclxuLm5peWFtLWNhcmQtaW1nLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHZoO1xyXG59Il19 */");

/***/ }),

/***/ "ENsn":
/*!*****************************************************!*\
  !*** ./src/app/examples/signup/signup.component.ts ***!
  \*****************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./signup.component.html */ "Nc++");
/* harmony import */ var _signup_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.scss */ "mS3H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.test = new Date();
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.ctorParameters = function () { return []; };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-signup',
            template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_signup_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ "cruu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "IBmT":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudWNsZW9pY29ucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "KJSW":
/*!************************************************************************!*\
  !*** ./src/app/layouts/niyam-selection/niyam-selection.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".niyam-selection-container {\n  min-height: 100vh;\n  background-position: center;\n  background-size: cover;\n}\n\n.niyam-card-container {\n  position: relative;\n  z-index: 0;\n}\n\n.niyam-card-bg {\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.niyam-card {\n  z-index: 1;\n  font-size: 2.7vw;\n  color: black;\n  font-weight: 900;\n  padding: 3rem 6rem 3rem 5rem;\n}\n\n.niyam-new-card-container {\n  width: 85%;\n  z-index: 1;\n  font-size: 200%;\n  margin-left: -7.5%;\n  font-family: cursive;\n  align-self: center;\n}\n\n.niyam-new-card {\n  border: 3px solid #8092ff;\n  background: #2a38bf;\n  padding: 1% 3% 1% 10%;\n  border-top-right-radius: 5rem;\n  border-bottom-right-radius: 5rem;\n  color: white;\n  text-align: center;\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.niyam-card-new {\n  border: 1px solid greenyellow;\n  background: green;\n}\n\n.niyam-card-img {\n  height: 25vh;\n  width: 25vh;\n  z-index: 2;\n  border-radius: 100%;\n  background: wheat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuaXlhbS1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBRUEsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSw0QkFBQTtBQUZKOztBQUtBO0VBQ0ksVUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFHSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFFQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0E7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0FBTko7O0FBZUE7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBYkoiLCJmaWxlIjoibml5YW0tc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5peWFtLXNlbGVjdGlvbi1jb250YWluZXIge1xyXG4gICAgLy8gYmFja2dyb3VuZDogdXJsKC4vLi4vLi4vLi4vYXNzZXRzL3BzbS9uaXlhbS1zZWxlY3Rpb24tcGFnZS1iZy5ibXApO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ubml5YW0tY2FyZC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG5cclxuLm5peWFtLWNhcmQtYmcge1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm5peWFtLWNhcmQge1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICBmb250LXNpemU6IDIuN3Z3O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuXHJcbiAgICBwYWRkaW5nOiAzcmVtIDZyZW0gM3JlbSA1cmVtO1xyXG59XHJcblxyXG4ubml5YW0tbmV3LWNhcmQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZm9udC1zaXplOiAyMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC03LjUlO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uaXlhbS1uZXctY2FyZCB7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmVlbnllbGxvdztcclxuICAgIC8vIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzgwOTJmZjtcclxuICAgIGJhY2tncm91bmQ6ICMyYTM4YmY7XHJcbiAgICBwYWRkaW5nOiAxJSAzJSAxJSAxMCU7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1cmVtO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVyZW07XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubml5YW0tY2FyZC1uZXcge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW55ZWxsb3c7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICAgIC8vIHdpZHRoOiA4NSU7XHJcbiAgICAvLyBwYWRkaW5nOiAxJSAxJSAxJSA2JTtcclxuICAgIC8vIHotaW5kZXg6IDE7XHJcbiAgICAvLyBmb250LXNpemU6IDIwMCU7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogLTUlO1xyXG4gICAgLy8gZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuXHJcbi5uaXlhbS1jYXJkLWltZyB7XHJcbiAgICAvLyB3aWR0aDogMTUlO1xyXG4gICAgaGVpZ2h0OiAyNXZoO1xyXG4gICAgd2lkdGg6IDI1dmg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHdoZWF0O1xyXG59Il19 */");

/***/ }),

/***/ "LgsP":
/*!************************************************************************!*\
  !*** ./src/app/layouts/animation-camera/animation-camera.component.ts ***!
  \************************************************************************/
/*! exports provided: AnimationCameraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationCameraComponent", function() { return AnimationCameraComponent; });
/* harmony import */ var _raw_loader_animation_camera_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./animation-camera.component.html */ "3xpf");
/* harmony import */ var _animation_camera_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation-camera.component.scss */ "YXlQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html2canvas */ "wOnQ");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-compress */ "X9o6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/constants/common.constants */ "BN3N");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { AngularFireStorage } from '@angular/fire/compat/storage';

window.html2canvas = html2canvas__WEBPACK_IMPORTED_MODULE_5___default.a;




var AnimationCameraComponent = /** @class */ (function () {
    function AnimationCameraComponent(storage, imageCompress, route, http) {
        this.storage = storage;
        this.imageCompress = imageCompress;
        this.route = route;
        this.http = http;
        this.captures = [];
        this.timeLeft = 0;
        this.loading = 0;
        this.capturing = false;
        this.screens = app_shared_constants_common_constants__WEBPACK_IMPORTED_MODULE_9__["SCREENS"];
        this.capturingEffect = false;
    }
    AnimationCameraComponent.prototype.handleKeyboardEvent = function (event) {
        console.log('Key Log > ', event.key);
        if (event.key && (event.key == 'Enter' || event.key == 'PageUp') && !this.capturing) {
            if (this.currentCapture) {
                this.currentCapture = null;
                this.preview_url = null;
                this.loading = 0;
            }
            else {
                this.startCaptureTimer();
            }
        }
    };
    AnimationCameraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            try {
                var currentScreen_1;
                if (params && params.booth) {
                    currentScreen_1 = params.booth;
                }
                else {
                    currentScreen_1 = _this.screens[0].name;
                }
                var screen_1 = _this.screens.find(function (s) { return s.name == currentScreen_1; });
                _this.currentScreen = screen_1;
                console.log(_this.currentScreen);
            }
            catch (e) {
            }
        });
    };
    AnimationCameraComponent.prototype.startCaptureTimer = function () {
        var _this = this;
        this.capturing = true;
        this.loading = 0;
        this.timeLeft = 3;
        this.interval = setInterval(function () {
            if (_this.timeLeft > 0) {
                _this.timeLeft--;
            }
            else {
                _this.timeLeft = 0;
                setTimeout(function () {
                    _this.captureAndShow();
                    _this.stopCaptureTimer();
                });
            }
        }, 1000);
    };
    AnimationCameraComponent.prototype.stopCaptureTimer = function () {
        clearInterval(this.interval);
    };
    AnimationCameraComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            var videoContainer = document.getElementById('webcam-container');
            this.video = document.createElement('video');
            this.video.setAttribute('autoplay', '');
            videoContainer.appendChild(this.video);
            // navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            // navigator.mediaDevices.getUserMedia({ video: {advanced: [{width: 2160, height: 3840}]} }).then((stream) => {
            // navigator.mediaDevices.getUserMedia({ video: {advanced: [{aspectRatio: 9/16}]} }).then((stream) => {  
            navigator.mediaDevices.getUserMedia({ video: { width: { ideal: 1920 }, height: { ideal: 1080 } } }).then(function (stream) {
                _this.video.srcObject = stream;
                setTimeout(function () {
                    var videoTrack = stream.getVideoTracks()[0];
                    var capabilities = videoTrack.getCapabilities();
                    var settings = videoTrack.getSettings();
                    console.log(settings);
                    // try {
                    // let imageTag = document.getElementById('camera-overlay');
                    // let imgWidth = imageTag.offsetWidth;
                    //   let marginLeft = 0;
                    //   marginLeft = (imgWidth/2) - (this.video.offsetWidth/2);
                    //   this.video.style.marginLeft = marginLeft + 'px';
                    // } catch(e) {
                    //   this.video.style.marginLeft = '-50%';
                    // }
                }, 3000);
            });
        }
    };
    AnimationCameraComponent.prototype.captureAndShow = function () {
        var videoContainer = document.getElementById('webcam-container');
        var that = this;
        that.capturingEffect = true;
        setTimeout(function () {
            that.capturingEffect = false;
        }, 1500);
        html2canvas__WEBPACK_IMPORTED_MODULE_5___default()(videoContainer).then(function (canvas) {
            that.currentCapture = canvas.toDataURL('image/png');
            that.fileName = new Date().getTime();
            canvas.toBlob(function (blob) {
                var file = new File([blob], (that.fileName + ".png"));
                // that.currentCapture = file;
                setTimeout(function () {
                    // that.uploadImage();
                    that.uploadImageNew(file);
                });
            });
            // setTimeout(() => {
            //   // that.uploadImage();
            //   that.uploadImageNew();
            // });
        });
    };
    AnimationCameraComponent.prototype.uploadImageNew = function (file) {
        var _this = this;
        var filePath = 'http://192.168.0.100:8000/' + this.fileName + '.png';
        this.loading = 30;
        var formData = new FormData();
        formData.append('files', file);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        // headers = headers.append("Content-Type", "multipart/form-data");
        this.http.post('http://192.168.0.100:8000/upload', formData).subscribe(function (res) {
            _this.preview_url = filePath;
            _this.loading = 100;
            _this.capturing = false;
        }, function (err) {
            console.warn({ err: err });
            _this.capturing = false;
        });
    };
    AnimationCameraComponent.prototype.uploadImage = function () {
        var _this = this;
        var fileName = new Date().getTime();
        var filePath = '/booth1/' + fileName + '.png';
        var storageRef = this.storage.ref(filePath);
        this.imageCompress.compressFile(this.currentCapture, 1).then(function (compressedImage) {
            console.log(compressedImage);
            var uploadTask = storageRef.putString(compressedImage, 'data_url');
            uploadTask.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                storageRef.getDownloadURL().subscribe(function (downloadURL) {
                    _this.preview_url = location.origin + '/preview' + '?booth=booth1' + '&fileName=' + fileName.toString();
                    _this.capturing = false;
                    console.log(_this.preview_url);
                });
            })).subscribe(function (res) {
                try {
                    _this.loading = ((100 * res.bytesTransferred) / res.totalBytes).toFixed(0);
                }
                catch (e) {
                    _this.loading = 100;
                }
                console.log(_this.loading);
            }, function (err) {
                console.error({ err: err });
                _this.capturing = false;
            });
        });
    };
    AnimationCameraComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
    };
    AnimationCameraComponent.ctorParameters = function () { return [
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
        { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__["NgxImageCompressService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AnimationCameraComponent.propDecorators = {
        handleKeyboardEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:keydown', ['$event'],] }]
    };
    AnimationCameraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-animation-camera',
            template: _raw_loader_animation_camera_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_animation_camera_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"], ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__["NgxImageCompressService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AnimationCameraComponent);
    return AnimationCameraComponent;
}());



/***/ }),

/***/ "M2OG":
/*!**********************************************************************************!*\
  !*** ./src/app/layouts/niyam-selection/niyam-detail/niyam-detail.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep.niyam-popup .modal-dialog {\n  min-width: 90vw;\n}\n::ng-deep.niyam-popup .modal-content {\n  background: transparent !important;\n  box-shadow: none !important;\n}\n.niyam-detail-container {\n  position: relative;\n}\n.niyam-detail-bg {\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n}\n.niyam-detail {\n  z-index: 1;\n  color: black;\n  font-weight: 900;\n  font-size: 2vw;\n  padding: 4vw 15vw 4vw 10vw;\n}\n.confirm-btn {\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  font-size: 2vw;\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbml5YW0tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtBQUFSO0FBRUk7RUFFSSxrQ0FBQTtFQUNBLDJCQUFBO0FBRFI7QUFLQTtFQUNJLGtCQUFBO0FBRko7QUFLQTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBSEo7QUFNQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUhKIiwiZmlsZSI6Im5peWFtLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcC5uaXlhbS1wb3B1cCB7XHJcbiAgICAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgICBtaW4td2lkdGg6IDkwdnc7XHJcbiAgICB9XHJcbiAgICAubW9kYWwtY29udGVudCB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uaXlhbS1kZXRhaWwtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm5peWFtLWRldGFpbC1iZyB7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5uaXlhbS1kZXRhaWwge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDJ2dztcclxuICAgIHBhZGRpbmc6IDR2dyAxNXZ3IDR2dyAxMHZ3XHJcbn1cclxuXHJcbi5jb25maXJtLWJ0biB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gICAgb3V0bGluZTogMDtcclxufSJdfQ== */");

/***/ }),

/***/ "NPo9":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header section-dark\" style=\"background-image: url('assets/img/antoine-barres.jpg')\">\n        <div class=\"filter\"></div>\n        <div class=\"content-center\">\n            <div class=\"container\">\n                <div class=\"title-brand\">\n                    <div class=\"angular-logo\">\n                        <img src=\"assets/img/angular2-logo.png\" alt=\"\">\n                    </div>\n                    <h1 class=\"presentation-title\">Paper Kit 2 Angular</h1>\n                    <div class=\"fog-low\">\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\n                    </div>\n                    <div class=\"fog-low right\">\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\n                    </div>\n                </div>\n\n                <h2 class=\"presentation-subtitle text-center\">Free Bootstrap 4 UI Kit for Angular 7</h2>\n            </div>\n        </div>\n        <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png'); \"></div>\n        <h6 class=\" category-absolute ml-auto mr-auto\">Designed and coded by\n        <!-- <h6 class=\"category category-absolute\">Designed and coded by -->\n\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">\n                <img src=\"assets/img/creative-tim-white-slim2.png\" class=\"creative-tim-logo\">\n            </a>\n        </h6>\n    </div>\n    <div class=\"main\">\n      <app-basicelements></app-basicelements>\n      <app-navigation></app-navigation>\n      <div class=\"section\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Progress Bar</h3>\n                          <br/>\n                      </div>\n                      <ngb-progressbar type=\"success\" class=\"mt-0\" [value]=\"25\">25</ngb-progressbar><br>\n                      <ngb-progressbar type=\"info\" class=\"mt-0\" [value]=\"50\"><span class=\"h6 mb-0\">Copying file <b>2 of 4</b> ...</span></ngb-progressbar><br>\n                      <ngb-progressbar type=\"warning\" class=\"mt-0\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar><br>\n                      <ngb-progressbar type=\"danger\" class=\"mt-0\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\n\n                  </div>\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Pagination</h3>\n                          <br/>\n                      </div>\n                      <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n                      <br/>\n                      <ngb-pagination [collectionSize]=\"100\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\"></ngb-pagination>\n                  </div>\n              </div>\n              <br/>\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Navigation Tabs</h3>\n                      </div>\n\n                      <div class=\"nav-tabs-navigation\">\n                          <div class=\"nav-tabs-wrapper\">\n                              <ngb-tabset [justify]=\"'center'\">\n                                  <ngb-tab title=\"Home\">\n                                      <ng-template ngbTabContent>\n                                          <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p>\n                                      </ng-template>\n                                  </ngb-tab>\n                                  <ngb-tab title=\"Profile\">\n                                      <ng-template ngbTabContent>\n                                          <p>Here is your profile.</p>\n                                      </ng-template>\n                                  </ngb-tab>\n                                  <ngb-tab title=\"Messages\">\n                                      <ng-template ngbTabContent>\n                                          <p>Here are your messages.</p>\n                                      </ng-template>\n                                  </ngb-tab>\n                              </ngb-tabset>\n                          </div>\n                      </div>\n\n                  </div>\n\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Labels</h3>\n                      </div>\n                      <span class=\"label label-default\">Default</span>\n                      <span class=\"label label-primary\">Primary</span>\n                      <span class=\"label label-info\">Info</span>\n                      <span class=\"label label-success\">Success</span>\n                      <span class=\"label label-warning\">Warning</span>\n                      <span class=\"label label-danger\">Danger</span>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-notifications\" id=\"notifications\">\n          <div class=\"container\">\n              <div class=\"tim-title\">\n                  <h3>Notification</h3>\n              </div>\n          </div>\n          <app-notification></app-notification>\n      </div>\n      <app-typography></app-typography>\n      <div class=\"section javascript-components\">\n          <div class=\"container\">\n              <div class=\"tim-title\">\n                  <h2>Angular Native Components</h2>\n              </div>\n              <div class=\"row\" id=\"modals\">\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Modal</h3>\n                      </div>\n                      <app-modal-component></app-modal-component>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Popovers</h3>\n                      </div>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\">\n                          on right\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\n                          on top\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\n                          on left\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\n                          on bottom\n                      </button>\n\n                  </div>\n                  <br/>\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Datepicker</h3>\n                      </div>\n                      <div class=\"row\">\n                          <div class='col-sm-6'>\n                              <form class=\"form-inline\">\n                                  <div class=\"form-group\">\n                                      <div class=\"input-group date\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                               name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" (focus)=\"focus=true\" (blur)=\"focus=false\" />\n                                          <div class=\"input-group-append\">\n                                              <span class=\"glyphicon glyphicon-calendar input-group-text\">\n                                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                                              </span>\n                                          </div>\n                                      </div>\n                                  </div>\n                              </form>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <div class=\"tim-title\">\n                          <h3>Tooltips</h3>\n                      </div>\n\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                         on right\n                     </button>\n                     <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                        on left\n                     </button>\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                         on top\n                      </button>\n                      <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                         on bottom\n                      </button>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section\" id=\"carousel\">\n          <div class=\"container\">\n              <div class=\"tim-title\">\n                  <h3>Carousel</h3>\n              </div>\n              <div class=\"row\">\n                  <div class=\"col-md-8 mr-auto ml-auto\">\n                      <div class=\"card page-carousel\">\n                          <ngb-carousel>\n                              <ng-template ngbSlide>\n                                  <img src=\"./assets/img/soroush-karimi.jpg\" alt=\"Random first slide\">\n                                  <div class=\"carousel-caption\">\n                                      <p>Somewhere</p>\n                                  </div>\n                              </ng-template>\n                              <ng-template ngbSlide>\n                                  <img src=\"./assets/img/federico-beccari.jpg\" alt=\"Random second slide\">\n                                  <div class=\"carousel-caption\">\n                                      <p>Somewhere else</p>\n                                  </div>\n                              </ng-template>\n                              <ng-template ngbSlide>\n                                  <img src=\"./assets/img/joshua-stannard.jpg\" alt=\"Random third slide\">\n                                  <div class=\"carousel-caption\">\n                                      <p>Here it is</p>\n                                  </div>\n                              </ng-template>\n                          </ngb-carousel>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n        <div class=\"section section-dark section-nucleo-icons\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-12\">\n                        <h2 class=\"title\">Nucleo Icons</h2><br/>\n                        <p class=\"description\">\n                            Now UI Kit comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit Make sure you check all of them and use those that you like the most.\n                        </p><br/>\n                        <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-danger btn-round\">View Demo Icons</a>\n                        <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-outline-danger btn-round\" target=\"_blank\">View All Icons</a>\n                    </div>\n\n                    <div class=\"col-lg-6 col-md-12\">\n                        <div class=\"icons-container\">\n                            <i class=\"nc-icon nc-time-alarm\"></i>\n                            <i class=\"nc-icon nc-atom\"></i>\n                            <i class=\"nc-icon nc-camera-compact\"></i>\n                            <i class=\"nc-icon nc-watch-time\"></i>\n                            <i class=\"nc-icon nc-key-25\"></i>\n                            <i class=\"nc-icon nc-diamond\"></i>\n                            <i class=\"nc-icon nc-user-run\"></i>\n                            <i class=\"nc-icon nc-layout-11\"></i>\n                            <i class=\"nc-icon nc-badge\"></i>\n                            <i class=\"nc-icon nc-bulb-63\"></i>\n                            <i class=\"nc-icon nc-favourite-28\"></i>\n                            <i class=\"nc-icon nc-planet\"></i>\n                            <i class=\"nc-icon nc-tie-bow\"></i>\n                            <i class=\"nc-icon nc-zoom-split\"></i>\n                            <i class=\"nc-icon nc-cloud-download-93\"></i>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-dark\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                        <h2 class=\"title\">Completed with examples</h2>\n                        <p class=\"description\">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful kit.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-image section-login\" style=\"background-image: url('assets/img/login-image.jpg');\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-md-6 col-sm-12 ml-auto mr-auto\">\n                        <div class=\"card card-register\">\n                            <h3 class=\"title\">Welcome</h3>\n                            <div class=\"social-line text-center\">\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                            </div>\n                            <form class=\"register-form\">\n                                <label>Email</label>\n                                <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                  <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\">\n                                        <i class=\"nc-icon nc-email-85\"></i>\n                                    </span>\n                                  </div>\n\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                                </div>\n\n                                <label>Password</label>\n                                <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                  <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\">\n                                        <i class=\"nc-icon nc-key-25\"></i>\n                                    </span>\n                                  </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\n                                </div>\n                                <button class=\"btn btn-danger btn-block btn-round\">Register</button>\n                            </form>\n                            <div class=\"forgot\">\n                                <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\n                            </div>\n                        </div>\n                        <div class=\"col text-center\" routerLinkActive=\"active\">\n                            <a [routerLink]=\"['/signup']\" class=\"btn btn-outline-neutral btn-round btn-lg\">View Register Page</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-dark\">\n            <div class=\"container\">\n                <div class=\"row example-page\">\n                    <div class=\"col-md-6 text-center\" routerLinkActive=\"active\">\n                        <a [routerLink]=\"['/landing']\">\n                            <img src=\"./assets/img/examples/landing-page.JPG\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\" style=\"width: 100%\">\n                            <a [routerLink]=\"['/landing']\" class=\"btn btn-outline-neutral btn-round\">Landing Page</a>\n                        </a>\n                    </div>\n\n                    <div class=\"col-md-6 text-center\" routerLinkActive=\"active\">\n                        <a [routerLink]=\"['/user-profile']\">\n                            <img src=\"./assets/img/examples/profile-page.JPG\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\" style=\"width: 100%\">\n                            <a [routerLink]=\"['/user-profile']\" class=\"btn btn-outline-neutral btn-round\">Profile Page</a>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section\">\n            <div class=\"container text-center\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                        <h2 class=\"title\">Do you like what you see?</h2>\n                        <p class=\"description\">Cause if you do, it can be yours for Free. Hit the button below and download it. Start a new project or give an old Bootstrap 4 project a new look.</p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-6 download-area ml-auto mr-auto\">\n                        <a href=\"https://www.creative-tim.com/product/paper-kit-2\" class=\"btn btn-warning btn-round\">Download free HTML</a>\n                        <a href=\"https://www.creative-tim.com/product/paper-kit-2-angular\" class=\"btn btn-danger btn-round\">Download free Angular</a>\n                    </div>\n                </div>\n                <div class=\"row justify-content-md-center sharing-area text-center\">\n                    <div class=\"text-center col-md-12 col-lg-8\">\n                        <h3>Thank you for supporting us!</h3>\n                    </div>\n                    <div class=\"text-center col-md-12 col-lg-8\">\n                        <a href=\"#pablo\" class=\"btn btn-twitter-bg twitter-sharrre btn-round\" rel=\"tooltip\" title=\"Tweet!\">\n                            <i class=\"fa fa-twitter\"></i> Twitter\n                        </a>\n                        <a href=\"#pablo\" class=\"btn btn-google-bg linkedin-sharrre btn-round\" rel=\"tooltip\" title=\"Share!\">\n                            <i class=\"fa fa-google-plus\"></i> Google\n                        </a>\n                        <a href=\"#pablo\" class=\"btn btn-facebook-bg facebook-sharrre btn-round\" rel=\"tooltip\" title=\"Share!\">\n                            <i class=\"fa fa-facebook-square\"></i> Facebook\n                        </a>\n                        <a href=\"https://github.com/creativetimofficial/paper-kit\" class=\"btn btn-github-bg btn-github sharrre btn-round\" rel=\"tooltip\" title=\"Star on Github\">\n                            <i class=\"fa fa-github\"></i> Star\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "Nc++":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/signup/signup.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header\" style=\"background-image: url('./assets/img/login-image.jpg');\">\n        <div class=\"filter\"></div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n                      <div class=\"card card-register\">\n                          <h3 class=\"title\">Welcome</h3>\n                          <div class=\"social-line text-center\">\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\n                                  <i class=\"fa fa-facebook-square\"></i>\n                              </a>\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">\n                                  <i class=\"fa fa-google-plus\"></i>\n                              </a>\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\n                                  <i class=\"fa fa-twitter\"></i>\n                              </a>\n                          </div>\n                          <form class=\"register-form\">\n                              <label>Email</label>\n                              <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">\n                                      <i class=\"nc-icon nc-email-85\"></i>\n                                  </span>\n                                </div>\n\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                              </div>\n\n                              <label>Password</label>\n                              <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">\n                                      <i class=\"nc-icon nc-key-25\"></i>\n                                  </span>\n                                </div>\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\n                              </div>\n                              <button class=\"btn btn-danger btn-block btn-round\">Register</button>\n                          </form>\n                          <div class=\"forgot\">\n                              <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\n                          </div>\n                      </div>\n                    </div>\n                </div>\n                <div class=\"footer register-footer text-center\">\n                    <h6>&copy;{{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim</h6>\n                </div>\n            </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "P6R5":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>You can pass an existing component as content of the modal window. In this case remember to add content component\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\n\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\n");

/***/ }),

/***/ "QhSr":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./typography.component.html */ "4R/m");
/* harmony import */ var _typography_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography.component.scss */ "0Inq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent.ctorParameters = function () { return []; };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-typography',
            template: _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_typography_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        // var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
        // this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        //     if (window.outerWidth > 991) {
        //         window.document.children[0].scrollTop = 0;
        //     }else{
        //         window.document.activeElement.scrollTop = 0;
        //     }
        //     this.navbar.sidebarClose();
        // });
        // this.renderer.listen('window', 'scroll', (event) => {
        //     const number = window.scrollY;
        //     if (number > 150 || window.pageYOffset > 150) {
        //         // add logic
        //         navbar.classList.remove('navbar-transparent');
        //     } else {
        //         // remove logic
        //         navbar.classList.add('navbar-transparent');
        //     }
        // });
        // var ua = window.navigator.userAgent;
        // var trident = ua.indexOf('Trident/');
        // if (trident > 0) {
        //     // IE 11 => return version number
        //     var rv = ua.indexOf('rv:');
        //     var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        // }
        // if (version) {
        //     var body = document.getElementsByTagName('body')[0];
        //     body.classList.add('ie-background');
        // }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
    ]; };
    AppComponent.propDecorators = {
        navbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],] }]
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-navbar></app-navbar> -->\n<router-outlet></router-outlet>\n<!-- <app-footer *ngIf=\"removeFooter()\"></app-footer> -->\n");

/***/ }),

/***/ "XaBZ":
/*!********************************************************************************!*\
  !*** ./src/app/layouts/niyam-selection/niyam-detail/niyam-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: NiyamDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NiyamDetailComponent", function() { return NiyamDetailComponent; });
/* harmony import */ var _raw_loader_niyam_detail_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./niyam-detail.component.html */ "eP0I");
/* harmony import */ var _niyam_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./niyam-detail.component.scss */ "M2OG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NiyamDetailComponent = /** @class */ (function () {
    function NiyamDetailComponent(activeModal) {
        this.activeModal = activeModal;
    }
    NiyamDetailComponent.prototype.ngOnInit = function () {
    };
    NiyamDetailComponent.prototype.close = function (value) {
        this.activeModal.close(value ? true : false);
    };
    NiyamDetailComponent.prototype.confirm = function () {
        this.close(true);
    };
    NiyamDetailComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }
    ]; };
    NiyamDetailComponent.propDecorators = {
        niyam: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    NiyamDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-niyam-detail',
            template: _raw_loader_niyam_detail_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_niyam_detail_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"]])
    ], NiyamDetailComponent);
    return NiyamDetailComponent;
}());



/***/ }),

/***/ "YXlQ":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/animation-camera/animation-camera.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep.webcam-container {\n  z-index: 1;\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  transform: scaleX(-1);\n}\n::ng-deep.webcam-container video {\n  transform: rotate(90deg);\n  height: 56%;\n  margin-left: -415px;\n  margin-top: 420px;\n}\n.blur-content {\n  filter: blur(18px);\n}\n.camera-overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100vw;\n  height: 100vh;\n}\n.camera-overlay-for-video {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 100vw;\n  height: 100vh;\n}\n.preview-container {\n  z-index: 110;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  padding: 5% 12.5% 18%;\n}\n.preview-container .preview-img {\n  width: 100%;\n  height: auto;\n  border: 2vw solid white;\n  border-radius: 2vw;\n}\n.qrcode-section {\n  z-index: 120;\n  position: fixed;\n  bottom: 2%;\n  left: 0;\n  padding: 0%;\n  width: 100vw;\n}\n.qrcode-section .qrcode-container {\n  width: 100%;\n  border-radius: 1rem;\n  text-align: center;\n  font-size: 70px;\n  color: white;\n}\n.capture-loader {\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n}\n.capture-loader .capture-loader-count {\n  font-size: 20vw;\n  font-family: fantasy;\n  text-align: center;\n  margin-top: 36vh;\n  color: #28757d;\n}\n.capture-loader .capture-loader-count img {\n  width: 25rem;\n  max-width: 50vw;\n}\n.capturing-effect {\n  z-index: 120;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(255, 255, 255, 0.72);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhbmltYXRpb24tY2FtZXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFBSTtFQUNJLHdCQUFBO0VBSUEsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUtBO0VBQ0ksa0JBQUE7QUFGSjtBQUtBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7QUFISjtBQU1BO0VBQ0ksa0JBQUE7RUFFQSxTQUFBO0VBRUEsUUFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0FBTko7QUFVQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUdBLHFCQUFBO0FBVEo7QUFVSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQVJSO0FBWUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFUSjtBQVVJO0VBQ0ksV0FBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVRSO0FBYUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQVZKO0FBV0k7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVRSO0FBVVE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQVJaO0FBWUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxxQ0FBQTtBQVRKIiwiZmlsZSI6ImFuaW1hdGlvbi1jYW1lcmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAud2ViY2FtLWNvbnRhaW5lciB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMHZ3OyBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgdmlkZW8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAvLyB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbiAgICAgICAgLy8gb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1NiU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00MTVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmJsdXItY29udGVudCB7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMThweCk7XHJcbn1cclxuXHJcbi5jYW1lcmEtb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLy8gei1pbmRleDogMTAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNhbWVyYS1vdmVybGF5LWZvci12aWRlbyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgLy8gdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgLy8gbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLy8gei1pbmRleDogMTAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuXHJcbi5wcmV2aWV3LWNvbnRhaW5lciB7XHJcbiAgICB6LWluZGV4OiAxMTA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3OyBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjU1IDI1NSAyNTUgLyA3MiUpO1xyXG4gICAgLy8gcGFkZGluZzogNyU7XHJcbiAgICBwYWRkaW5nOiA1JSAxMi41JSAxOCU7XHJcbiAgICAucHJldmlldy1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlOyBcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgYm9yZGVyOiAydncgc29saWQgd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnZ3O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucXJjb2RlLXNlY3Rpb24ge1xyXG4gICAgei1pbmRleDogMTIwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAyJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIC5xcmNvZGUtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoNjUsIDY1LCAyNTUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXB0dXJlLWxvYWRlciB7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAuY2FwdHVyZS1sb2FkZXItY291bnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjB2dztcclxuICAgICAgICBmb250LWZhbWlseTogZmFudGFzeTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzZ2aDtcclxuICAgICAgICBjb2xvcjogIzI4NzU3ZDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjVyZW07XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTB2dztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNhcHR1cmluZy1lZmZlY3Qge1xyXG4gICAgei1pbmRleDogMTIwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSAyNTUgMjU1IC8gNzIlKTtcclxufSJdfQ== */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _examples_examples_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/examples.module */ "ieWF");
/* harmony import */ var _layouts_templates_list_templates_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/templates-list/templates-list.component */ "DIZ6");
/* harmony import */ var _layouts_animation_camera_animation_camera_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/animation-camera/animation-camera.component */ "LgsP");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _layouts_preview_image_preview_image_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/preview-image/preview-image.component */ "Za8B");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/analytics */ "h+eY");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularx-qrcode */ "0hV+");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-circle-progress */ "K1R0");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-image-compress */ "X9o6");
/* harmony import */ var _layouts_niyam_selection_niyam_selection_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./layouts/niyam-selection/niyam-selection.component */ "s+6/");
/* harmony import */ var _layouts_niyams_preview_niyams_preview_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./layouts/niyams-preview/niyams-preview.component */ "ZZYy");
/* harmony import */ var _layouts_niyam_selection_niyam_detail_niyam_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./layouts/niyam-selection/niyam-detail/niyam-detail.component */ "XaBZ");
/* harmony import */ var _layouts_pr_map_pr_map_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./layouts/pr-map/pr-map.component */ "ZDP/");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _layouts_templates_list_templates_list_component__WEBPACK_IMPORTED_MODULE_12__["TemplatesListComponent"],
                _layouts_animation_camera_animation_camera_component__WEBPACK_IMPORTED_MODULE_13__["AnimationCameraComponent"],
                _layouts_preview_image_preview_image_component__WEBPACK_IMPORTED_MODULE_15__["PreviewImageComponent"],
                _layouts_niyam_selection_niyam_selection_component__WEBPACK_IMPORTED_MODULE_24__["NiyamSelectionComponent"],
                _layouts_niyams_preview_niyams_preview_component__WEBPACK_IMPORTED_MODULE_25__["NiyamsPreviewComponent"],
                _layouts_niyam_selection_niyam_detail_niyam_detail_component__WEBPACK_IMPORTED_MODULE_26__["NiyamDetailComponent"],
                _layouts_pr_map_pr_map_component__WEBPACK_IMPORTED_MODULE_27__["PrMapComponent"]
            ],
            imports: [
                _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_18__["AngularFirestoreModule"],
                _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_19__["AngularFireAnalyticsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
                _examples_examples_module__WEBPACK_IMPORTED_MODULE_11__["ExamplesModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_20__["QRCodeModule"],
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_21__["NgCircleProgressModule"].forRoot({}),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production }),
            ],
            providers: [ngx_image_compress__WEBPACK_IMPORTED_MODULE_23__["NgxImageCompressService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ZDP/":
/*!****************************************************!*\
  !*** ./src/app/layouts/pr-map/pr-map.component.ts ***!
  \****************************************************/
/*! exports provided: PrMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrMapComponent", function() { return PrMapComponent; });
/* harmony import */ var _raw_loader_pr_map_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./pr-map.component.html */ "vKWM");
/* harmony import */ var _pr_map_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pr-map.component.scss */ "lGmP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrMapComponent = /** @class */ (function () {
    function PrMapComponent() {
        this.slider = false;
        this.slides = {
            tanki: [
                'assets/pr/collections/tanki/1.png',
                'assets/pr/collections/tanki/2.png'
            ],
            balSnehiGarden: [
                'assets/pr/collections/balSnehiGarden/1.png',
                'assets/pr/collections/balSnehiGarden/2.png',
                'assets/pr/collections/balSnehiGarden/3.png',
                'assets/pr/collections/balSnehiGarden/4.png',
                'assets/pr/collections/balSnehiGarden/5.png',
                'assets/pr/collections/balSnehiGarden/6.png',
                'assets/pr/collections/balSnehiGarden/7.png'
            ],
            train: [
                'assets/pr/collections/train/1.png',
                'assets/pr/collections/train/2.png'
            ],
            bapaniMurti: [
                'assets/pr/collections/bapaniMurti/1.png',
                'assets/pr/collections/bapaniMurti/2.png',
                'assets/pr/collections/bapaniMurti/3.png',
                'assets/pr/collections/bapaniMurti/4.png'
            ],
            fassadWithCharacter: [
                'assets/pr/collections/fassadWithCharacter/1.png',
                'assets/pr/collections/fassadWithCharacter/2.png',
                'assets/pr/collections/fassadWithCharacter/3.png'
            ],
            animalCorner: [
                'assets/pr/collections/animalCorner/1.png',
                'assets/pr/collections/animalCorner/2.png',
                'assets/pr/collections/animalCorner/4.png',
                'assets/pr/collections/animalCorner/5.png',
                'assets/pr/collections/animalCorner/6.png',
                'assets/pr/collections/animalCorner/7.png',
                'assets/pr/collections/animalCorner/8.png',
                'assets/pr/collections/animalCorner/9.png'
            ],
            talentStage: [
                'assets/pr/collections/talentStage/1.png',
                'assets/pr/collections/talentStage/2.png'
            ],
            balBalikaDance: [
                'assets/pr/collections/balBalikaDance/1.png',
                'assets/pr/collections/balBalikaDance/2.png',
                'assets/pr/collections/balBalikaDance/3.png'
            ],
            mascot: [
                'assets/pr/collections/mascot/1.png',
                'assets/pr/collections/mascot/2.png',
                'assets/pr/collections/mascot/3.png',
                'assets/pr/collections/mascot/4.png',
                'assets/pr/collections/mascot/5.png'
            ]
        };
        this.currentSliders = [];
    }
    PrMapComponent.prototype.ngOnInit = function () {
    };
    PrMapComponent.prototype.openLocation = function (location) {
        this.currentSliders = this.slides[location];
        this.slider = true;
    };
    // swipe(e) {
    //   if (e === 'swiperight') {
    //     this.carousel.prev();
    //   } else {
    //     this.carousel.next();
    //   } 
    // }
    PrMapComponent.prototype.swipe = function (e, when) {
        try {
            var coord = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
            var time = new Date().getTime();
            if (when === 'start') {
                this.swipeCoord = coord;
                this.swipeTime = time;
            }
            else if (when === 'end') {
                var direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
                var duration = time - this.swipeTime;
                if (duration < 1000 //
                    && Math.abs(direction[0]) > 30 // Long enough
                    && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
                    var swipe = direction[0] < 0 ? 'next' : 'previous';
                    if (swipe === 'next') {
                        this.carousel.prev();
                    }
                    else {
                        this.carousel.next();
                    }
                }
            }
        }
        catch (e) {
        }
    };
    PrMapComponent.ctorParameters = function () { return []; };
    PrMapComponent.propDecorators = {
        carousel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"],] }]
    };
    PrMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-pr-map',
            template: _raw_loader_pr_map_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_pr_map_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], PrMapComponent);
    return PrMapComponent;
}());



/***/ }),

/***/ "ZZYy":
/*!********************************************************************!*\
  !*** ./src/app/layouts/niyams-preview/niyams-preview.component.ts ***!
  \********************************************************************/
/*! exports provided: NiyamsPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NiyamsPreviewComponent", function() { return NiyamsPreviewComponent; });
/* harmony import */ var _raw_loader_niyams_preview_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./niyams-preview.component.html */ "u6el");
/* harmony import */ var _niyams_preview_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./niyams-preview.component.scss */ "DLDM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NiyamsPreviewComponent = /** @class */ (function () {
    function NiyamsPreviewComponent(db, route) {
        this.db = db;
        this.route = route;
        this.niyams = [];
        this.niyamsCounter = {};
        this.language = 'englishLabel';
    }
    NiyamsPreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            try {
                if (params && params.language && params.language == 'gujarati') {
                    _this.language = 'gujaratiLabel';
                }
            }
            catch (e) {
            }
        });
        this.getNiyams();
    };
    NiyamsPreviewComponent.prototype.getNiyams = function () {
        var _this = this;
        this.db.collection('niyams').snapshotChanges().subscribe(function (res) {
            _this.db.collection('niyams').get().subscribe(function (res) {
                var niyams = [];
                res.forEach(function (element) {
                    niyams.push(element.data());
                });
                _this.niyams = niyams;
            });
        });
        this.db.collection('niyams-counter').snapshotChanges().subscribe(function (res) {
            _this.db.collection('niyams-counter').get().subscribe(function (res) {
                var niyamsCounter = {};
                res.forEach(function (element) {
                    niyamsCounter[element.id] = (element.data() && element.data().count) ? element.data().count : 0;
                });
                _this.niyamsCounter = niyamsCounter;
            });
        });
    };
    NiyamsPreviewComponent.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    NiyamsPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-niyams-preview',
            template: _raw_loader_niyams_preview_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_niyams_preview_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], NiyamsPreviewComponent);
    return NiyamsPreviewComponent;
}());



/***/ }),

/***/ "Za8B":
/*!******************************************************************!*\
  !*** ./src/app/layouts/preview-image/preview-image.component.ts ***!
  \******************************************************************/
/*! exports provided: PreviewImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewImageComponent", function() { return PreviewImageComponent; });
/* harmony import */ var _raw_loader_preview_image_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./preview-image.component.html */ "y/f5");
/* harmony import */ var _preview_image_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview-image.component.scss */ "29h6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html2canvas */ "wOnQ");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







window.html2canvas = html2canvas__WEBPACK_IMPORTED_MODULE_6___default.a;
var PreviewImageComponent = /** @class */ (function () {
    function PreviewImageComponent(route, httpClient, storage) {
        this.route = route;
        this.httpClient = httpClient;
        this.storage = storage;
        this.loader = true;
    }
    PreviewImageComponent.prototype.ngOnInit = function () {
        // this.preview_url = 'https://' + this.route.snapshot.queryParams['url'] + '?alt=media';
        this.booth = this.route.snapshot.queryParams['booth'];
        this.fileName = this.route.snapshot.queryParams['fileName'];
        this.getImage();
        setTimeout(function () {
            // this.downloadImage({target: 123});
        }, 10000);
    };
    PreviewImageComponent.prototype.getImage = function () {
        var _this = this;
        var filePath = '/' + this.booth + '/' + this.fileName + '.png';
        var storageRef = this.storage.ref(filePath);
        storageRef.getDownloadURL().subscribe(function (downloadURL) {
            _this.preview_url = downloadURL;
            _this.loader = false;
        });
        storageRef.getMetadata().subscribe(function (metaData) {
            console.log({ metaData: metaData });
        });
    };
    PreviewImageComponent.prototype.downloadImage = function (event) {
        // console.log(event);
        // if (event && event.target) {
        //   let videoContainer = document.getElementById('preview_img');
        //   console.log(videoContainer)
        //   html2canvas(videoContainer, { scrollY: -window.scrollY, scale: 1}).then(function (canvas) {
        //     console.log(canvas)
        //     var link = document.createElement("a");
        //     document.body.appendChild(link);
        //     link.download = 'PhotoBooth.png';
        //     link.href = canvas.toDataURL("image/png");
        //     link.target = '_blank';
        //     link.click();
        //     link.remove();
        //   });
        // }
        // return;
        // let link = document.createElement('a');
        // link.setAttribute('type', 'hidden');
        // link.href = this.preview_url;
        // link.download = this.preview_url;
        // document.body.appendChild(link);
        // link.click();
        // link.remove();
        // return;
        var imgUrl = this.preview_url;
        var imgName = imgUrl.substr(imgUrl.lastIndexOf('/') + 1);
        this.httpClient.get(imgUrl, { responseType: 'blob' })
            .subscribe(function (res) {
            var file = new Blob([res], { type: res.type });
            try {
                // IE
                if (window.navigator && window.navigator['msSaveOrOpenBlob']) {
                    // @ts-ignore:next-line
                    window.navigator.msSaveOrOpenBlob(file);
                    return;
                }
            }
            catch (e) { }
            var blob = window.URL.createObjectURL(file);
            var link = document.createElement('a');
            link.href = blob;
            link.download = imgName;
            // Version link.click() to work at firefox
            link.dispatchEvent(new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            }));
            setTimeout(function () {
                window.URL.revokeObjectURL(blob);
                link.remove();
            }, 100);
        });
    };
    PreviewImageComponent.prototype.share = function () {
        var text = 'Checkout my latest Photo booth image here:' + window.location.href;
        var title = 'Photo Booth';
        if (navigator.share) {
            navigator.share({
                title: title,
                text: text,
            })
                .then(function () { })
                .catch(function (error) { });
        }
        else {
            alert('Sharing is not supported in your browser.');
        }
    };
    PreviewImageComponent.prototype.download = function () {
        var videoContainer = document.getElementById('preview-img');
        console.log(videoContainer);
        html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(videoContainer, { scrollY: -window.scrollY, scale: 1 }).then(function (canvas) {
            console.log(canvas);
            var link = document.createElement("a");
            document.body.appendChild(link);
            link.download = 'PhotoBooth.png';
            link.href = canvas.toDataURL("image/png");
            link.target = '_blank';
            link.click();
            link.remove();
        });
    };
    PreviewImageComponent.prototype.getBase64Image = function () {
        // var xhr = new XMLHttpRequest();
        // xhr.responseType = 'blob';
        // xhr.onload = (event) => {
        //   var blob = xhr.response;
        // };
        // xhr.open('GET', this.preview_url);
        // xhr.send();
        // return;
        var img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = this.preview_url;
        img.onload = function () {
            // We create a HTML canvas object that will create a 2d image
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            // This will draw image    
            ctx.drawImage(img, 0, 0);
            // Convert the drawn image to Data URL
            var dataURL = canvas.toDataURL("image/png");
            // return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
            console.log(dataURL);
        };
    };
    PreviewImageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }
    ]; };
    PreviewImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-preview-image',
            template: _raw_loader_preview_image_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_preview_image_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
    ], PreviewImageComponent);
    return PreviewImageComponent;
}());



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _layouts_pr_map_pr_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/pr-map/pr-map.component */ "ZDP/");
/* harmony import */ var _layouts_templates_list_templates_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/templates-list/templates-list.component */ "DIZ6");
/* harmony import */ var _layouts_preview_image_preview_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/preview-image/preview-image.component */ "Za8B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.component */ "93si");
/* harmony import */ var _layouts_animation_camera_animation_camera_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/animation-camera/animation-camera.component */ "LgsP");
/* harmony import */ var _layouts_niyam_selection_niyam_selection_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/niyam-selection/niyam-selection.component */ "s+6/");
/* harmony import */ var _layouts_niyams_preview_niyams_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/niyams-preview/niyams-preview.component */ "ZZYy");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: 'booths', pathMatch: 'full' },
    { path: 'camera', component: _layouts_animation_camera_animation_camera_component__WEBPACK_IMPORTED_MODULE_8__["AnimationCameraComponent"] },
    { path: 'preview', component: _layouts_preview_image_preview_image_component__WEBPACK_IMPORTED_MODULE_2__["PreviewImageComponent"] },
    { path: 'booths', component: _layouts_templates_list_templates_list_component__WEBPACK_IMPORTED_MODULE_1__["TemplatesListComponent"] },
    { path: 'niyam-selection', component: _layouts_niyam_selection_niyam_selection_component__WEBPACK_IMPORTED_MODULE_9__["NiyamSelectionComponent"] },
    { path: 'niyams-preview', component: _layouts_niyams_preview_niyams_preview_component__WEBPACK_IMPORTED_MODULE_10__["NiyamsPreviewComponent"] },
    { path: 'pr', component: _layouts_pr_map_pr_map_component__WEBPACK_IMPORTED_MODULE_0__["PrMapComponent"] },
    { path: 'home', component: _components_components_component__WEBPACK_IMPORTED_MODULE_7__["ComponentsComponent"] },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes, {
                    useHash: false
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cruu":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "eP0I":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/niyam-selection/niyam-detail/niyam-detail.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"niyam-detail-container\">\n    <img src=\"./../../../../assets/psm/card-bg.png\" class=\"niyam-detail-bg\" />\n    <div class=\"niyam-detail\">\n        <h3 class=\"font-weight-900 text-center\" style=\"font-family: cursive;\" [innerHTML]=\"niyam?.content\">\n        </h3>\n        <div class=\"pt-4 text-center\">\n            <button class=\"confirm-btn py-4\" (click)=\"confirm()\" style=\"font-family: cursive;\"> \n                <span style=\"color: rgb(2, 215, 2);\">✔</span> Confirm\n                <!-- <i class=\"fa fa-check text-success mr-4\" aria-hidden=\"true\"></i> Confirm  -->\n            </button> \n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "f2YT":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "gR5I":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/niyam-selection/niyam-selection.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"h-100vh niyam-selection-container\">\n    <div class=\"row mx-0 niyam-selection py-4 px-4\">\n        <div class=\"col-12 text-center\">\n            <img src=\"./../../../assets/img/temp_logo.png\" class=\"mb-4\" style=\"width: 15rem;\" />\n        </div>\n        <ng-container *ngFor=\"let niyam of niyams\">\n            <div class=\"col-12 col-sm-6 mb-5 niyam-card-container\">\n                <div (click)=\"updateCount(niyam)\" class=\"d-flex flex-row cursor-pointer\">\n                    <img [src]=\"'./../../../assets/niyams/' + niyam?.id + '.png'\" class=\"niyam-card-img\" />\n                    <div class=\"niyam-new-card-container\">\n                        <div class=\"niyam-new-card\" [innerHTML]=\"niyam[language]\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n    </div>\n</div>\n\n<div *ngIf=\"loader\" style=\"position: fixed; z-index: 100001; top: 0; left: 0; right: 0; bottom: 0; background: #00000078;\">\n    <lottie-player style=\"position: fixed; z-index: 100;\" [src]=\"'assets/niyams/successful-lottie.json'\" background=\"transparent\"  speed=\"2\" autoplay >\n    </lottie-player>    \n</div>\n");

/***/ }),

/***/ "iLkG":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/templates-list/templates-list.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ieWF":
/*!*********************************************!*\
  !*** ./src/app/examples/examples.module.ts ***!
  \*********************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component */ "AXTl");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "xQKc");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "ENsn");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            ],
            declarations: [
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
            ]
        })
    ], ExamplesModule);
    return ExamplesModule;
}());



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "yw8I");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basicelements/basicelements.component */ "o8F2");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.component */ "mvyS");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./typography/typography.component */ "QhSr");
/* harmony import */ var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nucleoicons/nucleoicons.component */ "+GGL");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components.component */ "93si");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notification/notification.component */ "9ldr");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/modal.component */ "7aL3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_11__["ComponentsComponent"],
                _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_7__["BasicelementsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__["TypographyComponent"],
                _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_10__["NucleoiconsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_12__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalContent"]
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalContent"]],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_11__["ComponentsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav\">\n                <ul>\n                    <li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>\n                    <li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\n                    <li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    © {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ "f2YT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
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
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "lGmP":
/*!******************************************************!*\
  !*** ./src/app/layouts/pr-map/pr-map.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pin-container {\n  width: 7vw;\n  position: absolute;\n}\n\n.pin-location {\n  position: absolute;\n  height: 22vh;\n  width: 6vw;\n  cursor: pointer;\n}\n\n::ng-deep.carousel-inner .carousel-item img {\n  border-radius: 0 !important;\n  height: 100vh !important;\n}\n\n.close-btn {\n  position: absolute;\n  top: 2%;\n  right: 2%;\n  color: white;\n  text-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwci1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFTQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFFQSxlQUFBO0FBUEo7O0FBVUE7RUFDSSwyQkFBQTtFQUNBLHdCQUFBO0FBUEo7O0FBVUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtBQVBKIiwiZmlsZSI6InByLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waW4tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA3dnc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyB3aWR0aDogNXZ3O1xyXG4gICAgLy8gaGVpZ2h0OiAyMHZoO1xyXG4gICAgLy8gdG9wOiAwO1xyXG4gICAgLy8gcmlnaHQ6IDA7XHJcblxyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5waW4tbG9jYXRpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIGhlaWdodDogMjJ2aDsgXHJcbiAgICB3aWR0aDogNnZ3O1xyXG5cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuOjpuZy1kZWVwLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jbG9zZS1idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyJTtcclxuICAgIHJpZ2h0OiAyJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtc2hhZG93OiAwIDJweCAycHggcmdiKDIwNCAxOTcgMTg1IC8gNTAlKTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn0iXX0= */");

/***/ }),

/***/ "mS3H":
/*!*******************************************************!*\
  !*** ./src/app/examples/signup/signup.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "mvyS":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navigation.component.html */ "7pPp");
/* harmony import */ var _navigation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.component.scss */ "r7bM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent.ctorParameters = function () { return []; };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navigation',
            template: _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navigation_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "o8F2":
/*!*********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicelementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function() { return BasicelementsComponent; });
/* harmony import */ var _raw_loader_basicelements_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./basicelements.component.html */ "1RpN");
/* harmony import */ var _basicelements_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basicelements.component.scss */ "4Wxn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state_default = true;
    }
    BasicelementsComponent.prototype.ngOnInit = function () { };
    BasicelementsComponent.ctorParameters = function () { return []; };
    BasicelementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-basicelements',
            template: _raw_loader_basicelements_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_basicelements_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "oy3u":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "q3QT":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/profile/profile.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('./assets/img/fabio-mangione.jpg');\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div class=\"avatar\">\n                    <img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">Jane Faker<br /></h4>\n                    <h6 class=\"description\">Music Producer</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>An artist of considerable range, Jane Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>\n                    <br />\n                    <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-cog\"></i> Settings</button>\n                </div>\n            </div>\n            <br/>\n            <div class=\"nav-tabs-navigation\">\n                <div class=\"nav-tabs-wrapper\">\n                    <ngb-tabset [justify]=\"'center'\">\n                        <ngb-tab title=\"Follows\">\n                            <ng-template ngbTabContent >\n                                <div class=\"row following\" id=\"follows\">\n                                    <div class=\"col-md-6 ml-auto mr-auto\">\n                                        <ul class=\"list-unstyled follows\">\n                                            <li>\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n                                                        <img src=\"./assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                                    </div>\n                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\n                                                        <h6>Flume<br/><small>Musical Producer</small></h6>\n                                                    </div>\n                                                    <div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">\n                                                        <div class=\"form-check\">\n                                                          <label class=\"form-check-label\">\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                                                            <span class=\"form-check-sign\"></span>\n                                                          </label>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </li>\n                                            <hr />\n                                            <li>\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n                                                        <img src=\"./assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                                                    </div>\n                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\n                                                        <h6>Banks<br /><small>Singer</small></h6>\n                                                    </div>\n                                                    <div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">\n                                                        <div class=\"form-check\">\n                                                          <label class=\"form-check-label\">\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                                                            <span class=\"form-check-sign\"></span>\n                                                          </label>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </ngb-tab>\n                        <ngb-tab title=\"Following\">\n                            <ng-template ngbTabContent>\n                                <h3 class=\"text-muted\">Not following anyone yet :(</h3>\n                                <br>\n                                <button class=\"btn btn-warning btn-round\">Find artists</button>\n                            </ng-template>\n                        </ngb-tab>\n                    </ngb-tabset>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "r7bM":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "s+6/":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/niyam-selection/niyam-selection.component.ts ***!
  \**********************************************************************/
/*! exports provided: NiyamSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NiyamSelectionComponent", function() { return NiyamSelectionComponent; });
/* harmony import */ var _raw_loader_niyam_selection_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./niyam-selection.component.html */ "gR5I");
/* harmony import */ var _niyam_selection_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./niyam-selection.component.scss */ "KJSW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _niyam_detail_niyam_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./niyam-detail/niyam-detail.component */ "XaBZ");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "JZFu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NiyamSelectionComponent = /** @class */ (function () {
    function NiyamSelectionComponent(db, modalService, route) {
        this.db = db;
        this.modalService = modalService;
        this.route = route;
        this.niyams = [];
        this.loader = false;
        this.language = 'englishLabel';
    }
    NiyamSelectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            try {
                if (params && params.language && params.language == 'gujarati') {
                    _this.language = 'gujaratiLabel';
                }
            }
            catch (e) {
            }
        });
        this.getNiyams();
    };
    NiyamSelectionComponent.prototype.getNiyams = function () {
        var _this = this;
        var niyams = [];
        this.db.collection('niyams').get().subscribe(function (res) {
            console.log(res);
            res.forEach(function (element) {
                console.log(element);
                niyams.push(element.data());
            });
            _this.niyams = niyams;
        });
    };
    NiyamSelectionComponent.prototype.openNiyam = function (niyam) {
        var _this = this;
        var modalRef = this.modalService.open(_niyam_detail_niyam_detail_component__WEBPACK_IMPORTED_MODULE_6__["NiyamDetailComponent"], { centered: true, windowClass: 'niyam-popup' });
        modalRef.componentInstance.niyam = niyam;
        modalRef.result.then(function (result) {
            console.log(result);
            if (result) {
                _this.updateCount(niyam);
            }
        });
    };
    NiyamSelectionComponent.prototype.updateCount = function (niyam) {
        var _this = this;
        this.loader = true;
        setTimeout(function () {
            _this.loader = false;
        }, 2000);
        var niyamsRef = this.db.collection('niyams-counter').doc(niyam.id);
        niyamsRef.update({ count: firebase__WEBPACK_IMPORTED_MODULE_7__["default"].firestore.FieldValue.increment(1) }).then(function () {
        }).catch(function (e) {
        });
    };
    NiyamSelectionComponent.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    NiyamSelectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-niyam-selection',
            template: _raw_loader_niyam_selection_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_niyam_selection_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NiyamSelectionComponent);
    return NiyamSelectionComponent;
}());



/***/ }),

/***/ "u6el":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/niyams-preview/niyams-preview.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"h-100vh niyam-selection-container\">\n    <div class=\"row mx-0 niyam-selection py-4 px-4\">\n        <div class=\"col-12 text-center\">\n            <img src=\"./../../../assets/img/temp_logo.png\" class=\"mb-4\" style=\"width: 15rem;\" />\n        </div>\n        <ng-container *ngFor=\"let niyam of niyams\">\n            <div class=\"col-12 col-sm-6 niyam-card-container\" style=\"margin-bottom: 5rem;\">\n                <div class=\"niyam-preview-card h-100 card shadow\">\n                    <div class=\"text-center niyam-card-img-container\">\n                        <img [src]=\"'./../../../assets/niyams/' + niyam?.id + '.png'\" class=\"niyam-card-img\" />\n                    </div>\n                    <div style=\"font-size: 5.4vh; font-weight: 900;\" class=\"text-center text-white\" [innerHTML]=\"niyamsCounter[niyam?.id]\">\n                    </div>\n                    <div style=\"font-size: 3.0vh; font-weight: 900;\" class=\"text-center text-white px-3\" [innerHTML]=\"niyam[language]\">\n                    </div>\n                </div>\n            </div>\n        </ng-container>\n    </div>\n</div>\n");

/***/ }),

/***/ "vG3S":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <h1>Paper Kit 2 Icons</h1>\n    <p>Built with <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a></p>\n</header>\n\n<div id=\"icons-wrapper\">\n    <section>\n        <ul>\n            <li>\n                <i class=\"nc-icon nc-air-baloon\"></i>\n                <p>nc-air-baloon</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-album-2\"></i>\n                <p>nc-album-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-alert-circle-i\"></i>\n                <p>nc-alert-circle-i</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-center\"></i>\n                <p>nc-align-center</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-left-2\"></i>\n                <p>nc-align-left-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ambulance\"></i>\n                <p>nc-ambulance</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-app\"></i>\n                <p>nc-app</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-atom\"></i>\n                <p>nc-atom</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-badge\"></i>\n                <p>nc-badge</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bag-16\"></i>\n                <p>nc-bag-16</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bank\"></i>\n                <p>nc-bank</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-basket\"></i>\n                <p>nc-basket</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bell-55\"></i>\n                <p>nc-bell-55</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bold\"></i>\n                <p>nc-bold</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-book-bookmark\"></i>\n                <p>nc-book-bookmark</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bookmark-2\"></i>\n                <p>nc-bookmark-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box-2\"></i>\n                <p>nc-box-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box\"></i>\n                <p>nc-box</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-briefcase-24\"></i>\n                <p>nc-briefcase-24</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bulb-63\"></i>\n                <p>nc-bulb-63</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bullet-list-67\"></i>\n                <p>nc-bullet-list-67</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bus-front-12\"></i>\n                <p>nc-bus-front-12</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-pause\"></i>\n                <p>nc-button-pause</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-play\"></i>\n                <p>nc-button-play</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-power\"></i>\n                <p>nc-button-power</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-calendar-60\"></i>\n                <p>nc-calendar-60</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-camera-compact\"></i>\n                <p>nc-camera-compact</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-caps-small\"></i>\n                <p>nc-caps-small</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cart-simple\"></i>\n                <p>nc-cart-simple</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-bar-32\"></i>\n                <p>nc-chart-bar-32</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-pie-36\"></i>\n                <p>nc-chart-pie-36</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chat-33\"></i>\n                <p>nc-chat-33</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-check-2\"></i>\n                <p>nc-check-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-circle-10\"></i>\n                <p>nc-circle-10</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-download-93\"></i>\n                <p>nc-cloud-download-93</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-upload-94\"></i>\n                <p>nc-cloud-upload-94</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-compass-05\"></i>\n                <p>nc-compass-05</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-controller-modern\"></i>\n                <p>nc-controller-modern</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-credit-card\"></i>\n                <p>nc-credit-card</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-delivery-fast\"></i>\n                <p>nc-delivery-fast</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-diamond\"></i>\n                <p>nc-diamond</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-email-85\"></i>\n                <p>nc-email-85</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-favourite-28\"></i>\n                <p>nc-favourite-28</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-glasses-2\"></i>\n                <p>nc-glasses-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe-2\"></i>\n                <p>nc-globe-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe\"></i>\n                <p>nc-globe</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-hat-3\"></i>\n                <p>nc-hat-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-headphones\"></i>\n                <p>nc-headphones</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-html5\"></i>\n                <p>nc-html5</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-image\"></i>\n                <p>nc-image</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-istanbul\"></i>\n                <p>nc-istanbul</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-key-25\"></i>\n                <p>nc-key-25</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-laptop\"></i>\n                <p>nc-laptop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-layout-11\"></i>\n                <p>nc-layout-11</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-lock-circle-open\"></i>\n                <p>nc-lock-circle-open</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-map-big\"></i>\n                <p>nc-map-big</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-down\"></i>\n                <p>nc-minimal-down</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-left\"></i>\n                <p>nc-minimal-left</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-right\"></i>\n                <p>nc-minimal-right</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-up\"></i>\n                <p>nc-minimal-up</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-mobile\"></i>\n                <p>nc-mobile</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-money-coins\"></i>\n                <p>nc-money-coins</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-note-03\"></i>\n                <p>nc-note-03</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-palette\"></i>\n                <p>nc-palette</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-paper\"></i>\n                <p>nc-paper</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-pin-3\"></i>\n                <p>nc-pin-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-planet\"></i>\n                <p>nc-planet</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-refresh-69\"></i>\n                <p>nc-refresh-69</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ruler-pencil\"></i>\n                <p>nc-ruler-pencil</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-satisfied\"></i>\n                <p>nc-satisfied</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-scissors\"></i>\n                <p>nc-scissors</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-send\"></i>\n                <p>nc-send</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings-gear-65\"></i>\n                <p>nc-settings-gear-65</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings\"></i>\n                <p>nc-settings</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-share-66\"></i>\n                <p>nc-share-66</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-shop\"></i>\n                <p>nc-shop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-add\"></i>\n                <p>nc-simple-add</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-delete\"></i>\n                <p>nc-simple-delete</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-remove\"></i>\n                <p>nc-simple-remove</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-02\"></i>\n                <p>nc-single-02</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-copy-04\"></i>\n                <p>nc-single-copy-04</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sound-wave\"></i>\n                <p>nc-sound-wave</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-spaceship\"></i>\n                <p>nc-spaceship</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sun-fog-29\"></i>\n                <p>nc-sun-fog-29</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-support-17\"></i>\n                <p>nc-support-17</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tablet-2\"></i>\n                <p>nc-tablet-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tag-content\"></i>\n                <p>nc-tag-content</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tap-01\"></i>\n                <p>nc-tap-01</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tie-bow\"></i>\n                <p>nc-tie-bow</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tile-56\"></i>\n                <p>nc-tile-56</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-time-alarm\"></i>\n                <p>nc-time-alarm</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-touch-id\"></i>\n                <p>nc-touch-id</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-trophy\"></i>\n                <p>nc-trophy</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tv-2\"></i>\n                <p>nc-tv-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-umbrella-13\"></i>\n                <p>nc-umbrella-13</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-user-run\"></i>\n                <p>nc-user-run</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-vector\"></i>\n                <p>nc-vector</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-watch-time\"></i>\n                <p>nc-watch-time</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-world-2\"></i>\n                <p>nc-world-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-zoom-split\"></i>\n                <p>nc-zoom-split</p>\n            </li>\n            <!-- list of icons here with the proper class-->\n        </ul>\n    </section>\n</div>\n");

/***/ }),

/***/ "vKWM":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/pr-map/pr-map.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"position: relative;\">\n    <img src=\"./../../../assets/pr/bg.jpg\" style=\"width: 100%; height: 100vh;\" />\n\n    <img src=\"./../../../assets/img/balnagari_logo.png\" style=\"width: 16vw; position: absolute; z-index: 2; left: 5vw; top: 3vh;\" />\n    \n    <lottie-player (click)=\"openLocation('tanki')\" class=\"pin-location\" style=\"top: 52vh; left: 50%;\" src=\"assets/pr/location-lottie.json\" background=\"transparent\" loop speed=\"1\" autoplay >\n    </lottie-player> \n    \n    <lottie-player (click)=\"openLocation('balSnehiGarden')\" class=\"pin-location\" style=\"top: 48vh; left: 61%;\" src=\"assets/pr/location-lottie.json\" background=\"transparent\" loop speed=\"1\" autoplay >\n    </lottie-player>\n    \n    <lottie-player (click)=\"openLocation('train')\" class=\"pin-location\" style=\"top: 45vh; left: 37%;\" src=\"assets/pr/location-lottie.json\" background=\"transparent\" loop speed=\"1\" autoplay >\n    </lottie-player>\n\n    <lottie-player (click)=\"openLocation('bapaniMurti')\" class=\"pin-location\" style=\"top: 35vh; left: 48.6%;\" src=\"assets/pr/location-lottie.json\" background=\"transparent\" loop speed=\"1\" autoplay >\n    </lottie-player> \n    \n    <lottie-player (click)=\"openLocation('fassadWithCharacter')\" class=\"pin-location\" style=\"top: 58vh; left: 37.1%;\" src=\"assets/pr/location-lottie.json\" background=\"transparent\" loop speed=\"1\" autoplay >\n    </lottie-player> \n\n    <lottie-player (click)=\"openLocation('animalCorner')\" class=\"pin-location\" style=\"top: 44vh; left: 9.5%;\" src=\"assets/pr/location-lottie.json\" background=\"transparent\" loop speed=\"1\" autoplay >\n    </lottie-player> \n\n    <lottie-player (click)=\"openLocation('talentStage')\" class=\"pin-location\" style=\"top: 30vh; left: 27%;\" src=\"assets/pr/location-lottie.json\" background=\"transparent\" loop speed=\"1\" autoplay >\n    </lottie-player> \n\n    <lottie-player (click)=\"openLocation('balBalikaDance')\" class=\"pin-location\" style=\"top: 24vh; left: 61%;\" src=\"assets/pr/location-lottie.json\" background=\"transparent\" loop speed=\"1\" autoplay >\n    </lottie-player> \n\n    <lottie-player (click)=\"openLocation('mascot')\" class=\"pin-location\" style=\"top: 9vh; left: 52%;\" src=\"assets/pr/location-lottie.json\" background=\"transparent\" loop speed=\"1\" autoplay >\n    </lottie-player> \n\n</div>\n\n<!-- <img src=\"./../../../assets/pr/collections/train/1.JPG\" style=\"width: 100%; height: 100vh;\" /> -->\n\n\n<div [style.display]=\"slider ? 'block' : 'none'\" style=\"position: fixed; z-index: 10000; top: 0; left: 0; width: 100%; height: 100vh;\">\n    <div (click)=\"slider = false\" class=\"close-btn\">\n        <i class=\"fa fa-times fa-3x\"></i>\n    </div>\n\n    <div class=\"card page-carousel\" (touchstart)=\"swipe($event, 'start')\" (touchend)=\"swipe($event, 'end')\" >\n        <ngb-carousel [showNavigationArrows]=\"true\" [showNavigationIndicators]=\"false\">\n            \n            <ng-container *ngFor=\"let slide of currentSliders\">\n                <ng-template ngbSlide>\n                    <img src=\"{{slide}}\">\n                </ng-template>\n            </ng-container>\n            \n            <!-- <ng-template ngbSlide>\n                <img src=\"assets/img/soroush-karimi.jpg\" alt=\"Random first slide\">\n            </ng-template>\n            <ng-template ngbSlide>\n                <img src=\"assets/img/federico-beccari.jpg\" alt=\"Random second slide\">\n            </ng-template>\n            <ng-template ngbSlide>\n                <img src=\"assets/img/joshua-stannard.jpg\" alt=\"Random third slide\">\n            </ng-template> -->\n        </ngb-carousel>\n    </div>\n</div>\n");

/***/ }),

/***/ "xPXG":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/templates-list/templates-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row mx-0 py-4\">\n    <ng-container *ngFor=\"let screen of screens\">\n        <div class=\"col-12 py-3 text-center\">\n            <a class=\"btn btn-primary col-9\" style=\"font-size: 1.5rem;\" [routerLink]=\"['/camera']\" [queryParams]=\"{booth: screen?.name}\" [innerHTML]=\"screen?.label\"></a>\n        </div>\n    </ng-container>\n    <div class=\"col-12\">\n        <hr/>\n    </div>\n    <div class=\"col-12 py-3 text-center\">\n        <a class=\"btn btn-primary col-9\" style=\"font-size: 1.5rem;\" [routerLink]=\"['/niyam-selection']\" [queryParams]=\"{language: 'english'}\">\n            Niyam Selection (English)\n        </a>\n    </div>\n    <div class=\"col-12 py-3 text-center\">\n        <a class=\"btn btn-primary col-9\" style=\"font-size: 1.5rem;\" [routerLink]=\"['/niyam-selection']\" [queryParams]=\"{language: 'gujarati'}\">\n            Niyam Selection (Gujarati)\n        </a>\n    </div>\n    <div class=\"col-12\">\n        <hr/>\n    </div>\n    <div class=\"col-12 py-3 text-center\">\n        <a class=\"btn btn-primary col-9\" style=\"font-size: 1.5rem;\" [routerLink]=\"['/niyams-preview']\" [queryParams]=\"{language: 'english'}\">\n            Niyams Preview (English)\n        </a>\n    </div>\n    <div class=\"col-12 py-3 text-center\">\n        <a class=\"btn btn-primary col-9\" style=\"font-size: 1.5rem;\" [routerLink]=\"['/niyams-preview']\" [queryParams]=\"{language: 'gujarati'}\">\n            Niyams Preview (Gujarati)\n        </a>\n    </div>\n    <div class=\"col-12\">\n        <hr/>\n    </div>\n    <div class=\"col-12 py-3 text-center\">\n        <a class=\"btn btn-primary col-9\" style=\"font-size: 1.5rem;\" [routerLink]=\"['/pr']\">\n            PR Map\n        </a>\n    </div>\n</div>");

/***/ }),

/***/ "xQKc":
/*!*******************************************************!*\
  !*** ./src/app/examples/profile/profile.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "q3QT");
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.scss */ "zXGc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent.ctorParameters = function () { return []; };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profile',
            template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "y/f5":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/preview-image/preview-image.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"loader\">Loading</ng-container>\n<div class=\"preview-img-container\" [style.backgroundImage]=\"'url(' + preview_url + ')'\">\n    <div class=\"overlay\">\n        <div class=\"preview-img\" id=\"preview-img\">\n            <img [src]=\"preview_url\" />\n        </div>\n        <div class=\"row justify-content-center mt-4 mx-0 d-none\">\n            <!-- <div class=\"col-auto\">\n                <button class=\"btn action-btn\" (click)=\"share()\">\n                    Share <i class=\"fa fa-share-alt fa-lg ml-1\" aria-hidden=\"true\"></i>\n                </button>\n            </div> -->\n            <div class=\"col-auto\">\n                <button class=\"btn action-btn\" (click)=\"getBase64Image()\">\n                    Download <i class=\"fa fa-download fa-lg ml-1\" aria-hidden=\"true\"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" href=\"https://www.creative-tim.com\">Paper Kit 2 Angular</a>\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse\" id=\"navbarToggler\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Twitter\" data-placement=\"bottom\" href=\"https://twitter.com/CreativeTim\" target=\"_blank\">\n                        <i class=\"fa fa-twitter\"></i>\n                        <p class=\"d-lg-none\">Twitter</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\" href=\"https://www.facebook.com/CreativeTim\" target=\"_blank\">\n                        <i class=\"fa fa-facebook-square\"></i>\n                        <p class=\"d-lg-none\">Facebook</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\" href=\"https://www.instagram.com/CreativeTimOfficial\" target=\"_blank\">\n                        <i class=\"fa fa-instagram\"></i>\n                        <p class=\"d-lg-none\">Instagram</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Star on GitHub\" data-placement=\"bottom\" href=\"https://www.github.com/CreativeTimOfficial/paper-kit-2-angular\" target=\"_blank\">\n                        <i class=\"fa fa-github\"></i>\n                        <p class=\"d-lg-none\">GitHub</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a href=\"http://pk2-angular.creative-tim.com/documentation/tutorial\" class=\"nav-link\" target=\"_blank\"><i class=\"nc-icon nc-book-bookmark\"></i> Documentation</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"isHome()\">\n                    <a href=\"https://www.creative-tim.com/product/paper-kit-2-pro-angular?ref=pk2-angular-free-local\" target=\"_blank\" class=\"btn btn-danger btn-round\">Upgrade to Pro</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isHome()\">\n                    <a [routerLink]=\"['/home']\" *ngIf=\"!isDocumentation()\" class=\"nav-link\"><i class=\"nc-icon nc-layout-11\"></i>Components</a>\n                    <a [routerLink]=\"['/home']\" *ngIf=\"isDocumentation()\" class=\"nav-link\">Back to Kit</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"isDocumentation()\">\n                    <a href=\"https://github.com/creativetimofficial/paper-kit-2-angular/issues?ref=pk2-free-local\" target=\"_blank\" class=\"nav-link\">Have an issue</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*!

 =========================================================
 * Paper Kit 2 Angular - v1.4.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-kit-2-angular
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/timcreative/paper-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zXGc":
/*!*********************************************************!*\
  !*** ./src/app/examples/profile/profile.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map