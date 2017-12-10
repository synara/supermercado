import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './categorias.service';
import { Categoria } from '../models/Categoria';

@Component({
    selector: 'categorias',
    templateUrl: './app/categorias/categorias.component.html',
    styleUrls: ['./app/categorias/categorias.component.css'],
    providers: [CategoriaService]
})

export class CategoriasComponent extends OnInit {

    nomeCategoria : string;
    descricaoCategoria: string;
    categorias: Categoria[];
    errorMessage: string;
    error: boolean = false;
    hideMsg: boolean = true;
    add: boolean = true;
    categoria : Categoria;
    id : number;

    constructor(private _categoriaService: CategoriaService){ 
        super();
    }

    ngOnInit(): void {
        this.obterCategorias();
    }

    obterCategorias() {
        this._categoriaService.obterCategorias()
        .subscribe(categorias => this.categorias = categorias, error => this.errorMessage = <any>error);
    }

    limparCampos() {
        this.nomeCategoria = "";
        this.descricaoCategoria = "";
    }

    cadastrarCategoria() {
        if(this.nomeCategoria == "" || this.nomeCategoria == undefined || 
            this.descricaoCategoria == "" || this.descricaoCategoria == undefined) {
                return;
        }
        else{ 
            var dto = {
                Nome : this.nomeCategoria,
                Descricao : this.descricaoCategoria
            }
            
            this._categoriaService.adicionar(dto)
            .subscribe(data => this.error = data);
            this.ngOnInit();            
        }
    }

    obterCategoria(id: any) {
        this.id = id;
        this._categoriaService.obterCategoria(id)
        .subscribe(categoria => this.categoria = categoria, error => this.errorMessage = <any>error);  
    }

    atualizarCategoria() {
        var dto = {
            Id : this.id,
            Nome : this.categoria.Nome,
            Descricao : this.categoria.Descricao
        }

        this._categoriaService.atualizar(dto)
        .subscribe(() => this.obterCategorias());           
    }

    removerCategoria() {
        this._categoriaService.remover(this.id)
        .subscribe(() => this.obterCategorias());

        this.limparCampos();
    }
}


