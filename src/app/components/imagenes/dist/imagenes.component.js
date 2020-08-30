"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ImagenesComponent = void 0;
var core_1 = require("@angular/core");
var axios_1 = require("axios");
var ImagenesComponent = /** @class */ (function () {
    function ImagenesComponent() {
        this.mostrar = true;
        this.categoria = '';
        this.categorias = [
            { 'nombre': 'science' },
            { 'nombre': 'education' },
            { 'nombre': 'people' },
            { 'nombre': 'feelings' },
            { 'nombre': 'computer' },
            { 'nombre': 'building' }
        ];
        this.imagenes = '';
    }
    ImagenesComponent.prototype.buscarcategorias = function (event) {
        this.categoria = event.target.value;
    };
    /**MOSTRAR/OCULTAR EL BODY DE LA TARGETA*/
    ImagenesComponent.prototype.clickCard = function (event) {
        if (event.target.nextSibling.classList.contains('d-none')) {
            event.target.nextSibling.className = 'card-body';
        }
        else {
            event.target.nextSibling.className = 'card-body d-none';
        }
    };
    ImagenesComponent.prototype.buscarimagen = function (termino, categoria) {
        var _this = this;
        if (termino != '' && this.categoria == '') {
            var URL = '&q=' + termino;
        }
        else if (termino == '' && this.categoria != '') {
            var URL = '&category=' + this.categoria;
        }
        else if (termino != '' && this.categoria != '') {
            var URL = '&q=' + termino + '&category=' + this.categoria;
        }
        else {
            var URL = '';
        }
        console.log(categoria);
        axios_1["default"].get('https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25&lang=es' + URL)
            .then(function (response) {
            _this.imagenes = response.data.hits;
            console.log(_this.imagenes);
        });
    };
    ImagenesComponent = __decorate([
        core_1.Component({
            selector: 'app-imagenes',
            templateUrl: './imagenes.component.html',
            styles: []
        })
    ], ImagenesComponent);
    return ImagenesComponent;
}());
exports.ImagenesComponent = ImagenesComponent;
