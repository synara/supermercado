using SistemaCadastroProdutos.Dtos;
using SistemaCadastroProdutos.Infra;
using SistemaCadastroProdutos.Models;
using SistemaCadastroProdutos.Repositorios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SistemaCadastroProdutos.Controllers
{
    [EnableCors("*", "*", "*")]
    public class ProdutoController : ApiController
    {
        private UnitOfWork _uow = new UnitOfWork(new ApplicationDbContext());

        public ProdutoController() {}



        // GET: api/Produto
        public IHttpActionResult Get()
        {
            var produtos = this._uow._produtoRepositorio.GetAllProdutos();
            var produtosComCategorias = new List<Produto>();

            ObterProdutosComCategorias(produtos, produtosComCategorias);

            return Ok(produtosComCategorias);
        }

        private void ObterProdutosComCategorias(List<Produto> produtos, List<Produto> produtosComCategorias)
        {
            foreach (var p in produtos)
            {
                p.Categoria.Nome = this._uow._categoriaRepositorio.ObterPorId(p.Id).Nome;
                produtosComCategorias.Add(p);
            }
        }

        // GET: api/Produto/5
        public IHttpActionResult Get(int id)
        {
            return Ok(this._uow._produtoRepositorio.ObterPorId(id));
        }

        // POST: api/Produto
        public void Post([FromBody]ProdutoDto dto)
        {

        }

        // PUT: api/Produto/5
        public void Put([FromBody]ProdutoDto dto)
        {

        }

        // DELETE: api/Produto/5
        public void Delete(int id)
        {
            this._uow._produtoRepositorio.RemoverPorId(id);
        }
    }
}
