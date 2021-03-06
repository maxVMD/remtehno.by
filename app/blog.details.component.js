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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_service_1 = require("./data.service");
var articles_1 = require("./articles");
var BlogDetailsComponent = (function () {
    function BlogDetailsComponent(route, httpService) {
        var _this = this;
        this.route = route;
        this.httpService = httpService;
        this.articles = [];
        this.article = new articles_1.Articles();
        this.routeSubscription = this.route.params.subscribe(function (params) {
            _this.id = params.id;
        });
    }
    BlogDetailsComponent.prototype.getArticle = function () {
        for (var i = 0; i <= this.articles.articles.length; i++) {
            if (this.articles.articles[i].id == this.id.toString()) {
                this.article = this.articles.articles[i];
                break;
            }
        }
    };
    BlogDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData().subscribe(function (data) {
            _this.articles = data;
            console.log(data.articles);
            _this.getArticle();
        });
    };
    BlogDetailsComponent.prototype.ngOnDestroy = function () {
        this.routeSubscription.unsubscribe();
    };
    return BlogDetailsComponent;
}());
BlogDetailsComponent = __decorate([
    core_1.Component({
        selector: 'blog-details-app',
        templateUrl: 'views/blog-details.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, data_service_1.HttpDataService])
], BlogDetailsComponent);
exports.BlogDetailsComponent = BlogDetailsComponent;
//# sourceMappingURL=blog.details.component.js.map