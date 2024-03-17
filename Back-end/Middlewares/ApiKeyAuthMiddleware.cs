using Back_end.Constants;
using System.Net;


namespace Back_end.Middlewares
{
    // Middleware para la autenticación de la API
    public class ApiKeyAuthMiddleware
    {
        // Siguiente middleware en la cadena de middlewares
        private readonly RequestDelegate _next;
        // Configuración de la aplicación
        private readonly IConfiguration _config;

        public ApiKeyAuthMiddleware(RequestDelegate next, IConfiguration config)
        {
            _next = next;
            _config = config;
        }

        // Método para la autenticación de la API
        public async Task Invoke(HttpContext context)
        {
            // Verifica si el header de la petición contiene la llave de la API
            if (!context.Request.Headers.TryGetValue(ApiConstants.APIHeaderKey, out var actualAPIHeaderKeyValue))
            {
                context.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
                await context.Response.WriteAsync("Falta la API Key");
                return;
            }

            // Verifica si la llave de la API es válida
            if (!actualAPIHeaderKeyValue.Equals(_config.GetValue<string>(ApiConstants.APISecret)))
            {
                context.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
                await context.Response.WriteAsync("API Key es invalida");
                return;
            }

            // Si la llave de la API es válida, se pasa al siguiente middleware
            await _next(context);
        }
    }
}