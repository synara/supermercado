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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
core_1.Injectable();
var ProdutoService = (function () {
    function ProdutoService(_http, originUrl) {
        this._http = _http;
        this.originUrl = originUrl;
        this.produtoAPI = 'Produto/';
    }
    ProdutoService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    ProdutoService.prototype.obterProdutos = function () {
        return this._http.get(this.originUrl + this.produtoAPI)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProdutoService.prototype.adicionar = function (dto) {
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        return this._http.post(this.originUrl + this.produtoAPI, JSON.stringify(dto), this.options)
            .map(function (resp) { return console.log(resp); })
            .catch(this.handleError);
    };
    ProdutoService.prototype.obterProduto = function (id) {
        return this._http.get(this.originUrl + this.produtoAPI + id)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProdutoService.prototype.atualizar = function (dto) {
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        return this._http.put(this.originUrl + this.produtoAPI, JSON.stringify(dto), this.options)
            .map(function (resp) { return console.log(resp); })
            .catch(this.handleError);
    };
    ProdutoService.prototype.remover = function (id) {
        return this._http.delete(this.originUrl + this.produtoAPI + id)
            .catch(this.handleError);
    };
    return ProdutoService;
}());
ProdutoService = __decorate([
    __param(1, core_1.Inject('ORIGIN_URL')),
    __metadata("design:paramtypes", [http_1.Http, String])
], ProdutoService);
exports.ProdutoService = ProdutoService;
//# sourceMappingURL=produtos.service.js.map