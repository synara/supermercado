using SistemaCadastroProdutos.Infra;
using SistemaCadastroProdutos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SistemaCadastroProdutos.Repositorios
{
    public class ProdutoRepositorio
    {
        private ApplicationDbContext _context;

        public ProdutoRepositorio(ApplicationDbContext context)
        {
            this._context = context;
        }

        public void Adicionar(Produto produto)
        {
            this._context.Produtos.Add(produto);
        }
        
        public List<Produto> GetAllProdutos()
        {

            return this._context.Produtos.ToList();

        }

        public Produto ObterPorId(int id)
        {
            return this._context.Produtos.Where(p => p.Id == id).FirstOrDefault();
        }

        public void RemoverPorId(int id)
        {
            var produto = this.ObterPorId(id);
            this._context.Produtos.Remove(produto);
        }
    }
}