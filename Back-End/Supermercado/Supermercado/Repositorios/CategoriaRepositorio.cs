using Supermercado.Infra;
using Supermercado.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Supermercado.Repositorios
{
    public class CategoriaRepositorio
    {
        private ApplicationDbContext _context;

        public CategoriaRepositorio(ApplicationDbContext context)
        {
            this._context = context;
        }

        public List<Categoria> GetAllCategorias()
        {
            return this._context.Categorias.ToList();
        }
    }
}