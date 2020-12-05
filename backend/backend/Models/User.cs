using Newtonsoft.Json;

namespace backend.Models
{
    [JsonObject]
    public class User
    {
        [JsonProperty("id")]
        public int? Id { get; set; }
        
        [JsonProperty("name")]
        public string? Name { get; set; }
        
        [JsonProperty("surname")]
        public string? Surname { get; set; }
        
        [JsonProperty("nickname")]
        public string? Nickname { get; set; }
        
        [JsonProperty("photo")]
        public string? Photo { get; set; }
    }
}