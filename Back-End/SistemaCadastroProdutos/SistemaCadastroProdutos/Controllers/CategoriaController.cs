﻿using SistemaCadastroProdutos.Dtos;
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
    public class CategoriaController : ApiController
    {
        private CategoriaRepositorio _repository = new CategoriaRepositorio(new Infra.ApplicationDbContext());
        public CategoriaController() {}


        // GET: api/Categoria
        public IHttpActionResult Get()
        {
            var ok = this._repository.TodasCategorias();
            return Ok(this._repository.TodasCategorias());
        }

        // GET: api/Categoria/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Categoria
        public void Post([FromBody]CategoriaDto dto)
        {
            var categoria = new Categoria()
            {
                Nome = dto.Nome,
                Descricao = dto.Descricao
            };

            _repository.Adicionar(categoria);
        }

        // PUT: api/Categoria/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Categoria/5
        public void Delete(int id)
        {
        }
    }
}