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
        this.customers = [
            {
                id: 1,
                name: 'Alex Smith',
                address: {
                    street: '123 Main Street',
                    city: 'Anytown',
                    state: 'California',
                    region: 'West'
                }
            },
            {
                id: 2,
                name: 'Pierre Pasmal',
                address: {
                    street: '456 Rue de Main',
                    city: 'Quebec City',
                    state: 'Quebec',
                    region: 'East'
                }
            },
            {
                id: 3,
                name: 'Margarita Nadie',
                address: {
                    street: '789 Calle Principal',
                    city: 'Guadalajara',
                    state: 'Jalisco',
                    region: 'South'
                }
            },
            {
                id: 4,
                name: 'Katie O\'Leary',
                address: {
                    street: '137 DeKoven Street',
                    city: 'Chicago',
                    state: 'Illinois',
                    region: 'Midwest'
                }
            },
        ];
        this.showAddress = true;
        this.regions = ['East', 'Midwest', 'North', 'South', 'West'];
        /* Create an array of states that includes previous states PLUS Illinois */
        this.states = ['California', 'Illinois', 'Jalisco', 'Quebec'];
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map