using SistemaCadastroProdutos.Infra;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SistemaCadastroProdutos.Repositorios
{
    public class UnitOfWork
    {
        public ApplicationDbContext _context { get; set; }
        public CategoriaRepositorio _categoriaRepositorio { get; set; }
        public ProdutoRepositorio _produtoRepositorio { get; set; }
        public UnitOfWork(ApplicationDbContext ctx)
        {
            this._context = ctx;
            this._categoriaRepositorio = new CategoriaRepositorio(this._context);
            this._produtoRepositorio = new ProdutoRepositorio(this._context);
        }

        public void Salvar()
        {
            this._context.SaveChanges();
        }
    }
}