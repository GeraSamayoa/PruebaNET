namespace Back_end.Models
{
    public class Alumno
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public DateTime FechaNacimiento { get; set; } 
        public string NombrePadre { get; set; }
        public string NombreMadre { get; set; }
        public string Grado { get; set; }
        public char Seccion { get; set; }
        public DateTime FechaIngreso { get; set; } 

        public Alumno() { }

        public Alumno(int id, string nombre, DateTime fechaNacimiento, string nombrePadre, string nombreMadre, string grado, char seccion, DateTime fechaIngreso)
        {
            Id = id;
            Nombre = nombre;
            FechaNacimiento = fechaNacimiento;
            NombrePadre = nombrePadre;
            NombreMadre = nombreMadre;
            Grado = grado;
            Seccion = seccion;
            FechaIngreso = fechaIngreso;
        }
    }
}
