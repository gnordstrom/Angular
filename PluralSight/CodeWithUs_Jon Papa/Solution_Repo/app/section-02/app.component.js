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
        this.image = 'favicon.ico';
        this.color = 'red';
    }
    AppComponent.prototype.clicked = function () {
        this.color = this.color === 'red' ? 'blue' : 'red';
    };
    AppComponent.prototype.colorChange = function (color) {
        this.color = color;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{name}}</h1>\n\n  <fieldset>\n    <!-- <img src={{image}}/> -->\n    <!-- <img src=\"{{image}}\"/> -->\n    <img [src]=\"image\"/>\n  </fieldset>\n\n  <fieldset>\n    <label [style.color]=\"color\">Favorite Color</label>\n    <button (click)=\"clicked()\">Toggle color</button>\n\n    <!-- <select #selector (change)=\"colorChange(selector.value)\"> -->\n\n    <select (change)=\"colorChange($event.target.value)\">\n      <option>red</option>\n      <option>blue</option>\n      <option>green</option>\n    </select>\n  </fieldset>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map