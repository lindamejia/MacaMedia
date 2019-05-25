using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MacaMedia.Models.Request
{
    public class ProductsAddRequest
    {
        public string Image { get; set; }
        [Required, MaxLength(100)]
        public string Name { get; set; }
        [Required]
        public int Price { get; set; }
        [Required]
        public int Quantity { get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
    }
}
