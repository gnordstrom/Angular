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
var model_1 = require('./model');
var CustomerDetailComponent = (function () {
    function CustomerDetailComponent() {
        this.showAddress = true;
        this.regions = ['East', 'Midwest', 'North', 'South', 'West'];
        this.states = ['California', 'Illinois', 'Jalisco', 'Quebec'];
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', model_1.Customer)
    ], CustomerDetailComponent.prototype, "customer", void 0);
    CustomerDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-detail',
            templateUrl: 'customer-detail.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerDetailComponent);
    return CustomerDetailComponent;
}());
exports.CustomerDetailComponent = CustomerDetailComponent;
//# sourceMappingURL=customer-detail.component.js.map