using System.ComponentModel.DataAnnotations;

namespace maca.Models.Request
{

    public class SubscribeAddRequest
    {
        [Required, MaxLength(100)]
        public string Name { get; set; }
        [Required, MaxLength(100)]
        public string Email { get; set; }
        
    }
}
