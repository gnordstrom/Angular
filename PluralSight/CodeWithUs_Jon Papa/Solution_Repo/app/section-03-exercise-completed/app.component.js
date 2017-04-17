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
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Alex Smith';
        this.city = 'Anytown';
        this.street = '123 Main Street';
        this.region = 'East';
        this.hideAddress = false;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{name}}</h1>\n\n  <p><i>{{name}} is at {{street}} in {{city}} in the {{region}} region.</i></p>\n\n  <fieldset>\n    <label>\n      Name:\n      <input [(ngModel)]=\"name\" placeholder=\"Customer name\">\n    </label>\n  </fieldset>\n\n  <br>\n  <label><input type=\"checkbox\" [(ngModel)]=\"hideAddress\"/>Hide address</label>\n\n  <div [hidden]=\"hideAddress\">\n    <h3>Address:</h3>\n    <fieldset>\n      <label>\n        Street:\n        <input [(ngModel)]=\"street\" placeholder=\"Street\">\n      </label>\n    </fieldset>\n    <fieldset>\n      <label>\n        City:\n        <input [(ngModel)]=\"city\" placeholder=\"City\">\n      </label>\n    </fieldset>\n    <fieldset>\n      <label>\n        Region:\n        <select [(ngModel)]=\"region\">\n          <option>North</option>\n          <option>South</option>\n          <option>East</option>\n          <option>West</option>\n        </select>\n      </label>\n    </fieldset>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map