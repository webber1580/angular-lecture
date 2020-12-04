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

        [JsonProperty("content")]
        public string Content { get; set; }
    }
}