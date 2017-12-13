using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SistemaCadastroProdutos.Dtos
{
    public class ProdutoDto
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public bool Perecivel { get; set; }
        public string Descricao { get; set; }
        public string CategoriaNome { get; set; }
        public int? CategoriaId { get; set; }
        public double Preco { get; set; }
    }
}