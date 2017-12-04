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
    constructor(private _categoriaService: CategoriaService){ 
        super();
    }

    ngOnInit(): void {
        this._categoriaService.obterCategorias()
        .subscribe(res => this.categorias = res)
    }

    obterCategorias() {
        this._categoriaService.obterCategorias()
        .subscribe(categorias => this.categorias = categorias, error => this.errorMessage = <any>error);
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
            .subscribe(data => console.log(data), error => this.errorMessage = <any>error, () => this.ngOnInit());            
        }
    }
}


