using System.Collections.Generic;
using Newtonsoft.Json;

namespace backend.Models
{
    [JsonObject]
    public class BaseEntity
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        
        [JsonProperty("theme")]
        public string Theme { get; set; }
        
        [JsonProperty("data")]
        public string Data { get; set; }

        [JsonProperty("user")]
        public User User { get; set; }

        [JsonProperty("rating")] 
        public int Rating { get; set; }

        [JsonProperty("comments")] 
        public IEnumerable<Comment> Comments { get; set; }
    }
}