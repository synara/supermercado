import { Categoria } from "./Categoria";

export interface Produto {
    Id: number;
    Nome: string;
    Preco: number;
    Perecivel: boolean;
    CategoriaId: number;
    Categoria: Categoria;

}