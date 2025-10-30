using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TareasMVC.Entidades;
using TareasMVC.Servicios;

namespace TareasMVC.Controllers
{
    [Route("api/tareas")]
    public class TareasController: ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IServiciosUsuarios serviciosUsuarios;

        public TareasController(ApplicationDbContext context, IServiciosUsuarios serviciosUsuarios)
        {
            this.context = context;
            this.serviciosUsuarios = serviciosUsuarios;
        }

        //[HttpPost]
        //public async Task<ActionResult<Tarea>> Post([FromBody] string titulo)
        //{
        //    var usuarioId = serviciosUsuarios.ObtenerUsuarioId();
        //    var existenTareas = await context.Tareas.AnyAsync(t => t.UsuarioCreacionId == usuarioId);
        //}
    }
}
