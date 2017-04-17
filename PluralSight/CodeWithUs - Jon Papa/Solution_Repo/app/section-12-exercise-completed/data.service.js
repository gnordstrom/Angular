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
/* tslint:disable:no-unused-variable */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http'); // <-- import Http & Headers
var logger_service_1 = require('./logger.service');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch'); // <-- add rxjs operator extensions used here
require('rxjs/add/operator/do');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
require('rxjs/add/observable/throw'); // <-- add rxjs Observable extensions used here
var DataService = (function () {
    function DataService(http, // <-- inject http
        logger) {
        this.http = http;
        this.logger = logger;
        this.customersUrl = 'api/customers';
        this.statesUrl = 'api/states';
    }
    /** Get existing customers as a Promise */
    DataService.prototype.getCustomersP = function () {
        var _this = this;
        this.logger.log('Getting customers as a Promise via Http ...');
        return this.http.get(this.customersUrl) // <-- returns an observable
            .toPromise() // <-- convert immediately to a promise
            .then(function (response) {
            var custs = response.json().data; // <-- extract data from the response
            _this.logger.log("Got " + custs.length + " customers");
            return custs;
        })
            .catch(function (error) {
            _this.logger.log("An error occurred " + error); // for demo purposes only
            // re-throw user-facing message
            return Promise.reject('Something bad happened with customers; please check the console');
        });
    };
    /** Get existing customers as an Observable */
    DataService.prototype.getCustomers = function () {
        var _this = this;
        this.logger.log('Getting customers as an Observable via Http ...');
        return this.http.get(this.customersUrl)
            .map(function (response) { return response.json().data; }) // <-- extract data
            .do(function (custs) { return _this.logger.log("Got " + custs.length + " customers"); })
            .catch(function (error) {
            _this.logger.log("An error occurred " + error);
            return Observable_1.Observable.throw('Something bad happened with customers; please check the console');
        });
    };
    /** Get existing states as an Observable */
    DataService.prototype.getStates = function () {
        var _this = this;
        this.logger.log('Getting states as an Observable via Http ...');
        return this.http.get(this.statesUrl)
            .map(function (response) {
            return response.json().data;
        }) // <-- extract data
            .do(function (states) { return _this.logger.log("Got " + states.length + " states"); })
            .catch(function (error) {
            _this.logger.log("An error occurred " + error);
            return Observable_1.Observable.throw('Something bad happened with states; please check the console');
        });
    };
    DataService = __decorate([
        // <-- add rxjs Observable extensions used here
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, logger_service_1.LoggerService])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map