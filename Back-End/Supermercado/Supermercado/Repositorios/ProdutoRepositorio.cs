using Supermercado.Infra;
using Supermercado.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Supermercado.Repositorios
{
    public class ProdutoRepositorio
    {
        private ApplicationDbContext _context;

        public ProdutoRepositorio(ApplicationDbContext context)
        {
            this._context = context;
        }

        public List<Produto> GetAllProdutos()
        {
            return this._context.Produtos.ToList();
        }
    }
}