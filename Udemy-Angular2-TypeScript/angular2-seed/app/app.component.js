System.register(['angular2/core', './courses.component', './authors.component', './favorite.component', './like.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, favorite_component_1, like_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.isActive = true;
                    this.post = {
                        title: "Title",
                        isFavorite: true
                    };
                    this.like = {
                        isLiked: true
                    };
                    this.tweet = {
                        totalLikes: 0,
                        isLiked: false
                    };
                }
                AppComponent.prototype.onDivClick = function () {
                    console.log('Handled by Div');
                };
                AppComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                    console.log('Clicked!', $event);
                };
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Hello Angular</h1>\n\n        <like [totalLikes]=\"tweet.totalLikes\" [isLiked]=\"tweet.isLiked\"></like>\n        <div (click)=\"onDivClick()\">\n            <button class=\"btn btn-primary\"\n                [class.active]=\"isActive\"\n                [style.backgroundColor]=\"isActive ? 'blue' : 'gray'\"\n                (click)=\"onClick($event)\"\n                    >Submit</button>\n        </div>\n        <input type=\"text\" placeholder=\"Enter input\" [value]=\"title\" (input)=\"title = $event.target.value\"/>      <!-- Adds input thing which displays output below-->\n        <input type=\"text\" [(ngModel)]=\"title\" />\n\n        <input type=\"button\" (click)=\"title = ''\" value=\"clear\" />\n        Output: {{title}}\n        <courses></courses>\n        <i class=\"glyphicon glyphicon-star\"></i>\n        <favorite [is-favorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n        <authors></authors>",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favorite_component_1.FavoriteComponent, like_component_1.LikeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map