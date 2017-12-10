"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CategoriasComponent = (function (_super) {
    __extends(CategoriasComponent, _super);
    function CategoriasComponent(_categoriaService) {
        var _this = _super.call(this) || this;
        _this._categoriaService = _categoriaService;
        _this.error = false;
        _this.hideMsg = true;
        _this.add = true;
        return _this;
    }
    CategoriasComponent.prototype.ngOnInit = function () {
        this.obterCategorias();
    };
    CategoriasComponent.prototype.obterCategorias = function () {
        var _this = this;
        this._categoriaService.obterCategorias()
            .subscribe(function (categorias) { return _this.categorias = categorias; }, function (error) { return _this.errorMessage = error; });
    };
    CategoriasComponent.prototype.limparCampos = function () {
        this.nomeCategoria = "";
        this.descricaoCategoria = "";
    };
    CategoriasComponent.prototype.cadastrarCategoria = function () {
        var _this = this;
        if (this.nomeCategoria == "" || this.nomeCategoria == undefined ||
            this.descricaoCategoria == "" || this.descricaoCategoria == undefined) {
            return;
        }
        else {
            var dto = {
                Nome: this.nomeCategoria,
                Descricao: this.descricaoCategoria
            };
            this._categoriaService.adicionar(dto)
                .subscribe(function (data) { return _this.error = data; });
            this.ngOnInit();
        }
    };
    CategoriasComponent.prototype.obterCategoria = function (id) {
        var _this = this;
        this.id = id;
        this._categoriaService.obterCategoria(id)
            .subscribe(function (categoria) { return _this.categoria = categoria; }, function (error) { return _this.errorMessage = error; });
    };
    CategoriasComponent.prototype.atualizarCategoria = function () {
        var _this = this;
        var dto = {
            Id: this.id,
            Nome: this.categoria.Nome,
            Descricao: this.categoria.Descricao
        };
        this._categoriaService.atualizar(dto)
            .subscribe(function () { return _this.obterCategorias(); });
    };
    CategoriasComponent.prototype.removerCategoria = function () {
        var _this = this;
        this._categoriaService.remover(this.id)
            .subscribe(function () { return _this.obterCategorias(); });
        this.limparCampos();
    };
    return CategoriasComponent;
}(core_1.OnInit));
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