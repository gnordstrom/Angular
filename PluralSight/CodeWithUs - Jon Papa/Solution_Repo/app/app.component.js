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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var app_component_1 = require('./section-01/app.component');
var app_component_2 = require('./section-02/app.component');
var app_component_3 = require('./section-02-exercise-completed/app.component');
var app_component_4 = require('./section-03/app.component');
var app_component_5 = require('./section-03-exercise-completed/app.component');
var app_component_6 = require('./section-04/app.component');
var app_component_7 = require('./section-05/app.component');
var app_component_8 = require('./section-06/app.component');
var app_component_9 = require('./section-06-exercise-completed/app.component');
var app_component_10 = require('./section-07/app.component');
var app_component_11 = require('./section-07-exercise-completed/app.component');
var app_component_12 = require('./section-08/app.component');
var app_component_13 = require('./section-09/app.component');
var app_component_14 = require('./section-09-exercise-completed/app.component');
var app_component_15 = require('./section-10/app.component');
var app_component_16 = require('./section-11/app.component');
var app_component_17 = require('./section-12/app.component');
var app_component_18 = require('./section-12-exercise-completed/app.component');
var app_component_19 = require('./section-13/app.component');
var noRoutes = [];
// sections: section components, some of which which have routes
var sections = [
    /* 0*/ { title: 'Section 1: Install QuickStart', component: app_component_1.AppComponent, routes: noRoutes },
    /* 1*/ { title: 'Section 2: Simple binding', component: app_component_2.AppComponent, routes: noRoutes },
    /* 2*/ { title: 'Section 2: Simple binding exercise (completed)', component: app_component_3.AppComponent, routes: noRoutes },
    /* 3*/ { title: 'Section 3: Two-way binding', component: app_component_4.AppComponent, routes: noRoutes },
    /* 4*/ { title: 'Section 3: Two-way binding exercise (completed)', component: app_component_5.AppComponent, routes: noRoutes },
    /* 5*/ { title: 'Section 4: Model', component: app_component_6.AppComponent, routes: noRoutes },
    /* 6*/ { title: 'Section 5: Template file', component: app_component_7.AppComponent, routes: noRoutes },
    /* 7*/ { title: 'Section 6: List binding', component: app_component_8.AppComponent, routes: noRoutes },
    /* 8*/ { title: 'Section 6: List binding exercise (completed)', component: app_component_9.AppComponent, routes: noRoutes },
    /* 9*/ { title: 'Section 7: Multiple components and @Input:', component: app_component_10.AppComponent, routes: noRoutes },
    /*10*/ { title: 'Section 7: Multiple components exercise (completed)', component: app_component_11.AppComponent, routes: noRoutes },
    /*11*/ { title: 'Section 8: @Output', component: app_component_12.AppComponent, routes: noRoutes },
    /*12*/ { title: 'Section 9: Services and DI', component: app_component_13.AppComponent, routes: noRoutes },
    /*13*/ { title: 'Section 9: Services exercise (completed)', component: app_component_14.AppComponent, routes: noRoutes },
    /*14*/ { title: 'Section 10: Async with promises', component: app_component_15.AppComponent, routes: noRoutes },
    /*15*/ { title: 'Section 11: Async with observables', component: app_component_16.AppComponent, routes: noRoutes },
    /*16*/ { title: 'Section 12: Http', component: app_component_17.AppComponent, routes: noRoutes },
    /*17*/ { title: 'Section 12: Http exercise (completed)', component: app_component_18.AppComponent, routes: noRoutes },
    /*18*/ { title: 'Section 13: Http update (bonus)', component: app_component_19.AppComponent, routes: noRoutes },
];
var SectionViewDirective = (function () {
    function SectionViewDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    SectionViewDirective = __decorate([
        core_1.Directive({ selector: '[sectionView]' }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], SectionViewDirective);
    return SectionViewDirective;
}());
exports.SectionViewDirective = SectionViewDirective;
var AppComponent = (function () {
    function AppComponent(componentFactoryResolver, location, router, viewContainerRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.location = location;
        this.router = router;
        this.viewContainerRef = viewContainerRef;
        this.sections = sections;
        this.currentSectionIx = 0;
        // Set initial view
        var resetRouterConfig = true;
        this.onSectionChange(this.currentSectionIx, resetRouterConfig);
    }
    AppComponent.prototype.onSectionChange = function (index, resetRouterConfig) {
        if (resetRouterConfig === void 0) { resetRouterConfig = true; }
        this.currentSectionIx = index;
        var _a = sections[index], component = _a.component, routes = _a.routes;
        this.setView(component);
        if (resetRouterConfig) {
            this.router.resetConfig(routes);
            this.location.go('/');
        }
    };
    AppComponent.prototype.setView = function (component) {
        this.viewContainerRef.clear();
        if (component) {
            var factory = this.componentFactoryResolver.resolveComponentFactory(component);
            this.viewContainerRef.createComponent(factory);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <label>Section to run:\n      <select [value]=\"currentSectionIx\" (change)=\"onSectionChange($event.target.selectedIndex)\">\n        <option *ngFor=\"let section of sections; let i = index\" [value]=\"i\">{{section.title}}</option>\n      </select>\n    </label>\n    <hr>\n    <div sectionView></div>"
        }), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, common_1.Location, router_1.Router, core_1.ViewContainerRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map