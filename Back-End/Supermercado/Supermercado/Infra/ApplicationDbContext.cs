using Supermercado.Models;
using System.Collections.Generic;
using System.Data.Entity;

namespace Supermercado.Infra
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Categoria> Categorias { get; set; }

        public ApplicationDbContext() : base("DefaultConnection"){}

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