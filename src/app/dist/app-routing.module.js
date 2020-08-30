"use strict";
exports.__esModule = true;
exports.appRouting = void 0;
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var imagenes_component_1 = require("./components/imagenes/imagenes.component");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'imagenes', component: imagenes_component_1.ImagenesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
exports.appRouting = router_1.RouterModule.forRoot(routes);
