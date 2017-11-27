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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var categorias_service_1 = require("./categorias.service");
var CategoriasComponent = (function () {
    function CategoriasComponent(_categoriaService) {
        this._categoriaService = _categoriaService;
    }
    CategoriasComponent.prototype.cadastrarCategoria = function () {
        var dto = {
            'Nome': this.nomeCategoria,
            'Descricao': this.descricaoCategoria
        };
        alert(dto);
        this._categoriaService.adicionar(dto);
    };
    return CategoriasComponent;
}());
CategoriasComponent = __decorate([
    core_1.Component({
        selector: 'categorias',
        templateUrl: './app/categorias/categorias.component.html',
        styleUrls: ['./app/categorias/categorias.component.css'],
        providers: [categorias_service_1.CategoriaService]
    }),
    __metadata("design:paramtypes", [categorias_service_1.CategoriaService])
], CategoriasComponent);
exports.CategoriasComponent = CategoriasComponent;
//# sourceMappingURL=categorias.component.js.map