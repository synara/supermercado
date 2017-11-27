import { Component } from '@angular/core';
import { CategoriaService } from './categorias.service';


@Component({
    selector: 'categorias',
    templateUrl: './app/categorias/categorias.component.html',
    styleUrls: ['./app/categorias/categorias.component.css'],
    providers: [CategoriaService]
})

export class CategoriasComponent {
    nomeCategoria : string;
    descricaoCategoria: string;

    constructor(private _categoriaService: CategoriaService){}

    cadastrarCategoria() {
       var dto = {
           'Nome': this.nomeCategoria,
           'Descricao': this.descricaoCategoria
       }

       alert(dto);

       this._categoriaService.adicionar(dto);

    }
}


