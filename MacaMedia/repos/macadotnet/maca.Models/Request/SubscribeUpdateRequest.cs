using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace maca.Models.Request
{
    public class SubscribeUpdateRequest : SubscribeAddRequest
    {
        public int Id { get; set; }
    }
}
