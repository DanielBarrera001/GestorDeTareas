using System.ComponentModel.DataAnnotations;

namespace TareasMVC.Models
{
    public class RegistroViewModel
    {
        [Required(ErrorMessage ="Error.Requerido")]
        [EmailAddress(ErrorMessage ="Error.Email")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Error.Requerido")]
        public string Password { get; set; }
    }
}
