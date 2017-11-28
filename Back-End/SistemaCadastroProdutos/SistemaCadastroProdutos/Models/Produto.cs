using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;

namespace SistemaCadastroProdutos.Models
{
    [Table("Produtos")]
    public class Produto
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public double Preco { get; set; }
        public bool Perecivel { get; set; }
        public Categoria Categoria { get; set; }
        public int? CategoriaId { get; set; }

    }
}