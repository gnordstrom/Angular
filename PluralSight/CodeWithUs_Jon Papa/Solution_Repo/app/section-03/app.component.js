"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable:max-line-length */
var core_1 = require('@angular/core');
// [] means property binding - Component to DOM
// () means event binding - DOM to Component
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Alex Smith';
        this.city = 'Anytown';
        this.street = '123 Main Street';
        this.region = 'East';
        this.hideAddress = false;
    }
    AppComponent.prototype.addressClick = function () {
        this.hideAddress = !this.hideAddress;
    };
    AppComponent.prototype.nameChange = function (name) {
        this.name = name;
    };
    AppComponent.prototype.regionChange = function (region) {
        this.region = region;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{name}}</h1>\n\n  <p><i>{{name}} is in the {{region}} region.</i></p>\n\n  <fieldset>\n    <label>\n      Name:<br>\n      <input [value]=\"name\" placeholder=\"Customer name\"> [value]=\"name\"<br>\n\n      <input #nameBox [value]=\"name\" (input)=\"name=nameBox.value\" placeholder=\"Customer name\">           #nameBox [value]=\"name\" (input)=\"name=nameBox.value\" <br>\n\n      <input [value]=\"name\" (keyup)=\"nameChange($event.target.value)\" placeholder=\"Customer name\">       [value]=\"name\" (keyup)=\"nameChange($event.target.value)\"<br>\n\n      <input [value]=\"name\" (keyup.enter)=\"nameChange($event.target.value)\" placeholder=\"Customer name\"> [value]=\"name\" (keyup.enter)=\"...\"<br>\n\n      <input [value]=\"name\"\n             (keyup.enter)=\"nameChange($event.target.value)\"\n             (blur)=\"nameChange($event.target.value)\"\n             placeholder=\"Customer name\">                                                                [value]=\"name\" (keyup.enter)=\"...\" (blur)=\"...\"<br>\n\n      <input [(ngModel)]=\"name\" placeholder=\"Customer name\">                                             [(ngModel)]=\"name\"<br>\n\n      <input [ngModel]=\"name\" (ngModelChange)=\"name=$event\" placeholder=\"Customer name\">                 [ngModel]=\"name\" (ngModelChange)=\"name=$event\"<br>\n    </label>\n  </fieldset>\n\n  <br>\n  <label><input type=\"checkbox\" [(ngModel)]=\"hideAddress\"/>Hide address</label>\n\n  <div [hidden]=\"hideAddress\">\n    <h3>Address:</h3>\n    <fieldset><label>Street: </label>{{street}}</fieldset>\n    <fieldset><label>City: </label>{{city}}</fieldset>\n    <fieldset>\n      <label>\n        Region:\n        <select (change)=\"regionChange($event.target.value)\">\n          <option>North</option>\n          <option>South</option>\n          <option>East</option>\n          <option>West</option>\n        </select>\n      </label>\n    </fieldset>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map