using Newtonsoft.Json;

namespace backend.Models
{
    [JsonObject]
    public class Comment
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        
        [JsonProperty("user")]
        public User User { get; set; }

        [JsonProperty("data")]
        public string Data { get; set; }
    }
}