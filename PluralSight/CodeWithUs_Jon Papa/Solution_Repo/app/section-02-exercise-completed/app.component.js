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
var core_1 = require('@angular/core');
// {{}} interpolation - Component to DOM
// []   property binding - Component to DOM
// ()   event binding - DOM to Component
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Alex Smith';
        this.city = 'Anytown';
        this.street = '123 Main Street';
        this.region = 'East';
        this.hideAddress = false;
        this.image = 'favicon.ico';
        this.color = 'red';
    }
    AppComponent.prototype.addressClick = function () {
        this.hideAddress = !this.hideAddress;
    };
    AppComponent.prototype.clicked = function () {
        this.color = this.color === 'red' ? 'blue' : 'red';
    };
    AppComponent.prototype.colorChange = function (color) {
        this.color = color;
    };
    AppComponent.prototype.regionChange = function (region) {
        this.region = region;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{name}}</h1>\n\n  <p><i>{{name}} is in the {{region}} region.</i></p>\n\n  <br>\n  <button (click)=\"addressClick()\">Show/Hide address</button>\n\n  <div [hidden]=\"hideAddress\">\n    <h3>Address:</h3>\n    <fieldset>\n      <label>Street: </label>{{street}}\n    </fieldset>\n    <fieldset>\n      <label>City: </label>{{city}}\n    </fieldset>\n    <fieldset>\n      <label>\n        Region:\n        <select (change)=\"regionChange($event.target.value)\">\n          <option>North</option>\n          <option>South</option>\n          <option>East</option>\n          <option>West</option>\n        </select>\n      </label>\n    </fieldset>\n  </div>\n\n  <fieldset>\n    <img [src]=\"image\"/>\n  </fieldset>\n\n  <fieldset>\n    <button (click)=\"clicked()\">Toggle color</button>\n    <label [style.color]=\"color\">\n      Favorite color:\n      <select (change)=\"colorChange($event.target.value)\">\n        <option>red</option>\n        <option>blue</option>\n        <option>green</option>\n      </select>\n    </label>\n  </fieldset>\n\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map