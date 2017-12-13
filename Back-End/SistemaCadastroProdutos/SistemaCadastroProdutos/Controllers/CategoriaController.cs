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
    [EnableCors("*","*", "*")]
    public class CategoriaController : ApiController
    {
        private UnitOfWork _uow = new UnitOfWork(new ApplicationDbContext());

        public CategoriaController() { }


        // GET: api/Categoria
        public IHttpActionResult Get()
        {
            return Ok(this._uow._categoriaRepositorio.TodasCategorias());
        }

        // GET: api/Categoria/5
        public IHttpActionResult Get(int id)
        {
            var categoria = this._uow._categoriaRepositorio.ObterPorId(id.ToString());
            return Ok(categoria);
        }

        // POST: api/Categoria
        public bool Post([FromBody]CategoriaDto dto)
        {
            try
            {
                var categoria = new Categoria()
                {
                    Nome = dto.Nome,
                    Descricao = dto.Descricao
                };

                _uow._categoriaRepositorio.Adicionar(categoria);
                _uow.Salvar();
                return true;
            }
            catch (ArgumentException ex)
            {
                return false;
            }

        }

        // PUT: api/Categoria/5
        public void Put([FromBody] CategoriaDto dto)
        {
            var categoria = _uow._categoriaRepositorio.ObterPorId(dto.Id.ToString());
            if(categoria != null)
            {
                categoria.Nome = dto.Nome;
                categoria.Descricao = dto.Descricao;
            }

            _uow.Salvar();
        }

        // DELETE: api/Categoria/5
        public IHttpActionResult Delete(int id)
        {
            try
            {
                _uow._categoriaRepositorio.RemoverPorId(id);
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
