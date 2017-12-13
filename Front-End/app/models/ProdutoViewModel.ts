import { Produto } from "./Produto";
import { Categoria } from "./Categoria";

export interface ProdutoViewModel {
    Produtos: Produto[];
    Categorias: Categoria[];
}