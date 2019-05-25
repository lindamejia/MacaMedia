using MacaMedia.Models.Request;

namespace maca.Models.Request
{
    public class SubscriptionUpdateRequest : SubscriptionAddRequest
    {
        public int Id { get; set; }
    }
}