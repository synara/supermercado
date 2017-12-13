using SistemaCadastroProdutos.Infra;
using SistemaCadastroProdutos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SistemaCadastroProdutos.Repositorios
{
    public class CategoriaRepositorio
    {
        private ApplicationDbContext _context;

        public CategoriaRepositorio(ApplicationDbContext context)
        {
            this._context = context;
        }

        public void Adicionar(Categoria categoria)
        {
            _context.Categorias.Add(categoria);
        }

        public List<Categoria> TodasCategorias()
        {
            return _context.Categorias.ToList();
        }

        public Categoria ObterPorId(string id)
        {
            var idCategoria = Convert.ToInt32(id);
            return _context.Categorias.Where(c => c.Id == idCategoria).FirstOrDefault();
        }

        public void RemoverPorId(int id)
        {
            var categoria = ObterPorId(id.ToString());
            _context.Categorias.Remove(categoria);
        }
    }
}