import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/Categoria';
import { Http } from '@angular/http';
import { ProdutoService } from './produtos.service';
import { Produto } from '../models/Produto';

@Component({
    selector: 'produtos',
    templateUrl: './app/produtos/produtos.component.html',
    styleUrls: ['./app/produtos/produtos.component.css'],    
    providers: [ProdutoService]
})

export class ProdutoComponent extends OnInit {
    errorMessage: string;
    produtos: Produto[];
    
    constructor(private _produtoService: ProdutoService){
        super();
    }
    
    ngOnInit() {
        this.obterProdutos();
    }

    obterProdutos() {
        this._produtoService.obterProdutos()
        .subscribe(produtos => this.produtos = produtos, error => this.errorMessage = <any>error);
    }

    


}