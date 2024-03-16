using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

#nullable disable

namespace Back_end.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Alumnos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Nombre = table.Column<string>(type: "varchar(100)", nullable: false), 
                    FechaNacimiento = table.Column<DateTime>(type: "date", nullable: false),
                    NombrePadre = table.Column<string>(type: "varchar(100)", nullable: false),
                    NombreMadre = table.Column<string>(type: "varchar(100)", nullable: false),
                    Grado = table.Column<string>(type: "varchar(25)", nullable: false),
                    Seccion = table.Column<string>(type: "char(1)", nullable: false),
                    FechaIngreso = table.Column<DateTime>(type: "date", nullable: false)

                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Alumnos", x => x.Id);
                })
                .Annotation("MySQL:Charset", "utf8mb4");

        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Alumnos");
        }
    }
}
