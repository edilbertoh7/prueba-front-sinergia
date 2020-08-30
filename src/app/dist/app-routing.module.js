"use strict";
exports.__esModule = true;
exports.appRouting = void 0;
var router_1 = require("@angular/router");
var imagenes_component_1 = require("./components/imagenes/imagenes.component");
var about_component_1 = require("./components/about/about.component");
var routes = [
    { path: 'imagenes', component: imagenes_component_1.ImagenesComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'imagenes' }
];
exports.appRouting = router_1.RouterModule.forRoot(routes);
