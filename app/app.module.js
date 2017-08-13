"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var services_component_1 = require("./services.component");
var blog_component_1 = require("./blog.component");
var blog_details_component_1 = require("./blog.details.component");
var contacts_component_1 = require("./contacts.component ");
var not_found_component_1 = require("./not-found.component");
var data_service_1 = require("./data.service");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'services', component: services_component_1.ServicesComponent },
    { path: 'blog', component: blog_component_1.BlogComponent },
    { path: 'blog-details/:id', component: blog_details_component_1.BlogDetailsComponent },
    { path: 'contact', component: contacts_component_1.ContactComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, services_component_1.ServicesComponent, about_component_1.AboutComponent, blog_component_1.BlogComponent, blog_details_component_1.BlogDetailsComponent, contacts_component_1.ContactComponent, not_found_component_1.NotFoundComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [data_service_1.HttpDataService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map