using System.Security.Claims;

namespace TareasMVC.Servicios
{
    public interface IServiciosUsuarios
    {
        string ObtenerUsuarioId();
    }

    public class ServicioUsuarios : IServiciosUsuarios
    {
        private HttpContext httpContext;

        public ServicioUsuarios(IHttpContextAccessor httpContextAccessor)
        {
            httpContext = httpContextAccessor.HttpContext;
        }

        public string ObtenerUsuarioId()
        {
            if (httpContext.User.Identity.IsAuthenticated)
            {
                var idClaim = httpContext.User.Claims
                    .Where(x => x.Type == ClaimTypes.NameIdentifier).FirstOrDefault();

                return idClaim.Value;
            }
            else
            {
                throw new Exception("El usuario no esta autenticado");
            }
        }
    }
}
