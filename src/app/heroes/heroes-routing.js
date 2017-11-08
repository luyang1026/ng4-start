"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var heroList_component_1 = require("../component/hero/heroList.component");
var heroDetail_component_1 = require("../component/hero/heroDetail.component");
var route = [
    { path: 'heroes', component: heroList_component_1.HeroListComponent },
    { path: 'hero/:id', component: heroDetail_component_1.HeroDetailComponent }
];
var heroesRoutingModule = (function () {
    function heroesRoutingModule() {
    }
    return heroesRoutingModule;
}());
heroesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(route)
        ],
    })
], heroesRoutingModule);
exports.heroesRoutingModule = heroesRoutingModule;
//# sourceMappingURL=heroes-routing.js.map