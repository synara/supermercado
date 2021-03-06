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
var produtos_service_1 = require("./produtos.service");
var ProdutoComponent = (function (_super) {
    __extends(ProdutoComponent, _super);
    function ProdutoComponent(_produtoService) {
        var _this = _super.call(this) || this;
        _this._produtoService = _produtoService;
        return _this;
    }
    ProdutoComponent.prototype.ngOnInit = function () {
        this.obterProdutos();
    };
    ProdutoComponent.prototype.obterProdutos = function () {
        var _this = this;
        this._produtoService.obterProdutos()
            .subscribe(function (produtos) {
            _this.produtosVM = produtos,
                _this.categorias = _this.produtosVM.Categorias,
                _this.produtos = _this.produtosVM.Produtos;
        }, function (error) { return _this.errorMessage = error; });
    };
    ProdutoComponent.prototype.cadastrar = function () {
        if (this.nomeProduto == "" || this.nomeProduto == undefined ||
            this.precoProduto == 0 || this.precoProduto == undefined ||
            this.categoriaId == 0 || this.categoriaId == undefined ||
            this.perecivel == undefined) {
            return;
        }
        else {
            var dto = {
                Nome: this.nomeProduto,
                Preco: this.precoProduto,
                CategoriaId: this.categoriaId,
                Perecivel: this.perecivel
            };
            this._produtoService.adicionar(dto)
                .subscribe(function (data) { return console.log("sucesso!!"); });
            this.ngOnInit();
        }
    };
    ProdutoComponent.prototype.obterProduto = function (id) {
        var _this = this;
        this.id = id;
        this._produtoService.obterProduto(id)
            .subscribe(function (produto) { return _this.produto = produto; }, function (error) { return _this.errorMessage = error; });
    };
    ProdutoComponent.prototype.atualizarProduto = function () {
        var _this = this;
        var dto = {
            Id: this.id,
            Nome: this.produto.Nome,
            Preco: this.produto.Preco,
            CategoriaId: this.produto.CategoriaId,
            Perecivel: this.produto.Perecivel
        };
        this._produtoService.atualizar(dto)
            .subscribe(function () { return _this.obterProdutos(); });
    };
    ProdutoComponent.prototype.removerProduto = function () {
        var _this = this;
        this._produtoService.remover(this.id)
            .subscribe(function () { return _this.obterProdutos(); });
        this.limparCampos();
    };
    ProdutoComponent.prototype.limparCampos = function () {
        this.nomeProduto = "";
        this.perecivel = false;
        this.categoriaId = 0;
        this.precoProduto = 0;
    };
    return ProdutoComponent;
}(core_1.OnInit));
ProdutoComponent = __decorate([
    core_1.Component({
        selector: 'produtos',
        templateUrl: './app/produtos/produtos.component.html',
        styleUrls: ['./app/produtos/produtos.component.css'],
        providers: [produtos_service_1.ProdutoService]
    }),
    __metadata("design:paramtypes", [produtos_service_1.ProdutoService])
], ProdutoComponent);
exports.ProdutoComponent = ProdutoComponent;
//# sourceMappingURL=produtos.component.js.map