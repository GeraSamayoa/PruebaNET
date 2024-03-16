using Back_end.Models;
using Microsoft.EntityFrameworkCore;

namespace Back_end.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        {
            
        }

        public DbSet<Alumno> Alumnos { get; set; }
    }
}
