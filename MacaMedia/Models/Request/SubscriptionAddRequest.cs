using System.ComponentModel.DataAnnotations;

namespace MacaMedia.Models.Request
{
    public class SubscriptionAddRequest
    {
        [Required, MaxLength(100)]
        public string Name { get; set; }
        [Required, MaxLength(100)]
        public string Email { get; set; }
    }
}
