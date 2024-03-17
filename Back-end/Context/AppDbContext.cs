using Back_end.Models;
using Microsoft.EntityFrameworkCore;

namespace Back_end.Context
{
    
    public class AppDbContext : DbContext
    {
        // Constructor que recibe las opciones de configuración de la base de datos
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        {
            
        }

        // Propiedad que representa la tabla de Alumnos en la base de datos
        public DbSet<Alumno> Alumnos { get; set; }
    }
}
