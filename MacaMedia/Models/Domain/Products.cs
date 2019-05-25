using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MacaMedia.Models
{
    public class Products
    {
        public int Id { get; set; }
        public string Image { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
    }
}