import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/Categoria';
import { Http } from '@angular/http';
import { ProdutoService } from './produtos.service';
import { Produto } from '../models/Produto';
import { ProdutoViewModel } from '../models/ProdutoViewModel';

@Component({
    selector: 'produtos',
    templateUrl: './app/produtos/produtos.component.html',
    styleUrls: ['./app/produtos/produtos.component.css'],    
    providers: [ProdutoService]
})

export class ProdutoComponent extends OnInit {
    errorMessage: string;
    produtosVM: ProdutoViewModel;
    produtos: Produto[];
    categorias: Categoria[];
    nomeProduto: string;
    precoProduto: number;
    perecivel: boolean;
    categoriaId: number;
    produto: Produto;
    id: any;
    categoriaSelected: number;

    constructor(private _produtoService: ProdutoService){
        super();
    }
    
    ngOnInit() {
        this.obterProdutos();
    }

    obterProdutos() {
        this._produtoService.obterProdutos()
        .subscribe(produtos => {
            this.produtosVM = produtos,
            this.categorias = this.produtosVM.Categorias,
            this.produtos = this.produtosVM.Produtos
        }, error => this.errorMessage = <any>error);
    }

    cadastrar() {
        if(this.nomeProduto == "" || this.nomeProduto == undefined ||
            this.precoProduto == 0 || this.precoProduto == undefined ||
                    this.categoriaId == 0 || this.categoriaId == undefined ||
                        this.perecivel == undefined) {
                        return;
                    }
        else {            
            var dto = {
                Nome : this.nomeProduto,
                Preco : this.precoProduto,
                CategoriaId : this.categoriaId,
                Perecivel : this.perecivel
            }

            this._produtoService.adicionar(dto)
            .subscribe(data => console.log("sucesso!!"));
            this.ngOnInit();            

        }
    }

    obterProduto(id: any) {
        this.id = id;
        this._produtoService.obterProduto(id)
        .subscribe(produto => this.produto = produto, error => this.errorMessage = <any>error);  
    }

    atualizarProduto() {
        var dto = {
            Id : this.id,
            Nome : this.produto.Nome,
            Preco : this.produto.Preco,
            CategoriaId : this.produto.CategoriaId,
            Perecivel : this.produto.Perecivel
        }

        this._produtoService.atualizar(dto)
        .subscribe(() => this.obterProdutos());           
    }

    removerProduto() {
        this._produtoService.remover(this.id)
        .subscribe(() => this.obterProdutos());

        this.limparCampos();
    }

    limparCampos() {
        this.nomeProduto = "";
        this.perecivel = false;
        this.categoriaId = 0;
        this.precoProduto = 0;
    }
}