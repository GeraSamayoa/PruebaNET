using Back_end.Context;
using Back_end.Middlewares;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Configurar el acceso a la base de datos MySQL con Entity Framework
var connectionString = builder.Configuration.GetConnectionString("MySQLConnection");
// Registrar servicio para la conexión a la base de datos con Entity Framework
builder.Services.AddDbContext<AppDbContext>(options => options.UseMySQL(connectionString));


builder.Services.AddControllers(options =>
{
    // Agregar filtro de autenticación por API Key
    options.Filters.Add(new ApiKeyAuthFilter(builder.Configuration));
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// Add CORS policy to allow requests from any origin
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        // Se permite el orgien http://localhost:5173 que es el puerto donde se ejecuta el front-end (React)
        builder.WithOrigins("http://localhost:5173")
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Agregar CORS
app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
