using SistemaCadastroProdutos.Dtos;
using SistemaCadastroProdutos.Infra;
using SistemaCadastroProdutos.Models;
using SistemaCadastroProdutos.Repositorios;
using SistemaCadastroProdutos.ViewModel;
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

        public ProdutoController() { }

        // GET: api/Produto
        public IHttpActionResult Get()
        {
            var produtosVM = new ProdutoViewModel();
            var produtoDto = new ProdutoDto();
            var categoria = new Categoria();
            var produtos = this._uow._produtoRepositorio.GetAllProdutos();
            var categorias = this._uow._categoriaRepositorio.TodasCategorias();

            foreach (var p in produtos)
            {
                produtoDto.Id = p.Id;
                produtoDto.Nome = p.Nome;
                produtoDto.Preco = p.Preco;
                produtoDto.CategoriaId = p.CategoriaId;
                produtoDto.CategoriaNome = this._uow._categoriaRepositorio.ObterPorId(p.CategoriaId.ToString()).Nome;
                produtoDto.Perecivel = p.Perecivel;
                produtosVM.Produtos.Add(produtoDto);

                produtoDto = new ProdutoDto();
            }

            foreach (var c in categorias)
            {
                categoria.Nome = c.Nome;
                categoria.Descricao = c.Descricao;
                categoria.Id = c.Id;
                produtosVM.Categorias.Add(categoria);

                categoria = new Categoria();
            }

            return Ok(produtosVM);
        }


        // GET: api/Produto/5
        public IHttpActionResult Get(int id)
        {
            var produto = this._uow._produtoRepositorio.ObterPorId(id);
            var produtoDto = new ProdutoDto();
            produtoDto.Nome = produto.Nome;
            produtoDto.Perecivel = produto.Perecivel;
            produtoDto.CategoriaNome = this._uow._categoriaRepositorio.ObterPorId(produto.CategoriaId.ToString()).Nome;
            produtoDto.Preco = produto.Preco;

            return Ok(produtoDto);
        }

        // POST: api/Produto
        public bool Post([FromBody]ProdutoDto dto)
        {

            try
            {
                var produto = new Produto()
                {
                    Nome = dto.Nome,
                    CategoriaId = dto.CategoriaId,
                    Perecivel = dto.Perecivel,
                    Preco = dto.Preco
                };

                _uow._produtoRepositorio.Adicionar(produto);
                _uow.Salvar();
                return true;
            }
            catch (ArgumentException ex)
            {
                return false;
            }

        }

        // PUT: api/Produto/5
        public void Put([FromBody]ProdutoDto dto)
        {
            var produto = _uow._produtoRepositorio.ObterPorId(dto.Id);
            if (produto != null)
            {
                produto.Nome = dto.Nome;
                produto.CategoriaId = dto.CategoriaId;
                produto.Perecivel = dto.Perecivel;
                produto.Preco = dto.Preco;
            }

            _uow.Salvar();

        }

        // DELETE: api/Produto/5
        public IHttpActionResult Delete(int id)
        {
            try
            {
                _uow._produtoRepositorio.RemoverPorId(id);
                _uow.Salvar();

            }
            catch (ApplicationException ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok();
        }
    }
}
