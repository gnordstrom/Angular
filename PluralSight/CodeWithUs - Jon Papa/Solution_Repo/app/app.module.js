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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_module_1 = require('./section-01/app.module');
var app_module_2 = require('./section-02/app.module');
var app_module_3 = require('./section-02-exercise-completed/app.module');
var app_module_4 = require('./section-03/app.module');
var app_module_5 = require('./section-03-exercise-completed/app.module');
var app_module_6 = require('./section-04/app.module');
var app_module_7 = require('./section-05/app.module');
var app_module_8 = require('./section-06/app.module');
var app_module_9 = require('./section-06-exercise-completed/app.module');
var app_module_10 = require('./section-07/app.module');
var app_module_11 = require('./section-07-exercise-completed/app.module');
var app_module_12 = require('./section-08/app.module');
var app_module_13 = require('./section-09/app.module');
var app_module_14 = require('./section-09-exercise-completed/app.module');
var app_module_15 = require('./section-10/app.module');
var app_module_16 = require('./section-11/app.module');
var app_module_17 = require('./section-12/app.module');
var app_module_18 = require('./section-12-exercise-completed/app.module');
var app_module_19 = require('./section-13/app.module');
var app_component_1 = require('./app.component');
// in-mem-web-api and its test-data service
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([]),
                app_module_1.AppModule,
                app_module_2.AppModule, app_module_3.AppModule,
                app_module_4.AppModule, app_module_5.AppModule,
                app_module_6.AppModule,
                app_module_7.AppModule,
                app_module_8.AppModule, app_module_9.AppModule,
                app_module_10.AppModule, app_module_11.AppModule,
                app_module_12.AppModule,
                app_module_13.AppModule, app_module_14.AppModule,
                app_module_15.AppModule,
                app_module_16.AppModule,
                app_module_17.AppModule, app_module_18.AppModule,
                app_module_19.AppModule,
                // By making this the last thing that we import,
                // it always overrides whatever in memory data a previous module loaded
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService) // <-- register in-mem-web-api and its data
            ],
            declarations: [app_component_1.AppComponent, app_component_1.SectionViewDirective],
            // entryComponents: would list the dynamically loaded components
            // for AOT/dead-code-removal but not needed for this JIT-only harness
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map