using SistemaCadastroProdutos.Dtos;
using SistemaCadastroProdutos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SistemaCadastroProdutos.ViewModel
{
    public class ProdutoViewModel
    {
        public List<ProdutoDto> Produtos { get; set; }
        public List<Categoria> Categorias { get; set; }

        public ProdutoViewModel()
        {
            Produtos = new List<ProdutoDto>();
            Categorias = new List<Categoria>();
        }
    }
}