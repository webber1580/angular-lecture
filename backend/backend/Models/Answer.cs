using Newtonsoft.Json;

namespace backend.Models
{
    [JsonObject]
    public class Answer : BaseEntity
    {
        [JsonProperty("isCorrect")]
        public bool? IsCorrect { get; set; }
    }
}