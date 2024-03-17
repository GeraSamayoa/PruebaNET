using Back_end.Constants;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;


// Filtro de autenticación de la API que se utiliza para verificar si la llave de la API es válida
public class ApiKeyAuthFilter : ActionFilterAttribute
{
    private readonly IConfiguration _config;

    public ApiKeyAuthFilter(IConfiguration config)
    {
        _config = config;
    }

    // Método que se ejecuta antes de que se ejecute el método del controlador para verificar si la llave de la API es válida
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        // Verifica si el header de la petición contiene la llave de la API
        if (!context.HttpContext.Request.Headers.TryGetValue(ApiConstants.APIHeaderKey, out var apiKeyValue))
        {
            context.Result = new UnauthorizedResult();
            return;
        }

        // Verifica si la llave de la API es válida
        if (!apiKeyValue.Equals(_config.GetValue<string>(ApiConstants.APISecret)))
        {
            context.Result = new UnauthorizedResult();
            return;
        }

        // Si la llave de la API es válida, se pasa al siguiente middleware
        base.OnActionExecuting(context);
    }
}