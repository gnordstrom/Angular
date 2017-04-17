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
var data_service_1 = require('./data.service');
var logger_service_1 = require('./logger.service');
var CustomerListComponent = (function () {
    function CustomerListComponent(dataService, logger) {
        this.dataService = dataService;
        this.logger = logger;
        this.isBusy = false;
    }
    CustomerListComponent.prototype.ngOnInit = function () { this.getCustomers(); };
    CustomerListComponent.prototype.getCustomers = function () {
        var _this = this;
        this.customer = undefined; // <-- clear before refresh
        this.customers = undefined;
        this.isBusy = true;
        this.logger.log('Getting customers ...');
        // this.dataService.getCustomersP().then(  // Promise version
        this.dataService.getCustomers().subscribe(// Observable version
        function (// Observable version
            custs) {
            _this.isBusy = false;
            _this.customers = custs;
        }, function (errorMsg) {
            _this.isBusy = false;
            alert(errorMsg); // Don't use alert!
        });
    };
    CustomerListComponent.prototype.save = function (customer) {
        var _this = this;
        if (!customer) {
            return;
        }
        this.isBusy = true;
        this.logger.log("Saving " + customer.name + " ...");
        this.dataService.update(customer).subscribe(function () { return _this.isBusy = false; }, function () {
            _this.isBusy = false;
            alert('Save failed; please check the console'); // Don't use alert!
        });
    };
    CustomerListComponent.prototype.shift = function (increment) {
        var _this = this;
        var ix = increment + this.customers.findIndex(function (c) { return c === _this.customer; });
        ix = Math.min(this.customers.length - 1, Math.max(0, ix));
        this.customer = this.customers[ix];
    };
    CustomerListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'customer-list',
            templateUrl: 'customer-list.component.html',
            styleUrls: ['customer-list.component.css']
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, logger_service_1.LoggerService])
    ], CustomerListComponent);
    return CustomerListComponent;
}());
exports.CustomerListComponent = CustomerListComponent;
//# sourceMappingURL=customer-list.component.js.map