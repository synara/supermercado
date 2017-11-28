using SistemaCadastroProdutos.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SistemaCadastroProdutos.Infra
{
    public class ApplicationDbContext : DbContext
    {
        public virtual DbSet<Produto> Produtos { get; set; }
        public virtual DbSet<Categoria> Categorias { get; set; }

        public ApplicationDbContext() : base("DefaultConnection")
        {

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Categoria>()
                .HasMany(p => p.Produtos)
                .WithOptional(c => c.Categoria)
                .HasForeignKey(fk => fk.CategoriaId)
                .WillCascadeOnDelete(false);

            base.OnModelCreating(modelBuilder);
         }


    }
}